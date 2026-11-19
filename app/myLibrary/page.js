import Book from "../components/book"

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
        {favorites.map((book) => <Book book={book}/>)}
      </div>
      <div className="finished-books">
        <h2>Finished</h2>
        <span>{finished.length} {finished.length === 1 ? "item" : "items"}</span>
      </div>
      <div className="finished-collection">
        {finished.map((book) => <Book book={book} />)}
      </div>
    </main>
  )
}