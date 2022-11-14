import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import TransactionItem from './TransactionItem';
import storage from '../storage/Storage';

function Transaction({navigation}) {
  const productData = require('../../collections/transaction.json');
  const handleClick = () => navigation.navigate('ProductDetails');
  const handleBuyNow = () => navigation.navigate('PaymentScreen');
  const [Transaction, setTransaction] = useState([]);
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
    getInteractions();
  }, [UserId]);

  useEffect(() => {
    getInteractions();
  }, []);

  const hadleItemClick = () => {
    navigation.navigate('ProductDetails');
  };

  const getInteractions = async () => {
    let response = await fetch(
      `http://192.168.43.31:3002/api/getInteractions/${UserId}`,
    );
    let jsonData = await response.json();
    Transaction(jsonData);
  };
  return (
    <View>
      <ScrollView
        style={{
          flexGrow: 0,
          width: '100%',
          height: '100%',
        }}>
        {productData.interactionItems.map((product, index) => {
          return (
            <View style={styles.row} key={index}>
              <View style={styles.col}>
                <TransactionItem
                  hadleItemClick={hadleItemClick}
                  value={product}
                  handleClick={handleClick}
                  handleBuyNow={handleBuyNow}
                />
              </View>
            </View>
          );
        })}
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
});
export default Transaction;
