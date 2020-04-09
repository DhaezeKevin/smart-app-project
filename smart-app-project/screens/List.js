import React, { useState } from 'react';
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
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const List = () => {
	//State management
	const [searchBarValue, setSearchBarValue] = useState('');

	const updateSearch = (search) => {
		setSearchBarValue(search);
	};

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
					Dungeons
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
			<ScrollView>
				<Card />
				<Card />
				<Card />
				<Card />
			</ScrollView>
		</View>
	);
};

export default List;
