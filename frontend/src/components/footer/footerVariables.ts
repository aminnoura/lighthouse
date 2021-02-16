import { dublinLinkType, FOOTER_ENUM } from "../../types/FooterTypes";

let dublinLinks: dublinLinkType [] = [
    {
        className:"url",
        name: "About Us",
        url: "/about-us",
        type: FOOTER_ENUM.FOOTER_URL,
    },

    {
        className:"phone",
        phone: "009891245754",
        type: FOOTER_ENUM.FOOTER_PHONE,
    },

    {
        className:"email",
        email: "example@email.com",
        type: FOOTER_ENUM.FOOTER_EMAIL,
    },
]

let popularLinks: dublinLinkType [] = [
    {
        className:"url",
        name: "About Us",
        url: "/about-us",
        type: FOOTER_ENUM.FOOTER_URL,
    },

    {
        className:"url",
        name: "About Us",
        url: "/about-us",
        type: FOOTER_ENUM.FOOTER_URL,
    },
    
    {
        className:"url",
        name: "About Us",
        url: "/about-us",
        type: FOOTER_ENUM.FOOTER_URL,
    },
    
    {
        className:"url",
        name: "About Us",
        url: "/about-us",
        type: FOOTER_ENUM.FOOTER_URL,
    },

    {
        className:"url",
        name: "About Us",
        url: "/about-us",
        type: FOOTER_ENUM.FOOTER_URL,
    },
]

export {dublinLinks , popularLinks}