
import axios from 'axios';


export async function getSelectedBook() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected")
  return data
}

export async function getRecommendedBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
  return data
}

export async function getSuggestedBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
  return data
}

export async function getFavoriteBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
  return data
}

export async function getFinishedBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
  return data
}

export async function getSearchBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
  return data
}

