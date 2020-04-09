import { StyleSheet } from 'react-native';
import colors from '../Colors';

export default StyleSheet.create({
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
	invertedButton: {
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: colors.themeColor,
	},
	imageButton: {
		flex: 1,
		borderRadius: 5,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginBottom: 8,
		marginTop: 8,
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
});
