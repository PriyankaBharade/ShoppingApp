import React from "react"
import {Text} from 'react-native'
function profilescreen ({navigation,route}) {
    return <Text>This is {route.params.name}'s' profile</Text>;
};

export default profilescreen;