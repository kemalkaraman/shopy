import * as React from "react";
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import {FontFamily, FontSize, Color} from "../../assets/styles/Styles";

function SignUpScreen({navigation}) {
    return (
        <View style={styles.signUpPage}>
            <View>
                <Text style={styles.signUpText}>Sign Up</Text>
                <Image
                    style={styles.backIcon}
                    source={require("../../assets/image/icon1.png")}
                />
            </View>
            <View>
                <Text style={styles.inputName}>Name</Text>
                <TextInput style={styles.textInputName} placeholder={"kemal"}></TextInput>
            </View>
            <View>
                <Text style={styles.mailText}>E-Mail</Text>
                <TextInput style={styles.textInputMail} textContentType={"emailAddress"}
                           placeholder={"kemal@gmail.com.tr"}></TextInput>
            </View>
            <View>
                <Text style={styles.PasswordText}>Password</Text>
                <TextInput style={styles.textInputPasword} textContentType={"password"}
                           placeholder={"*********"}></TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.btnSignUp}>
                    <Text style={styles.btnSignUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={styles.rectangleViewLeft}></View>
                <Text style={styles.rectangleText}>Or sign up with</Text>
                <View style={styles.rectangleViewRigth}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    signUpPage: {
        flex: 1,
        height: 812,
        backgroundColor: Color.white,
    },
    signUpText: {
        width: 106,
        height: 32,
        top: 60,
        left: 70,
        fontSize: 26,
        fontFamily: FontFamily.montserratBold,
        fontWeight: 600,
        color: Color.colorDarkslategray,
        textAlign: "left",
        position: "absolute",
    },
    backIcon: {
        height: 17,
        width: 18,
        top: 67,
        left: 36,
        position: "absolute",
    },
    inputName: {
        position: "absolute",
        top: 146,
        left: 36,
        fontFamily: FontFamily.montserratBold,
        fontSize: 14,
        fontWeight: 500,
        alignItems: "flex-start",
    },
    textInputName: {
        position: "absolute",
        top: 172,
        left: 36,
        right: 36,
        borderRadius: 14,
        border: 0.5,
        solid: "#D5DDE0",
        backgroundColor: "#f7f8f9",
        borderStyle: "solid",
        borderColor: "#d5dde0",
        borderWidth: 0.5,
        flex: 1,
        padding: 17,
    },
    mailText: {
        position: "absolute",
        top: 252,
        left: 36,
        fontFamily: FontFamily.montserratBold,
        fontSize: 14,
        fontWeight: 500,
        alignItems: "flex-start",
    },
    textInputMail: {
        position: "absolute",
        top: 278,
        left: 36,
        right: 36,
        borderRadius: 14,
        border: 0.5,
        solid: "#D5DDE0",
        backgroundColor: "#f7f8f9",
        borderStyle: "solid",
        borderColor: "#d5dde0",
        borderWidth: 0.5,
        flex: 1,
        padding: 17,
    },
    PasswordText: {
        position: "absolute",
        top: 354,
        left: 36,
        fontFamily: FontFamily.montserratBold,
        fontSize: 14,
        fontWeight: 500,
        alignItems: "flex-start",
    },
    textInputPasword: {
        position: "absolute",
        top: 384,
        left: 36,
        right: 36,
        borderRadius: 14,
        border: 0.5,
        solid: "#D5DDE0",
        backgroundColor: "#f7f8f9",
        borderStyle: "solid",
        borderColor: "#d5dde0",
        borderWidth: 0.5,
        flex: 1,
        height: 61,
        padding: 17,
    },
    btnSignUp: {
        position: "absolute",
        top: 488,
        borderRadius: 14,
        backgroundColor: "#1152fd",
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
        color: Color.colorWhite,
    },
    rectangleViewLeft: {
        backgroundColor: "#d5dde0",
        flex: 1,
        left: 36,
        right: 249,
        height: 1,
        top: 608,
        position: "absolute",
    },
    rectangleViewRigth: {
        backgroundColor: "#d5dde0",
        flex: 1,
        left: 248,
        right: 36,
        height: 1,
        top: 608,
        position: "absolute",
    },
    rectangleText: {
        position: "absolute",
        top: 598,
        fontSize: 14,
        fontWeight: "600",
        fontFamily: "Montserrat-SemiBold",
        color: "#3e4958",
        textAlign: "left",
        alignItems: "center"
    }
});

export default SignUpScreen;



