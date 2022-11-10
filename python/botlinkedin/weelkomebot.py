from selenium import webdriver
from selenium.webdriver.common.by import By
from config import login
import random
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

n_pages = 3

for n in range(1, n_pages + 1):

    driver.get(
        #"https://www.linkedin.com/search/results/people/?network=%5B%22F%22%5D&origin=FACETED_SEARCH&page=" + str(n))
         #"https://www.linkedin.com/search/results/people/?lastName=Rocha&network=%5B%22F%22%5D&origin=FACETED_SEARCH&sid=-M8")
        "https://www.linkedin.com/mynetwork/invite-connect/connections/"
                )
    time.sleep(4)

    all_buttons = driver.find_elements(By.TAG_NAME, "button")
    message_buttons = [btn for btn in all_buttons if btn.text == "Enviar mensagem"]


    for i in range(6, 7):
        # click on "Message" button
        driver.execute_script("arguments[0].click();", message_buttons[i])
        time.sleep(2)

        try:
            previews_message_div = driver.find_element(By.XPATH, "//div[starts-with(@class, 'msg-s-event-listitem__message-bubble')]")
            #driver.execute_script("arguments[0].click();", previews_message_div)
            print('msg= ', type(previews_message_div), previews_message_div.text)
        except Exception as error:
            e = str(type(error))
            #executa o restante do codigo somente se nao existir mensagens ao contato anteriores
            if e == "<class 'selenium.common.exceptions.NoSuchElementException'>":

                # activate main div
                main_div = driver.find_element(By.XPATH, "//div[starts-with(@class, 'msg-form__msg-content-container')]")
                driver.execute_script("arguments[0].click();", main_div)

                # type message
                paragraphs = driver.find_elements(By.TAG_NAME, "p")

                all_span = driver.find_elements(By.TAG_NAME, "span")
                all_span = [s for s in all_span if s.get_attribute("aria-hidden") == "true"]

                idx = [*range(3, 23, 2)]
                greetings = ["Hello", "Hi", "Hey", "Ahoy", "Yo yo", "Sup"]
                all_names = []

                for j in idx:
                    name = all_span[j].text.split(" ")[0]
                    all_names.append(name)

                greetings_idx = random.randint(0, len(greetings) - 1)
                message = greetings[greetings_idx] + " " + all_names[
                    i] + ", Sorry, I didn't mean to bother you, I'm just building a Linkedin Web Scraper Bot and testing its' capabilities... My apologies!:) This is not Mariya, this message is automated"

                paragraphs[-5].send_keys(message)
                time.sleep(2)

                # send message
                #submit = driver.find_element(By.XPATH, "//button[@type='submit']").click()
                time.sleep(2)

                # close div
                close_button = driver.find_element(By.XPATH,
                    "//button[starts-with(@data-control-name, 'overlay.close_conversation_window')]")
                #driver.execute_script("arguments[0].click();", close_button)
                time.sleep(2)