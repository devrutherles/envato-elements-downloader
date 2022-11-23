require('dotenv').config()
const puppeteer = require('puppeteer')

class Envato {
  constructor() {
    this.browser = null
  }

  init = async () => {
    this.browser = await puppeteer.launch({
      headless: false,
      executablePath: process.env.CHROME_PATH,
      defaultViewport: null,
      args: ['--start-maximized'],
    });

    const page = await this.browser.newPage();
    await page.goto('https://elements.envato.com/sign-in', {waitUntil: 'networkidle0'});

    // login
    await page.type('input[name="username"]', "amaroabril91@gmail.com")
    await page.type('input[name="password"]', "goleiro2014")
    await page.click('button[data-test-selector="sign-in-submit"]')
    await page.waitForNavigation({waitUntil: 'networkidle0'})
    console.log('signed in')
  }

  downloadPresentationTemplates = async () => {

  }
}

const main = async () => {
  const envato = new Envato(false)
  await envato.init()
}

main().then()
