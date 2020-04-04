import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
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
	ThemeTextSmall: {
		fontSize: 16,
		color: colors.themeColor,
		marginTop: 4,
		marginBottom: 4,
	},
});
