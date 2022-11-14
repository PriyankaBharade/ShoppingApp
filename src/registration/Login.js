import React, {useState, useEffect} from 'react';
import DropDownList from './DropDownList';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import storage from '../storage/Storage';

function Login({navigation}) {
  const [gender, setGender] = useState('');
  const [showDropdown, setShowDropDown] = useState(false);

  const [user, setUser] = useState('');
  const [showUserDropDown, setShowUserDropDown] = useState(false);
  const [userList, setUserList] = useState([]);
  const [existingUserList, setexistingUserList] = useState([]);
  const [loader, setLoader] = useState(true);

  const genderList = [
    {
      label: 'New User',
      name: 'newuser',
    },
    {
      label: 'Existing User',
      name: 'existinguser',
    },
  ];

  //const newUser = require('../../collections/new_user.json');
 // const existingUser = require('../../collections/existing_user.json');
  const getNewUserList = async () => {
    try {
      const response = await fetch(
        'http://192.168.43.31:3002/api/getNewUsers',
      );
      const jsondata = await response.json();
      console.log(jsondata)
      setUserList(jsondata);
    } catch (errore) {
      console.log(errore);
    } finally {
      setLoader(false);
    }
  };

  const getUsersWithTransaction = async () => {
    try {
      const response = await fetch(
        'http://192.168.43.31:3002/api/getUsersWithTransaction',
      );
      const jsondata = await response.json();
      console.log(jsondata)
      setUserList(jsondata);
    } catch (errore) {
      console.log(errore);
    } finally {
      setLoader(false);
    }
  };

  // const getSelectedUser = item => {
  //   console.log('GENDER===============', gender?.key);
  //   if (item?.key === 'New User') {
  //     //new user api here...
  //     //getNewUserList()
  //     setUserList(newUser);
  //   } else if (item?.key === 'Existing User') {
  //     //existing user api call here...
  //     // getUsersWithTransaction()
  //     setUserList(existingUser);
  //   } else {
  //     //else return nothing....
  //     return undefined;
  //   }
  // };

  // useEffect(() => {
  //   getSelectedUser(gender);
  // }, [gender]);

  return (
    <SafeAreaView style={styles.safeContainerStyle}>
      <View style={styles.container}>
        <View style={styles.boxStyle}>
          <Text style={styles.headingStyle}>Sign In</Text>
          <TouchableOpacity
            onPress={() => {
              setShowDropDown(!showDropdown);
            }}
            style={styles.dropdwonstyle}>
            <Text>{gender ? gender?.key : 'Select User Type'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowUserDropDown(!showUserDropDown);
            }}
            style={styles.dropdwonstyle}>
            <Text onPress={DropDownList}>Select User</Text>
          </TouchableOpacity>
        </View>
        <DropDownList
          list={[{key: 'New User'}, {key: 'Existing User'}]}
          showDropdown={showDropdown}
          onItemSelected={item => {
            if (item) {
              setGender(item);
              setShowDropDown(!showDropdown);
              if (item?.key === 'New User') {
                //new user api here...
                 getNewUserList()
               // setUserList(newUser);
              } else if (item?.key === 'Existing User') {
                //existing user api call here...
                 getUsersWithTransaction()
               // setUserList(existingUser);
              }
            } else {
              setShowDropDown(!showDropdown);
            }
          }}
        />
        <DropDownList
          list={userList}
          showDropdown={showUserDropDown}
          // setShowDropdown={() => {
          //   //setShowUserDropDown(!showDropdown);
          // }}
          onItemSelected={item => {
            if (item) {
              setShowUserDropDown(!showUserDropDown);
              storage.save({
                key: 'USERID',
                data: item?.USER_ID,
                expires: null,
              });
              navigation.navigate('Home', {USER_ID: item?.USER_ID});
            } else {
              setShowUserDropDown(!showUserDropDown);
            }
            console.log(item);
          }}
        />
      </View>
    </SafeAreaView>
  );
  // return (
  //   <SafeAreaView style={styles.safeContainerStyle}>
  //     <View style={styles.container}>
  //       <Text style={styles.headingStyle}>Sign In</Text>

  //       {/* {loader ? (
  //             <ActivityIndicator />
  //           ) : (
  //             <View style={styles.dropdwonstyle}>

  //             </View>
  //           )} */}
  //     </View>
  //     <TouchableOpacity
  //       onPress={() => {
  //         setShowDropDown(!showDropdown);
  //       }}
  //       style={styles.dropdwonstyle}>
  //       <Text>{gender ? gender?.key : 'Select User Type'}</Text>
  //     </TouchableOpacity>
  //     <DropDownList
  //       list={[{key: 'New User'}, {key: 'Existing User'}]}
  //       showDropdown={showDropdown}
  //       setShowDropdown={() => {
  //         //setShowUserDropDown(!showDropdown);
  //       }}
  //       onItemSelected={item => {
  //         if (item) {
  //           setGender(item);
  //           setShowDropDown(!showDropdown);
  //           // getSelectedUser(item)
  //           if (item?.key === 'New User') {
  //             //new user api here...
  //             // getNewUserList()
  //             setUserList(newUser);
  //           } else if (item?.key === 'Existing User') {
  //             //existing user api call here...
  //             // getUsersWithTransaction()
  //             setUserList(existingUser);
  //           }
  //         } else {
  //           setShowDropDown(!showDropdown);
  //         }
  //       }}
  //     />
  //     <TouchableOpacity
  //       onPress={() => {
  //         setShowUserDropDown(!showUserDropDown);
  //       }}
  //       style={styles.dropdwonstyle}>
  //       <Text onPress={DropDownList}>Select User</Text>
  //     </TouchableOpacity>
  //     <DropDownList
  //       list={userList}
  //       showDropdown={showUserDropDown}
  //       setShowDropdown={() => {
  //         //setShowUserDropDown(!showDropdown);
  //       }}
  //       onItemSelected={item => {
  //         if (item) {
  //           setShowUserDropDown(!showUserDropDown);
  //           storage.save({
  //             key: 'USERID',
  //             data: item?.USER_ID,
  //             expires: null,
  //           });
  //           navigation.navigate('Home', {USER_ID: item?.USER_ID});
  //         } else {
  //           setShowUserDropDown(!showUserDropDown);
  //         }
  //         console.log(item);
  //       }}
  //     />
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#5a647d',
  },
  dropdwonstyle: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#A1560B',
    borderRadius: 10,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#80A1560B',
  },
  container: {
    flex: 1,
    backgroundColor: '#80A1560B',
    justifyContent: 'center',
  },
  boxStyle: {
    backgroundColor: 'white',
    margin: 20,
    paddingBottom: 40,
    borderRadius: 10,
  },
});

export default Login;
