import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#3E4958"
            fillRule="evenodd"
            d="M3.828 8.293h14.586v2H3.828l6.293 6.293L8.707 18 0 9.293 8.707.586 10.121 2 3.828 8.293Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SvgComponent
