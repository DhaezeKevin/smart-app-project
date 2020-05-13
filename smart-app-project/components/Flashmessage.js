import React, { useState, useEffect } from 'react';
import { Text, View, Animated } from 'react-native';
import FlashmessageStyle from '../styles/components/Flashmessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Shadow from '../styles/Shadow';
import Colors from '../styles/Colors';

const Flashmessage = (props) => {
	return (
		<Animated.View
			style={[
				FlashmessageStyle.FlashmessageContainer,
				Shadow.Shadow,
				{
					opacity: props.fadeAnimation,
					right: props.transformAnimation.interpolate({
						inputRange: [0, 1],
						outputRange: ['-55%', '-1%'],
					}),
				},
				props.errorStyle && FlashmessageStyle.FlashmessageError,
			]}
		>
			{props.errorStyle ? (
				<Icon
					name="exclamation"
					color={Colors.light}
					size={35}
					style={FlashmessageStyle.FlashmessageIcon}
				/>
			) : (
				<Icon
					name="check-circle-outline"
					color={Colors.light}
					size={35}
					style={FlashmessageStyle.FlashmessageIcon}
				/>
			)}

			<Text style={FlashmessageStyle.FlashmessageText}>{props.Text}</Text>
		</Animated.View>
	);
};

export default Flashmessage;
