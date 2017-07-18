import React from "react";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import SearchStudent from "./SearchStudent";
import StudentTable from "./StudentTable";
import StudentItem from "./StudentItem";
import Page from "./Page";
import {ajax} from "../common/tools";

export default class StudentManage extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    alldata:"",
                    students:[],
                    currentdata:{},
                    search_col:"",
                    search_value:""
                    
                }
            }
            componentWillMount(){
                this.show();
            }
            show(page=1){
                this.setState({
                    currentdata:{}
                        });
                ajax({
                    type:"get",
                    url:"/info/find",
                    data:{page:page,
                         rows:5},
                    success:function(data){
//                        console.log(data);
                        this.setState({
                            alldata:data,
                            students:data.rows
                        });
                    }.bind(this)
                });
            }
    searchdata(searchtext){
        ajax({
                    type:"get",
                    url:"/info/find",
                    data:searchtext,
                    success:function(data){
                        this.setState({
                             alldata:data,
                            students:data.rows
                        });
                    }.bind(this)
                });
    }
            getcurrent(id){
                ajax({
                    type:"get",
                    url:"/info/find",
                    data:{_id:id},
                    success:function(data){
                        this.setState({
                            currentdata:data
                        });
                    }.bind(this)
                });
            }
            render(){
                return <div>
                    <AddStudent show={this.show.bind(this)}></AddStudent>
                    <UpdateStudent currentdata={this.state.currentdata} show={this.show.bind(this)}></UpdateStudent>
                    <SearchStudent searchdata={this.searchdata}></SearchStudent>
                    <StudentTable studata={this.state.students} show={this.show} getcurrent={this.getcurrent.bind(this)}></StudentTable>
                    <Page data={this.state.alldata} show={this.show.bind(this)}></Page>
                </div>
            }
        };