

export default function BookPlayer( book ) {

  return (
    <div className="player--container">
      <div className="player--title">
        <h2>{book.title}</h2>
      </div>
      <div className="player--summary">
        <p>{book.summary}</p>
      </div>
    </div>
  )
}