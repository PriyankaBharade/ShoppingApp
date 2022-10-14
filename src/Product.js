import React from 'react';
import {Text, StyleSheet, Button, View, Image} from 'react-native';

function Product() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={{marginBottom: 10, marginTop: 20}} h2>
        Kid shoes
      </Text>
      <Text style={styles.price} h4>
        $ 200
      </Text>
      <Text h6 style={styles.description}>
        added 2h ago
      </Text>
      <Button
        type="clear"
        title="Buy now"
        onPress={() => console.log('Click On Product')}
      />
    </View>
  );
}

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
