import React, { Component } from 'react';
import { db, auth } from '../firebase/config';

//Importar navegaciones
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Guardar la ejecución de Stack
const Stack = createNativeStackNavigator();

//importar las screens o lo que necesite el menú
import Login from '../screens/Login';
import Register from '../screens/Register';
import Menu from './Menu';
import Comments from '../screens/Comments';

class MainNavigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			registerError: '',
		};
	}

	render() {
		//Stack.Group funciona como React.Fragment y nos permite agrupar Screens.

		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
					<Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
					<Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default MainNavigation;
