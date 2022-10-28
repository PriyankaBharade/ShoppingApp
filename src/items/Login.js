import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
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
  const [showDropDown, setShowDropDown] = useState(false);

  const [user, setUser] = useState('');
  const [showUserDropDown, setShowUserDropDown] = useState(false);
  const genderList = [
    {
      label: '123456',
      value: 'male',
    },
    {
      label: '85798469',
      value: 'female',
    },
    {
      label: '0849578',
      value: 'others',
    },
  ];
  return (
    <Provider>
      <ThemeProvider>
        <SafeAreaView style={styles.safeContainerStyle}>
          <View style={styles.container}>
            <Text style={styles.headingStyle}>Sign In</Text>
            <View style={styles.dropdwonstyle}>
              <DropDown
                dropDownStyle={{marginTop: 10, marginLeft: 5}}
                label={'Select User Type'}
                mode={'outlined'}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={gender}
                setValue={setGender}
                list={genderList}
              />
            </View>

            <View style={styles.spacerStyle} />
            <View style={styles.dropdwonstyle}>
              <DropDown
                style={styles.dropdwonstyle}
                dropDownStyle={{marginTop: 10, marginLeft: 5}}
                label={'Select User'}
                mode={'outlined'}
                visible={showUserDropDown}
                showDropDown={() => setShowUserDropDown(true)}
                onDismiss={() => {
                  setShowUserDropDown(false);
                  navigation.navigate('Home')
                }}
                value={user}
                setValue={setUser}
                list={genderList}
              />
            </View>
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
