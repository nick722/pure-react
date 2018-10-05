import React from 'react';
import ReactDOM from 'react-dom';

function HelloPiper() {
    return (
        <div>Hello Piper!</div>
    );
}

ReactDOM.render(<HelloPiper/>, document.querySelector('#root'));