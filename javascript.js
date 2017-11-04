var quotes = [
  'The', 'best', 'way', '1234', 'text', 'balls', 'toast', 'coast', 'joe', 'bricks'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];  
}
