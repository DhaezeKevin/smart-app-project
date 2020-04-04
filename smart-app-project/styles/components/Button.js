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
});
