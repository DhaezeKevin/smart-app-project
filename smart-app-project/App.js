import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { decode, encode } from 'base-64';

if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}

//Import firebase
import * as firebase from 'firebase';
import 'firebase/firestore';

//Import pages
import MainScreen from './screens/Main';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/Home';
import MasterListScreen from './screens/MasterList';
import DetailsListScreen from './screens/DetailsList';

//Import font
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
	//State management
	const [fontLoaded, setfontLoaded] = useState(false);

	// Initialize Firebase
	const firebaseConfig = {
		apiKey: 'AIzaSyAOx3WNcIxi6pREJIpf9Cr-VsS1t5sLkow',
		authDomain: 'smart-app-dev-project.firebaseapp.com',
		projectId: 'smart-app-dev-project',
	};

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
		var db = firebase.firestore();

		// db.collection('users')
		// 	.add({
		// 		first: 'Ada',
		// 		last: 'Lovelace',
		// 		born: 1815,
		// 	})
		// 	.then(function (docRef) {
		// 		console.log('Document written with ID: ', docRef.id);
		// 	})
		// 	.catch(function (error) {
		// 		console.error('Error adding document: ', error);
		// 	});
	}

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
	}, []);

	if (fontLoaded) {
		return (
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					<Stack.Screen name="Main" component={MainScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen
						name="MasterList"
						component={MasterListScreen}
					/>
					<Stack.Screen
						name="DetailsList"
						component={DetailsListScreen}
					/>
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
