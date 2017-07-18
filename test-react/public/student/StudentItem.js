import React from "react";
import {ajax} from "../common/tools";

export default class StudentItem extends React.Component{
            constructor(props){
                super(props);
            }
            del(_id){
                 ajax({
                     type:"post",
                     url:"/info/del",
                     data:{_id:_id},
                     success:function(){
                         this.props.show();
                     }.bind(this)
                 })
            }
            render(){
                let data=this.props.children;
    let tdarr = [];
    for (let i in data) {
        if (i != "_id") {
            tdarr.push( < td style = {
                    {
                    padding: "10px",
                    textAlign: "center",
                    border: "1px solid #ccc"
                }
                } key={i}> {
                    data[i]
                } < /td>);
            }
        }
        tdarr.push( < td key={0} style = {
                {
                    padding: "10px",
                    textAlign: "center",
                    border: "1px solid #ccc"
                }
            } > < input type = "button"
            value = "删除"
            onClick = {
                () => {
                    this.del(data._id)
                }
            }
            /><input type="button" value="修改" onClick={()=>{this.props.getcurrent(data._id)}}/ > < /td>);
            return <tr> {
                tdarr
            } < /tr>;
        }
    };
