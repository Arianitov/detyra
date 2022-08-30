import React from 'react'

function card({img,name, datebirth, height}) {

  return (
    <div className='card'>
        <h3>{name}</h3>
        <div className='info-group'>
            <p>{datebirth}</p>
        </div>
        <div className='info-group'>
            <p>{height}</p>
        </div>
    </div>
  )
}

export default card