// import React from 'react';
// import {
//   View,
//   FlatList,
//   Image,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// const productData = require('../collections/accessories.json');
// function RecentView() {
//   return (
//     <View>
//       <FlatList
//         data={productData}
//         horizontal
//         renderItem={item => {
//           return (
//             <View>
//               <View
//                 style={{
//                   flex: 1,
//                   borderRadius: 5,
//                   borderWidth: 1,
//                   borderColor: '#eee',
//                   marginTop: 20,
//                   padding: 15,
//                 }}>
//                 <Image
//                   style={{
//                     width: '100%',
//                     height: 200,
//                     backgroundColor: '#eee',
//                     marginBottom: 10,
//                   }}
//                   source={{
//                     uri: `https://d22kv7nk938ern.cloudfront.net/images/${item.item.CATEGORY_L1}/${item.item.ITEM_ID}.jpg`,
//                   }}
//                 />
//                 <Text
//                   style={{
//                     letterSpacing: 0.2,
//                     fontSize: 14,
//                     fontStyle: 'normal',
//                     fontWeight: 'bold',
//                   }}>
//                   {item.item.PRODUCT_NAME}
//                 </Text>

//                 <Text
//                   style={{
//                     letterSpacing: 0.2,
//                     fontSize: 12,
//                     marginTop: 5,
//                     marginBottom: 5,
//                   }}>
//                   {item.item.PRODUCT_DESCRIPTION}
//                 </Text>

//                 <Text style={{letterSpacing: 0.2, fontSize: 12}}>
//                   ${item.item.PRICE}
//                 </Text>
//                 <View style={{flexDirection: 'row',}}>
//                 <TouchableOpacity
//                   style={{
//                     flex:1,
//                     marginTop: 15,
//                     marginRight:5,
//                     backgroundColor: '#A1560B',
//                     borderRadius: 10,
//                     height: 35,
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={{color: '#fff', alignSelf: 'center'}}>
//                     Add to Cart
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={{
//                     flex:1,
//                     marginTop: 15,
//                     marginLeft:5,
//                     backgroundColor: '#A1560B',
//                     borderRadius: 10,
//                     height: 35,
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={{color: '#fff', alignSelf: 'center'}}>
//                     Place to Order
//                   </Text>
//                 </TouchableOpacity>
//                 </View>
                
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   child: {
//     borderWidth: 2,
//     borderColor: '#5a647d',
//     margin: 8,
//   },
//   name: {
//     color: '#5a647d',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   price: {
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 10,
//     color: '#c1c4cd',
//   },
// });
// export default RecentView;
