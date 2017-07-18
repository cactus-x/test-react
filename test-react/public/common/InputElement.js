import React from "react";
export default class Addstudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }

    }
    change(e) {
        this.setState({
            value: e.target.value
        })
    }
    componentWillReceiveProps(newprops) {
        this.setState({
            value: newprops.value
        })
    }
    render(){
        if (typeof (this.state.value) == "undefined") {
            return <p >
                <
                span style = {
                    {
                        width: "150px",
                        textAlign: "right",
                        display: "inline-block",
                        marginRight: "10px"
                    }
                } > {
                    this.props.children
                } < /span> <
            input type = {
                this.props.type
            }
            ref = "input"
            onChange = {
                this.change
            }
            value = {
                " "
            }
            /> <
            label > {
                    this.props.info
                } < /label> < /
                p >
        } else {
            return <p >
                <
                span style = {
                    {
                        width: "150px",
                        textAlign: "right",
                        display: "inline-block",
                        marginRight: "10px"
                    }
                } > {
                    this.props.children
                } < /span> <
            input type = {
                this.props.type
            }
            ref = "input"
            onChange = {
                this.change
            }
            value = {
                this.state.value
            }
            /> <
            label > {
                    this.props.info
                } < /label> < /
                p >
        }

    }
};