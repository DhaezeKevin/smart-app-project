//ExpoPixi API
import * as ExpoPixi from 'expo-pixi';
//Snapshot API
import { captureRef } from 'react-native-view-shot';
//Expo MediaLibrary API
import * as MediaLibrary from 'expo-media-library';
//Expo permission API
import * as Permissions from 'expo-permissions';
import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	ImageBackground,
	StatusBar,
	TouchableOpacity,
} from 'react-native';

//Import Components
import DefaultButton, { ColorButton } from '../components/Button';

//Import stylesheets
import FontStyles from '../styles/FontStyles';
import Container from '../styles/Container';
import Border from '../styles/Border';
import Img from '../styles/Img';
import Flex from '../styles/Flex';

//Needed so I don't get an error caused by firebase & expo pixi package
global.Image = undefined;

const Draw = ({ route }) => {
	const [strokeColor, setstrokeColor] = useState(0x578fca);
	const [isSketchClearing, setIsSketchClearing] = useState(false);

	//Route params
	const { boss } = route.params;

	//Take picture function
	const takePicture = async () => {
		try {
			//Take the viewshot of the drawing + background image
			const drawing = await captureRef(_container, {
				format: 'png',
			});
			console.log(drawing);

			//Save it to your phone
			MediaLibrary.saveToLibraryAsync(drawing);
		} catch (error) {
			console.log('This is the error' + error);
		}
	};

	//Clear function
	const onClear = () => {
		setIsSketchClearing(true);
		setTimeout(() => setIsSketchClearing(false), 50);
	};

	useEffect(() => {
		//Ask the user for permission to his cameraroll
		Permissions.askAsync(Permissions.CAMERA_ROLL);
	}, []);

	const Sketcher = (
		<ExpoPixi.Sketch
			ref={(ref) => (sketch = ref)}
			style={{ width: '100%', height: '100%' }}
			strokeColor={strokeColor}
			strokeWidth={10}
			strokeAlpha={1}
		></ExpoPixi.Sketch>
	);

	return (
		<View style={[Container.Container, Container.ContainerDark]}>
			<StatusBar barStyle="light-content" />
			<View style={[Flex.flexDirectionRow, Flex.flexJustifyBetween]}>
				<Text
					style={[
						FontStyles.title,
						FontStyles.titlePage,
						Border.themeBorderLeft,
					]}
				>
					{boss.name}
				</Text>
				<TouchableOpacity
					onPress={() => {
						onClear();
					}}
				>
					<Text style={{ color: 'white', marginTop: 12 }}>Clear</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{ flex: 1, marginBottom: 6 }}
				ref={(view) => {
					_container = view;
				}}
				collapsable={false}
			>
				<ImageBackground
					source={{ uri: boss.mapImage }}
					style={[Img.bgImage, Img.bgImageDraw]}
				></ImageBackground>
				{!isSketchClearing && Sketcher}
			</View>
			<View
				style={[
					{ marginTop: 6, marginBottom: 12 },
					Flex.flexDirectionRow,
					Flex.flexJustifyBetween,
				]}
			>
				<ColorButton
					color={'#578fca'}
					onPress={() => {
						setstrokeColor(0x578fca);
					}}
				/>
				<ColorButton
					color={'#FFF161'}
					onPress={() => {
						setstrokeColor(0xfff161);
					}}
				/>
				<ColorButton
					color={'#4ECCA3'}
					onPress={() => {
						setstrokeColor(0x4ecca3);
					}}
				/>
				<ColorButton
					color={'#8C5ACE'}
					onPress={() => {
						setstrokeColor(0x8c5ace);
					}}
				/>
				<ColorButton
					color={'#FF9761'}
					onPress={() => {
						setstrokeColor(0xff9761);
					}}
				/>
			</View>
			<DefaultButton
				text="Save image"
				onPress={() => {
					takePicture();
				}}
			/>
		</View>
	);
};

export default Draw;
