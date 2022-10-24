import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../firebase/config';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	logOut() {
		auth.signOut();
		this.props.navigation.navigate('Login');
	}
	render() {
		return (
			<>
				<Text> Mi Perfil </Text>
				<TouchableOpacity onPress={() => this.logOut()}>
					<Text>Cerrar Sesion</Text>
				</TouchableOpacity>
			</>
		);
	}
}

export default Profile;
