import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';
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

	//Route params
	const { difficultyType } = route.params;
	//Make a list of cards based on the data
	const dungeonRaidListRender = dungeonRaidList.map(function (dungeonRaid) {
		return (
			<Card
				onPress={() =>
					navigation.navigate('DetailsList', {
						dungeonRaid: dungeonRaid,
						difficulty: difficultyType,
					})
				}
				name={dungeonRaid.name}
				level={dungeonRaid.level}
				key={dungeonRaid.name}
				image={dungeonRaid.image}
			/>
		);
	});

	const updateSearch = (search) => {
		setSearchBarValue(search);
	};

	const ref = firestore().collection(difficultyType);

	const getData = () => {
		setdungeonRaidList([]);
		ref.get().then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				setdungeonRaidList((dungeonRaidList) => [
					...dungeonRaidList,
					doc.data(),
				]);
			});
		});
	};

	//If component is loaded
	useEffect(() => {
		getData();
		console.log(difficultyType);
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
