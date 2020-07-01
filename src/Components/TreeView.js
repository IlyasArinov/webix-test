import React from 'react';
import Webix from "../Webix";

const TreeView = () => {
    const data = [
        {
            id:"root",
            value:"Cars",
            open:true,
            data:[
                { id:"1", open:true, value:"Toyota", data:[
                        { id:"1.1", value:"Avalon" },
                        { id:"1.2", value:"Corolla" },
                        { id:"1.3", value:"Camry" }
                    ]},
                { id:"2", open:true, value:"Skoda", data:[
                        { id:"2.1", value:"Octavia" },
                        { id:"2.2", value:"Superb" }
                    ]}
            ]}
    ];
    const ui = {
        view:"tree",
        data: data,
    };
    return (
        <>
            Списки:
            <Webix ui={ui} />
        </>
    )
};

export default TreeView

