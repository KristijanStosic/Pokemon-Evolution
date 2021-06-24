import React from 'react'

const PokemonThumbnail = ({ id, name, image, type, base_experience }) => {
  const style = type + ' thumb-container'

  return (
    <div className={style}>
      <div className='number'>
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className='detail-wrapper'>
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <small>EXP: {base_experience}</small>
      </div>
    </div>
  )
}

export default PokemonThumbnail
