import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {filterCameraOptions} from '../../static/imagePickerOption';
import {LaunchCamera, LaunchGallery} from '../../utils/imagePicker';
import FilterCamerBtn from './FilterCamerBtn';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bnt: {
		padding: 10,
	}
});

function FilterCameraSelctionScreen({navigation}) {
	const [photoUri, setPhotoUri] = useState<string>('');
	const CameraBtnClickListener = () : void => {
		LaunchCamera(filterCameraOptions)
			.then((newUri) => {
				setPhotoUri(newUri);
			})
			.then(() => {
				navigation.navigate('Result', {
					photoUri,
				});
			})
			.catch((err) => {
				Error(err);
			});
	};

	const GalleryBtnClickListener = () : void => {
		LaunchGallery(filterCameraOptions)
			.then((newUri) => {
				setPhotoUri(newUri);
			})
			.then(() => {
				navigation.navigate('Result', {
					photoUri,
				});
			})
			.catch((err) => {
				Error(err);
			});
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<FilterCamerBtn
					title="카메라"
					style={styles.btn}
					onPressFunc={CameraBtnClickListener}
				/>
				<FilterCamerBtn
					title="갤러리"
					style={styles.btn}
					onPressFunc={GalleryBtnClickListener}
				/>
			</View>
		</View>
	);
}

export default FilterCameraSelctionScreen;