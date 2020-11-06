import React, { useState } from 'react'

export default () => {
  const [checked, setChecked] = useState('')

  return (
    <div>
      <div className='row'>
        <div className='col-8'>
          <span>By clicking "Accept" I agree that:</span>
          <ul>
            <li>
              I have read and accepted the <a href='#'>User Agreement</a>
            </li>
            <li>
              I have read and accepted the <a href='#'>Privacy Policy</a>
            </li>
            <li>I am a student of BMSCE</li>
          </ul>
          <label>
            <input
              type='checkbox'
              checked={checked}
              onChange={e => setChecked(e.target.value)}
              autoFocus
            />
            <span> Accept </span>{' '}
          </label>
        </div>
      </div>
    </div>
  )
}