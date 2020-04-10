import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	ImageBackground,
	Image,
	StatusBar,
	TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const Login = ({ navigation }) => {
	//State management
	const [iconLoaded, seticonLoaded] = useState(false);

	//When icons are loaded
	const loadedIcon = async () => {
		await Font.loadAsync({
			MaterialCommunityIconsFont: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
		});

		seticonLoaded(true);
	};

	//If icons are loaded
	useEffect(() => {
		loadedIcon();
	});

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
						<MaterialCommunityIcons
							name="account"
							size={32}
							color={Colors.themeColor}
						/>
						<TextInput
							style={Input.inputField}
							placeholder="Email"
							textContentType="emailAddress"
							autoCompleteType="email"
							keyboardType="email-address"
							placeholderTextColor={Colors.themeColor}
						></TextInput>
					</View>
					<View style={Input.inputFieldContainer}>
						<MaterialCommunityIcons
							name="lock"
							size={32}
							color={Colors.themeColor}
						/>
						<TextInput
							style={Input.inputField}
							placeholder="Password"
							placeholderTextColor={Colors.themeColor}
							textContentType="password"
							secureTextEntry={true}
							inlineImageLeft={State.accountIcon}
						></TextInput>
					</View>
				</View>
				<View style={Container.bgImgBtnContainer}>
					<DefaultButton
						text="Sign in"
						onPress={() => navigation.navigate('Home')}
					/>
					<Text style={FontStyles.themeTextSmall}> Or </Text>
					<DefaultButton
						text="Create an account"
						inverted={true}
						onPress={() => navigation.navigate('Register')}
					/>
				</View>
			</View>
		);
	} else {
		return (
			<View>
				<Text>Waiting for icons</Text>
			</View>
		);
	}
};

export default Login;
