import React from "react";
import InputElement from "../common/InputElement";
import GenderElement from "../common/GenderElement";
import {ajax} from "../common/tools";
export default class Addstudent extends React.Component{
            constructor(props){
                super(props);
            }
            add(){
                if(this.refs.sex.refs.boy.checked){
                     var sextext=this.refs.sex.refs.boy.value;
                 }else if(this.refs.sex.refs.girl.checked){
                var sextext=this.refs.sex.refs.girl.value;}
                ajax({
                    type:"post",
                    url:"info/add",
                    data:{name:this.refs.name.refs.input.value,
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
                return <div style={{border:"1px solid #999",width:"800px",margin:"auto",paddingBottom:"20px",marginBottom:"20px"}}>
                      <p style={{textAlign:"center"}}>添加学生信息</p>
                      <InputElement type="text" info="" ref="name">姓名:</InputElement>
                      <InputElement type="text" info="" ref="age">年龄:</InputElement>
                      <GenderElement ref="sex"></GenderElement>
                        <InputElement type="text" info="" ref="id">学号:</InputElement>
                      <InputElement type="text" info="" ref="address">区域:</InputElement>         
                      <input type="button" value="添加" onClick={this.add.bind(this)} style={{marginLeft:"200px"}}/>
                      </div>
            }
        };