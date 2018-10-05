import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
    var username = 'Piper';



    return (
       <div>
           {username ? `Hello, ${username}` : 'Not logged in.'}
       </div>
    )
}

ReactDOM.render(<MyThing/>, document.querySelector('#root'));