import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

const BestSeller = props => {
  return (
    <View>
      <FlatList
        data={props.product}
        horizontal
        renderItem={item => {
          return (
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
  },
  child: {
    borderWidth: 2,
    borderColor: '#5a647d',
    margin: 8,
  },
});

export default BestSeller;
