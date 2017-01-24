import React from 'react';

import loading from '../../public/loading.gif';

const Loading = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="Loading spinner" title="This is taking a while... This won't work without location."></img>      
    </div>
  )
}

export default Loading;