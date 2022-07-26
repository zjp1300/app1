import React from 'react'
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树  它内部的所有消费组件都会重新渲染。
const ThemeContext = React.createContext('light')
console.log('ThemeContext', ThemeContext)
class App2 extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value='dark'>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext

  render() {
    console.log(ThemeContext)
    return <div id={this.context}>按钮</div>
  }
}

export default App2
