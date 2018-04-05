import React from 'react';

const titleComponent = ( props ) => {
    return (
        <div className="TitleComponent" style={{marginBottom:'60pt', marginTop:'20pt'}}>
            <h1 style={{fontSize: '4em'}} >{props.title}</h1>
        </div>
    );
}

export default titleComponent