from selenium import webdriver
from selenium.webdriver.common.by import By


def test_search_jeet():
    """

    :return:
    """
    driver = webdriver.Chrome(webdriver.ChromeOptions())

    driver.get("https://www.duckduckgo.com")

    driver.implicitly_wait(2)

    text_box = driver.find_element(by=By.NAME, value="q")

    text_box.send_keys("JEET IT\n")

    driver.implicitly_wait(2)

    results = driver.find_element(by=By.ID, value='react-layout')

    driver.quit()

    assert "https://find-and-update.company-information.service.gov.uk/company/10074373" in results.text

