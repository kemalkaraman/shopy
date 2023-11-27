import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AppLogo = (props) => {
    return (
        <Svg
            width={88}
            height={86}
            viewBox="0 0 88 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M75.675 18.046H10.034c-6.353 0-11.093 5.846-9.829 12.04l3.224 15.645 2.496 12.04H67.49l-3.223 15.644H9.18l2.497 12.041H74.094l2.497-12.04 3.224-15.645c1.295-6.226-3.477-12.04-9.83-12.04H15.755l-3.223-15.644h60.678l-1.643 7.964H83.86l1.643-7.964L88 18.046H75.675zM58.608 0H27.1v12.136h31.508V0z"
                fill="#fff"
            />
        </Svg>
    )
}

export default AppLogo;
