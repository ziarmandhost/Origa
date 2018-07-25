import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback, Dimensions, Button, Alert, TextInput } from 'react-native';

const {height, width} = Dimensions.get('window');

//CSS
import styles from './styles.js';
//Static
import {category} from '../assets/static/static_data.js';

class AboutUs extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			text : props.textDescription
		};
	}

	render () {
		return (
			<ScrollView>
				<View>
					<Text style={styles.aboutus.title} > About us </Text>
				</View>

				<View>
					<Text style={styles.aboutus.description}>
						{
							this.state.text.toString()
						}
					</Text>
				</View>
			</ScrollView>
		);
	}
}

export default AboutUs;