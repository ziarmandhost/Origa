import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

import { Card } from 'react-native-elements';

//CSS
import styles from './styles.js';
//Static
import {category} from '../assets/static/static_data.js';

class MainScreen extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<ScrollView>
				{
					this.props.goodsList.map((item, index) =>
						<TouchableWithoutFeedback onPress={() => this.props.onClickCardEvent(index)} key={index} >
							<Card key={index}>
								<View>
									<Image
							            resizeMode="cover"
							            source={{ uri: this.props.goodsList[index].image }}
							            style={{width: (width - 20), height: (height - 170)}}
							        />
									<View style={styles.mainscreen.card_description}>
										<View style={styles.mainscreen.card_description_header}>
											<Text style={styles.mainscreen.card_description_title}> 
												<Text> {this.props.goodsList[index].text} </Text>
												<Text style={styles.mainscreen.card_description_discount}> {this.props.goodsList[index].discount} </Text>
											</Text>
										</View>
										<View style={styles.mainscreen.card_description_footer}>
											<Text style={styles.mainscreen.card_description_text}> Some promo text </Text>
											<View style={styles.mainscreen.card_description_date_container}> 
												<Image source={require('../assets/images/icons/time.png')} style={styles.mainscreen.card_description_date_icon} />
												<Text style={styles.mainscreen.card_description_date}> {this.props.goodsList[index].time} </Text>
											</View>
										</View>
									</View>
							    </View>
							</Card>
						</TouchableWithoutFeedback>
					)
				}
				<View style={{height : 20, backgroundColor : 'transparent'}} >
					<Text> </Text>
				</View>
			</ScrollView>
		);
	}
}

export default MainScreen;