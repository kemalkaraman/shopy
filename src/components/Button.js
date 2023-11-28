import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Text from '../Text';
import Loader from '../Loader';
import {Colors, Fonts} from '../theme';

const Button = ({
                    variant,
                    color,
                    style,
                    textStyle,
                    label,
                    loading,
                    icon,
                    disabled,
                    ...props
                }) => {
    let wrapperVariantStyle = styles.default;
    let textVariantStyle = styles.text;

    if (color === 'black') {
        wrapperVariantStyle = {...wrapperVariantStyle, ...styles.black};
        textVariantStyle = {...textVariantStyle, ...styles.whiteText};
    }

    if (color === 'white') {
        wrapperVariantStyle = {...wrapperVariantStyle, ...styles.white};
        textVariantStyle = {...textVariantStyle, ...styles.whiteText};
    }

    if (variant === 'outline') {
        wrapperVariantStyle = {...wrapperVariantStyle, ...styles.outline};
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            style={[
                styles.wrapper,
                wrapperVariantStyle,
                style,
                disabled && styles.disabled,
            ]}
            {...props}>
            {loading ? (
                <Loader/>
            ) : (
                <View style={[styles.buttonWrapper]}>
                    <Text
                        style={[styles.text, textVariantStyle, textStyle]}
                        label={label}
                    />
                    {icon && <View style={styles.iconWrapper}>{icon}</View>}
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        width: '100%',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    default: {
        backgroundColor: Colors.white,
        borderColor: Colors.black,
    },
    black: {
        backgroundColor: Colors.black,
        borderColor: Colors.black,
    },
    white: {
        backgroundColor: Colors.white,
        borderColor: Colors.white,
    },
    outline: {
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'transparent',
    },
    whiteText: {
        color: Colors.white,
    },
    text: {
        fontFamily: Fonts.Bold,
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: Colors.text,
        flex: 1,
    },
    blackText: {
        color: Colors.white,
    },
    iconWrapper: {
        width: 12,
        height: 10,
        marginRight: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: Colors.black300,
    },
});

export default Button;
