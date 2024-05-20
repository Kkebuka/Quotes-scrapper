import puppeteer from "puppeteer";
import fs from "fs"


const getQuotes = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    let hasNextpage = true;
    let pageNumber = 1;
    const allQuotes = [];

    while(hasNextpage){
        await page.goto(`http://quotes.toscrape.com/page/${pageNumber}/`, {
            waitUntil: "domcontentloaded",
        });

        const quotesOnPage = await page.evaluate(() => {
            const quoteList = document.querySelectorAll(".quote");
            
            return Array.from(quoteList).map((quote) => {
                const text = quote.querySelector(".text").innerHTML;
                const author = quote.querySelector(".author").innerHTML;
                return {text, author};
            })

        })
        allQuotes.push(...quotesOnPage);

    
        await page.screenshot({path: `qoute${pageNumber}.png`})
        const nextPageButton = await page.$(".pager > .next > a");


        if(nextPageButton){
            await nextPageButton.click();
            pageNumber++

        }else{

            hasNextpage = false;
        }
    };


fs.writeFileSync("quotes.json", JSON.stringify(allQuotes));

const quotesCSV = allQuotes.map(quote => `${quote.text},${quote.author}`).join("\n");
fs.writeFileSync("quote.csv", quotesCSV)

console.log("quotes extracted and saved successfully");


await browser.close()

}

getQuotes()