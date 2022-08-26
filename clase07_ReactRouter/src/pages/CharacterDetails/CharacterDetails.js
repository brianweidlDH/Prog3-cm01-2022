import React, { Component } from 'react'

class CharacterDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            character: {}
        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
            .then(res => res.json())
            .then(data => this.setState({
                character: data
            }))
            .catch(err => console.log(err))
    }

  render(){
    return (
    <>
        <img src={this.state.character.image} alt={this.state.character.name}/>
        <h1>Detalle de {this.state.character.name}</h1>
    </>
  )
}
}

export default CharacterDetails
