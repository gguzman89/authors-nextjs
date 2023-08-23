import axios from "axios"

const BASE_URL = 'https://openlibrary.org/'

// by Key: https://openlibrary.org/authors/OL23919A

//  by Author: https://openlibrary.org/search/authors.json?q=rowling

// imge: https://covers.openlibrary.org/a/olid/OL229501A-S.jpg
// OLID and KEY | size: S - M

const instanceLibrary = axios.create({
    baseURL: BASE_URL, 
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default instanceLibrary;