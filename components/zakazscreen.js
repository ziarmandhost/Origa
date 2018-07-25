import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';

import Accordion from 'react-native-collapsible/Accordion';
import NumericInput from 'react-native-numeric-input';

//CSS
import styles from './styles.js';
//Static
import {entries} from '../assets/static/static_data.js';

class ZakazScreen extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			zakaz_list : props.zakaz_list,
			colorClicked : null,
			monthes : props.month_list,
			monthClicked : null,
			monthIsClick : false,
			prevMonthClicked : null,
			clicked : false,
			prevClicked : null,
			data : null,
			selected_zakaz : []
		};

		this._renderHeader = this._renderHeader.bind(this);
		this._renderContent = this._renderContent.bind(this);

		this._renderColors = this._renderColors.bind(this);
		this.colorSelect = this.colorSelect.bind(this);

		this._renderSize = this._renderSize.bind(this);
		this._renderMonth = this._renderMonth.bind(this);

		this.saveModel = this.saveModel.bind(this);
		this.deleteModel = this.deleteModel.bind(this);

		this.selectSize = this.selectSize.bind(this);

		this.monthSelect = this.monthSelect.bind(this);
		this.sendZakazSets = this.sendZakazSets.bind(this);
	}

	_renderColors (section) {
		let colors = [];
		for (let i in JSON.parse(section).colors) { 
			colors.push(
				<TouchableOpacity onPress={() => this.colorSelect(i, JSON.parse(section).text)} key={i} ref={JSON.parse(section).text} >
					{
						this.state.clicked && i === this.state.colorClicked
						? 
						<View style={styles.zakazscreen.zakaz_selected} >
							<Text style={styles.zakazscreen.zakaz_color_text, {backgroundColor : i}} >  </Text>
						</View>
						:
						<View style={styles.zakazscreen.zakaz_color} >
							<Text style={styles.zakazscreen.zakaz_color_text, {backgroundColor : i}} >  </Text>
						</View>
					}
					
				</TouchableOpacity>
			);
		}
		return colors;
	}

	colorSelect (color, text) {
		this.setState({
			prevClicked : this.state.colorClicked,
			colorClicked : color, 
			clicked : !this.state.clicked
		});

		if (this.state.data !== null) {
			let data = this.state.data;
			data["clickedColor"] = color;
			data["text"] = text;
			this.setState({data}, () => {
				console.log(this.state.data);
			});
		}
		else {
			let data = {};
			data["clickedColor"] = color;
			data["text"] = text;
			this.setState({data}, () => {
				console.log(this.state.data);
			});
		}
	}

	_renderSize (section, color) {
		let sizes = [];
		for (let i in JSON.parse(section).colors[color]) {
			sizes.push(
				<View style={styles.zakazscreen.zakaz_sizeInput} key={JSON.parse(section).colors[color][i]} >
					<Text style={styles.zakazscreen.zakaz_sizeInput_text}> {JSON.parse(section).colors[color][i]} </Text>
					<NumericInput
					type='plus-minus'
					totalWidth={90}
					totalHeight={40}
					onChange={value => this.selectSize(value, JSON.parse(section).colors[color][i], color )}
					/>
				</View>
			);
		}
		return sizes;
	}

	selectSize (value, size, color) {
		let data = this.state.data;
		data[color] = this.state.data[color] ? this.state.data[color] : {};
		data[color][size] = value;
		this.setState({data}, () => {
			console.log(this.state.data);
		});
	}

	_renderMonthCounts (month) {
		this.setState({
			monthClicked : month,
			monthIsClick : true,
			prevMonthClicked : this.state.monthClicked,
		});
	}

	_renderMonth () {
		let monthes = [];
		for (let i = 0; i < JSON.parse(this.state.monthes).length; i++) {
			if (this.state.monthIsClick && JSON.parse(this.state.monthes)[i] === this.state.monthClicked) {
				monthes.push(
					<TouchableOpacity key={i} onPress={() => this._renderMonthCounts(JSON.parse(this.state.monthes)[i])} >
						<View style={styles.zakazscreen.zakaz_description_month_view_selected}>
							<Text style={styles.zakazscreen.zakaz_description_month_view_text}> {JSON.parse(this.state.monthes)[i]} </Text>
						</View>
					</TouchableOpacity>
				);
			}
			else {
				monthes.push(
					<TouchableOpacity key={i} onPress={() => this._renderMonthCounts(JSON.parse(this.state.monthes)[i])} >
						<View style={styles.zakazscreen.zakaz_description_month_view}>
							<Text style={styles.zakazscreen.zakaz_description_month_view_text}> {JSON.parse(this.state.monthes)[i]} </Text>
						</View>
					</TouchableOpacity>
				);
			}
		}
		return monthes;
	}

	monthSelect (section, type) {
		let b1 = JSON.parse(section).b1;
		let b2 = JSON.parse(section).b2;

		let k1 = (b2 - b1) / 3;
		let ak = b2 - k1;
		let k2 = (b2 - ak) / 4;

		if (this.state.monthClicked === JSON.parse(this.state.monthes)[0]) {
			if (type === 'count_4') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b1 + k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_50') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {b1.toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_100') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b1 - k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_200') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b1 - k2 - k2).toFixed(1)} грн. </Text>
				);
			}
		}
		else if (this.state.monthClicked === JSON.parse(this.state.monthes)[1]) {
			if (type === 'count_4') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b1 + k1 + k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_50') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b1 + k1).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_100') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b1 + k1 - k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_200') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b1 + k1 - k2 - k2).toFixed(1)} грн. </Text>
				);
			}
		}
		else if (this.state.monthClicked === JSON.parse(this.state.monthes)[2]) {
			if (type === 'count_4') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b2 - k1 + k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_50') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b2 - k1).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_100') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b2 - k1 - k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_200') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b2 - k1 - k2 - k2).toFixed(1)} грн. </Text>
				);
			}
		}
		else if (this.state.monthClicked === JSON.parse(this.state.monthes)[3]) {
			if (type === 'count_4') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b2 + k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_50') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {b2.toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_100') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b2 - k2).toFixed(1)} грн. </Text>
				);
			}
			else if (type === 'count_200') {
				return (
					<Text style={styles.zakazscreen.zakaz_description_results_text}> {(b2 - k2 - k2).toFixed(1)} грн. </Text>
				);
			}
		}
	}

	_renderHeader (section) {
		return (
			<View style={styles.zakazscreen.zakaz_item}>
				<Text style={styles.zakazscreen.zakaz_item_text}> {JSON.parse(section).text} </Text>
			</View>
		);
	}

	_renderContent (section) {
		return (
			<ScrollView>
				<View style={styles.zakazscreen.zakaz_description} >
					<View style={styles.zakazscreen.zakaz_description_container}>
						<View style={styles.zakazscreen.zakaz_description_image_container} >
							<Image source={{uri : JSON.parse(section).image}} resizeMode='contain' style={styles.zakazscreen.zakaz_description_image} />
						</View>
						<View style={styles.zakazscreen.zakaz_description_elements}>
							<Text style={styles.zakazscreen.zakaz_month_title} > Нажмите на цвет, для выбора количества </Text>
							<Text style={styles.zakazscreen.zakaz_month_subtitle} > *Введите 0, если не хотите брать данных товар </Text>
							<View style={styles.zakazscreen.zakaz_description_colors} >
								{ this._renderColors(section) }
							</View>
						</View>
						{
							this.state.colorClicked !== null && this.state.colorClicked !== this.state.prevClicked
							?
							<View style={styles.zakazscreen.zakaz_description_sizes}>
								{this._renderSize(section, this.state.colorClicked).map(item => item)}
							</View>
							:
							null
						}
						<View style={styles.zakazscreen.zakaz_description_month}>
							<Text style={styles.zakazscreen.zakaz_month_title} > Цена зависит от месяца предзаказа: </Text>
							{this._renderMonth().map(item => item)}
						</View>	
						{
							this.state.monthClicked !== null
							?
							<View style={styles.zakazscreen.zakaz_description_results}>
								<View style={styles.zakazscreen.zakaz_description_results_view} >
									<Text style={styles.zakazscreen.zakaz_description_results_text}> От 4 шт. </Text>
									{this.monthSelect(section, `count_4`)}
								</View>
								<View style={styles.zakazscreen.zakaz_description_results_view} >
									<Text style={styles.zakazscreen.zakaz_description_results_text}> 50 тис. </Text>
									{this.monthSelect(section, `count_50`)}
								</View>
								<View style={styles.zakazscreen.zakaz_description_results_view} >
									<Text style={styles.zakazscreen.zakaz_description_results_text}> 100 тис. </Text>
									{this.monthSelect(section, `count_100`)}
								</View>
								<View style={styles.zakazscreen.zakaz_description_results_view} >
									<Text style={styles.zakazscreen.zakaz_description_results_text}> 200 тис. </Text>
									{this.monthSelect(section, `count_200`)}
								</View>
							</View>
							:
							null
						}
					</View>
					<View style={styles.zakazscreen.zakaz_item_btn_view} >
						<View style={styles.zakazscreen.zakaz_item_btn}>
							<Button color='blue' title="Сохранить" style={styles.zakazscreen.zakaz_btn} onPress={() => this.saveModel(section)}  />
						</View>
						<View style={styles.zakazscreen.zakaz_item_btn}>
							<Button color='red' title="Удалить" style={styles.zakazscreen.zakaz_btn} onPress={() => this.deleteModel(section)}  />
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}

	saveModel (section) {
		let selected_zakaz = Object.assign([], this.state.selected_zakaz);
		selected_zakaz.push(this.state.data);
		this.setState({
			selected_zakaz,
			data : {}
		}, () => {
			Alert.alert(
                'Сохранено',
                'Данный товар сохранен!',
                [
                    {
                        text: 'OK'
                    }
                ],
                {
                    cancelable: false
                }
            );
		});

	}

	deleteModel (section) {
		let zakaz_list = Object.assign([], this.state.zakaz_list);
		let idx = this.state.zakaz_list.indexOf(section);
		this.state.zakaz_list.splice(this.state.zakaz_list[idx], 1);
		this.setState({zakaz_list}, () => {
			this.props.zakaz_remove();
		});
	}

	sendZakazSets (zakaz) {
		if (zakaz.length === 0) {
			Alert.alert(
                'Ошибка!',
                'Перед отправкой товара нужно сохранить каждый товар! Можно кликнуть на цвет и выбрать количество товара, а также кликнуть на месяц можно узнать цену товара.',
                [
                    {
                        text: 'OK'
                    }
                ],
                {
                    cancelable: false
                }
            );
		}
		else if (this.state.colorClicked === null || this.state.monthClicked === null || this.state.prevMonthClicked === null || this.state.prevClicked === null) {
			Alert.alert(
                'Предупреждение!',
                'Кликните на прямоугольник с цветом, что-бы выбрать количество товара. Если вы не хотите брать данный товар, введите количество ноль ("0")',
                [
                    {
                        text: 'OK'
                    }
                ],
                {
                    cancelable: false
                }
            );
		}
		else {
			this.props.showList(zakaz);
		}
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.zakazscreen.zakaz_view} >
					<Text style={styles.sliderscreen.zakaz_text}> Оформление заказа: </Text>
					{
						this.state.zakaz_list.length !== 0
						?
						<ScrollView>
							<Accordion
								sections={this.state.zakaz_list}
								renderHeader={this._renderHeader}
								renderContent={this._renderContent}
								underlayColor='#DEDEDE'
							/>
							<View style={styles.zakazscreen.zakaz_send}>
								<Button color='blue' title="Отправить заказ" style={styles.zakazscreen.zakaz_send_btn} onPress={() => this.sendZakazSets(this.state.selected_zakaz)}  />
							</View>
						</ScrollView>
						:
						<View style={styles.zakazscreen.emptyZakaz} >
							<Text style={styles.sliderscreen.zakaz_text}> Заказ пустой! </Text>
						</View>
					}
				</View>
			</ScrollView>
		);
	}
}

export default ZakazScreen;