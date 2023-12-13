import React, { Component } from 'react'

const IncrementCountarHoc = (Compo) => {
    class AppCompo extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:1
          }
        }
        handlefun=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return(
                <Compo  countar={this.state.count} handle={this.handlefun} />
            )
        }
        
    }
    return AppCompo
  
}

export default IncrementCountarHoc
