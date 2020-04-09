import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import pages
import MainScreen from './screens/Main';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/Home';
import ListScreen from './screens/List';

//Import font
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
	//State management
	const [fontLoaded, setfontLoaded] = useState(false);

	//When font is loaded
	const loadedFont = async () => {
		await Font.loadAsync({
			AlegreyaSans: require('./assets/Fonts/AlegreyaSans-Regular.ttf'),
			AlegreyaSansMedium: require('./assets/Fonts/AlegreyaSans-Medium.ttf'),
			AlegreyaSansBold: require('./assets/Fonts/AlegreyaSans-Bold.ttf'),
		});

		setfontLoaded(true);
	};

	//If component is loaded
	useEffect(() => {
		loadedFont();
	});

	if (fontLoaded) {
		return (
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					<Stack.Screen name="Main" component={MainScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="List" component={ListScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else {
		//Show loading screen
		return (
			<View>
				<Text>Waiting for font</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
