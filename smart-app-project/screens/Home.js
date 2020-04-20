import React, { useEffect } from 'react';
import {
	Text,
	View,
	ImageBackground,
	Image,
	StatusBar,
	TextInput,
} from 'react-native';

//Import stylesheets
import Flex from '../styles/Flex';
import Container from '../styles/Container';
import FontStyles from '../styles/FontStyles';
import Border from '../styles/Border';

//Components
import { ImageButton } from '../components/Button';

//Import firebase
import * as firebase from 'firebase';
import 'firebase/firestore';

const Home = ({ navigation }) => {
	const currentUser = firebase.auth().currentUser;

	//If component is loaded
	useEffect(() => {
		console.log(currentUser);
	}, []);

	return (
		<View style={[Container.Container, Container.ContainerDark]}>
			<StatusBar barStyle="light-content" />
			<View style={[Flex.flexOne]}>
				<View style={Flex.flexOne}>
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
					onPress={() => navigation.navigate('MasterList')}
				/>
				<ImageButton
					text="Raids"
					imageName="onyxia"
					onPress={() => navigation.navigate('MasterList')}
				/>
			</View>
		</View>
	);
};

export default Home;
