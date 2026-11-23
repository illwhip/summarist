
export default function BookCard({ book }){

  return (
    <div className="book-card">
      <div>
        <img src={book.imageLink} alt="" />
      </div>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.bookDescription}</p>
      <div className="book-stats">
        clock-icon {book.time}
        star-icon {book.averageRating}
      </div>
    </div>
  )
}