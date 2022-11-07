import React, {useState, useEffect} from 'react';
import DropDownList from './DropDownList';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import {
  Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from 'react-native-paper';

function Login({navigation}) {
  const [gender, setGender] = useState('');
  const [showDropdown, setShowDropDown] = useState(true);

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
  const getNewUserList = async () => {
    try {
      const response = await fetch(
        'http://192.168.43.179:3002/api/getNewUsers',
      );
      const jsondata = await response.json();
      setUserList(jsondata);
      console.log('Jsondata:-   ', jsondata);
    } catch (errore) {
      console.log(errore);
    } finally {
      setLoader(false);
    }
  };

  const getUsersWithTransaction = async () => {
    try {
      const response = await fetch(
        'http://192.168.43.179:3002/api/getUsersWithTransaction',
      );
      const jsondata = await response.json();
      console.log('Existing Data:-   ', jsondata);
      setUserList(jsondata);
    } catch (errore) {
      console.log(errore);
    } finally {
      setLoader(false);
    }
  };

  const getSelectedUser = item => {
    console.log('GENDER===============', gender?.key);
    if (item?.key === 'New User') {
      //new user api here...
      getNewUserList()
    } else if (item?.key === 'Existing User') {
      //existing user api call here...
      getUsersWithTransaction()
    } else {
      //else return nothing....
      return undefined;
    }
  };

  // useEffect(() => {
  //   getSelectedUser(gender);
  // }, [gender]);

  return (
    <Provider>
      <ThemeProvider>
        <SafeAreaView style={styles.safeContainerStyle}>
          <View style={styles.container}>
            <Text style={styles.headingStyle}>Sign In</Text>
            <TouchableOpacity
              onPress={() => {
                setShowDropDown(!showDropdown);
              }}
              style={styles.dropdwonstyle}>
              <Text>{gender ? gender?.key : 'Select User Type'}</Text>
            </TouchableOpacity>
            <DropDownList
              list={[{key: 'New User'}, {key: 'Existing User'}]}
              showDropdown={showDropdown}
              setShowDropdown={() => {
                //setShowUserDropDown(!showDropdown);
              }}
              onItemSelected={item => {
                if (item) {
                  setGender(item);
                  setShowDropDown(!showDropdown);
                 // getSelectedUser(item)
                  if (item?.key === 'New User') {
                    //new user api here...
                    getNewUserList()
                  } else if (item?.key === 'Existing User') {
                    //existing user api call here...
                    getUsersWithTransaction()
                  }
                } else {
                  setShowDropDown(!showDropdown);
                }
                
              }}
            />
            <View style={styles.spacerStyle} />
            <TouchableOpacity onPress={
              ()=>{
                setShowUserDropDown(!showUserDropDown);
              }
            } style={styles.dropdwonstyle}>
              <Text onPress={DropDownList}>Select User</Text>
            </TouchableOpacity>
            <DropDownList
              list={userList}
              showDropdown={showUserDropDown}
              setShowDropdown={() => {
                //setShowUserDropDown(!showDropdown);
              }}
              onItemSelected={item => {
                if (item) {
                  setShowUserDropDown(!showUserDropDown);
                   navigation.navigate('Home',{'USER_ID':item?.USER_ID})
                } else {
                  setShowUserDropDown(!showUserDropDown);
                }
                console.log(item);
              }}
            />
            {/* {loader ? (
              <ActivityIndicator />
            ) : (
              <View style={styles.dropdwonstyle}>
                
              </View>
            )} */}
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
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
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 2,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingBottom: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 30,
  },
});

export default Login;
