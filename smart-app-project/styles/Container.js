import { StyleSheet } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
	Container: {
		flex: 1,
		flexDirection: 'column',
		fontFamily: 'AlegreyaSans',
		padding: '5%',
		paddingBottom: '2%',
	},
	ContainerDark: {
		backgroundColor: colors.darker,
	},
	bgImgContainer: {
		flex: 1,
		backgroundColor: colors.darker,
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '5%',
	},
	bgImgBtnContainer: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		marginTop: 10,
		marginBottom: 10,
	},
	bgImgInputContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		width: '100%',
		marginTop: 10,
		marginBottom: 10,
	},
});
