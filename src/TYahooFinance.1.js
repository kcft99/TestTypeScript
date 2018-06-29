var yahooFinance = require ('yahoo-finance');
var SYMBOL = 'AAPL';

yahooFinance.historical({
  symbol: SYMBOL,
  from: '2018-06-01',
  to: '2018-06-15',
  period: 'd'
}).then(function (quotes) {
   if (quotes[0]) {
    console.log(
      '%s\n...\n%s',
      JSON.stringify(quotes[0], null, 2),
      JSON.stringify(quotes[quotes.length - 1], null, 2)
    );
  } else {
    console.log('N/A');
  }
});

