import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { db, auth } from '../firebase/config';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		db.collection('users').onSnapshot((docs) => {
			let usersFromDb = [];
			docs.forEach((doc) => {
				let user = doc.data();
				usersFromDb.push({ id: doc.id, data: user });
				console.log(usersFromDb);
			});
			this.setState({ users: usersFromDb });
		});
	}

	render() {
		return (
			<>
				<Text> Mi Home </Text>
			</>
		);
	}
}

export default Home;
