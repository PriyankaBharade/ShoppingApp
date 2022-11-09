import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import storage from '../../storage/Storage';
const productData = require('../../../collections/wherefrom.json');
const WhereYouLeft = props => {
  const [PickFromItem, setPickFromItem] = useState([]);
  const [UserId, setUserId] = useState('');
  useEffect(() => {
    storage
      .load({
        key: 'USERID',
        autoSync: true,
        syncInBackground: true,
      })
      .then(userId => {
        setUserId(userId);
      });
      getpickUpWhereyouLeftItems();
  }, [UserId]);

  const getpickUpWhereyouLeftItems = async () => {
    let response = await fetch(
      `http://192.168.43.179:3002/api/pickUpWhereyouLeft/${UserId}/10`,
    );
    let jsonData = await response.json();
    setPickFromItem(jsonData);
  };

  return (
    <View>
      <FlatList
        style={{marginTop: 10, marginStart: 10}}
        data={productData}
        horizontal
        renderItem={item => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.handleItemClick(item);
              }}>
              <View
                style={{
                  width: 250,
                  height: 250,
                  marginEnd: 10,
                  borderRadius: 10,
                }}>
                <ImageBackground
                  borderRadius={10}
                  style={{width: 250, height: 250, justifyContent: 'flex-end'}}
                  source={{
                    uri: `https://d22kv7nk938ern.cloudfront.net/images/${item.item.CATEGORY_L1}/${item.item.ITEM_ID}.jpg`,
                  }}>
                  <View
                    style={{
                      width: 250,
                      height: 100,
                      alignSelf: 'flex-end',
                      backgroundColor: 'black',
                      opacity: 0.5,
                      borderBottomEndRadius: 10,
                      borderBottomStartRadius: 10,
                    }}></View>
                  <View
                    style={{position: 'absolute', bottom: 5, marginStart: 5}}>
                    <Text
                      style={{
                        letterSpacing: 0.2,
                        fontSize: 22,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {item.item.PRODUCT_NAME}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          letterSpacing: 0.2,
                          fontSize: 16,
                          color: 'white',
                        }}>
                        ${item.item.PRICE}
                      </Text>
                      <Text
                        style={{
                          letterSpacing: 0.2,
                          fontSize: 16,
                          color: 'white',
                          marginStart: 5,
                          textDecorationLine: 'line-through',
                          textDecorationStyle: 'solid',
                        }}>
                        ${item.item.PRICE}
                      </Text>
                      <Text
                        style={{
                          letterSpacing: 0.2,
                          fontSize: 16,
                          color: 'red',
                          marginStart: 5,
                        }}>
                        50% off
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        props.handleBuyNow(item);
                      }}
                      style={{
                        flex: 1,
                        marginTop: 10,
                        width: 180,
                        marginStart: 25,
                        backgroundColor: '#A1560B',
                        borderRadius: 10,
                        height: 35,
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#fff', alignSelf: 'center'}}>
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  child: {
    borderWidth: 2,
    borderColor: '#5a647d',
    margin: 8,
  },
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
export default WhereYouLeft;
