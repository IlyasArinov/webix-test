import React from 'react';
import Webix from "../Webix";

const ListView = () => {
    const data = [
        { id:"1", country: "China", population: "1 341 990 000", year: "2011" },
        { id:"2", country: "India", population: "1 193 290 000", year: "2011" },
        { id:"3", country: "United States", population: "311 960 000", year: "2011" },
        { id:"4", country: "Indonesia", population: "237 556 363", year: "2010" }
    ];
    const ui = {
        view:"datatable",
        scroll:false,
        width:400,
        autoheight:true,
        select:true,
        columns:[
            { id:"id", fillspace:1 },
            { id:"country", fillspace:2},
            { id:"population", fillspace:2 },
            { id:"year", fillspace:2 }
        ],
        data: data
    };
    return (
        <>
            Таблица:
            <Webix ui={ui} />
        </>
    )
};

export default ListView

