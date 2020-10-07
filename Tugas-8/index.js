var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

function letsReadBooks(){
    var i = 0
    readBooks(10000, books[i], function read (times) {
        if (times > 0) {
            i+=1
            if(books.length > i){
                readBooks(times, books[i], read)
            }
        } else {
            return
        }
    });    
}

letsReadBooks()