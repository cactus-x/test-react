import React from "react";
export default class Addstudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
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
    render() {
        return <p >
            <
            label style = {
                {
                    width: "150px",
                    textAlign: "right",
                    display: "inline-block",
                    marginRight: "10px"
                }
            } > 性别： < /label> <
        input type = "radio"
        value = "男"
        name = "sex"
        onChange = {
            this.change
        }
        checked = {
            this.state.value == "男"
        }
        ref = "boy" / > < label > 男 < /label> <
        input type = "radio"
        value = "女"
        name = "sex"
        onChange = {
            this.change
        }
        checked = {
            this.state.value == "女"
        }
        ref = "girl" / > < label > 女 < /label> < /
            p >
    }
};