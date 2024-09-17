# TinyCalendar
TinyCalendar is a browser extension that lets you quickly search for and open dates in Google Calendar. 

I often need to check what day of the week a specific date in the future is, or see what date Friday in 2 weeks is. Google Calendar is very awkward and clunky for this quick little use case, but I still like Google Calendar as a source of truth for all my times and dates, so I made an 


The extension is built using the [Plasmo React browser extension framework](https://github.com/PlasmoHQ/plasmo). 
### Running the extension locally

First, run the development server:

```bash
npm install
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.


### Making production build

```bash
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.