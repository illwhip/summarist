
import BookCard from "@/app/components/bookCard"
import { getRecommendedBooks, getSelectedBook, getSuggestedBooks } from "@/app/redux/functions"
import Link from "next/link"
import { FaPlayCircle } from "react-icons/fa"



export default async function ForYou() {
  const selected = await getSelectedBook()
  const recommended = await getRecommendedBooks()
  const suggested = await getSuggestedBooks()


  return(
    <div className="for__you--container">
      <h2 className="for__you--heading">Selected just for you</h2>
      <div className="selected">        
        {selected.map((book) => 
          <Link href={`app/book/${book.id}`} key={book.id} className="selected--book">
            <p className="selected--book__subtitle">{book.subTitle}</p>
            <div className="selected--book__divider"></div>
            <div className="selected--row">
              <img src={book.imageLink} alt="Book cover" className="selected--book--img"/>
              <div className="selected--book__stats">
                <h5 className="selected--book--title">{book.title}</h5>
                <p className="selected--book--author">{book.author}</p>
                <div className="selected--book--time--container">
                  <div className="selected--book--play">
                    <FaPlayCircle />
                  </div>
                  <p className="selected--book--time">{book.tag}mins {book.tag} secs</p>
                </div>
              </div>
            </div>
          </Link>
        )}        
      </div>

      <div className="recommended--books">
        <h2 className="for__you--heading">Recommended For You</h2>
        <p className="for__you--subheader">We think you'll like these</p>
        <div className="recommended--row">
          {recommended.map((book) => <BookCard book={book} key={book.id}/>)}
        </div>
      </div>

      <div className="suggested--books">
        <h2 className="for__you--heading">Suggested Books</h2>
        <p className="for__you--subheader">Browse those books</p>        
      </div>
      <div className="suggested--row">
        {suggested.map((book) => <BookCard book={book} key={book.id}/>)}
      </div>
    </div>
  )
}