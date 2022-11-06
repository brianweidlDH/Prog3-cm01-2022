import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	render() {
		return (
			<View>
				<Text> Mi Perfil</Text>
			</View>
		);
	}
}

export default Profile;
