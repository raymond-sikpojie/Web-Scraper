const fetch = require("node-fetch");
const cheerio = require("cheerio");
const fs = require("fs");

const writeStream = fs.createWriteStream("reddit.csv");

const request = async () => {
  // Make a fetch request to get the webpage
  try {
    const response = await fetch("https://www.yahoo.com");

    const htmlPage = await response.text();

    // Run the cheerio load method and assign it to a variable
    const $ = cheerio.load(htmlPage);

    // Get a subHeading which has a classname of "services"
    // const subHeading = $(".services");

    // console.log(subHeading.html())
    // console.log(subHeading.text());
    // const output = subHeading.children("ul").html();
    // const output = subHeading.find("li").text();

    // Get all the text in list items found inside an element with classname of "services"
    // $(".services li").each((i, el) => {
    //   // write a regex to remove the space in between
    //   const listItem = $(el).text().replace(/\s\s+/g, "");

    //   // write all list items to csv file "\n inserts a new line"
    //   writeStream.write(`${listItem} \n`);
    // });

    // Scrape reddit
    // $(".y8HYJ-y_lTUHkQIc1mdCq").each((i, el) => {
    //   const heading = $(el).text().replace(/\s\s+/g, "");

    //   writeStream.write(`${heading} \n`);

    //   console.log(heading);
    // });

    // Scrape yahoo
    $("html a").each((i, el) => {
      const heading = $(el).text();

      // write all list items to csv file "\n inserts a new line"
      writeStream.write(`${heading} \n`);
      console.log(heading);
    });

    console.log("reddit scraping done.");
    // console.log(output);
  } catch (error) {
    console.log(error);
  }
};

request();
