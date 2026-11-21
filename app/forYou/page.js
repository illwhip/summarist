import Book from "../components/book"
import { getRecommendedBooks, getSelectedBook, getSuggestedBooks } from "../redux/functions"



export default async function forYou() {
  const selected = await getSelectedBook()
  const recommended = await getRecommendedBooks()
  const suggested = await getSuggestedBooks()


  return(
    <main>
      <div className="select-books">
        <h2>Selected just for you</h2>
        <div className="selected">
          <p>{selected.description}</p>
          <div className="selected-row">
            <img src={selected.img} alt=""/>
            <div>
              <h5>{selected.title}</h5>
              <p>{selected.author}</p>
              play-icon bookTime(selected.time)
            </div>
          </div>
        </div>        
      </div>

      <div className="recommended-books">
        <h2>Recommended For You</h2>
        <p>We think you'll like these</p>
        <div className="recommended-row">
          {recommended.map((book) => <Book book={book}/>)}
        </div>
      </div>

      <div className="suggested-books">
        <h2>Suggested Books</h2>
        <p>Browse those books</p>        
      </div>
      <div className="suggested-row">
        {suggested.map((book) => <Book book={book} />)}
      </div>
    </main>
  )
}