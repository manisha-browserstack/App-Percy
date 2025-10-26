exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.spec.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    browserName: 'Chrome',
    'bstack:options': {
      deviceName: process.env.BROWSERSTACK_DEVICE || 'Google Pixel 7',
      osVersion: process.env.BROWSERSTACK_OS_VERSION || '13.0',
      projectName: 'App Percy Assignment - Android Chrome',
      buildName: process.env.BROWSERSTACK_BUILD_NAME || 'Percy-BStack-Android-Chrome',
      sessionName: 'Amazon Android Chrome Snapshot',
      userName: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY
    }
  }],
  logLevel: 'info',
  path: '/wd/hub',
  hostname: 'hub.browserstack.com',
  port: 443,
  protocol: 'https',
  framework: 'mocha',
  reporters: ['spec'],
  
  
  
  mochaOpts: {
    ui: 'bdd',
    timeout: 30 * 60 * 1000
  },

  /**
   * Print BrowserStack session URL
   */
  after: async function (result, capabilities, specs) {
    try {
      const session = await browser.getSession();
      const sessionId = session.sessionId || session.id || session;
      const bsUrl = `https://automate.browserstack.com/sessions/${sessionId}.json`;
      console.log('=== BROWSERSTACK_SESSION_URL_PLACEHOLDER ===');
      console.log(bsUrl);
      console.log('=== END_BS_URL ===');
    } catch (e) {
      // ignore
    }
  }
};