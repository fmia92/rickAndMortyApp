import React from 'react'

const Characters = ({ characters }) => {
  return (
    <div className='row'>
        {
            characters.map(character => {
                return (
                    <div className='col-md-4' key={character.id}>
                        <div className='card'>
                            <img src={character.image} className='card-img-top' alt='...' />
                            <div className='card-body'>
                                <h5 className='card-title'>{character.name}</h5>
                                <div className='card-text'>
                                    <p><strong>Status:</strong> {character.status}</p>
                                    <p><strong>Species:</strong> {character.species}</p>
                                    <p><strong>Origin:</strong> {character.origin.name}</p>
                                    <p><strong>Last Location:</strong> {character.location.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )})
        }
        
    </div>
  )
}

export default Characters