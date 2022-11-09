import React, {useEffect,useState}from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import CategoryProductItem from './CategoryProductItem';


function CategoryBasedProducs({navigation,route}) {

  const productData = require('../../../collections/recommandation.json');

  const handleClick = () => navigation.navigate('ProductDetails');
  const handleBuyNow = () => navigation.navigate('PaymentScreen');
  const [CategoryBasedProduct,setCategoryBasedProduct] = useState([])

  useEffect(()=>{
    getPersonalizedItems();
   },[]);

   const getPersonalizedItems = async () => {
    let response = await fetch(`http://192.168.43.179:3002/api/getPersonalizedItems/${route.params.CATEGORY}/5988`);
    let jsonData = await response.json();
    setCategoryBasedProduct(jsonData)

  }

  return (
    <View>
      <ScrollView
        style={{
          flexGrow: 0,
          width: '100%',
          height: '100%',
        }}>
        {productData.map((product, index) => {
          return (
            <View style={styles.row} key={index}>
              <View style={styles.col}>
                <CategoryProductItem value={product} handleClick={handleClick} handleBuyNow={handleBuyNow}/>
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

export default CategoryBasedProducs;
