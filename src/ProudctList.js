// import React from 'react';
// import {View, ScrollView, StyleSheet} from 'react-native';
// import Product from './Product';
// function ProductList({navigation}) {
//   const productData = require('../collections/accessories.json');
//   const handleClick = () => navigation.navigate('ProductDetails');
//   const handleBuyNow = () => navigation.navigate('PaymentScreen');
//   return (
//     <View>
//       <ScrollView
//         style={{
//           flexGrow: 0,
//           width: '100%',
//           height: '100%',
//         }}>
//         {productData.map((product, index) => {
//           return (
//             <View style={styles.row} key={index}>
//               <View style={styles.col}>
//                 <Product value={product} handleClick={handleClick} handleBuyNow={handleBuyNow}/>
//               </View>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   row: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   col: {
//     flex: 1,
//   },
// });

// export default ProductList;
