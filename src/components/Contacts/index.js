import React, { useEffect, useState } from "react"

import {Card} from './Card'

import api from "api"

export const Contacts = () => {
  const [filterTxt, setFilterTxt] = useState("")
  const [ppl, setPpl] = useState([])

  useEffect(() => {
    ; (async () => {
      const { results } = await api.index()
      setPpl(results)
    })()
  }, [])

  const filterPeople = ({target}) => {
    setFilterTxt(target.value)
  }

  const renderCards = () => {
    return ppl.map((person, i) =>
      <Card person={person} key={i} />)
  }

  return (
    <main>
      <input type="search" onChange={filterPeople}/>
      {renderCards()}
    </main>
  )
}
