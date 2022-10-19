import React, { Component } from 'react';
import { View,
         Text,
         TextInput,
         TouchableOpacity,
        StyleSheet } from 'react-native';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            pass:'',
            userName:'',
            errors:''
        }
    }

    render(){
        return(
            <View> 
                <Text>Ingresar</Text>
                <View>
                    <TextInput 
                        style={styles.field}
                        placeholder='email'
                        keyboardType='email-address'
                        onChangeText={ text => this.setState({email:text}) }
                        value={this.state.email}
                    />  

                    <Text onPress={()=> this.props.navigation.navigate('Register')}>No tengo cuenta</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    field:{
        
    }
})


export default Login;