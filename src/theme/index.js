import {Dimensions} from 'react-native';

const BaseColors = {
    primary: '#FF5555',
    primary300: '#FFAA99',
    primary100: '#FFE8DD',
    secondary: '#5558FF',
    secondary300: '#999BFF',
    secondary100: '#DDDDFF',
    green: '#22BA46',
    green300: '#77EA7C',
    green100: '#D8FBD2',
    orange: '#FFB541',
    orange300: '#FFDB8D',
    orange100: '#FFF6D9',
    red: '#FC5F6A',
    red300: '#FFAA99',
    red100: '#FFE8DD',
    black: '#1B1B1B',
    black300: '#BABABA',
    black100: '#F3F3F3',
    white: '#FFFFFF',
};

const Colors = {
    ...BaseColors,
    text: BaseColors.black,
    textTint: '#8E8D8D',
    background: '#F9F9F9',
    borderColor: '#DFE1E6',
    errorBorderColor: BaseColors.red,
    reject: BaseColors.red,

    colorWhite: "#fff",
    colorMediumslateblue: '#1152fd',
    colorDarkslategray: "#3e4958",
    colorGainsboro: "#d5dde0",
    grey3: "#f7f8f9",
    white: "#fff",
};

const Fonts = {
    Black: 'ModernEra-Black',
    Bold: 'ModernEra-Bold',
    ExtraBold: 'ModernEra-ExtraBold',
    Italic: 'ModernEra-Italic',
    Light: 'ModernEra-Light',
    Medium: 'ModernEra-Medium',
    Regular: 'ModernEra-Regular',

    montserratSemiBold: "Montserrat-SemiBold",
    montserratMedium: "Montserrat-Medium",
    montserratBold: "Montserrat-Bold",
    Montserrat:"Mos"
};

const FontSize = {
    small: 12,
    regular: 14,
    large: 18,

    size_base: 16,
    size_sm: 14,
};

const Window = Dimensions.get('window');

export {Colors, Fonts, FontSize, Window};
