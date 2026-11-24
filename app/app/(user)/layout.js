import SearchBar from "@/app/components/searchBar"
import SideBar from "@/app/components/sideBar"
import "/app/styles/user.css"

export default function UserLayout({ children }) {
  return (
    <>
      <SearchBar />
      <SideBar />
      {children}
    </>
  )
}