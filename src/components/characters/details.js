import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import privatekey from '../secret/secret'
import md5 from 'md5'

const Details = () => {
  const [characters, setCharacters] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const url = 'http://gateway.marvel.com/v1/public/characters/' + id
    const publickey = '69b85ed61754b0f8e87d0665fbee2522'
    const timstamp = new Date().getMilliseconds()
    const hash =  md5(`${timstamp}${privatekey}${publickey}`)

    axios({
      method: 'GET',
      url: url,
      params: {
        ts: timstamp,
        apikey: publickey,
        hash: hash
      }
    })
      .then(res => {
        console.log(res.data.data.results)
        setCharacters(res.data.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])
    if (characters[0] !== undefined){
      return (
          <div>
              <p>{characters[0].id}</p>
              <p>{characters[0].name}</p>
              <p>{characters[0].description}</p>
          </div>
        )
    }
    else{
        return(
            <div>
                <p>chargement...</p>
            </div>
        )
    }
}

export default Details
