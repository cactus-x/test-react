import React from "react";
import StudentItem from "./StudentItem";
import StudentTh from "./StudentTh";

export default class StudentTable extends React.Component{
            constructor(props){
                super(props);}

            render(){
                let data = this.props.studata;
                let title=["姓名","年龄","性别","学号","区域","操作"];
                let dataarr=[];
//                console.log(data);
                for(let i=0;i<data.length;i++){
                    dataarr.push(<StudentItem key={i} show={this.props.show} getcurrent={this.props.getcurrent}>{data[i]}</StudentItem>);
                }
                return <table style={{border:"1px solid #999",width:"800px",height:"100%",margin:"auto"}}>
                           <thead><StudentTh>{title}</StudentTh></thead>
                           <tbody>{dataarr}</tbody>
                       </table>
            }
        };
