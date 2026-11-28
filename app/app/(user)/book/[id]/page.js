
import { FaRegStar } from "react-icons/fa6"
import { SlMicrophone } from "react-icons/sl"
import { LuClock } from "react-icons/lu"
import { HiOutlineLightBulb } from "react-icons/hi"
import { BsBookmark } from "react-icons/bs"
import { BsBookmarkFill } from "react-icons/bs"
import { findBook } from "@/app/redux/functions"
import ReadButton from "@/app/components/readButton"
import ListenButton from "@/app/components/listenButton"


export default async function Book({ params }) {
  const { id } = await params
  const book = await findBook(id)

  return (
    <>
    <div className="book--container">
      <div className="book--info">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.subTitle}</p>
        <div className="book--stats">
          <div className="book--rating">
            <FaRegStar />
            <span>{book.averageRating} ({book.totalRating})</span>
          </div>
          <div className="book--media">
            <SlMicrophone />
            <span>{book.type}</span>
          </div>
          <div className="book--time">
            <LuClock />
            <span>{book.tags.time}</span>
          </div>
          <div className="book--ideas">
            <HiOutlineLightBulb />
            <span>{book.keyIdeas} Key ideas</span>
          </div>
        </div>
        <div className="book--options">
          <ReadButton id={book.id} />
          <ListenButton id={book.id}/>          
        </div>
        {/* {isFavorite ?  
          <button 
            className="add--library" > 
              <BsBookmark /> Add title to My Library
          </button> 
          : 
          <button 
            className="add--library" > 
              <BsBookmarkFill /> Saved in My Library
          </button>
        }         */}
      </div>
      <div className="book__cover--wrapper">
        <img src={book.imageLink} alt="Book cover" />
      </div>
    </div>
    <div className="book--summary">
      <h2>What's it about?</h2>
      <div className="book--description--btns">
        <button className="btn--description">Biography & Memoir</button>
        <button className="btn--description">Personal Development</button>
      </div>
      <p>{book.backCover}</p>
      <h2>About the author</h2>
      <p>{book.bio}</p>
    </div>
  </>
  )
}