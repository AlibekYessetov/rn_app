import {View, Text} from 'native-base'
import React from 'react'
import {Box} from 'native-base'
import HomeHeader from '../components/HomeHeader'
import CartProducts from '../components/CartProducts'
import { connect } from 'react-redux'
import Message from '../components/NotMessage'

function CartScreen(props) {
  return (
    <Box flex={1} backgroundColor = {"#fff"}>
      
        
      <HomeHeader text={"Cart"}/>
      <>
        {
          props.cardItems.length == 0
          ?<Message text = {"Корзина пуста"}/>
          : null
        }
      </>
      <CartProducts items = {props.cardItems}/>
    </Box>
  )
}

const mapStateToProps = (state) =>{
  return{
    cardItems: state.furnituries
  }
}

export default connect(mapStateToProps, null)(CartScreen);