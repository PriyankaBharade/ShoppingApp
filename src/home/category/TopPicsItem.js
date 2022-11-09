import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import storage from '../../storage/Storage';

const TopPicsItem = props => {
  const productData = require('../../../collections/trending.json');
  const [UserId, setUserId] = useState('');
  const [TopPics, setTopPics] = useState([]);

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

    Object.keys(productData.categoryBestSellers).forEach(key => {
      TopPics.push({
        lable: key,
      });
    });
    getTrendingsItems();
  }, [UserId, TopPics]);

  const getTrendingsItems = async () => {
    let response = await fetch(
      `http://192.168.43.179:3002/api/getTrendingsItems/${UserId}`,
    );
    let jsonData = await response.json();
    setTopPics(jsonData);
  };
  return (
    <View>
      <FlatList
        data={TopPics}
        horizontal
        renderItem={item => {
          return (
            <TouchableOpacity onPress={props.handleClick}>
              <View style={styles.child}>
                <Text style={styles.heading}>{item.item.lable}</Text>
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
    color: '#5a647d',
    alignSelf: 'center',
  },
  child: {
    borderWidth: 2,
    borderColor: '#5a647d',
    margin: 8,
  },
});

export default TopPicsItem;
