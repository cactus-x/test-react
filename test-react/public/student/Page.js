import React from "react";

export default class Page extends React.Component{
            constructor(props){
                super(props);
            }
    render(){
        let pages=[];
        for(let i=1;i<=this.props.data.maxpage;i++){
            if(this.props.data.curpage==i){
                pages.push(<input key={i} style={{background:"#ccc",outline:"0",border:"0",padding: "10px"}} type="button" value={i} onClick={()=>{this.props.show(i)}}/>);
            continue;
            }
            pages.push(<input key={i} style={{outline:"0",border:"0",padding:"2px",padding: "10px",background:"#fff"}} type="button" value={i} onClick={()=>{this.props.show(i)}}/>);
        }
        return <div style={{border:"1px solid #999",width:"800px",height:"100%",margin:"auto",textAlign:"center",marginTop:"20px",marginBottom:"50px"}}>
               <input style={{outline:"0",border:"0",background:"#fff"}} type="button" value="上一页" onClick={()=>{
    if(this.props.data.curpage>1)
    this.props.show(--this.props.data.curpage)

}}/>
            {pages}
               <input style={{outline:"0",border:"0",background:"#fff"}} type="button" value="下一页" onClick={()=>{
                    if(this.props.data.curpage<this.props.data.maxpage)                                     this.props.show(++this.props.data.curpage)}}/>
               </div>
            }
        };