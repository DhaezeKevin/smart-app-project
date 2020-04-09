import React from 'react';
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

const Register = () => {
	return (
		<View style={[Container.bgImgContainer]}>
			<StatusBar barStyle="light-content" />
			<ImageBackground
				source={backgroundImage}
				style={[Img.bgImage]}
			></ImageBackground>
			<Image source={logo} style={Img.logo} resizeMode="contain"></Image>
			<View style={Container.bgImgInputContainer}>
				<Text style={[Font.titleBig, Border.themeBorderLeft]}>
					Register
				</Text>
				<View style={Input.inputFieldContainer}>
					<Icon name="account" color={Colors.themeColor} size={24} />
					<TextInput
						style={Input.inputField}
						placeholder="Email/Username"
						placeholderTextColor={Colors.themeColor}
						textContentType="username"
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
					></TextInput>
				</View>
			</View>
			<View style={Container.bgImgBtnContainer}>
				<DefaultButton
					text="Create account"
					onPress={() => navigation.navigate('Login')}
				/>
			</View>
		</View>
	);
};

export default Register;
