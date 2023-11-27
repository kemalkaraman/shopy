const Stack = createNativeStackNavigator();
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "./src/screens/SplashScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

const App = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    return (
        <>
            <NavigationContainer>
                {hideSplashScreen ? (
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="SplashScreen"
                            component={SplashScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="SignUpScreen"
                            component={SignUpScreen}
                            options={{headerShown: false}}
                        />
                    </Stack.Navigator>
                ) : null}
            </NavigationContainer>
        </>
    );
};
export default App;
