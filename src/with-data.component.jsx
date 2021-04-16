import React from 'react';

export const WithData = (WrapedComponent) => {
  class WithData extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        data: []
      }
    }

      componentDidMount() {
        const {dataSource} = this.props
        setTimeout(() => {
        fetch(dataSource)
        .then(response => response.json())
        .then(data => this.setState({data: data.slice(0,3)}))
        },1500)
      }

      render(){
        const {dataSource,...otherProps} = this.props
        const {data} = this.state
        return data.length<1?
        (<h1>Loading...</h1>):
        (
          <WrapedComponent data={data} {...otherProps}/>
        )
      }
    }
    return WithData
  }
 