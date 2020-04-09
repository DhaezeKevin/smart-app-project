import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
	searchBarContainer: {
		backgroundColor: 'transparent',
		padding: 0,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		marginBottom: 12,
	},
	searchBarInputContainer: {
		backgroundColor: colors.dark,
		borderRadius: 5,
	},
	searchBarInput: {
		fontFamily: 'AlegreyaSans',
		fontSize: 16,
		color: colors.light,
	},
});
