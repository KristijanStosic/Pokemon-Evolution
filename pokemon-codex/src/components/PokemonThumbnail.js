import React from 'react'

const PokemonThumbnail = ({ id, name, image, type, base_experience, weight, height }) => {
  const style = type + ' thumb-container'

  return (
    <div className={style}>
      <div className='number'>
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className='detail-wrapper'>
        <h3>{name}</h3>
        <p>
          <strong>Type:</strong> {type}
        </p>
        <small>
          <small>
            <strong>EXP:</strong>
          </small>{' '}
          {base_experience}
        </small>
        <small>
          <strong>Weight:</strong> {weight}
        </small>
        <small>
          <strong>Height:</strong> {height}
        </small>
      </div>
    </div>
  )
}

export default PokemonThumbnail
