import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Button} from "react-native";
import {Fonts, Colors} from "../theme/index";
import AppLogo from "../../assets/image/appLogo";

function SplashScreen({ navigation }) {
    return (
        <View style={styles.bg}>
            <AppLogo/>
            <Button title={"Sign Up"} variant={"outline"} color={"black"} onPress={() => navigation.navigate('SignUpScreen')} />
            <TouchableOpacity   onPress={() => navigation.navigate('SignUpScreen')} style={styles.btnSignUp}>
                <Text style={styles.btnSignUpText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSignIn}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1152FD',
    },
    img: {
        width: 88,
        height: 85.46,
    },
    btnSignUp : {
        position: "absolute",
        bottom: 95,
        borderRadius: 14,
        backgroundColor: '#ffffff',
        left: 35,
        right: 35,
        alignItems: "center"

    },
    btnSignUpText: {
        montserratBold: "Montserrat-Bold",
        fontSize: 16,
        paddingTop: 20,
        paddingBottom: 20,
        fontFamily: Fonts.montserratBold,
        fontWeight: "700",
        color: Colors.colorMediumslateblue,

    },
    btnSignIn: {
        position: "absolute",
        bottom: 55,
        fontSize: 16,

    },
    signInText:{
        color: Colors.colorWhite,
        fontFamily: Fonts.montserratBold,
        fontWeight: "700",
    }
});

export default SplashScreen;
