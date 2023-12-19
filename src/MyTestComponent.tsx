import React, { useState } from 'react'

const MyTestComponent = () => {
  const [num, setNum] = useState(0);
  const clickEvent = () => {
    setNum(num+1);
  };
  return (
    <div>
      <h2>click event</h2>
      <button onClick={() => clickEvent()}>{num}</button>
    </div>
  )
}

export default MyTestComponent