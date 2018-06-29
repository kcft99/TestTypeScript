"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SYMBOL = 'AAPL';
historical({
    symbol: SYMBOL,
    from: '2012-01-01',
    to: '2012-12-31',
    period: 'd'
}).then(function (quotes) {
    console.log(util.format('=== %s (%d) ===', SYMBOL, quotes.length).cyan);
    if (quotes[0]) {
        console.log('%s\n...\n%s', JSON.stringify(quotes[0], null, 2), JSON.stringify(quotes[quotes.length - 1], null, 2));
    }
    else {
        console.log('N/A');
    }
});
