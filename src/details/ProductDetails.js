import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SimilarProduct from './SimilarProduct';
import storage from '../storage/Storage';

function ProductDetails({navigation, route}) {
  const handleBuyNow = item => {
    console.log('Product List', item.item);
    navigation.navigate('Payment', {PRODUCTITEM: item.item});
  };

  const handleClickOnPlaceOrder = item => {
    console.log('Product List Place Order ', item);
    navigation.navigate('Payment', {PRODUCTITEM: item.item});
  };
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
    getpostEvents();
  }, [UserId]);

  const getpostEvents = async () => {
    let response = await fetch(
      `http://192.168.43.179:3002/api/postEvents/${route.params.PRODUCTITEM.ITEM_ID}/${UserId}/View`,
    );
    let jsonData = await response.json();
  };

  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View style={styles.container}>
        <Image
          style={{
            width: '100%',
            height: 200,
            top: 12,
          }}
          source={{
            uri: `https://d22kv7nk938ern.cloudfront.net/images/${route.params.PRODUCTITEM.CATEGORY_L1}/${route.params.PRODUCTITEM.ITEM_ID}.jpg`,
          }}
        />
        <View
          style={{
            marginLeft: 10,
            top: 10,
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              letterSpacing: 0.2,
              fontSize: 18,
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            {route.params.PRODUCTITEM.PRODUCT_NAME}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            top: 10,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              textDecorationLine: 'line-through',
              letterSpacing: 0.2,
              fontSize: 14,
              fontStyle: 'normal',
              alignSelf: 'center',
              fontWeight: 'normal',
            }}>
            {route.params.PRODUCTITEM.PRICE}
          </Text>
          <Text
            style={{
              letterSpacing: 0.2,
              fontSize: 14,
              fontStyle: 'normal',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            {route.params.PRODUCTITEM.PRICE}
          </Text>
          <Text
            style={{
              letterSpacing: 0.2,
              fontSize: 14,
              marginLeft: 5,
              color: 'red',
              fontStyle: 'normal',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            60% off
          </Text>
        </View>

        <View style={{marginTop: 15, marginLeft: 5}}>
          <Text
            style={{
              letterSpacing: 0.2,
              fontSize: 14,
              marginLeft: 5,
              color: 'black',
              fontStyle: 'normal',
              fontWeight: 'bold',
            }}>
            Select Quantity
          </Text>
          <View
            style={{
              marginLeft: 5,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                letterSpacing: 0.2,
                fontSize: 18,
                margin: 2,
                color: 'black',
                paddingLeft: 10,
                paddingRight: 5,
                borderColor: 'grey',
                justifyContent: 'center',
                borderWidth: 2,
                fontStyle: 'normal',
                alignSelf: 'center',
                fontWeight: 'normal',
              }}>
              -
            </Text>
            <Text
              style={{
                letterSpacing: 0.2,
                fontSize: 18,
                borderColor: 'grey',
                borderWidth: 2,
                justifyContent: 'center',
                margin: 2,
                paddingLeft: 10,
                paddingRight: 5,
                fontStyle: 'normal',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              1
            </Text>
            <Text
              style={{
                letterSpacing: 0.2,
                fontSize: 18,
                marginLeft: 5,
                color: 'black',
                borderColor: 'grey',
                borderWidth: 2,
                margin: 2,
                paddingLeft: 10,
                paddingRight: 5,
                justifyContent: 'center',
                fontStyle: 'normal',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              +
            </Text>
          </View>
        </View>

        {/* <View style={{marginLeft: 5, marginTop: 5}}>
          <Text
            style={{
              letterSpacing: 0.2,
              fontSize: 14,
              marginLeft: 5,
              color: 'black',
              fontStyle: 'normal',
              fontWeight: 'bold',
            }}>
            Select Size
          </Text>
          <View
            style={{
              marginLeft: 5,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                letterSpacing: 0.2,
                fontSize: 18,
                margin: 2,
                color: 'black',
                paddingLeft: 10,
                paddingRight: 5,
                borderRadius: 10,
                borderColor: 'grey',
                justifyContent: 'center',
                borderWidth: 2,
                fontStyle: 'bold',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              S
            </Text>
            <Text
              style={{
                letterSpacing: 0.2,
                fontSize: 18,
                borderColor: 'grey',
                borderWidth: 2,
                color: 'black',
                justifyContent: 'center',
                borderRadius: 10,
                margin: 2,
                paddingLeft: 10,
                paddingRight: 5,
                fontStyle: 'normal',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              M
            </Text>
            <Text
              style={{
                letterSpacing: 0.2,
                fontSize: 18,
                marginLeft: 5,
                color: 'black',
                borderColor: 'grey',
                borderWidth: 2,
                borderRadius: 10,
                margin: 2,
                paddingLeft: 10,
                paddingRight: 5,
                justifyContent: 'center',
                fontStyle: 'normal',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              X
            </Text>
            <Text
              style={{
                letterSpacing: 0.2,
                fontSize: 18,
                marginLeft: 5,
                color: 'black',
                borderColor: 'grey',
                borderWidth: 2,
                borderRadius: 10,
                margin: 2,
                paddingLeft: 10,
                paddingRight: 5,
                justifyContent: 'center',
                fontStyle: 'normal',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              XL
            </Text>
          </View>
        </View> */}

        <Text
          style={{
            letterSpacing: 0.2,
            fontSize: 12,
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 5,
          }}>
          {route.params.PRODUCTITEM.PRODUCT_DESCRIPTION}
        </Text>
        <TouchableOpacity
          onPress={() => {handleClickOnPlaceOrder(route.params.PRODUCTITEM)}}
          style={{
            marginTop: 15,
            backgroundColor: '#A1560B',
            borderRadius: 10,
            height: 35,
            width: 200,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', alignSelf: 'center'}}>
            Place to order
          </Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Similar Product</Text>
        <SimilarProduct
          productItem={route.params.PRODUCTITEM}
          handleBuyNow={handleBuyNow}
        />
        {/* <FlatList
          data={productData}
          horizontal
          renderItem={item => {
            return (
              <View>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#eee',
                    marginTop: 20,
                    padding: 15,
                    marginBottom: 50,
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: 200,
                      backgroundColor: '#eee',
                      marginBottom: 10,
                    }}
                    source={{
                      uri: `https://d22kv7nk938ern.cloudfront.net/images/${item.item.CATEGORY_L1}/${item.item.ITEM_ID}.jpg`,
                    }}
                  />
                  <Text
                    style={{
                      letterSpacing: 0.2,
                      fontSize: 14,
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                    }}>
                    {item.item.PRODUCT_NAME}
                  </Text>

                  <Text
                    style={{
                      letterSpacing: 0.2,
                      fontSize: 12,
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    {item.item.PRODUCT_DESCRIPTION}
                  </Text>

                  <Text style={{letterSpacing: 0.2, fontSize: 12}}>
                    ${item.item.PRICE}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        marginTop: 15,
                        backgroundColor: '#A1560B',
                        borderRadius: 10,
                        height: 35,
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#fff', alignSelf: 'center'}}>
                        Add to Cart
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
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
              </View>
            );
          }}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  heading: {
    fontSize: 22,
    margin: 8,
    fontWeight: '700',
    color: 'black',
    borderBottomColor: '#5a647d',
    borderBottomWidth: 1,
    borderBottomLength: 60,
  },
});

export default ProductDetails;
