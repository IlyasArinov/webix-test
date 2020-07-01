import React from 'react';
import Webix from "../Webix";

const TimeLineView = () => {
    const data = [
        { id:"1", value: "Вышел зайчик", details: "на крыльцо", date: "1986-04-04", type: "Broken" },
        { id:"2", value: "Почесать своё", details: "яйцо", date: "2004-07-01", type: "Available" },
        { id:"3", value: "Глянул зайчик", details: "нет яйца", date: "2005-11-09", type: "Taken" },
        { id:"4", value: "Вот и грохнулся", details: "с крыльца", date: "2043-12-12", type: "Deprecated" }
    ];
    const color = function(obj){
        if(obj.type === "Available") return "#55CD97";
        if(obj.type === "Taken") return "#1CA1C1";
        if(obj.type === "Broken") return "#FF5C4C";
        if(obj.type === "Fixed") return "orange";
        if(obj.type === "Deprecated") return "#94A1B3";
    };
    const ui = {
        view:"timeline",
        width:400,
        height:300,
        scroll:false,
        type:{
            lineColor: color
        },
        data: data
    };
    return (
        <>
            Таблица:
            <Webix ui={ui} />
        </>
    )
};

export default TimeLineView

