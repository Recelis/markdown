import React, { Component } from 'react'
import marked from 'marked';

class MyMarkDown extends Component {
    MyComponent(rawHTML) {
        return <div dangerouslySetInnerHTML={createMarkup(rawHTML)} />;
    }
    render() {
        return (
            <div className="convertedText">
                <p>{this.MyComponent(marked(this.props.value))}</p>
            </div>
        )
    }
}

function createMarkup(rawHTML) {
    return { __html: rawHTML };
}

export default MyMarkDown;