import React, { useState, useEffect } from 'react';
import { Text, View, Image, StatusBar, TextInput } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

//Import stylesheets
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

const DetailsList = ({ route, navigation }) => {
	//State management
	const [searchBarValue, setSearchBarValue] = useState('');
	const [bossList, setbossList] = useState([]);

	//Route params
	const { dungeonRaid } = route.params;
	const { difficulty } = route.params;

	//Make a list of cards based on the data
	const bossListRender = bossList.map(function (bossList) {
		return (
			<Card
				onPress={() =>
					navigation.navigate('Draw', {
						boss: bossList,
					})
				}
				name={bossList.name}
				level={bossList.level}
				key={bossList.name}
				image={bossList.image}
			/>
		);
	});

	const updateSearch = (search) => {
		setSearchBarValue(search);
	};

	const ref = firestore()
		.collection(difficulty)
		.doc(dungeonRaid.name)
		.collection('Bosses');

	const getData = () => {
		setbossList([]);
		ref.get().then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				console.log(doc.data());
				setbossList((bossList) => [...bossList, doc.data()]);
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
					Bosses for {dungeonRaid.name}
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
			<ScrollView>{bossListRender}</ScrollView>
		</View>
	);
};

export default DetailsList;
