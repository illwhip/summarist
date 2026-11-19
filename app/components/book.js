
export default function Book({ book }){

  return (
    <div className="book-card">
      <div>
        <img src={book.image} alt="" />
      </div>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <div className="book-stats">
        clock-icon {book.time}
        star-icon {book.rating}
      </div>
    </div>
  )
}