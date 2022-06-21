import React from 'react'
import Bookshelf from "./Bookshelf"
import SearchPage from "./SearchPage"

class ListBooks extends React.Component {
  render() {
    const { books, shelves, onChangeShelf } = this.props;
    function booksOnShelf (shelf){
      return books.filter(book => book.shelf === shelf.key)
    }

    return (
      <div className="booksList">
        <div className="booksList-title">
          <h1>MyReads</h1>
        </div>
        <div className="booksList-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf key={shelf.key} shelf={shelf} books={booksOnShelf(shelf)} onChangeShelf={onChangeShelf} />
            ))}
          </div>
        </div>
        <SearchPage />
      </div>
    )
  }
}

export default ListBooks
