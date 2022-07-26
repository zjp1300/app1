import React from 'react'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: []
    }
  }

  handleProduct = productId => {
    const defaultBoolean = this.state.arr.length > 0

    if (defaultBoolean) {
      let nextProduct = this.state.arr.map(item => {
        if (item.id === productId) {
          return Object.assign({}, item, {
            votes: item.votes + 1
          })
        } else {
          return item
        }
      })
      this.setState({ arr: nextProduct })
    }
  }

  render() {
    return <div></div>
  }
}

export default ProductList
