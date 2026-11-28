

export default async function BookPlayer({ params }) {
  const { id } = await params
    const book = await findBook(id)

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