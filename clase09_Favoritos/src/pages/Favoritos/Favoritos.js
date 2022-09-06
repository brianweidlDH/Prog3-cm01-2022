import React, { Component } from 'react'
import Card from '../../components/Card/Card'

class Favoritos extends Component {
    constructor(){
        super()
        this.state={
            favoritos:[]
        }
    }

    componentDidMount(){
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
    }

  render() {
    return (
      <div className='card-container'>
        {this.state.favoritos.map( item => (
            <Card 
                key={item.id}
                personaje={item}
            />
        ))}
      </div>
    )
  }
}

export default Favoritos
