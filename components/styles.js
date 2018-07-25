import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const main = StyleSheet.create({
	wrapper : {
    	flex : 1
    },
    logo : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
	screen : {
		flex : 1
	}
});

const menu_bar = StyleSheet.create({
	menu_bar_overlay : {
		position : 'absolute',
		zIndex : 10,
		width : '100%',
		height : '100%',
		backgroundColor : 'rgba(0, 0, 0, 0.7)',
		flexDirection : 'row',
		justifyContent : 'center'
	},
	menu_bar_view : {
		width : width / 4 * 3,
		height : '100%',
		backgroundColor : '#f3f3f3'
	},
	menu_bar_punkt : {
		width : '100%',
		paddingTop : 10,
		paddingBottom : 10,
		paddingLeft : 20,
		paddingRight : 20,
		flexDirection : 'row',
		position : 'relative'
	},
	menu_bar_punkt_separator : {
		width : '100%',
		paddingTop : 10,
		paddingBottom : 10,
		paddingLeft : 20,
		paddingRight : 20,
		flexDirection : 'row',
		position : 'relative',
		borderTopWidth : 1,
		borderTopColor : '#d7d7d7'
	},
	menu_bar_punkt_view : {
		width : (width - (width/4) - 100),
		flexDirection : 'row',
		justifyContent : 'center',
		textAlign : 'center'
	},
	menu_bar_punkt_text : {
		fontSize : 20,
		color : '#2c2c2c'
	},
	menu_bar_punkt_image : {
		width : 50
	},
	right_click : {
		position : 'relative',
		height : height,
		width : width / 4,
		backgroundColor : 'transparent'
	}
});

const toolbar = StyleSheet.create({
	menu : {
		width : '100%',
        backgroundColor : '#ff767d'
	},
	upmenu : {
		width : '100%',
        height : 50,
        paddingTop : 10,
        paddingBottom : 10,
        paddingLeft : 20,
        paddingRight : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
	},
	menu_text : {
		fontSize : 18,
        color : 'black'
	},
	openmenu : {
		paddingTop : 15
	}
});

const mainscreen = StyleSheet.create({
	card_description : {
		width : '100%',
        padding : 10
	},
	card_description_header : {
		width : '100%',
        alignItems : 'center'
	},
	card_description_title : {
		width : '100%',
        fontWeight : 'bold',
        fontSize : 20,
        color : '#353535'
	},
	card_description_discount : {
		fontSize : 18,
        color : 'red',
        fontWeight : 'bold'
	},
	card_description_footer : {
		width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between'
	},
	card_description_text : {
		fontSize : 15,
        color : '#676767',
        overflow: 'hidden'
	},
	card_description_date_container : {
		flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
	},
	card_description_date : {
		fontSize : 15,
        fontWeight : 'bold',
        color : '#3e0d5c',
        justifyContent : 'center'
	},
	card_description_date_icon : {
		width : 13,
        height : 13,
        marginRight : 5
	}
});

const sliderscreen = StyleSheet.create({
	slider : {
		justifyContent : 'center',
		alignItems : 'center',
		paddingTop : 10,
		paddingBottom : 40
	},
	slider_title : {
		fontSize : 20,
		fontWeight : 'bold',
		marginBottom : 10
	},
	slider_subtitle : {
		fontSize : 15
	},
	addButton : {
		width : '100%',
		paddingBottom : 5,
		fontSize : 20,
		fontWeight : 'bold',
		backgroundColor : '#ff767d'
	},
	zakaz_description_colors : {
		width : '100%',
		flexDirection : 'row',
		justifyContent : 'space-around',
		flexWrap : 'wrap'
	},
	zakaz_color : {
		width : 40,
		height : 40,
		margin : 2.5
	},
	zakaz_color_text : {
		width : 40,
		height : 40
	},
	zakaz_text : {
		fontSize : 25,
		fontWeight : 'bold',
		width : '100%',
		textAlign : 'center',
		marginVertical : 15
	}
});

