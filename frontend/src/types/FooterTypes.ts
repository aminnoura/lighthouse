export enum FOOTER_ENUM {
    FOOTER_URL,
    FOOTER_PHONE,
    FOOTER_EMAIL,
}

export type dublinLinkType = {
    className : string;
    name : string;
    url: string;
    type: FOOTER_ENUM.FOOTER_URL;
}| {
    className: string;
    phone:string;
    type:FOOTER_ENUM.FOOTER_PHONE;
}|{
    className:string;
    email: string;
    type: FOOTER_ENUM.FOOTER_EMAIL;
}

