# End to End Testing for Website ModalRakyat.id

All Page (Navigation, Section, Test Link Dll) with TestCafe

### Installing TestCafe

The first step is to install testcafe in terminal with : 

```
npm install -g testcafe
```

## Create & Running the tests
```
$ testcafe "chrome:headless" scenario/landing --reporter spec,html:ResultTest.html
```
