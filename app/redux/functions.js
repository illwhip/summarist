"use client"

import axios from 'axios';
import { useState } from 'react';


const [selected, setSelected] = useState([])
const [recommended, setRecommended] = useState([])
const [suggested, setSuggested] = useState([])
const [favorites, setFavorites] = useState([])
const [finished, setFinished] = useState([])


export async function getSelectedBook() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected")
  setSelected(data)
  return selected
}

export async function getRecommendedBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
  setRecommended(data)
  return recommended
}

export async function getSuggestedBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
  setSuggested(data)
  return suggested
}

export async function getFavoriteBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
  setFavorites(data)
  return favorites
}

export async function getFinishedBooks() {
  const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
  setFinished(data)
  return finished
}