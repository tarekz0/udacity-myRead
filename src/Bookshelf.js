import React from 'react'
import Book from "./Book"

class Bookshelf extends React.Component {
    render() {
        const {shelf, books, onChangeShelf} = this.props;
        return (
            <div className="bookShelf">
                <h2 className="bookShelf-title">{shelf.name}</h2>
                <div className="bookShelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf
