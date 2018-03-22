import React, { Component } from 'react';
import ContentEditable from 'react-simple-contenteditable';

class LiveBox extends React.Component{
    constructor(props){
        super(props)
        this.state = { text: "LIVE" }
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onBlur(){
        if( this.state.text.trim() === "" ){
            this.setState({text: "LIVE"})
        }
    }
   
    handleChange (ev, value) {
        this.setState({text: value})
    }

    render() {
        return(
            <ContentEditable
                html={this.state.text}
                className="live_box"
                tagName="div"
                onChange={ this.handleChange }
                contentEditable="plaintext-only"
                spellcheck="false"
                onBlur={this.onBlur}
            />
        )
    }
}

export default LiveBox;