import React, {useEffect} from 'react';
import Webix from "../Webix";
// import * as fileManager from "@xbs/filemanager";



const FM = () => {
    useEffect(() => {
        // const filemanager = window.filemanager;
        const webix = window.webix;
        webix.ready(function() {
            // use custom scrolls, optional
            if (!webix.env.touch && webix.env.scrollSize) webix.CustomScroll.init();

            webix.ui({
                view: "filemanager",
                url: "https://docs.webix.com/filemanager-backend/",
            });
        });
    })

    // const ui = {
    //     view:"filemanager",
    //     url: "https://docs.webix.com/filemanager-backend/"
    // };
    return (
        <>
            Файл менеджер:
            {/*<Webix ui={ui} />*/}
        </>
    )
};

export default FM

