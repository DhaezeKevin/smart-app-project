import React from 'react';
import { Text, View, ImageBackground, Image, StatusBar } from 'react-native';

//Import stylesheets
import Img from '../styles/Img';
import Container from '../styles/Container';
import Font from '../styles/Font';

//Images
const backgroundImage = require('../assets/onyxia.jpg');
const logo = require('../assets/wow-classic-logo.png');

//Components
import DefaultButton from '../components/Button';

const Main = ({ navigation }) => {
	return (
		<View style={Container.bgImgContainer}>
			<StatusBar barStyle="light-content" />
			<ImageBackground
				source={backgroundImage}
				style={[Img.bgImage]}
			></ImageBackground>
			<Image source={logo} style={Img.logo} resizeMode="contain"></Image>
			<View style={Container.bgImgBtnContainer}>
				<DefaultButton
					text="Sign in"
					onPress={() => navigation.navigate('Login')}
				/>
				<Text style={Font.ThemeTextSmall}> Or </Text>
				<DefaultButton text="Create an account" inverted={true} />
			</View>
		</View>
	);
};

export default Main;
