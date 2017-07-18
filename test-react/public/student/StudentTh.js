import React from "react";
import {ajax} from "../common/tools";

export default class StudentTh extends React.Component{
            constructor(props){
                super(props);}

            render(){
                let data=this.props.children;
                let tdarr=[];
                for(let i in data){
                    if(i!="_id"){
                    tdarr.push(<td key={i} style={{
                padding:"10px",
                textAlign:"center",
                border:"1px solid #ccc"
            }}>{data[i]}</td>);
                    }
                }
                return <tr key={0}>{tdarr}</tr>;
            }
        };