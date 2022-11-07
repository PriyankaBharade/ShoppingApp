import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';

const Category = (props) => {
  const [category,setCategory] = useState([]);
  
  useEffect(()=>{
   getCategory();
  },[]);

  const getCategory = async () => {
    let response = await fetch('http://192.168.43.179:3002/api/getUniqueCategory');
    let jsonData = await response.json();
    console.log("Category Data", jsonData);
    setCategory(jsonData);
  }
  return (
    <View>
      <FlatList
        data={category}
        horizontal
        style={{marginStart: 10}}
        renderItem={item => {
          return (
            <TouchableOpacity onPress={props.handleClick}>
              <View style={{flex: 1, padding: 5, margin: 5}}>
                {/* <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: '#E2E2E2',
                    alignSelf: 'center',
                  }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                    }}
                    source={{
                      uri: item.item.img,
                    }}
                  />
                </View> */}


                <View style={{borderWidth:  1,borderLeftColor:  'grey',borderRadius : 5}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 12,
                    letterSpacing: 0.2,
                    fontWeight: '300',
                    margin: 5,
                    color: '#783E12',
                  }}>
                  {item.item}
                </Text>
                </View>
                
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Category;
