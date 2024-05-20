# Quotes-scrapper
Here's a basic README for your script:

---

# Quote Scraper

This script utilizes Puppeteer to scrape quotes from the website "http://quotes.toscrape.com" and saves them into JSON and CSV formats.

## Prerequisites

- Node.js installed on your system
- npm package manager

## Installation

1. Clone this repository or download the script file (`quote_scraper.js`).
2. Install dependencies by running:

    ```
    npm install puppeteer
    ```

## Usage

1. Run the script by executing:

    ```
    node quote_scraper.js
    ```

2. The script will launch a headless browser, navigate to each page of the quotes website, extract the quotes along with their authors, and save them into `quotes.json` and `quotes.csv`.
3. Screenshots of each page will also be saved as `quote1.png`, `quote2.png`, and so on.
4. Once the extraction is complete, the browser will be closed automatically.

## Notes

- The script is set to run in non-headless mode (`headless: false`) for visibility during development. You can change this behavior by modifying the `headless` option in the Puppeteer launch configuration.
- Make sure to respect the website's terms of service and usage policy when scraping data.

---
