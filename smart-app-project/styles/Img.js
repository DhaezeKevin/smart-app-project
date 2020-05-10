import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	bgImage: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		opacity: 0.4,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	bgImageDraw: {
		opacity: 1,
	},
	logo: {
		width: '100%',
		height: 158,
	},
});
