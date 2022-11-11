import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import storage from '../../storage/Storage';
//const productData = require('../../../collections/trending.json');

const TopPics = props => {
  const [UserId, setUserId] = useState('');
  const [Trending,setTrending] = useState([])
  let TopPicsArray = [];

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
  }, [UserId]);

  const getTrendingsItems = async () => {
    let response = await fetch(
      `http://192.168.43.179:3002/api/getTrendingsItems/${UserId}`,
    );
    let jsonData = await response.json();
    setTrending(jsonData);
    Object.keys(Trending.categoryBestSellers).forEach(key => {
      TopPicsArray.push({
        lable: key,
        items: Trending.categoryBestSellers[key],
      });
    });
  };

  return (
    <View>
      <FlatList
        data={TopPicsArray}
        horizontal
        renderItem={item => {
          return (
            <TouchableOpacity onPress={props.handleClick}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  margin: 10,
                  borderRadius: 30,
                }}>
                <ImageBackground
                  borderRadius={30}
                  style={{
                    width: 150,
                    height: 150,
                    justifyContent: 'center',
                  }}
                  source={{
                    //   uri = `https://d22kv7nk938ern.cloudfront.net/images/${productData.categoryBestSellers.item.lable[0].CATEGORY_L1}/${productData.categoryBestSellers.item.lable[0].ITEM_ID}.jpg}`
                    uri: 'https://d22kv7nk938ern.cloudfront.net/images/accessories/6f5b874d-68c7-435d-a66d-8296461c10e4.jpg',
                  }}>
                  <View
                    style={{
                      width: 150,
                      height: 150,
                      backgroundColor: 'black',
                      opacity: 0.5,
                      borderRadius: 30,
                    }}></View>
                  <Text style={styles.heading}>
                    {item.item.lable.toUpperCase()}
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
  child: {
    borderWidth: 2,
    borderColor: '#5a647d',
    margin: 8,
  },
});

export default TopPics;
