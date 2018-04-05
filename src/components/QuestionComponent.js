import React from 'react'

const questionComponent = (props) => {
    return(
        <div>
            <p>You asked:</p>
            <p style={{fontSize:'2em'}}>{props.question}</p>
            <p>She answered:</p>
            <p style={{fontSize:'2em'}}>{props.answer}</p>
        </div>
    );
}

export default questionComponent