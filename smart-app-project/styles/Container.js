import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
	Container: {
		flex: 1,
		flexDirection: 'column',
	},
	bgImgContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.darker,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '5%',
		//paddingBottom: '0%',
	},
	bgImgBtnContainer: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
});
