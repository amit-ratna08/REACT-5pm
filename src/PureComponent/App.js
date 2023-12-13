import React, { Component } from 'react'
import NormalCompo from './NormalCompo'
import PureCompo from './PureCompo'

 class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
    
    handlechange=()=>{
        this.setState({
            count:this.state.count
        })
    }
  render() {
    return (
      <div>
        <h1>MY COUNTAR IS {this.state.count} </h1>
        <button onClick={this.handlechange}>increment</button>

        <NormalCompo countar={this.state.count} />
        <PureCompo countar={this.state.count}/>
      </div>
    )
  }
}

export default App
