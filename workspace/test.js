var request = require('request');

request('https://what.thedailywtf.com', function (err) {
    if (err) {
        console.error('TEST FAIL: ' + err);
    } else {
        console.log('TEST PASS');
    }
});