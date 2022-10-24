import { StyleSheet, Text, View } from 'react-native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeMenu() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
}

export default HomeMenu;