const zakazscreen = StyleSheet.create({
	zakaz_view : {
		padding : 20
	},
	zakaz_item : {
		width : '100%',
		paddingTop : 5,
		paddingBottom : 5,
		borderBottomWidth : 1,
		borderBottomColor : '#D0D0D0'
	},
	zakaz_item_text : {
		width : '100%',
		fontSize : 22,
		textAlign : 'center'
	},
	zakaz_item_btn_view : {
		flexDirection : 'row',
		justifyContent : 'space-around',
		width : '100%',
		paddingTop : 15
	},
	zakaz_item_btn : {
		width : '40%'
	},
	zakaz_description : {
		padding : 10,
	},
	zakaz_description_container : {
		flexDirection : 'column'
	},
	zakaz_description_image_container : {
		width : '100%',
		height : 150,
		marginBottom : 10
	},
	zakaz_description_image : {
		width : '100%',
		height : 150,
		alignItems : 'center'
	},
	zakaz_description_elements : {
		width : '100%',
	},
	zakaz_description_colors : {
		width : '100%',
		flexDirection : 'row',
		justifyContent : 'space-around',
		flexWrap : 'wrap',
		borderBottomWidth : 1,
		borderBottomColor : '#D0D0D0'
	},
	zakaz_color : {
		width : 40,
		height : 40,
		margin : 2.5
	},
	zakaz_color_text : {
		width : 40,
		height : 40
	},
	zakaz_description_sizes : {
		width : '100%',
		flexDirection : 'row',
		justifyContent : 'space-around',
		flexWrap : 'wrap',
		borderBottomWidth : 1,
		borderBottomColor : '#D0D0D0'
	},
	zakaz_size : {
		width : 40,
		height : 40,
		borderWidth : 1,
		borderColor : 'black',
		margin : 4,
		padding : 2.5,
		justifyContent : 'center',
		alignItems : 'center',
	},
	zakaz_size_text : {
		fontSize : 16,
		fontWeight : '700',
		color : 'black',
		textAlign : 'center'
	},
	zakaz_description_results : {
		width : '100%',
		flexDirection : 'row',
		justifyContent : 'space-around',
		flexWrap : 'wrap',
		borderBottomWidth : 1,
		borderBottomColor : '#D0D0D0'
	},
	zakaz_description_results_view : {
		borderWidth : 1,
		borderColor : 'black',
		margin : 4,
		padding : 2.5,
		justifyContent : 'center',
		alignItems : 'center'
	},
	zakaz_description_results_text : {
		fontSize : 14,
		color : 'black',
		width : '100%',
		padding : 2.5
	},
	zakaz_btn : {
		fontWeight : 'bold',
		fontSize : 18
	},
	zakaz_sizeInput : {
		marginTop : 10,
		marginBottom : 10,
		flexDirection : 'column',
		alignItems : 'center',
		justifyContent : 'center',
		borderWidth : 1,
		borderColor : '#D0D0D0'
	},
	zakaz_sizeInput_text : {
		fontSize : 20,
		padding : 5
	},
	emptyZakaz : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
	emptyZakaz_text : {
		fontSize : 30,
		fontWeight : 'bold'
	},
	zakaz_description_counts : {
		width : '100%',
		flexDirection : 'row',
		justifyContent : 'space-around',
		flexWrap : 'wrap',
		borderBottomWidth : 1,
		borderBottomColor : '#D0D0D0',
		paddingTop : 10,
		paddingBottom : 10 
	},
	zakaz_description_counts_text : {
		fontSize : 25,
		fontWeight : '700',
		color : 'black',
		textAlign : 'center'
	},
	zakaz_description_month : {
		width : '100%',
		flexDirection : 'row',
		justifyContent : 'space-around',
		flexWrap : 'wrap',
		paddingTop : 5,
		paddingBottom : 5,
		borderBottomWidth : 1,
		borderBottomColor : '#D0D0D0'
	},
	zakaz_description_month_view : {
		paddingTop : 10,
		paddingBottom : 10,
		paddingLeft : 5,
		paddingRight : 5,
		borderWidth : 1,
		borderColor : '#D0D0D0'
	},
	zakaz_description_month_view_text : {
		fontSize : 18,
		fontWeight : '700',
		textAlign : 'center',
		color : 'black'
	},
	zakaz_description_result : {
		width : '100%',
		justifyContent : 'center',
		paddingTop : 15,
		paddingBottom : 15
	},
	zakaz_description_result_text : {
		fontSize : 22,
		fontWeight : '700',
		textAlign : 'center',
		color : 'black'
	},
	zakaz_selected : {
		borderColor : 'yellow',
		borderWidth : 3,
		width : 40,
		margin : 2.5
	},
	zakaz_description_month_view_selected : {
		paddingTop : 10,
		paddingBottom : 10,
		paddingLeft : 5,
		paddingRight : 5,
		borderWidth : 3,
		borderColor : 'yellow'
	},
	zakaz_send : {
		marginTop : 15,
		width : '100%',
		flexDirection : 'row',
		justifyContent : 'center'	
	},
	zakaz_send_btn : {
		fontWeight : 'bold',
		fontSize : 18
	},
	zakaz_month_title : {
		width : '100%',
		fontSize : 18,
		fontWeight : 'bold',
		textAlign : 'center',
		marginTop : 15,
		marginBottom : 3
	},
	zakaz_month_subtitle : {
		width : '100%',
		fontSize : 12,
		fontWeight : 'bold',
		textAlign : 'center',
		color : 'gray',
		marginBottom : 10
	}
});

const zakazlist = StyleSheet.create({
	list_item_container : {
		width : '100%',
		flexDirection : 'column',
		alignItems : 'center',
		paddingTop : 10
	},
	list_item : {
		width : '80%',
		flexDirection : 'column',
		alignItems : 'center',
		padding : 10,
		margin : 5
	},
	list_item_view : {
		width : '100%',
		borderColor : '#D0D0D0',
		borderWidth : 3,
		flexDirection : 'column',
		alignItems : 'center',
		padding : 10,
		margin : 5
	},
	list_text : {
		fontWeight : 'bold',
		fontSize : 25,
		padding : 5
	},
	title : {
		width : '100%',
		textAlign : 'center',
		fontSize : 30,
		fontWeight : 'bold',
		color : 'black',
		marginTop : 10
	},
	zakaz_btn : {
		width : '40%',
		fontSize : 20,
		fontWeight : 'bold'
	},
	fio : {
		width : '80%',
		textAlign : 'center',
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 3,
		borderRadius : 5
	}
});

const aboutus = StyleSheet.create({
	title : {
		width : '100%',
		fontSize : 25,
		fontWeight : 'bold',
		textAlign : 'center',
		marginVertical : 20
	},
	description : {
		width : '100%',
		fontSize : 16,
		marginBottom : 20,
		paddingHorizontal : 30
	}
});

const styles = {
	main : main,
	toolbar : toolbar,
	menu_bar : menu_bar,
	mainscreen : mainscreen,
	sliderscreen : sliderscreen,
	zakazscreen : zakazscreen,
	zakazlist : zakazlist,
	aboutus : aboutus
};

export default styles;