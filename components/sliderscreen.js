import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Dimensions, ScrollView, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';

const {height, width} = Dimensions.get('window');

//CSS
import styles from './styles.js';
//Static
import {entries} from '../assets/static/static_data.js';

class SliderScreen extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			name : props.category_name,
			goods : props.goodsList
		};

		this._renderItem = this._renderItem.bind(this);
	}

	_renderItem ({item, index}) {
        return (
    		<ScrollView>
	            <View style={styles.sliderscreen.slider}>
	                <Text style={styles.sliderscreen.slider_title}>{ JSON.stringify(this.state.goods[this.state.name].text) }</Text>
	                <Image source={{ uri : this.state.goods[this.state.name].img[index]}} resizeMode={'contain'} style={{width: (width - 20), height: (height - 300)}} />
	                <View style={{marginTop : 20}} >
	                	<Button onPress={() => this.props.zakaz(JSON.stringify(this.state.goods[this.state.name]))} title="Добавить в избранное" style={styles.sliderscreen.addButton}  />
	            	</View>
	            </View>
	        </ScrollView>
        );
    }

	render () {
		return (
			<ScrollView>
			 	<View style={styles.sliderscreen.zakaz_description_colors} >
			 		<Text style={styles.sliderscreen.zakaz_text}> Доступные цвета: </Text>
			 		<View style={styles.sliderscreen.zakaz_description_colors}>
			 			{
			 				Object.keys(this.state.goods[this.state.name].colors).map((item, index) => 
			 					<View style={styles.sliderscreen.zakaz_color} key={index} >
									<Text style={styles.sliderscreen.zakaz_color_text, {backgroundColor : item}} >  </Text>
								</View>
			 				)
			 			}
			 		</View>
                </View>
				<Carousel
					ref={(c) => { this._carousel = c; }}
					data={this.state.goods[this.state.name].img}
					renderItem={this._renderItem}
					sliderWidth={width}
					sliderHeight={height - 300}
					itemWidth={width}
					itemHeight={height - 300}
					lockScrollTimeoutDuration={2000}
					shouldOptimizeUpdates={true}
	            />
			</ScrollView>
		);
	}
}

export default SliderScreen;