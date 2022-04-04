import axios from 'axios';
import React, { useState } from 'react'

export const Pagination = ({prev, next, onPrevious, onNext}) => {    
    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }

  return (
      <nav>
            <ul className="pagination justify-content-center">
                {
                    prev && <li className="page-item">
                        <button className="page-link" onClick={handlePrevious}>Previous</button>
                    </li>
                }
                { 
                    next && <li className="page-item">
                            <button className="page-link" onClick={handleNext}>Next</button>
                        </li>
                }
            </ul>
      </nav>
  )
}
