import React from 'react';
import {
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Category from './Category';
import BestSeller from './BestSeller';
import RecentView from './RecentView';
// import {colors} from '../../themes';
// const colors = ["tomato", 'thistle', 'skyblue', 'teal'];

const {width} = Dimensions.get('window');
const BASE_URL =
  'https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist';

const products = [
  {
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99,
    img: `${BASE_URL}/shoe1.png`,
  },
  {
    name: 'Camo Fang Backpack Jungle',
    price: 39.99,
    img: `${BASE_URL}/jacket1.png`,
  },
  {
    name: 'Parka and Quilted Liner Jacket',
    price: 49.99,
    img: `${BASE_URL}/jacket2.png`,
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    img: `${BASE_URL}/hat1.png`,
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    img: `${BASE_URL}/hat1.png`,
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    img: `${BASE_URL}/hat1.png`,
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    img: `${BASE_URL}/hat1.png`,
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    img: `${BASE_URL}/hat1.png`,
  },
];

const productData = require('../collections/accessories.json');

const category = [
  {name: 'accessories', img: `${BASE_URL}/jacket2.png`},
  {name: 'apparel', img: `${BASE_URL}/jacket2.png`},
  {name: 'beauty', img: `${BASE_URL}/jacket2.png`},
  {name: 'books', img: `${BASE_URL}/jacket2.png`},
  {name: 'electronics', img: `${BASE_URL}/jacket2.png`},
  {name: 'floral', img: `${BASE_URL}/jacket2.png`},
  {name: 'footwear', img: `${BASE_URL}/jacket2.png`},
  {name: 'furniture', img: `${BASE_URL}/jacket2.png`},
  {name: 'groceries', img: `${BASE_URL}/jacket2.png`},
  {name: 'homedecor', img: `${BASE_URL}/jacket2.png`},
  {name: 'housewares', img: `${BASE_URL}/jacket2.png`},
  {name: 'instruments', img: `${BASE_URL}/jacket2.png`},
  {name: 'jewelry', img: `${BASE_URL}/jacket2.png`},
  {name: 'outdoors', img: `${BASE_URL}/jacket2.png`},
  {name: 'seasonal', img: `${BASE_URL}/jacket2.png`},
  {name: 'tools', img: `${BASE_URL}/jacket2.png`},
  {name: 'food service', img: `${BASE_URL}/jacket2.png`},
  {name: 'cold dispensed', img: `${BASE_URL}/jacket2.png`},
  {name: 'salty snacks', img: `${BASE_URL}/jacket2.png`},
  {name: 'hot dispensed', img: `${BASE_URL}/jacket2.png`},
];

function homescreen({navigation}) {
  const handleClick = () => navigation.navigate('ProductList');
  return (
    <View>
      <View
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: '#D3D3D3',
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}>
        <TextInput
          placeholderTextColor={'#D3D3D3'}
          placeholder={'Search here...'}
          style={{
            height: 40,
            paddingStart: 15,
            position: 'absolute',
            marginLeft: 10,
          }}
        />
        <Image
          style={{
            width: 15,
            height: 15,
            position: 'absolute',
            top: 12,
            marginLeft: 10,
          }}
          source={{
            uri: 'data:image/png;base64,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',
          }}
        />
      </View>
      <ScrollView
        style={{
          paddingEnd: 40,
          width: '100%',
          height: '100%',
        }}>
        <Category category={category} handleClick={handleClick} />
        <View style={{width: '100%', height: 200}}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={2}
            showPagination
            data={products}
            renderItem={({item}) => (
              <View style={[styles.child, {backgroundColor: '#fefefe'}]}>
                <Image
                  style={{
                    width: '100%',
                    height: 200,
                    backgroundColor: '#eee',
                    marginBottom: 10,
                  }}
                  source={{
                    uri: 'https://images.meesho.com/images/products/44009963/kxwus_512.jpg',
                  }}
                />
              </View>
            )}
          />
        </View>
        <View>
          <Text style={styles.heading}>Best Seller</Text>
        </View>
        <BestSeller product={products}></BestSeller>

        <View>
          <Text style={styles.heading}>Recent View</Text>
        </View>
        <RecentView />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  col: {
    flex: 1,
  },
  inner: {
    borderWidth: 2,
    borderColor: 'red',
    margin: 8,
  },
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
  heading: {
    fontSize: 22,
    margin: 8,
    fontWeight: 'bold',
    color: '#5a647d',
    borderBottomColor: '#5a647d',
    borderBottomWidth: 1,
    borderBottomLength: 60,
  },
});

export default homescreen;
