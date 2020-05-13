import React, { useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';

//Import stylesheets
import Flex from '../styles/Flex';
import Container from '../styles/Container';
import FontStyles from '../styles/FontStyles';
import Border from '../styles/Border';

//Components
import { ImageButton, ErrorButton } from '../components/Button';

//Import firebase
import * as firebase from 'firebase';
import 'firebase/firestore';

const Home = ({ navigation }) => {
	const currentUser = firebase.auth().currentUser;

	const logoutFunction = () => {
		firebase
			.auth()
			.signOut()
			.then(function () {
				// Sign-out successful.
				console.log('Logout succesful');
			})
			.catch(function (error) {
				// An error happened.
				console.log('There was an error');
			});
	};

	return (
		<View style={[Container.Container, Container.ContainerDark]}>
			<StatusBar barStyle="light-content" />
			<View style={[Flex.flexOne]}>
				<View style={[Flex.flexDirectionRow, Flex.flexJustifyBetween]}>
					<Text
						style={[
							FontStyles.title,
							FontStyles.titleSmall,
							Border.themeBorderLeft,
						]}
					>
						Welcome back {'\n'}
						<Text style={FontStyles.boldText}>
							{currentUser.email}
						</Text>
					</Text>
					<ErrorButton
						text="Sign out"
						onPress={() => {
							logoutFunction();
							navigation.navigate('Login');
						}}
					/>
				</View>
				<View style={[Flex.flexTwo, Flex.flexJustifyEnd]}>
					<Text style={[FontStyles.title, FontStyles.titleBig]}>
						Pick a category {'\n'}
						to get started
					</Text>
				</View>
			</View>
			<View style={Flex.flexTwo}>
				<ImageButton
					text="Dungeons"
					imageName="ragnaros"
					onPress={() =>
						navigation.navigate('MasterList', {
							difficultyType: 'Dungeons',
						})
					}
				/>
				<ImageButton
					text="Raids"
					imageName="onyxia"
					onPress={() =>
						navigation.navigate('MasterList', {
							difficultyType: 'Raids',
						})
					}
				/>
			</View>
		</View>
	);
};

export default Home;
