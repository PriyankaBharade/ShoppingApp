import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const Product = props => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eee',
        marginTop: 20,
        marginEnd: 10,
        padding: 15,
      }}>
      <Image
        style={{
          width: '100%',
          height: 200,
          backgroundColor: '#eee',
          marginBottom: 10,
        }}
        source={{
          uri: `https://d22kv7nk938ern.cloudfront.net/images/${props.value.CATEGORY_L1}/${props.value.ITEM_ID}.jpg`,
        }}
      />

      <Text
        style={{
          letterSpacing: 0.2,
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 'bold',
        }}>
        {props.value.PRODUCT_NAME}
      </Text>

      <Text
        style={{
          letterSpacing: 0.2,
          fontSize: 12,
          marginTop: 5,
          marginBottom: 5,
        }}>
        {props.value.PRODUCT_DESCRIPTION}
      </Text>

      <Text style={{letterSpacing: 0.2, fontSize: 12}}>
        ${props.value.PRICE}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={props.handleClick}
          style={{
            flex: 1,
            marginTop: 15,
            backgroundColor: '#A1560B',
            borderRadius: 10,
            height: 35,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', alignSelf: 'center'}}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.handleBuyNow}
          style={{
            flex: 1,
            marginTop: 15,
            marginLeft: 5,
            backgroundColor: '#A1560B',
            borderRadius: 10,
            height: 35,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', alignSelf: 'center'}}>
            Place to Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#5a647d',
    fontWeight: 'bold',
    fontSize: 30,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: '#c1c4cd',
  },
});
export default Product;
