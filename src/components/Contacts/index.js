import React, { useEffect, useState } from "react"

import {Card} from './Card'

import api from "api"

export const Contacts = () => {
  const [ppl, setPpl] = useState([])

  useEffect(() => {
    ; (async () => {
      const { results } = await api.index()
      setPpl(results)
    })()
  }, [])

  const renderCards = () => {
    return ppl.map((person, i) => <Card person={person} key={i} />)
  }

  return renderCards()
}
