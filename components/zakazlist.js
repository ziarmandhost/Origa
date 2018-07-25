import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback, Dimensions, Button, Alert, TextInput } from 'react-native';

const {height, width} = Dimensions.get('window');

//CSS
import styles from './styles.js';
//Static
import {category} from '../assets/static/static_data.js';

class ZakazList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			zakaz_list : props.zakazList
		};

		this._renderColor = this._renderColor.bind(this);
		this.sendZakaz = this.sendZakaz.bind(this);
	}

	_renderColor (item) {
		let array_list = [];
		for (let i in item[item["clickedColor"]]) {
			array_list.push(
				<View key={item[item["clickedColor"]][i]} style={{borderWidth : 3, borderColor : item["clickedColor"], justifyContent : 'center', alignItems : 'center', margin : 5}} >
					<Text style={{color : item["clickedColor"], fontSize : 20, fontWeight : "bold"}}> {i} размер -  { item[item["clickedColor"]][i] } шт. </Text>				
				</View>
			);
		}
		return array_list;
	}

	sendZakaz () {
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
			Alert.alert(
                'Успех',
                'Заказ отправлен на сервер!',
                [
                    {
                        text: 'OK'
                    }
                ],
                {
                    cancelable: false
                }
            );
		};

		console.log("AJAX : " + this.state.zakaz_list);

		request.open('POST', `http://www.sofilkids.com/origa/inc/mail.php`);
		request.send('zakaz='+JSON.stringify(this.state.zakaz_list)+'&fio='+this.state.text);
	}

	render () {
		return (
			<ScrollView>
				<Text style={styles.zakazlist.title}> Ваш заказ : </Text>
				<View style={styles.zakazlist.list_item_container} >
					<View style={styles.zakazlist.list_item} >
						{
							this.state.zakaz_list.length !== 0
							?
							this.state.zakaz_list.map((item, index) => 
								<View style={styles.zakazlist.list_item_view} key={index} >
									<Text style={styles.zakazlist.list_text}> {item["text"]} </Text>
									{this._renderColor(item).map(item2 => item2)} 
								</View>
							)
							:
							<View style={styles.zakazscreen.emptyZakaz} >
								<Text style={styles.sliderscreen.zakaz_text}> Заказ пустой! </Text>
							</View>
						}
					</View>
				</View>

				<View style={{flexDirection : 'row', justifyContent : 'center', margin : 10}} >
					<TextInput 
						style={styles.zakazlist.fio}
				        onChangeText={(text) => this.setState({text : text})}
				        placeholder={`Ваше ФИО`}
					/>
				</View>

				<View style={{width : '100%', flexDirection : 'row', justifyContent : 'space-around'}} >
					<Button color='red' title="Изменить заказ" style={styles.zakazlist.zakaz_btn} onPress={() => this.props.goBack()} />
					<Button color='blue' title="Отправить заказ" style={styles.zakazlist.zakaz_btn} onPress={this.sendZakaz} />
				</View>
			</ScrollView>
		);
	}
}

export default ZakazList;