from WebScraper import WebScraper, convert_to_dateTime
from LinkDB_Handler import LinkStorage
from datetime import datetime
import time

url_DataBase = LinkStorage()


def logMessage(message):
    time_stamp = datetime.now().strftime("%Y-%m-%d")
    print(time_stamp)
    print(message)
    log_file = f"logs/log_{time_stamp}.txt"
    with open(log_file, 'a') as file:
        file.write(time_stamp)
        file.write(message + '\n')


def actOnCompanyNameURL(url):
    logMessage(url)
    try:
        scrapper = WebScraper(url)
    except:
        logMessage("Bad URL")
        return
    for nested_url in scrapper.extract_links_with_class(class_name="g_14bl"):
        actOnNewsLink(nested_url)


def insertData(content_list):
    pass


def actOnNewsLink(nested_url):
    logMessage(nested_url)
    if not url_DataBase.checkAndAddLink(nested_url):
        logMessage("Already in DB")
        return False
    logMessage("Adding to DB")
    try:
        s2 = WebScraper(nested_url)
    except:
        logMessage("Bad URL")
        return False

    content = s2.extract_text_from_class(class_name="content_wrapper arti-flow", is_content=True)
    if content:
        try:
            content = content[0]
            publishing_date = convert_to_dateTime(s2.extract_text_from_class(class_name="article_schedule")[0])
            author=s2.extract_text_from_class(class_name="article_author")[0]
            title=s2.extract_text_from_class(class_name="article_title artTitle")[0]
        except:
            print("Poor data")
            return
        content_list = {"url": nested_url,
                        "dateTime": publishing_date,
                        "author": author,
                        "title": title,
                        "mainText": content,
                        "imgURL": s2.extract_image_urls_from_class(class_name="MC_img")
                        }
        print(content_list)
        insertData(content_list)
        return True
    else:
        logMessage("Not a news link")
        return False


def actOnPage(url):
    scrapper = WebScraper(url)
    all_links = scrapper.extract_all_links()
    return all_links


def loadFromFile():
    news_pages = []
    try:
        with open("NewPagesLinks.txt", 'r') as file:
            for line in file:
                link = line.strip()
                news_pages.append(link)
    except FileNotFoundError:
        pass
    return news_pages


def actOnPageByLink(url):
    all_links = actOnPage(url)
    for link in all_links:
        if actOnNewsLink(link):
            logMessage("Bad Link")


def startServer():
    link_list = loadFromFile()
    for link in link_list:
        print(link)
        logMessage(
            "*****************************************************\nActing on link: " + link + "\n********************************************************")
        actOnPageByLink(link)


if __name__ == "__main__":
    count = 0
    while 1:
        print("Running count: " + str(count))
        startServer()
        timestamp = datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
        print(timestamp)
        print("Going to Sleep. Good night")
        time.sleep(1800)
        print(
            "*****************************\n****************************\n******************************\nFinished sleeping for 30 minutes!*****************************\n****************************\n******************************\n")
        print("Count over: " + str(count))
