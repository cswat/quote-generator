//list of quotes
var quoteList = [
    {
        Text: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
        LName: 'Keats',
        FName: 'John',
        Year: '',
        Citation: ''
    },
    {
        Text: 'But man is not made for defeat. A man can be destroyed but not defeated.',
        LName: 'Hemingway',
        FName: 'Ernest',
        Year: '',
        Citation: ''
    },
    {
        Text: 'When you reach the end of your rope, tie a knot in it and hang on.',
        LName: 'Roosevelt',
        FName: 'Franklin'
        Year: '',
        Citation: ''
    },
    {
        Text: 'Let us sacrifice our today so that our children can have a better tomorrow.',
        LName: 'Kalam',
        FName: 'Abdul'
        Year: '',
        Citation: ''
    },
    {
        Text: 'You cannot shake hands with a clenched fist.',
        LName: 'Gandhi',
        FName: 'Indira'
        Year: '',
        Citation: ''
    }
]

//generate random number based on size of quote list
function randomQuoteNumber() {
   return Math.floor(Math.random() * quoteList.length)
}

//using random number, generates quote and author
function selectQuote(quoteNumber) {
    document.write('<h2><i>"' + quoteList[quoteNumber]['Text'] + '"</i></h2>'
    +'</br><p class="author">-' + quoteList[quoteNumber]['FName'] + ' ' + quoteList[quoteNumber]['LName'] + '</p>')
}

//calls the function to generate a quote
selectQuote(randomQuoteNumber())
