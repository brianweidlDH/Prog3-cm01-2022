import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../firebase/config';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	loginUser(email, pass) {
		auth
			.signInWithEmailAndPassword(email, pass)
			.then((res) => {
				this.props.navigation.navigate('Menu');
			})
			.catch((error) => console.log(error));
	}

	render() {
		//Falta implementar for de login y el método que viene de mainNavigation
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Login</Text>
				<TextInput style={styles.field} keyboardType="default" placeholder="Email" onChangeText={(text) => this.setState({ email: text })} />
				<TextInput style={styles.field} keyboardType="default" placeholder="password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
				<TouchableOpacity style={styles.button} onPress={() => this.loginUser(this.state.email, this.state.password)}>
					<Text style={styles.buttonText}>Ingresar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Registro')}>
					<Text>No tengo cuenta</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		marginTop: 10,
	},
	title: {
		marginBottom: 20,
	},
	field: {
		borderColor: '#dcdcdc',
		borderWidth: 1,
		borderRadius: 2,
		padding: 3,
		marginBottom: 8,
	},
	button: {
		borderRadius: 2,
		padding: 3,
		backgroundColor: 'green',
	},
	buttonText: {
		color: '#fff',
	},
});

export default Login;
