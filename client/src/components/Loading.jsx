import React from 'react'
import './Loading.css'
const Loading = () => {
    return (
        <div className='d-flex w-100 justify-content-center'>
        <div className="spinner-container">
          <div className="loading-spinner">
          </div>
        </div>
        </div>
      );
}

export default Loading
