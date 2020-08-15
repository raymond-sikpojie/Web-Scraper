const fetch = require("node-fetch");
const cheerio = require("cheerio");

const request = async () => {
  // Make a fetch request to get the webpage
  try {
    const response = await fetch(
      "https://www.creativespaceco.biz/assets/brand-identity.html",
      {}
    );

    const htmlPage = await response.text();

    // Run the cheerio load method and assign it to a variable
    const $ = cheerio.load(htmlPage);

    // Get a subHeading which has a classname of "services"
    const subHeading = $(".services");

    // console.log(subHeading.html())
    // console.log(subHeading.text());
    // const output = subHeading.children("ul").html();
    const output = subHeading.find("ul").html();
    console.log(output);
  } catch (error) {
    console.log(error);
  }
};

request();
