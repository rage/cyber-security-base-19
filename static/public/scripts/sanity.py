import django, selenium, bs4, requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import socket

# There is a 'feature' in selenium which may cause the firewall to react unless you provide an explicit port for the driver
def free_port():
	free_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	free_socket.bind(('localhost', 0))
	free_socket.listen(5)
	port = free_socket.getsockname()[1]
	free_socket.close()
	return port


options = Options()
options.headless = True
options.add_argument('--no-sandbox')
driver = webdriver.Chrome(port=free_port(), options=options)
driver.get('https://www.google.com')
print('Good so far')
