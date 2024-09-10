import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Logo = (props) => (
    <Svg
        width={185}
        height={26}
        viewBox="0 0 185 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.6678 25.384C10.9611 25.384 9.38242 25.0747 7.93175 24.456C6.50242 23.8373 5.24375 22.9733 4.15575 21.864C3.08908 20.7547 2.25708 19.4533 1.65975 17.96C1.06242 16.4667 0.76375 14.8347 0.76375 13.064C0.76375 11.2933 1.05175 9.66133 1.62775 8.168C2.22508 6.65333 3.05708 5.352 4.12375 4.264C5.21175 3.15467 6.48108 2.30133 7.93175 1.704C9.38242 1.08533 10.9611 0.775999 12.6678 0.775999C14.3744 0.775999 15.8998 1.064 17.2437 1.64C18.6091 2.216 19.7611 2.984 20.6998 3.944C21.6384 4.88267 22.3104 5.91733 22.7158 7.048L18.8118 8.872C18.3638 7.67733 17.6064 6.696 16.5398 5.928C15.4731 5.13867 14.1824 4.744 12.6678 4.744C11.1744 4.744 9.85175 5.096 8.69975 5.8C7.56908 6.504 6.68375 7.47467 6.04375 8.712C5.42508 9.94933 5.11575 11.4 5.11575 13.064C5.11575 14.728 5.42508 16.1893 6.04375 17.448C6.68375 18.6853 7.56908 19.656 8.69975 20.36C9.85175 21.064 11.1744 21.416 12.6678 21.416C14.1824 21.416 15.4731 21.032 16.5398 20.264C17.6064 19.4747 18.3638 18.4827 18.8118 17.288L22.7158 19.112C22.3104 20.2427 21.6384 21.288 20.6998 22.248C19.7611 23.1867 18.6091 23.944 17.2437 24.52C15.8998 25.096 14.3744 25.384 12.6678 25.384ZM33.1365 25.384C31.4298 25.384 29.8725 24.9893 28.4645 24.2C27.0778 23.4107 25.9685 22.3333 25.1365 20.968C24.3258 19.6027 23.9205 18.0453 23.9205 16.296C23.9205 14.5467 24.3258 12.9893 25.1365 11.624C25.9685 10.2587 27.0778 9.18133 28.4645 8.392C29.8512 7.60266 31.4085 7.208 33.1365 7.208C34.8432 7.208 36.3898 7.60266 37.7765 8.392C39.1632 9.18133 40.2618 10.2587 41.0725 11.624C41.9045 12.968 42.3205 14.5253 42.3205 16.296C42.3205 18.0453 41.9045 19.6027 41.0725 20.968C40.2405 22.3333 39.1312 23.4107 37.7445 24.2C36.3578 24.9893 34.8218 25.384 33.1365 25.384ZM33.1365 21.544C34.0752 21.544 34.8965 21.32 35.6005 20.872C36.3258 20.424 36.8912 19.8053 37.2965 19.016C37.7232 18.2053 37.9365 17.2987 37.9365 16.296C37.9365 15.272 37.7232 14.376 37.2965 13.608C36.8912 12.8187 36.3258 12.2 35.6005 11.752C34.8965 11.2827 34.0752 11.048 33.1365 11.048C32.1765 11.048 31.3338 11.2827 30.6085 11.752C29.8832 12.2 29.3072 12.8187 28.8805 13.608C28.4752 14.376 28.2725 15.272 28.2725 16.296C28.2725 17.2987 28.4752 18.2053 28.8805 19.016C29.3072 19.8053 29.8832 20.424 30.6085 20.872C31.3338 21.32 32.1765 21.544 33.1365 21.544ZM46.1805 25V11.336H43.1085V7.592H46.1805V7.016C46.1805 5.69333 46.4472 4.57333 46.9805 3.656C47.5352 2.71733 48.3032 2.00267 49.2845 1.512C50.2658 1.02133 51.4285 0.775999 52.7725 0.775999C53.0285 0.775999 53.3058 0.797332 53.6045 0.839998C53.9245 0.861333 54.1912 0.893333 54.4045 0.935999V4.552C54.1912 4.50933 53.9885 4.488 53.7965 4.488C53.6258 4.46667 53.4658 4.456 53.3165 4.456C52.3778 4.456 51.6525 4.66933 51.1405 5.096C50.6285 5.50133 50.3725 6.14133 50.3725 7.016V7.592H57.9885V11.336H50.3725V25H46.1805ZM58.8525 25V11.336H55.7805V7.592H58.8525V7.016C58.8525 5.69333 59.1192 4.57333 59.6525 3.656C60.1858 2.71733 60.9432 2.00267 61.9245 1.512C62.9272 1.02133 64.1005 0.775999 65.4445 0.775999C65.7005 0.775999 65.9778 0.797332 66.2765 0.839998C66.5965 0.861333 66.8525 0.893333 67.0445 0.935999V4.552C66.8525 4.50933 66.6605 4.488 66.4685 4.488C66.2978 4.46667 66.1378 4.456 65.9885 4.456C65.0498 4.456 64.3245 4.66933 63.8125 5.096C63.3005 5.50133 63.0445 6.14133 63.0445 7.016V7.592H66.8845V11.336H63.0445V25H58.8525ZM76.648 25.384C74.856 25.384 73.288 24.9787 71.944 24.168C70.6 23.3573 69.5547 22.2587 68.808 20.872C68.0613 19.4853 67.688 17.9493 67.688 16.264C67.688 14.5147 68.0613 12.968 68.808 11.624C69.576 10.2587 70.6107 9.18133 71.912 8.392C73.2347 7.60266 74.7067 7.208 76.328 7.208C77.6933 7.208 78.888 7.432 79.912 7.88C80.9573 8.328 81.8427 8.94667 82.568 9.736C83.2933 10.5253 83.848 11.432 84.232 12.456C84.616 13.4587 84.808 14.5467 84.808 15.72C84.808 16.0187 84.7867 16.328 84.744 16.648C84.7227 16.968 84.6693 17.2453 84.584 17.48H71.144V14.28H82.216L80.232 15.784C80.424 14.8027 80.3707 13.928 80.072 13.16C79.7947 12.392 79.3253 11.784 78.664 11.336C78.024 10.888 77.2453 10.664 76.328 10.664C75.4533 10.664 74.6747 10.888 73.992 11.336C73.3093 11.7627 72.7867 12.4027 72.424 13.256C72.0827 14.088 71.9547 15.1013 72.04 16.296C71.9547 17.3627 72.0933 18.312 72.456 19.144C72.84 19.9547 73.3947 20.584 74.12 21.032C74.8667 21.48 75.72 21.704 76.68 21.704C77.64 21.704 78.4507 21.5013 79.112 21.096C79.7947 20.6907 80.328 20.1467 80.712 19.464L84.104 21.128C83.7627 21.96 83.2293 22.696 82.504 23.336C81.7787 23.976 80.9147 24.4773 79.912 24.84C78.9307 25.2027 77.8427 25.384 76.648 25.384ZM95.2818 25.384C93.4898 25.384 91.9218 24.9787 90.5778 24.168C89.2338 23.3573 88.1884 22.2587 87.4418 20.872C86.6951 19.4853 86.3218 17.9493 86.3218 16.264C86.3218 14.5147 86.6951 12.968 87.4418 11.624C88.2098 10.2587 89.2444 9.18133 90.5458 8.392C91.8684 7.60266 93.3404 7.208 94.9618 7.208C96.3271 7.208 97.5218 7.432 98.5458 7.88C99.5911 8.328 100.476 8.94667 101.202 9.736C101.927 10.5253 102.482 11.432 102.866 12.456C103.25 13.4587 103.442 14.5467 103.442 15.72C103.442 16.0187 103.42 16.328 103.378 16.648C103.356 16.968 103.303 17.2453 103.218 17.48H89.7778V14.28H100.85L98.8658 15.784C99.0578 14.8027 99.0044 13.928 98.7058 13.16C98.4284 12.392 97.9591 11.784 97.2978 11.336C96.6578 10.888 95.8791 10.664 94.9618 10.664C94.0871 10.664 93.3084 10.888 92.6258 11.336C91.9431 11.7627 91.4204 12.4027 91.0578 13.256C90.7164 14.088 90.5884 15.1013 90.6738 16.296C90.5884 17.3627 90.7271 18.312 91.0898 19.144C91.4738 19.9547 92.0284 20.584 92.7538 21.032C93.5004 21.48 94.3538 21.704 95.3138 21.704C96.2738 21.704 97.0844 21.5013 97.7458 21.096C98.4284 20.6907 98.9618 20.1467 99.3458 19.464L102.738 21.128C102.396 21.96 101.863 22.696 101.138 23.336C100.412 23.976 99.5484 24.4773 98.5458 24.84C97.5644 25.2027 96.4764 25.384 95.2818 25.384Z"
            fill="#131313"
        />
        <Path
            d="M110.739 25V1.16H120.787C122.366 1.16 123.71 1.43733 124.819 1.992C125.95 2.52533 126.814 3.29333 127.411 4.296C128.03 5.27733 128.339 6.472 128.339 7.88C128.339 8.968 128.04 9.992 127.443 10.952C126.867 11.8907 125.939 12.6693 124.659 13.288V11.272C125.832 11.72 126.76 12.2747 127.443 12.936C128.126 13.5973 128.606 14.3333 128.883 15.144C129.16 15.9547 129.299 16.808 129.299 17.704C129.299 19.9867 128.542 21.7787 127.027 23.08C125.534 24.36 123.454 25 120.787 25H110.739ZM115.091 21.16H121.235C122.366 21.16 123.262 20.8507 123.923 20.232C124.606 19.592 124.947 18.7493 124.947 17.704C124.947 16.6587 124.606 15.816 123.923 15.176C123.262 14.536 122.366 14.216 121.235 14.216H115.091V21.16ZM115.091 10.408H121.011C121.907 10.408 122.622 10.152 123.155 9.64C123.688 9.10667 123.955 8.424 123.955 7.592C123.955 6.76 123.688 6.09867 123.155 5.608C122.622 5.11733 121.907 4.872 121.011 4.872H115.091V10.408ZM139.808 25.384C138.016 25.384 136.448 24.9787 135.104 24.168C133.76 23.3573 132.715 22.2587 131.968 20.872C131.221 19.4853 130.848 17.9493 130.848 16.264C130.848 14.5147 131.221 12.968 131.968 11.624C132.736 10.2587 133.771 9.18133 135.072 8.392C136.395 7.60266 137.867 7.208 139.488 7.208C140.853 7.208 142.048 7.432 143.072 7.88C144.117 8.328 145.003 8.94667 145.728 9.736C146.453 10.5253 147.008 11.432 147.392 12.456C147.776 13.4587 147.968 14.5467 147.968 15.72C147.968 16.0187 147.947 16.328 147.904 16.648C147.883 16.968 147.829 17.2453 147.744 17.48H134.304V14.28H145.376L143.392 15.784C143.584 14.8027 143.531 13.928 143.232 13.16C142.955 12.392 142.485 11.784 141.824 11.336C141.184 10.888 140.405 10.664 139.488 10.664C138.613 10.664 137.835 10.888 137.152 11.336C136.469 11.7627 135.947 12.4027 135.584 13.256C135.243 14.088 135.115 15.1013 135.2 16.296C135.115 17.3627 135.253 18.312 135.616 19.144C136 19.9547 136.555 20.584 137.28 21.032C138.027 21.48 138.88 21.704 139.84 21.704C140.8 21.704 141.611 21.5013 142.272 21.096C142.955 20.6907 143.488 20.1467 143.872 19.464L147.264 21.128C146.923 21.96 146.389 22.696 145.664 23.336C144.939 23.976 144.075 24.4773 143.072 24.84C142.091 25.2027 141.003 25.384 139.808 25.384ZM158.442 25.384C156.65 25.384 155.082 24.9787 153.738 24.168C152.394 23.3573 151.348 22.2587 150.602 20.872C149.855 19.4853 149.482 17.9493 149.482 16.264C149.482 14.5147 149.855 12.968 150.602 11.624C151.37 10.2587 152.404 9.18133 153.706 8.392C155.028 7.60266 156.5 7.208 158.122 7.208C159.487 7.208 160.682 7.432 161.706 7.88C162.751 8.328 163.636 8.94667 164.362 9.736C165.087 10.5253 165.642 11.432 166.026 12.456C166.41 13.4587 166.602 14.5467 166.602 15.72C166.602 16.0187 166.58 16.328 166.538 16.648C166.516 16.968 166.463 17.2453 166.378 17.48H152.938V14.28H164.01L162.026 15.784C162.218 14.8027 162.164 13.928 161.866 13.16C161.588 12.392 161.119 11.784 160.458 11.336C159.818 10.888 159.039 10.664 158.122 10.664C157.247 10.664 156.468 10.888 155.786 11.336C155.103 11.7627 154.58 12.4027 154.218 13.256C153.876 14.088 153.748 15.1013 153.834 16.296C153.748 17.3627 153.887 18.312 154.25 19.144C154.634 19.9547 155.188 20.584 155.914 21.032C156.66 21.48 157.514 21.704 158.474 21.704C159.434 21.704 160.244 21.5013 160.906 21.096C161.588 20.6907 162.122 20.1467 162.506 19.464L165.898 21.128C165.556 21.96 165.023 22.696 164.298 23.336C163.572 23.976 162.708 24.4773 161.706 24.84C160.724 25.2027 159.636 25.384 158.442 25.384ZM168.819 25V7.592H172.755V11.016L172.435 10.408C172.841 9.36267 173.502 8.57333 174.419 8.04C175.358 7.48533 176.446 7.208 177.683 7.208C178.963 7.208 180.094 7.48533 181.075 8.04C182.078 8.59467 182.857 9.37333 183.411 10.376C183.966 11.3573 184.243 12.4987 184.243 13.8V25H180.051V14.792C180.051 14.024 179.902 13.3627 179.603 12.808C179.305 12.2533 178.889 11.8267 178.355 11.528C177.843 11.208 177.235 11.048 176.531 11.048C175.849 11.048 175.241 11.208 174.707 11.528C174.174 11.8267 173.758 12.2533 173.459 12.808C173.161 13.3627 173.011 14.024 173.011 14.792V25H168.819Z"
            fill="#0F9565"
        />
    </Svg>
);
export default Logo;
