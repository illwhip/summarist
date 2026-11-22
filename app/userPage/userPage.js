import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import { Routes, Route, useNavigate } from 'firebase/auth'
import Settings from "../settings/page"
import ForYou from "../forYou/page"
import LoggedOut from "../components/loggedoutSetting";
import Book from "../book/page";
import BookPlayer from "../bookPlayer/page";


export function UserPage(){

  return (
    <div>
      <SearchBar />
      <SideBar />
      <Routes>
        <Route path="/forYou" element={<ForYou /> } />
        {!!user ? <Route path="/loggedOut" element={<LoggedOut />} /> : <Route path="/myLibrary" element={<MyLibrary /> } />}
        <Route path="/settings" element={<Settings /> } />
        <Route path="/book/id" element={<Book /> } />
        <Route path="/bookPlayer/id" element={<BookPlayer /> } />

      </Routes>
    </div>
  )
}