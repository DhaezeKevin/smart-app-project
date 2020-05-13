import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	ImageBackground,
	Image,
	StatusBar,
	TextInput,
	Animated,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Polygon } from 'react-native-svg';
import { AppLoading } from 'expo';

//Import expo fonts
import * as Font from 'expo-font';

//Import stylesheets
import Img from '../styles/Img';
import Container from '../styles/Container';
import FontStyles from '../styles/FontStyles';
import Border from '../styles/Border';
import Input from '../styles/Input';
import Colors from '../styles/Colors';

//Images
const backgroundImage = require('../assets/ragnaros.jpg');
const logo = require('../assets/wow-classic-logo.png');

//Components
import DefaultButton from '../components/Button';
import { State } from 'react-native-gesture-handler';

//Import firebase
import * as firebase from 'firebase';
import 'firebase/firestore';

const Login = ({ navigation }) => {
	//State management
	const [iconLoaded, seticonLoaded] = useState(false);

	//JUST FOR TESTING PURPOSES CHANGE THIS BACK
	const [accountEmail, setaccountEmail] = useState('test@test.com');
	const [accountPassword, setaccountPassword] = useState('123456');
	const [
		accountPasswordValidationError,
		setaccountPasswordValidationError,
	] = useState(false);
	const [
		accountPasswordValidationErrorMessage,
		setaccountPasswordValidationErrorMessage,
	] = useState('');
	const [
		accountEmailValidationError,
		setaccountEmailValidationError,
	] = useState(false);
	const [
		accountEmailValidationErrorMessage,
		setaccountEmailValidationErrorMessage,
	] = useState('');

	//When icons are loaded
	const loadedIcon = async () => {
		await Font.loadAsync({
			MaterialCommunityIconsFont: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
		});
	};

	//LoginFunction
	const loginAccount = async () => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(accountEmail, accountPassword)
			.then(function () {
				//User signed in succesfully
				console.log('Logged in succesfully!');
				navigation.navigate('Home');
			})
			.catch(function (error) {
				//There was an error
				var errorCode = error.code;
				var errorMessage = error.message;

				console.log('Login failed 😭');
				switch (errorCode) {
					case 'auth/invalid-email':
						//Thrown if the email address is not valid.
						console.log(errorCode);
						console.log(errorMessage);
						setaccountEmailValidationError(true);
						setaccountEmailValidationErrorMessage(
							'Invalid email address'
						);
						break;
					case 'auth/user-disabled':
						//Thrown if the user corresponding to the given email has been disabled.
						console.log(errorCode);
						console.log(errorMessage);
						setaccountEmailValidationError(true);
						setaccountEmailValidationErrorMessage(
							'This email address has been disabled'
						);
						break;
					case 'auth/user-not-found':
						//Thrown if there is no user corresponding to the given email.
						console.log(errorCode);
						console.log(errorMessage);
						setaccountEmailValidationError(true);
						setaccountEmailValidationErrorMessage(
							'This email address does not exist'
						);
						break;
					case 'auth/wrong-password':
						//Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
						console.log(errorCode);
						console.log(errorMessage);
						setaccountPasswordValidationError(true);
						setaccountPasswordValidationErrorMessage(
							'Invalid password'
						);
						break;
					default:
						console.log(error);
				}
			});
	};

	const resetState = () => {
		setaccountEmailValidationError(false);
		setaccountPasswordValidationError(false);
	};

	if (iconLoaded) {
		return (
			<View style={Container.bgImgContainer}>
				<StatusBar barStyle="light-content" />
				<ImageBackground
					source={backgroundImage}
					style={[Img.bgImage]}
				></ImageBackground>
				<Image
					source={logo}
					style={Img.logo}
					resizeMode="contain"
				></Image>
				<View style={Container.bgImgInputContainer}>
					<Text
						style={[
							FontStyles.title,
							FontStyles.titleBig,
							Border.themeBorderLeft,
						]}
					>
						Sign in
					</Text>
					<View style={Input.inputFieldContainer}>
						{accountEmailValidationError && (
							<Animated.View
								style={[
									Input.inputValidationContainer,
									// { opacity: fadeAnim },
								]}
							>
								<Text style={Input.inputValidationText}>
									{accountEmailValidationErrorMessage}
								</Text>
								<Svg
									height="15"
									width="15"
									style={Input.inputValidationSvg}
								>
									<Polygon
										points="1,1 7.5,14 14,1"
										fill={Colors.error}
										strokeWidth="1"
										strokeLinejoin="round"
									/>
								</Svg>
							</Animated.View>
						)}
						<MaterialCommunityIcons
							name="account"
							size={32}
							color={Colors.themeColor}
						/>
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
						{accountPasswordValidationError && (
							<Animated.View
								style={[
									Input.inputValidationContainer,
									// { opacity: fadeAnim },
								]}
							>
								<Text style={Input.inputValidationText}>
									{accountPasswordValidationErrorMessage}
								</Text>
								<Svg
									height="15"
									width="15"
									style={Input.inputValidationSvg}
								>
									<Polygon
										points="1,1 7.5,14 14,1"
										fill={Colors.error}
										strokeWidth="1"
										strokeLinejoin="round"
									/>
								</Svg>
							</Animated.View>
						)}
						<MaterialCommunityIcons
							name="lock"
							size={32}
							color={Colors.themeColor}
						/>
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
				</View>
				<View style={Container.bgImgBtnContainer}>
					<DefaultButton
						text="Sign in"
						onPress={() => {
							resetState();
							loginAccount();
						}}
					/>
					<Text style={FontStyles.themeTextSmall}> Or </Text>
					<DefaultButton
						text="Create an account"
						inverted={true}
						onPress={() => navigation.navigate('Register')}
					/>
				</View>
				{/* View with flex: 1 to take up the remaining space for our keyboardview */}
				<View style={{ flex: 1 }}></View>
			</View>
		);
	} else {
		return (
			<AppLoading
				startAsync={loadedIcon}
				onFinish={() => {
					seticonLoaded(true);
				}}
				onError={console.warn}
			/>
		);
	}
};

export default Login;
