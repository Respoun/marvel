import React from 'react'
import PropTypes from 'prop-types'

const CharactersRow = ({ id,name,description }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p><br></br>
    </div>
  )
}

CharactersRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string
}

export default CharactersRow
