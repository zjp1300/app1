import React, { useEffect, useState } from 'react'

function Example() {
  const [conunt, setConunt] = useState(0)
  useEffect(() => {
    console.log('count Effect')
    document.title = '点击了' + conunt + '次'
  }, [conunt])

  function add() {
    setConunt(conunt => conunt + 1)
  }
  return (
    <div>
      <p>点击{conunt}</p>
      <button onClick={add}>点击</button>
      <p>时间 {useColock().toLocaleTimeString()}</p>
    </div>
  )
}
function useColock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('date Effect')
    const timer = setInterval(() => {
      setDate(date => new Date())
    }, 1000)
    // 清除定时器
    return () => clearInterval(timer)
  }, [])
  return date
}
export default Example
