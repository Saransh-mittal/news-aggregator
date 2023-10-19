from collections import deque


class LinkStorage:
    def __init__(self, max_size=10000, dump_threshold=1, dump_file='link_storage.txt'):
        self.max_size = max_size
        self.dump_threshold = dump_threshold
        self.dump_file = dump_file
        self.link_set = set()
        self.link_queue = deque()
        self.loadFromFile()

    def checkAndAddLink(self, url):
        if url in self.link_set:
            return False  # Link already exists, no need to add

        self.link_set.add(url)
        self.link_queue.append(url)

        if len(self.link_set) > self.max_size:
            oldest_link = self.link_queue.popleft()
            self.link_set.remove(oldest_link)

        if len(self.link_set) % self.dump_threshold == 0:
            self.dumpToFile()

        return True

    def dumpToFile(self):
        # print("******************************************************\nFile Dumped\n*************************************************")
        with open(self.dump_file, 'w') as file:
            for link in self.link_queue:
                file.write(link + '\n')

    def loadFromFile(self):
        try:
            with open(self.dump_file, 'r') as file:
                for line in file:
                    link = line.strip()
                    self.link_set.add(link)
                    self.link_queue.append(link)
        except FileNotFoundError:
            pass