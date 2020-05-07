import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import CardStyle from '../styles/components/Card';
import Shadow from '../styles/Shadow';

const Card = (props) => {
	return (
		<TouchableOpacity
			style={[CardStyle.cardContainer, Shadow.Shadow]}
			onPress={props.onPress}
		>
			<Image source={{ uri: props.image }} style={CardStyle.cardImage} />
			<View style={CardStyle.cardText}>
				<Text style={CardStyle.cardTextName}>{props.name}</Text>
				<Text style={CardStyle.cardTextLevel}>{props.level}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
