import React, { useEffect, useState } from "react"
import api from "api"

export const Contacts = () => {
  const [ppl, setPpl] = useState([])

  useEffect(() => {
    ; (async () => {
      const { results } = await api.index()
      setPpl(results)
    })()
  }, [])

  return <p>Contacts</p>
}
