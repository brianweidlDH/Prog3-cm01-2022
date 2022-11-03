import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';
import { db, auth } from '../firebase/config';
import firebase from 'firebase';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			posteos: [],
			descripcion: '',
		};
	}
	//Primero crear formulario, textInput Touchableopacity
	// Un state con la informacion que vamos a cargar (quien lo creo, descripcion,cuando se creo, los likes del posteo, los comentarios del posteo)
	//Crear el metodo para creart posteo
	//Acceder a db y agregar posteo con su informacion

	componentDidMount() {
		/* db.collection('users').onSnapshot((docs) => {
			let usersFromDb = [];
			docs.forEach((doc) => {
				let user = doc.data();
				usersFromDb.push({ id: doc.id, data: user });
			});
			this.setState({ users: usersFromDb });
		}); */

		db
			.collection('posteos')
			.limit(2)
			.onSnapshot((docs) => {
				let postsFromDb = [];
				docs.forEach((doc) => {
					let post = doc.data();
					postsFromDb.push({ id: doc.id, data: post });
				});
				console.log(postsFromDb);

				this.setState({ posteos: postsFromDb });
			});
	}

	crearPosteo() {
		db
			.collection('posteos')
			.add({
				owner: auth.currentUser.email,
				descripcion: this.state.descripcion,
				createdAt: Date.now(),
				likes: [],
				comentarios: [],
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}

	//Necesitamos ver en que posteo estoy likeando, necesitamos el id
	//Agregar el email en la propiedad likes del posteo

	likear(idDelPosteo) {
		db
			.collection('posteos')
			.doc(idDelPosteo)
			.update({
				likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email),
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<>
				<Text> Mi Home </Text>
				<View>
					<TextInput
						placeholder="descripcion"
						keyboardType="default"
						onChangeText={(text) => {
							this.setState({ descripcion: text });
						}}
					/>
					<TouchableOpacity onPress={() => this.crearPosteo()}>
						<Text>Crear posteo</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={this.state.posteos}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View>
							<Text>{item.data.descripcion}</Text>
							<TouchableOpacity onPress={() => this.likear(item.id)}>
								<Text>Dar Like</Text>
							</TouchableOpacity>
						</View>
					)}
				/>
			</>
		);
	}
}

export default Home;
