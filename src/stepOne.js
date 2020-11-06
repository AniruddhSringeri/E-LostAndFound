import React, { useState } from 'react';

export default () => {
  const [YourName, setYourName] = useState('');
  const [ObjectName, setObjectName] = useState('');
  const [place, setPlace] = useState('');

  return (
    <div className="container">
      <div className='row'>
        <div>
          <label className="col-7">Your Name</label>
          <input
            className="col-5"
            placeholder='Your Name'
            type='text'
            onChange={e => setYourName(e.target.value)}
            value={YourName}
            autoFocus
            style={{width:"15rem"}}
          />
        </div>
      </div>
      <div className='row'>
        <div>
          <label className="col-7">Object Name</label>
          <input
            className="col-5"
            placeholder='Object Name'
            type='text'
            onChange={e => setObjectName(e.target.value)}
            value={ObjectName}
            style={{width:"15rem"}}
          />
        </div>
      </div>
      <div className='row'>
        <div>
          <label className="col-6">Where you found/Lost</label>
          <input
            className="col-6"
            placeholder='Place'
            type='text'
            onChange={e => setPlace(e.target.value)}
            value={place}
            style={{width:"15rem"}}
          />
        </div>
      </div>
    </div>
  )
}