import { StyleSheet } from 'react-native';
import colors from '../Colors';

export default StyleSheet.create({
	cardContainer: {
		height: 230,
		backgroundColor: colors.dark,
		borderRadius: 5,
		marginTop: 6,
		marginBottom: 6,
	},
	cardImage: {
		flex: 3,
		width: '100%',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	cardText: {
		flex: 1,
		paddingLeft: 18,
		paddingBottom: 5,
		paddingTop: 5,
		justifyContent: 'center',
	},
	cardTextName: {
		fontSize: 18,
		fontFamily: 'AlegreyaSansMedium',
		color: colors.themeColor,
	},
	cardTextLevel: {
		fontSize: 16,
		fontFamily: 'AlegreyaSans',
		color: colors.light,
	},
});
