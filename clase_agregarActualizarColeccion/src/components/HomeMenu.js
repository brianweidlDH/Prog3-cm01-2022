import { StyleSheet, Text, View } from 'react-native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeMenu() {
	return (
		<Tab.Navigator>
			<Tab.Screen options={{ tabBarIcon: () => <FontAwesome name="home" size={24} color="red" /> }} name="Home" component={Home} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
}

export default HomeMenu;
