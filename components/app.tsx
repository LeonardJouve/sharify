import React from "react";
import {Text, View} from "react-native";
import {hello} from "modules/sharify-auth";

const App: React.FunctionComponent = () => (
    <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{hello()}</Text>
    </View>
);

export default App;
