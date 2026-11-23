import SearchBar from "@/app/components/searchBar"
import SideBar from "@/app/components/sideBar"

export default function UserLayout({ children }) {
  return (
    <>
      <SearchBar />
      <SideBar />
      {children}
    </>
  )
}