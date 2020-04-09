import React from 'react';
import { TouchableOpacity, Text, Image, ImageBackground } from 'react-native';

//Import styles
import buttonStyle from '../styles/components/Button';

const DefaultButton = (props) => {
	return (
		<TouchableOpacity
			style={[
				buttonStyle.defaultButton,
				props.inverted
					? buttonStyle.invertedButton
					: buttonStyle.fullButton,
			]}
			onPress={props.onPress}
		>
			<Text
				style={[
					buttonStyle.buttonText,
					props.inverted
						? buttonStyle.buttonTextInverted
						: buttonStyle.buttonTextFull,
				]}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export const ImageButton = (props) => {
	var image;
	if (props.imageName == 'ragnaros') {
		image = (
			<ImageBackground
				source={require('../assets/ragnaros.jpg')}
				style={buttonStyle.imageButtonImage}
				resizeMode="cover"
				imageStyle={{ borderRadius: 5 }}
			></ImageBackground>
		);
	} else {
		image = (
			<ImageBackground
				source={require('../assets/onyxia.jpg')}
				style={buttonStyle.imageButtonImage}
				resizeMode="cover"
				imageStyle={{ borderRadius: 5 }}
			></ImageBackground>
		);
	}

	return (
		<TouchableOpacity
			style={[buttonStyle.imageButton]}
			onPress={props.onPress}
		>
			{image}
			<Text style={[buttonStyle.imageButtonText]}>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default DefaultButton;
