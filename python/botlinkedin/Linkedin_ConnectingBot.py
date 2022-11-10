from selenium import webdriver
from selenium.webdriver.common.by import By
from config import login

import time

driver = webdriver.Chrome('./chromedriver')
driver.get('https://www.linkedin.com')
time.sleep(2)

#********** LOG IN *************

username = driver.find_element(By.XPATH,"//input[@name='session_key']")
password = driver.find_element(By.XPATH,"//input[@name='session_password']")

username.send_keys(login('email'))
password.send_keys(login('senha'))
time.sleep(2)

submit = driver.find_element(By.XPATH, "//button[@type='submit']").click()

# #***************** ADD CONTACTS ***********************

#driver.get("https://www.linkedin.com/search/results/people/?network=%5B%22S%22%5D&origin=FACETED_SEARCH&page=10")
driver.get("https://www.linkedin.com/search/results/people/?currentCompany=%5B%223402%22%5D&geoUrn=%5B%22106057199%22%5D&network=%5B%22S%22%2C%22O%22%5D&origin=FACETED_SEARCH&sid=VX%40")
time.sleep(2)

all_buttons = driver.find_elements(By.TAG_NAME, "button")
connect_buttons = [btn for btn in all_buttons if btn.text == "Conectar"]


for btn in connect_buttons:
    print(btn)
    driver.execute_script("arguments[0].click();", btn)
    time.sleep(2)
    send = driver.find_element(By.ID,"ember225")
    driver.execute_script("arguments[0].click();", send)
    #close = driver.find_element(By.XPATH,"//button[@aria-label='Dismiss']")
    #driver.execute_script("arguments[0].click();", close)
    time.sleep(2)