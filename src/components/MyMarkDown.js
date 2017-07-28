import React, { Component } from 'react'
import marked from 'marked';

class MyMarkDown extends Component {
    constructor(props) {
        super(props);
    }
    MyComponent(rawHTML) {
        return <div dangerouslySetInnerHTML={createMarkup(rawHTML)} />;
    }
    render() {
        return (
            <div>
                {this.MyComponent(marked(this.props.value))}
            </div>
        )
    }
}

function createMarkup(rawHTML) {
    return { __html: rawHTML };
}

export default MyMarkDown;