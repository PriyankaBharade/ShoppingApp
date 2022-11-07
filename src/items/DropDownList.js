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
const DropDownList = ({
  showDropdown,
  setShowdropdown,
  list,
  onItemSelected,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showDropdown}>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            width: windowWidth/2,
            alignSelf:'center',
            padding:10
          }}>
          <TouchableOpacity
            onPress={() => {
                onItemSelected(undefined)
              // setShowdropdown();
            }}>
            <Text>X</Text>
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
                    style={{borderWidth: 1, borderColor: 'black', padding: 10}}>
                    <Text>{item?.key?item?.key: item?.USER_ID}</Text>
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

const style = StyleSheet.create({});
export default DropDownList;
