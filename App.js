import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

//CSS
import styles from './components/styles.js';
//Static
import {menu_punkts} from './assets/static/static_data.js';
//Components
import MainScreen from './components/mainscreen.js';
import SliderScreen from './components/sliderscreen.js';
import ZakazScreen from './components/zakazscreen.js';
import ZakazList from './components/zakazlist.js';
import AboutUs from './components/aboutus.js';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isPreloderShow : true,
            menu : false,
            screen : 'main',
            slider_name : '',
            zakaz : [],
            showZakazDeleted : false,
            tovars : [],
            monthes : null,
            selectedZakazList : [],
            description : null
        };

        this.goBack = this.goBack.bind(this);
        this.menuOpen = this.menuOpen.bind(this);
        this.menuClose = this.menuClose.bind(this);
        this.onClickCard = this.onClickCard.bind(this);
        this.menuTabPress = this.menuTabPress.bind(this);
        this.addToZakaz = this.addToZakaz.bind(this);
        this.zakazOpen = this.zakazOpen.bind(this);
        this.zakazRemove = this.zakazRemove.bind(this);
        this.sendGoodsList = this.sendGoodsList.bind(this);
        this.toFormZakaz = this.toFormZakaz.bind(this);
        this.toSendZakaz = this.toSendZakaz.bind(this);
        this.aboutUs = this.aboutUs.bind(this);
    }

    componentWillMount () {
        setTimeout(() => {
            this.setState({
                isPreloderShow : false
            });
        }, 3000);

        fetch(`http://www.sofilkids.com/origa/inc/selectcat.php`)
        .then(response => response.json().then(data_text => {
            this.setState({
                tovars : JSON.parse(data_text["data"]), 
                monthes : data_text["month"],
                description : data_text["description"]
            });
        }));
    }

    goBack () {
        this.setState({
            screen : 'main'
        });
    }

    menuOpen () {
        this.setState({
            menu : true
        });
    }

    menuClose () {
        this.setState({
            menu : false
        });
    }

    onClickCard (screen_name) {
        this.setState({
            screen : 'slider',
            slider_name : screen_name,
            menu : false
        });
    }

    toFormZakaz () {
        this.setState({
            screen : 'zakaz',
            slider_name : null,
            menu : false
        });
    }

    toSendZakaz () {
        this.setState({
            screen : 'zakaz_list',
            slider_name : null,
            menu : false
        });
    }

    aboutUs () {
        this.setState({
            screen : 'about_us',
            slider_name : null,
            menu : false
        });
    }

    menuTabPress () {
        this.setState({
            screen : 'main',
            slider_name : null,
            menu : false
        });
    }

    zakazOpen () {
        this.setState({
            screen : 'zakaz',
            slider_name : null,
            menu : false
        });
    }

    addToZakaz (name) {
        let zakaz = Object.assign([], this.state.zakaz);
        zakaz.push(name);
        this.setState({zakaz}, () => {
            Alert.alert(
                'Добавлено',
                'Данный товар добавлен в список избранных!',
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

    zakazRemove () {
        this.setState({
            screen : 'main',
            slider_name : null,
            menu : false,
            showZakazDeleted : true
        }, () => {
            if (this.state.showZakazDeleted) {
                Alert.alert(
                    'Товар удален',
                    'Хотите вернуться к редактировке заказа?',
                    [
                        {
                            text: 'OK',
                            onPress : () => {
                                this.setState({
                                    screen : 'zakaz',
                                    slider_name : null,
                                    menu : false,
                                    showZakazDeleted : false
                                });
                            }
                        }
                    ],
                    {
                        cancelable: false
                    }
                );
            }
        });
    }

    sendGoodsList (array_list) {
        this.setState({
            screen : 'zakaz_list',
            menu : false,
            selectedZakazList : array_list
        });
    }

    render () {
        return (
            <View style={styles.main.wrapper}>
                {
                    this.state.isPreloderShow
                    ?
                    <View style={styles.main.logo}>
                        <Image source={require('./assets/images/logo.png')} />
                    </View>
                    :
                    <View style={styles.main.screen}>
                        <StatusBar hidden={true} />    

                        <View style={styles.toolbar.menu} >
                            <View style={styles.toolbar.upmenu} >
                                <Icon name='list' size={40} onPress={this.menuOpen} iconStyle={styles.toolbar.openmenu} />
                                    {
                                        this.state.screen === 'main'
                                        ?
                                        <Text style={styles.toolbar.menu_text}>  Категории </Text>
                                        :
                                        <TouchableWithoutFeedback onPress={this.goBack} >
                                            <View>
                                                <Text style={styles.toolbar.menu_text}> На главную </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    }
                                <Icon name='assignment' size={30} onPress={this.zakazOpen} />
                            </View>
                        </View>

                        {
                            this.state.menu
                            ?
                            <TouchableWithoutFeedback>
                                <View style={styles.menu_bar.menu_bar_overlay}>
                                    <View style={styles.menu_bar.menu_bar_view} >
                                        <ScrollView>
                                            <View style={{height : 15}} >
                                                <Text> </Text>
                                            </View>

                                            <TouchableWithoutFeedback onPress={this.menuTabPress} >
                                                <View style={styles.menu_bar.menu_bar_punkt} >
                                                    <Icon name='flag' size={20} iconStyle={styles.menu_bar.menu_bar_punkt_image} />
                                                    <View style={styles.menu_bar.menu_bar_punkt_view}>
                                                        <Text style={styles.menu_bar.menu_bar_punkt_text} > На главную </Text>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <TouchableWithoutFeedback onPress={this.toFormZakaz}>
                                                <View style={styles.menu_bar.menu_bar_punkt} >
                                                    <Icon name='shopping-basket' size={20} iconStyle={styles.menu_bar.menu_bar_punkt_image} />
                                                    <View style={styles.menu_bar.menu_bar_punkt_view}>
                                                        <Text style={styles.menu_bar.menu_bar_punkt_text} > Оформить заказ </Text>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <TouchableWithoutFeedback onPress={this.toSendZakaz}>
                                                <View style={styles.menu_bar.menu_bar_punkt} >
                                                    <Icon name='send' size={20} iconStyle={styles.menu_bar.menu_bar_punkt_image} />
                                                    <View style={styles.menu_bar.menu_bar_punkt_view}>
                                                        <Text style={styles.menu_bar.menu_bar_punkt_text} > Отправить заказ </Text>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <TouchableWithoutFeedback onPress={this.aboutUs}>
                                                <View style={styles.menu_bar.menu_bar_punkt_separator} >
                                                    <Icon name='people' size={20} iconStyle={styles.menu_bar.menu_bar_punkt_image} />
                                                    <View style={styles.menu_bar.menu_bar_punkt_view}>
                                                        <Text style={styles.menu_bar.menu_bar_punkt_text} > О нас </Text>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                             <TouchableWithoutFeedback onPress={this.menuClose}>
                                                <View style={styles.menu_bar.menu_bar_punkt} >
                                                    <Icon name='close' size={20} iconStyle={styles.menu_bar.menu_bar_punkt_image} />
                                                    <View style={styles.menu_bar.menu_bar_punkt_view}>
                                                        <Text style={styles.menu_bar.menu_bar_punkt_text} > Close </Text>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </ScrollView>
                                    </View>
                                    <TouchableWithoutFeedback onPress={this.menuClose}>
                                        <View style={styles.menu_bar.right_click}>
                                            <Text> </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </TouchableWithoutFeedback>
                            :
                            null
                        }

                        {
                            !this.state.menu && this.state.screen === 'main'
                            ?
                            <MainScreen onClickCardEvent={this.onClickCard} goodsList={this.state.tovars} />
                            :
                            !this.state.menu && this.state.screen === 'slider'
                                ?
                                <SliderScreen category_name={this.state.slider_name} zakaz={this.addToZakaz} goodsList={this.state.tovars} />
                                :
                                !this.state.menu && this.state.screen === 'zakaz'
                                    ?
                                    <ZakazScreen month_list={this.state.monthes} zakaz_list={this.state.zakaz} zakaz_remove={this.zakazRemove} goodsList={this.state.tovars} showList={this.sendGoodsList} />
                                    :
                                    !this.state.menu && this.state.screen === 'zakaz_list'
                                        ?
                                        <ZakazList zakazList={this.state.selectedZakazList} goBack={this.goBack} />
                                        :
                                        !this.state.menu && this.state.screen === 'about_us'
                                            ?
                                            <AboutUs textDescription={this.state.description} />
                                            :
                                            null
                        }
                        




                    </View>
                }
            </View>
        );
    }
}

export default App;