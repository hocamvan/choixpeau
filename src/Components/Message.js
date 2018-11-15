import React from "react";

export default class Message extends React.Component {
    render() {
        return (
            <div>
                <b> {this.props.message} </b>
            </div>
        )
    }
}