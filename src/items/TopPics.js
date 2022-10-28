import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TopPics = props => {
  const BASE_URL =
    'https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist';
  const categorys = [
    {name: 'GROCERIES', img: `${BASE_URL}/jacket2.png`},
    {name: 'BEAUTY', img: `${BASE_URL}/jacket2.png`},
    {name: 'HOUSEWARE', img: `${BASE_URL}/jacket2.png`},
  ];

  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    let response = await fetch('http:/192.168.50.69:4000/category');
    let jsonData = await response.json();
    setCategory(jsonData);
  };
  return (
    <View>
      <FlatList
        data={categorys}
        horizontal
        renderItem={item => {
          return (
            <TouchableOpacity onPress={props.handleClick}>
              <View style={styles.child}>
                <Image
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                  source={{
                    uri: 'https://images.meesho.com/images/products/44009963/kxwus_512.jpg',
                  }}
                />
                <Text style={styles.heading}>{item.item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5a647d',
    alignSelf:'center'
  },
  child: {
    borderWidth: 2,
    borderColor: '#5a647d',
    margin: 8,
  },
});

export default TopPics;
