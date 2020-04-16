import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FlashmessageStyle from '../styles/components/Flashmessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Shadow from '../styles/Shadow';
import Colors from '../styles/Colors';
import Animated from 'react-native-reanimated';

const Flashmessage = (props) => {
	return (
		<Animated.View
			style={[
				FlashmessageStyle.FlashmessageContainer,
				Shadow.Shadow,
				props.style,
			]}
		>
			<Icon
				name="check-circle-outline"
				color={Colors.light}
				size={35}
				style={FlashmessageStyle.FlashmessageIcon}
			/>
			<Text style={FlashmessageStyle.FlashmessageText}>{props.Text}</Text>
		</Animated.View>
	);
};

export default Flashmessage;
