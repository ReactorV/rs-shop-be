export const getProducts = async () => books
export const getProductByID = async (id: string) => books.find(book => book.id === id)

export const books = [
    {
        "kind": "books#volume",
        "id": "_ojXNuzgHRcC",
        "etag": "OTD2tB19qn4",
        "title": "Practical MongoDB",
        "price": "$32.04",
        "image": "https://itbook.store/img/books/9781484206485.png",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
        "volumeInfo": {
            "authors": [
                "Vijaya Khisty Bodach"
            ]
        }
    },
    {
        "kind": "books#volume",
        "id": "RJxWIQOvoZUC",
        "etag": "NsxMT6kCCVs",
        "price": "$47.11",
        "image": "https://itbook.store/img/books/9781484211830.png",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
        "title": "The Definitive Guide to MongoDB, 3rd Edition",
        "volumeInfo": {
            "authors": [
                "Gail Saunders-Smith"
            ]
        }
    },
    {
        "kind": "books#volume",
        "id": "zaRoX10_UsMC",
        "etag": "pm1sLMgKfMA",
        "price": "$32.10",
        "image": "https://itbook.store/img/books/9781617291609.png",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/zaRoX10_UsMC",
        "title": "MongoDB in Action, 2nd Edition",
        "volumeInfo": {
            "authors": [
                "Paul McEvoy"
            ]
        }
    }
]
