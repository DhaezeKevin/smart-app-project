import { StyleSheet } from 'react-native';
import colors from '../Colors';

export default StyleSheet.create({
	FlashmessageContainer: {
		display: 'flex',
		//justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		flexDirection: 'row',
		top: 20,
		height: 50,
		width: '55%',
		backgroundColor: colors.success,
		borderRadius: 5,
		paddingLeft: 10,
		paddingRight: 10,
	},
	FlashmessageText: {
		color: colors.light,
		paddingLeft: 7,
		//backgroundColor: 'red',
	},
	FlashmessageIcon: {
		//backgroundColor: 'blue',
	},
});
