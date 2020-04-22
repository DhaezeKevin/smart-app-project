import React, { useState, useEffect } from 'react';
import { Text, View, Image, StatusBar, TextInput } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

//Import stylesheets
import Flex from '../styles/Flex';
import Container from '../styles/Container';
import FontStyles from '../styles/FontStyles';
import Border from '../styles/Border';
import SearchBarStyle from '../styles/SearchBarStyle';
import Colors from '../styles/Colors';
import Shadow from '../styles/Shadow';

//Components
import Card from '../components/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { firestore } from 'firebase';

const MasterList = ({ route, navigation }) => {
	//State management
	const [searchBarValue, setSearchBarValue] = useState('');
	const [dungeonRaidList, setdungeonRaidList] = useState([]);

	//Make a list of cards based on the data
	const dungeonRaidListRender = dungeonRaidList.map(function (dungeonRaid) {
		return (
			<Card
				onPress={() => navigation.navigate('DetailsList')}
				name={dungeonRaid.name}
				level={dungeonRaid.level}
			/>
		);
	});

	const updateSearch = (search) => {
		setSearchBarValue(search);
	};

	const { difficultyType } = route.params;

	const ref = firestore().collection('Dungeons');

	const getData = () => {
		ref.get().then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				console.log(doc.data());
				setdungeonRaidList((dungeonRaidList) => [
					...dungeonRaidList,
					doc.data(),
				]);
				console.log(
					'This is the new list:' + JSON.stringify(dungeonRaidList)
				);
			});
		});
	};

	//If component is loaded
	useEffect(() => {
		getData();
	}, []);

	return (
		<View style={[Container.Container, Container.ContainerDark]}>
			<StatusBar barStyle="light-content" />
			<View>
				<Text
					style={[
						FontStyles.title,
						FontStyles.titlePage,
						Border.themeBorderLeft,
					]}
				>
					{JSON.parse(JSON.stringify(difficultyType))}
				</Text>
				<SearchBar
					placeholder="Type Here..."
					onChangeText={updateSearch}
					value={searchBarValue}
					containerStyle={[
						SearchBarStyle.searchBarContainer,
						Shadow.Shadow,
					]}
					inputContainerStyle={SearchBarStyle.searchBarInputContainer}
					inputStyle={SearchBarStyle.searchBarInput}
					placeholderTextColor={Colors.light}
					searchIcon={
						<Icon name="search" color={Colors.light} size={20} />
					}
				/>
			</View>
			<ScrollView>{dungeonRaidListRender}</ScrollView>
		</View>
	);
};

export default MasterList;
