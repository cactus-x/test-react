import React from "react";

export default class SearchStudent extends React.Component{
            constructor(props){
                super(props);
            }
             search(){
                 var select_=document.getElementById("searchbox")  
                 var option_text=select_.options[select_.selectedIndex].value;
                 var input_text=this.refs.text.value;
                 switch(option_text){
                     case "name":{
                         var search={name:this.refs.text.value,page:1,rows:5};
                         break;
                     }
                     case "age":{
                         var search={age:this.refs.text.value,page:1,rows:5};
                         break;
                     }
                     case "sex":{
                         var search={sex:this.refs.text.value,page:1,rows:5};
                         break;
                     }
                         case "id":{
                         var search={id:this.refs.text.value,page:1,rows:5};
                         break;
                     }
                         case "address":{
                         var search={address:this.refs.text.value,page:1,rows:5};
                         break;
                     }
                                   }
                 this.props.searchdata(search);
             }
            render(){
                return <div style={{border:"1px solid #999",width:"770px",margin:"auto",paddingLeft:"30px",marginTop:"20px",marginBottom:"20px"}}>
                    <select id="searchbox">
                        <option value="name" ref="name">姓名</option>
                        <option value="sex" ref="sex">性别</option>
                        <option value="age" ref="age">年龄</option>
                        <option value="id" ref="id">学号</option>
                        <option value="address" ref="address">地址</option>
                    </select>
                    <input type="text" ref="text"/>
                    <input type="button" value="查询" onClick={this.search.bind(this)}/>
                </div>
            }
        };