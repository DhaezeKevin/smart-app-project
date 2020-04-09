import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
	boldText: {
		fontFamily: 'AlegreyaSansBold',
	},
	themeTextSmall: {
		fontSize: 16,
		color: colors.themeColor,
		marginTop: 4,
		marginBottom: 4,
		fontFamily: 'AlegreyaSans',
	},
	title: {
		fontFamily: 'AlegreyaSansMedium',
		fontSize: 24,
		lineHeight: 24,
		color: colors.light,
		marginBottom: 15,
	},
	titleSmall: {
		fontSize: 20,
		lineHeight: 20,
	},
	titleBig: {
		fontSize: 40,
		lineHeight: 40,
	},
	titlePage: {
		lineHeight: 40,
	},
});
