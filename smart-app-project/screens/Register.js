import React, { useState } from 'react';
import {
	Text,
	View,
	ImageBackground,
	Image,
	StatusBar,
	TextInput,
	KeyboardAvoidingView,
	Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Polygon } from 'react-native-svg';

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
import Flashmessage from '../components/Flashmessage';
import { Easing } from 'react-native-reanimated';

const Register = () => {
	//State management
	const [accountEmail, setaccountEmail] = useState('');
	const [accountPassword, setaccountPassword] = useState('');
	const [accountPasswordRepeat, setaccountPasswordRepeat] = useState('');
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
	const [accountCreatedSuccess, setaccountCreatedSuccess] = useState(false);

	//Animation state management
	const [fadeAnim] = useState(new Animated.Value(0));
	const [transformXAnim] = useState(new Animated.Value(0));

	const RegisterAccount = async (email, password) => {
		fadeAnim.setValue(0);
		transformXAnim.setValue(0);
		if (accountPassword == accountPasswordRepeat) {
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(function () {
					//User registered successfully
					console.log('Trying to create user');
					//Show success confirmation
					setaccountCreatedSuccess(true);
					//Success animation
					Animated.sequence([
						Animated.parallel([
							Animated.timing(fadeAnim, {
								toValue: 1,
								duration: 400,
							}),
							Animated.timing(transformXAnim, {
								toValue: 1,
								duration: 400,
							}),
						]),
						Animated.delay(2000),
						Animated.timing(transformXAnim, {
							toValue: 0,
							duration: 400,
							easing: Easing.in(),
						}),
					]).start();
					console.log(fadeAnim);
				})
				.catch(function (error) {
					//There was an error while trying to register
					var errorCode = error.code;
					var errorMessage = error.message;

					switch (errorCode) {
						case 'auth/weak-password':
							//Thrown if the password is not strong enough.
							console.log(errorCode);
							console.log(errorMessage);
							setaccountPasswordValidationError(true);
							setaccountPasswordValidationErrorMessage(
								'Password needs to be atleast 6 characters'
							);
							break;

						case 'auth/invalid-email':
							//Thrown if the email address is not valid.
							console.log(errorCode);
							console.log(errorMessage);
							setaccountEmailValidationError(true);
							setaccountEmailValidationErrorMessage(
								'Invalid email address'
							);
							break;

						case 'auth/email-already-in-use':
							//Thrown if there already exists an account with the given email address.
							console.log(errorCode);
							console.log(errorMessage);
							setaccountEmailValidationError(true);
							setaccountEmailValidationErrorMessage(
								'Email address already in use'
							);
							break;

						default:
							console.log(error);
					}
					Animated.timing(fadeAnim, {
						toValue: 1,
						duration: 350,
					}).start();
				});
		} else {
			//If the passwords are not the same
			setaccountPasswordValidationError(true);
			setaccountPasswordValidationErrorMessage("Passwords didn't match");
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 350,
			}).start();
		}
	};

	const ResetState = () => {
		setaccountEmailValidationError(false);
		setaccountPasswordValidationError(false);
	};

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<View style={[Container.bgImgContainer]}>
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
						Register
					</Text>
					<View style={Input.inputFieldContainer}>
						{accountEmailValidationError && (
							<Animated.View
								style={[
									Input.inputValidationContainer,
									{ opacity: fadeAnim },
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
						<Icon
							name="account"
							color={Colors.themeColor}
							size={24}
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
									{ opacity: fadeAnim },
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
						{accountPasswordValidationError && (
							<Animated.View
								style={[
									Input.inputValidationContainer,
									{ opacity: fadeAnim },
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
							ResetState();
							RegisterAccount(accountEmail, accountPassword);
						}}
						// onPress={() => navigation.navigate('Login')}
					/>
				</View>
				{/* View with flex: 1 to take up the remaining space for our keyboardview */}
				<View style={{ flex: 1 }}></View>
				<View></View>
				{accountCreatedSuccess && (
					<Flashmessage
						Text="Account created succesfully!"
						fadeAnimation={fadeAnim}
						transformAnimation={transformXAnim}
					/>
				)}
			</View>
		</KeyboardAvoidingView>
	);
};

export default Register;
