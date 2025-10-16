import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  workers:1,
  /* global timeout  -defualt time - 30 */
  timeout: 30000,
  
  /*Assertion timeout - default time - 5 seconds */
  expect: {
    timeout: 10000
  },
  reporter: [['html',{open:'always'}]],
  use: {
    trace: 'on', //zip
    screenshot:'on',
    video:'on',
    headless:false
    },


  projects: [
    {
      name: 'chromium',
      use: { browserName:'chromium',channel:'chrome',
        viewport:null,
        launchOptions:{
         args:['--start-maximized']
       }},
    },


    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },


    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },


  ],


});