import React, { useState } from 'react'
import ChildProps from './ChildProps'

const App = () => {
  const [flag, setFlag] = useState(false)
  const handleClick = () => {
    setFlag(true)
  }
  return (
    <div>
      <div>
        <div onClick={handleClick}>点击我按钮就会出现哦</div>
        <input />
        {flag && <button>我出现咯</button>}
      </div>

      <div>测试局部刷新是谁</div>
      <ChildProps />
    </div>
  )
}

export default App
