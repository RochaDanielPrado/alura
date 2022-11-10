from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from config import login

browser = webdriver.Chrome('./chromedriver')


browser.get("https://www.linkedin.com/login")

input_email = browser.find_element(By.ID, "username")
input_email.send_keys(login('email'))

input_senha = browser.find_element(By.ID, "password")
input_senha.send_keys(login('senha'))

btn_login = browser.find_element(By.XPATH, "//button[@type='submit']")
btn_login.click()



input("")