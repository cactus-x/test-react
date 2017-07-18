import React from "react";
import InputElement from "../common/InputElement";
import GenderElement from "../common/GenderElement";
import {ajax} from "../common/tools";

export default class UpdateStudent extends React.Component{
            constructor(props){
                super(props);}

             edit(){
                 if(this.refs.sex.refs.boy.checked){
                     var sextext=this.refs.sex.refs.boy.value;
                 }else if(this.refs.sex.refs.girl.checked){
                var sextext=this.refs.sex.refs.girl.value;}
                 console.log(sextext);
                 ajax({
                     type:"post",
                     url:"/info/update",
                     data:{_id:this.props.currentdata._id,
                           name:this.refs.name.refs.input.value,
                           age:this.refs.age.refs.input.value,
                           sex:sextext,
                           id:this.refs.id.refs.input.value,
                           address:this.refs.address.refs.input.value
                           
                          },
                     success:function(){
                         this.props.show();
                         
                     }.bind(this)
                 })
             }
            render(){
                console.log(this.props.currentdata);
                return <div style={{border:"1px solid #999",width:"800px",margin:"auto",paddingBottom:"10px",marginBottom:"20px"}}>
                       <p style={{textAlign:"center"}}>修改学生信息</p>
                       <InputElement type="text" info="" ref="name" value={this.props.currentdata.name}>姓名:</InputElement>
                       <InputElement type="text" info="" ref="age" value={this.props.currentdata.age}>年龄:</InputElement>
                       <GenderElement value={this.props.currentdata.sex} ref="sex"></GenderElement>
                        <InputElement type="text" info="" ref="id" value={this.props.currentdata.id}>ID:</InputElement>
                       <InputElement type="text" info="" ref="address" value={this.props.currentdata.address}>地址:</InputElement>         
                       <input type="button" onClick={this.edit.bind(this)} value="保存修改" style={{marginLeft:"200px"}}/>
                       </div>
            }
        };