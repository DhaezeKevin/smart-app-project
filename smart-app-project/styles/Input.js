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
});
