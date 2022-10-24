import { StyleSheet, Text, View } from 'react-native';

import Register from './src/screens/Register';
import Login from './src/screens/Login';
import HomeMenu from './src/components/HomeMenu';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Objeto con dos componentes Navigator y Screen
const Stack = createNativeStackNavigator();

{
	/* La primera Stack.Screen va a ser la primera vista que vea el usuario */
}
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
				<Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
				<Stack.Screen options={{ headerShown: false }} name="HomeMenu" component={HomeMenu} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
