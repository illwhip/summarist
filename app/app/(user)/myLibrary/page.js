import BookCard from "@/app/components/bookCard"
import { getFavoriteBooks, getFinishedBooks } from "@/app/redux/functions"


export default async function forYou() {
  const favorites = await getFavoriteBooks()
  const finished = await getFinishedBooks()

  return(
    <main>
      <div className="saved-books">
        <h1>Saved Books</h1>
        <span>{favorites.length} {favorites.length === 1 ? "item" : "items"}</span>
      </div>
      <div className="saved-collection">
        {favorites.lentgh === 0 ? 
        <div>
          <h2>Save your favorite books!</h2>
          <p>When you save a book, it will appear here.</p>
        </div>
        :
        favorites.map((book) => <BookCard book={book} key={book.id}/>)
        }        
      </div>
      <div className="finished-books">
        <h2>Finished</h2>
        <span>{finished.length} {finished.length === 1 ? "item" : "items"}</span>
      </div>
      <div className="finished-collection">
        {finished.length === 0 ?
          <div>
            <h2>Done and dusted!</h2>
            <p>When you finish a book, you can find it here later.</p>
          </div>
        :
          finished.map((book) => <BookCard book={book} key={book.id} />)
        }        
      </div>
    </main>
  )
}