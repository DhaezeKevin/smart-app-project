import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//Import styles
import buttonStyle from '../styles/components/Button';
import buttonText from '../styles/Font';

const defaultButton = (props) => {
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
					buttonText.buttonText,
					props.inverted
						? buttonText.buttonTextInverted
						: buttonText.buttonTextFull,
				]}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export default defaultButton;
