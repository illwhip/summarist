"use client"

import axios from 'axios';
import { useState } from 'react';


const [selected, setSelected] = useState([])
const [recommended, setRecommended] = useState([])
const [suggested, setSuggested] = useState([])


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
  console.log("favorites")
}

export async function getFinishedBooks() {
  console.log("read")
}