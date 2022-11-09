import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DropDownList = ({showDropdown, list, onItemSelected}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showDropdown}>
      <View
        style={{
          flex: 1,
          marginTop: windowHeight / 2,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: windowWidth / 1.11,
            height: windowHeight / 2,
            alignSelf: 'center',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              onItemSelected(undefined);
            }}>
            <Text
              style={{
                alignSelf: 'flex-end',
                padding: 5,
                fontWeight: '900',
                color: '#A1560B',
              }}>
              X
            </Text>
          </TouchableOpacity>
          <FlatList
            data={list}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onItemSelected(item);
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#A1560B',
                      borderRadius: 10,
                      padding: 10,
                      marginTop:5
                    }}>
                    <Text>{item?.key ? item?.key : item?.USER_ID}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DropDownList;
