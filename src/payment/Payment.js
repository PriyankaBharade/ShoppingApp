import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import storage from '../storage/Storage';
function Payment({navigation,route}) {
  var UserId;
  storage
    .load({
      key: 'USERID',
      autoSync: true,
      syncInBackground: true,
    })
    .then(userId => {
      UserId = userId;
    });
  const getpostEvents = async () => {
    let response = await fetch(
      `http://192.168.43.31:3002/api/postEvents/${route.params.PRODUCTITEM.ITEM_ID}/${UserId}/Purchase`,
    );
    let jsonData = await response.json();
    navigation.goBack()
  };

  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={styles.heading}>Payment Details</Text>
        <Text style={styles.title}>Person name</Text>
        <TextInput
          placeholderTextColor={'#D2D2D2'}
          placeholder={'Card Holder Name'}
          style={styles.input}></TextInput>
        <Text style={styles.title}>Card number</Text>
        <TextInput
          placeholderTextColor={'#D3D3D3'}
          placeholder={'4848-4848-4848-4848'}
          style={styles.inputbg}></TextInput>
        <View style={styles.item}>
          <Text style={styles.title}>Expiry</Text>
          <Text style={styles.title}>CVV/CVC</Text>
        </View>
        <View style={styles.item}>
          <TextInput
            placeholderTextColor={'#D3D3D3'}
            placeholder={'MM/YYYY'}
            style={styles.inputbg2}></TextInput>
          <TextInput
            placeholderTextColor={'#D3D3D3'}
            placeholder={'***'}
            style={styles.inputbg3}></TextInput>
        </View>
        <View style={{marginTop: 30}}>
          <Button
            title="Pay $30.00"
            onPress={() => {
              Alert.alert('Payment Done', 'Payment Successfully completed', [
                {text: 'OK', onPress: () => getpostEvents()},
              ]);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000000',
    marginTop: 30,
    borderBottomColor: '#5a647d',
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderBottomLength: 60,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 20,
    color: '#000000',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    fontSize: 16,
    placeholder: 'Card Holder Name',
    fontWeight: 'normal',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    color: '#000000',
    alignSelf: 'center',
  },
  inputbg: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#002E6E',
    fontSize: 16,
    color: 'white',
    placeholderTextColor: 'grey',
    placeholder: 'Card Holder Name',
    fontWeight: 'normal',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  inputbg2: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#002E6E',
    fontSize: 16,
    color: 'white',
    placeholderTextColor: 'grey',
    placeholder: 'Card Holder Name',
    fontWeight: 'normal',
    marginRight: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  inputbg3: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#002E6E',
    fontSize: 16,
    color: 'white',
    placeholderTextColor: 'grey',
    placeholder: 'Card Holder Name',
    fontWeight: 'normal',
    marginLeft: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
});
export default Payment;
