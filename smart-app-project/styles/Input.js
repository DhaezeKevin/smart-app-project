import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
	inputFieldContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 50,
		borderColor: colors.themeColor,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: 'rgba(35, 41, 49, 0.8)',
		paddingLeft: 10,
		marginTop: 10,
		marginBottom: 10,
	},
	inputField: {
		color: colors.themeColor,
		fontSize: 20,
		paddingLeft: 10,
		flex: 1,
	},
	inputValidationContainer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'absolute',
		top: -35,
		height: 25,
		width: '100%',
		paddingLeft: 10,
		borderRadius: 5,
		backgroundColor: colors.error,
	},
	inputValidationText: {
		color: colors.light,
		fontSize: 12,
		lineHeight: 16,
	},
	inputValidationSvg: {
		position: 'absolute',
		top: 20,
		left: 40,
	},
});
