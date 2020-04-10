import React, { useState } from 'react';
import {
	Text,
	View,
	ImageBackground,
	Image,
	StatusBar,
	TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Import stylesheets
import Img from '../styles/Img';
import Container from '../styles/Container';
import Font from '../styles/FontStyles';
import Border from '../styles/Border';
import Input from '../styles/Input';
import Colors from '../styles/Colors';

//Images
const backgroundImage = require('../assets/ragnaros.jpg');
const logo = require('../assets/wow-classic-logo.png');

//Components
import DefaultButton from '../components/Button';

//Import firebase
import * as firebase from 'firebase';
import 'firebase/firestore';
import FontStyles from '../styles/FontStyles';

const Register = () => {
	//State management
	const [accountEmail, setaccountEmail] = useState('');
	const [accountPassword, setaccountPassword] = useState('');
	const [accountPasswordRepeat, setaccountPasswordRepeat] = useState('');

	const RegisterAccount = async (email, password) => {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(accountEmail, accountPassword)
			.then(console.log('Trying to create account'))
			.catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;

				console.log(errorCode);
				console.log(errorMessage);

				//Show error on screen
			});
	};

	return (
		<View style={[Container.bgImgContainer]}>
			<StatusBar barStyle="light-content" />
			<ImageBackground
				source={backgroundImage}
				style={[Img.bgImage]}
			></ImageBackground>
			<Image source={logo} style={Img.logo} resizeMode="contain"></Image>
			<View style={Container.bgImgInputContainer}>
				<Text
					style={[
						FontStyles.title,
						FontStyles.titleBig,
						Border.themeBorderLeft,
					]}
				>
					Register
				</Text>
				<View style={Input.inputFieldContainer}>
					<Icon name="account" color={Colors.themeColor} size={24} />
					<TextInput
						style={Input.inputField}
						placeholder="Email"
						placeholderTextColor={Colors.themeColor}
						textContentType="emailAddress"
						autoCompleteType="email"
						keyboardType="email-address"
						onChangeText={(accountEmail) =>
							setaccountEmail(accountEmail)
						}
						defaultValue={accountEmail}
					></TextInput>
				</View>
				<View style={Input.inputFieldContainer}>
					<Icon name="lock" color={Colors.themeColor} size={24} />
					<TextInput
						style={Input.inputField}
						placeholder="Password"
						placeholderTextColor={Colors.themeColor}
						textContentType="newPassword"
						secureTextEntry={true}
						onChangeText={(accountPassword) =>
							setaccountPassword(accountPassword)
						}
						defaultValue={accountPassword}
					></TextInput>
				</View>
				<View style={Input.inputFieldContainer}>
					<Icon name="lock" color={Colors.themeColor} size={24} />
					<TextInput
						style={Input.inputField}
						placeholder="Repeat password"
						placeholderTextColor={Colors.themeColor}
						textContentType="newPassword"
						secureTextEntry={true}
						onChangeText={(accountPasswordRepeat) =>
							setaccountPasswordRepeat(accountPasswordRepeat)
						}
						defaultValue={accountPasswordRepeat}
					></TextInput>
				</View>
			</View>
			<View style={Container.bgImgBtnContainer}>
				<DefaultButton
					text="Create account"
					onPress={() => {
						if (accountPassword == accountPasswordRepeat) {
							RegisterAccount(accountEmail, accountPassword);
						} else {
							//Show passwords do not match to user as feedback
							console.log('Passwords do not match!');
						}
					}}
					// onPress={() => navigation.navigate('Login')}
				/>
			</View>
		</View>
	);
};

export default Register;
