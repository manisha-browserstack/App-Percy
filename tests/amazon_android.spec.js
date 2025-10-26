// tests/amazon_android.spec.js
import percySnapshot from '@percy/webdriverio';


describe('Amazon India - Android Chrome (BrowserStack) Percy snapshot', () => {
    it('opens amazon.in and takes a Percy snapshot', async () => {
        await browser.url('https://www.amazon.in/');
        await percySnapshot('Amazon India - Android Chrome');
    });
});
