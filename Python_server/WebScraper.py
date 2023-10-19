from selenium import webdriver
import requests
import time
from bs4 import BeautifulSoup


def display_image(all_img_url):
    for img_url in all_img_url:
        print("Img url: " + img_url)
        response = requests.get(img_url)
        from PIL import Image
        from io import BytesIO
        image = Image.open(BytesIO(response.content))
        image.show()


def save_image(img_url, filename):
    print("Img url: " + img_url)
    response = requests.get(img_url)
    with open(filename, 'wb') as file:
        file.write(response.content)


class WebScraper:
    def __init__(self, url):
        self.url = url
        self.base_url = "https://www.moneycontrol.com"
        self.soup = BeautifulSoup("<>", 'html.parser')
        self.make_soup()

    def get_soup(self):
        return self.soup

    def extract_image_urls_from_class(self, class_name):
        soup = self.get_soup()
        img = soup.find_all('img', class_=class_name)
        url_img = []
        for image in img:
            url_img.append(image.get('data-src'))
        return url_img

    def make_soup(self):
        response = requests.get(self.url)
        self.soup = BeautifulSoup(response.text, 'html.parser')

    def extract_all_links(self):
        soup = self.get_soup()
        links = soup.find_all('a')
        all_links = []
        for link in links:
            href = link.get('href')
            if href:
                full_link = self.make_full_link(href)
                all_links.append(full_link)
        return all_links

    def extract_links_with_class(self, class_name):
        soup = self.get_soup()
        self.all = soup.find_all('a', class_=class_name)
        links = self.all
        links_with_class = []
        for link in links:
            href = link.get('href')
            if href:
                full_link = self.make_full_link(href)
                links_with_class.append(full_link)
        return links_with_class

    def extract_text_from_class(self, class_name, is_content=False):
        soup = self.get_soup()
        elements = soup.find_all(class_=class_name)
        text_list = []
        for element in elements:
            text = element.get_text()
            if text:
                text = text.strip()
                if is_content:
                    mask_str = "More   ×"
                    position = text.find(mask_str)
                    text = text[(position + len(mask_str)):]
                text_list.append(text)
        return text_list

    def make_full_link(self, href):
        return self.base_url + href


def convert_to_dateTime(input_string):
    from datetime import datetime

    input_format = "%B %d, %Y / %I:%M %p"

    input_string = input_string.replace(" IST", "")

    dt_obj = datetime.strptime(input_string, input_format)

    output_format = "%Y-%m-%dT%H:%M:%S"
    output_string = dt_obj.strftime(output_format)

    return output_string

