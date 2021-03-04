import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharactersRow from './charactersrow'
import privatekey from '../secret/secret'
import Pagination from '../pagination/pagination'
import md5 from 'md5'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const valueOffset = 20
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const url = 'http://gateway.marvel.com/v1/public/characters'
    const publickey = '69b85ed61754b0f8e87d0665fbee2522'
    const timestamp = new Date().getMilliseconds()
    const hash = md5(`${timestamp}${privatekey}${publickey}`)

    axios({
      method: 'GET',
      url: url,
      params: {
        ts: timestamp,
        apikey: publickey,
        hash:hash,
        offset: valueOffset * currentPage
      }
    })
      .then(res => {
        console.log(res.data.data.results)
        setCharacters(res.data.data.results)
        setTotal(res.data.data.total)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPage])

  return (
    <div>
      <p>Marvel characters</p>
      {characters.map(character => (
        <CharactersRow
          key={character.name}
          name={character.name}
        ></CharactersRow>
      ))}
      <Pagination
      total={total}
      setCurrentPage={setCurrentPage}
      valueOffset={valueOffset}
      ></Pagination>
    </div>
  )
}

export default Characters
