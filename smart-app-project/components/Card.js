import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import CardStyle from '../styles/components/Card';
import Shadow from '../styles/Shadow';

const Card = () => {
	return (
		<TouchableOpacity style={[CardStyle.cardContainer, Shadow.Shadow]}>
			<Image
				source={require('../assets/Dungeons/rfc/rfc.png')}
				style={CardStyle.cardImage}
			/>
			<View style={CardStyle.cardText}>
				<Text style={CardStyle.cardTextName}>Ragefire Chasm</Text>
				<Text style={CardStyle.cardTextLevel}>Level 12-15</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
