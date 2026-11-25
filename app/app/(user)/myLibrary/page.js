import BookCard from "@/app/components/bookCard"
import { getFavoriteBooks, getFinishedBooks } from "@/app/redux/functions"


export default async function MyLibrary() {
  const favorites = await getFavoriteBooks()
  const finished = await getFinishedBooks()

  return (
    <div className="mylibrary--container">
      <div className="saved--books--container">
        <div className="saved--books">
          <h1 className="saved--books--heading">Saved Books</h1>
          <span className="saved--books--subheader">{favorites.length} {favorites.length === 0 ? "item" : "items"}</span>
        </div>
        <div className="saved--collection">
          {favorites.length > 0 ? 
          <div className="empty--collection">
            <h2 className="empty--title">Save your favorite books!</h2>
            <p className="empty--para">When you save a book, it will appear here.</p>
          </div>
          :
          favorites.map((book) => <BookCard book={book} key={book.id}/>)
          }        
        </div>
      </div>
      <div className="finished--books--container">
        <div className="finished--books">
          <h2 className="finished--books--heading">Finished</h2>
          <span className="finished--books--subheader">{finished.length} {finished.length === 1 ? "item" : "items"}</span>
        </div>
        <div className="finished--collection">
          {finished.length === 0 ?
            <div className="empty--collection">
              <h2 className="empty--title">Done and dusted!</h2>
              <p className="empty--para">When you finish a book, you can find it here later.</p>
            </div>
          :
            finished.map((book) => <BookCard book={book} key={book.id} />)
          }        
        </div>
      </div>
    </div>
  )
}