import React, { Component } from 'react'
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput
} from 'react-native'

import {auth, db} from '../firebase/config'


import MyCamera from '../components/MyCamera'


export default class NewPost extends Component {

  constructor(props){
    super(props)
    this.state = {
      description: '',
      likes: [],
      comments: [],
      showCamera: true,
      url: ''     
    }
  }

  guardarPost(){
    console.log("guardar post")
      db.collection('posts').add({
        createdAt: Date.now(),
        owner: auth.currentUser.email,
        description: this.state.description,
        likes: [],
        comments: [],
        url: this.state.url
      })
      .then((res)=>{
         console.log("Posteo Exitoso")
         this.setState({
          description: ""
         }, () => this.props.navigation.navigate('Home')
         ) 
      })
      .catch( err => console.log(err))

  }

  onImageUpload(url){
    this.setState({
      url,
      showCamera: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.showCamera ? 
        <MyCamera 
          onImageUpload = { url => this.onImageUpload(url)}
        /> :
        <View style={styles.container}>
          <Text style={styles.title}>Nuevo Post</Text>
          <TextInput 
            style={styles.field}
            keyboardType='default'
            placeholder='Descripcion'
            onChangeText={text => this.setState({description: text})}
            multiline
          />
          <TouchableOpacity 
            style= {styles.button}
            onPress={()=> this.guardarPost()}
          >
            <Text style={styles.buttonText}>Guardar Post</Text>
          </TouchableOpacity>
        </View>
      }

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop: 10,
        height:'100%'
    },
    title:{
        marginBottom:20
    },
    field:{
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 2,
        padding:3,
        marginBottom:8
    },
    button: {
        borderRadius: 2,
        padding:3,
        backgroundColor: 'green',
    },
    buttonText:{
        color: '#fff'
    }
})
