import * as React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, Button} from "react-native";
import {FontFamily, FontSize, Color} from "../../assets/styles/Styles";
import AppLogo from "../../assets/images/appLogo";

function SplashScreen({ navigation }) {
    return (
        <View style={styles.bg}>
            <AppLogo/>
            <TouchableOpacity   onPress={() => navigation.navigate('SignUpScreen')} style={styles.btnSignUp}>
                <Text style={styles.btnSignUpText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSignIn}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

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
        fontFamily: FontFamily.montserratBold,
        fontWeight: "700",
        color: Color.colorMediumslateblue,

    },
    btnSignIn: {
        position: "absolute",
        bottom: 55,
        fontSize: 16,

    },
    signInText:{
        color: Color.colorWhite,
        fontFamily: FontFamily.montserratBold,
        fontWeight: "700",
    }
});

export default SplashScreen;
