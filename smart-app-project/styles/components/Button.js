import { StyleSheet } from 'react-native';
import colors from '../Colors';

export default StyleSheet.create({
	//DEFAULT BUTTON
	defaultButton: {
		width: '100%',
		height: 50,
		borderRadius: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	fullButton: {
		backgroundColor: colors.themeColor,
	},
	smallButton: {
		height: 30,
		width: 70,
	},
	invertedButton: {
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: colors.themeColor,
	},
	buttonText: {
		fontSize: 20,
		fontFamily: 'AlegreyaSans',
	},
	buttonTextFull: {
		color: colors.light,
	},
	buttonTextInverted: {
		color: colors.themeColor,
	},
	buttonTextError: {
		fontSize: 16,
	},
	buttonError: {
		backgroundColor: colors.error,
	},

	//IMAGE BUTTON
	imageButton: {
		flex: 1,
		borderRadius: 5,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginBottom: 8,
		marginTop: 8,
	},
	imageButtonText: {
		color: colors.themeColor,
		fontSize: 16,
		paddingLeft: 12,
		paddingBottom: 9,
	},
	imageButtonImage: {
		resizeMode: 'cover',
		justifyContent: 'center',
		opacity: 0.6,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},

	//COLOR BUTTON
	colorButton: {
		width: 35,
		height: 35,
		borderRadius: 100,
	},
});
