import Link from "next/link";
import { LuClock3 } from "react-icons/lu"
import { FaRegStar } from "react-icons/fa"

export default function BookCard({ book }){

  return (
    <div className="book--card">
      <Link href="/app/book/id" className="book--link">
        <div className="book-card--wrapper">
          <div>
            <img className="book--card--img" src={book.imageLink} alt="" />
          </div>
          <h4 className="book--card--title">{book.title}</h4>
          <p className="book--card--author">{book.author}</p>
          <p className="book--card--subtitle">{book.subTitle}</p>
          <div className="book--card--stats">
            <span className="card--clock"><LuClock3 /> {book.tag}</span>
            <span className="card--star"><FaRegStar /> {book.averageRating}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}