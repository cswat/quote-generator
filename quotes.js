//list of quotes
var quotes = [
  {
      quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
      source: 'John Keats',
      year: '',
      citation: '',
      profession: ''
  },
  {
      quote: 'But man is not made for defeat. A man can be destroyed but not defeated.',
      source: 'Ernest Hemingway',
      year: '',
      citation: '',
      profession: 'Author'
  },
  {
      quote: 'That\'s one small step for a man and one giant leap for mankind.',
      source: 'Neil Armstrong',
      year: '1969',
      citation: '',
      profession: 'Astronaut'
  },
  {
      quote: 'I don\'t want it.',
      source: 'Jon Snow',
      year: '',
      citation: 'Game of Thrones',
      profession: 'King in da Norf'
  },
  {
      quote: 'You cannot shake hands with a clenched fist.',
      source: 'Indira Gandhi',
      year: '',
      citation: '',
      profession: 'Prime Minister of India'
  },
    {
      quote: 'I know in my heart that man is good. That what is right will always triumph and there is purpose and worth to each and every life.',
      source: 'Ronald Reagan',
      year: '',
      citation: '',
      profession: 'President of the United States'
  }
]

//this is the list of colors the screen can change to when printQuote() is called
var colors = ['red', 'green', 'blue', 'maroon']

//prints list of quotes to console
console.log(quotes);

//generate random number based on size of quote list and return quote object
function getRandomQuote () {
  quoteNumber = Math.floor(Math.random() * quotes.length)
  console.log(quotes[quoteNumber])
  return quotes[quoteNumber]
}

//select a random color from the array of colors
function getRandomColor() {
  colorNumber = Math.floor(Math.random() * colors.length)
  randomColor = colors[colorNumber]
  console.log(randomColor)
  return randomColor
}

function printQuote(){
  pageQuote = getRandomQuote() 
  quoteHTML = ''
  quoteHTML += ('<p class="quote">' + pageQuote['quote'] + '</p>'
  + '<p class="source">' + pageQuote['source'])
  //evaluates whether profession key has a value and adds it
if (pageQuote['profession'] !== '') {
  quoteHTML += ('<span class="profession">' + pageQuote['profession'] + '</span>')
}
  //evaluates whether citation key has a value and adds it
  if (pageQuote['citation'] !== '') {
    quoteHTML += ('<span class="citation">' + pageQuote['citation'] + '</span>')
  }
  //evaluates whether year key has a value and adds it
  if (pageQuote['year'] !== '') {
    quoteHTML += ('<span class="year">' + pageQuote['year'] + '</span>')
  }
  quoteHTML += ('</p>')
  document.getElementById('quote-box').innerHTML = quoteHTML
  
  newColor = getRandomColor()
  document.getElementById('background').style.backgroundColor = newColor
  document.getElementById('loadQuote').style.backgroundColor = newColor
}

//checks for a click event and runs the printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//refreshes quote every 20 seconds user is on the page
setInterval(function(){printQuote();},20000)
