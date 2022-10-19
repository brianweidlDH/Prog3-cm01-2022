import React, { Component } from 'react';
import { auth } from '../firebase/config';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: '',
		};
	}

	registerUser(email, pass) {
		auth
			.createUserWithEmailAndPassword(email, pass)
			.then((res) => {
				this.props.navigation.navigate('HomeMenu');
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<View>
				<Text>Registro</Text>
				<View>
					<TextInput style={styles.field} placeholder="email" keyboardType="email-address" onChangeText={(text) => this.setState({ email: text })} value={this.state.email} />
					<TextInput style={styles.field} placeholder="password" keyboardType="default" secureTextEntry onChangeText={(text) => this.setState({ pass: text })} value={this.state.pass} />
					<Text onPress={() => this.props.navigation.navigate('Login')}>Ya tengo cuenta</Text>
					<Text onPress={() => this.registerUser(this.state.email, this.state.pass)}>Registarme</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	field: {},
});

export default Register;
