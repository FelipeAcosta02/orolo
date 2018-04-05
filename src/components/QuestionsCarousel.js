import React from 'react';
import { Carousel } from 'antd';
import QuestionComponent from './QuestionComponent'

const questionsCarousel = ( props ) => {
    const questionsArray = [...props.questions]
    const questions = questionsArray.map((qnas, index) => {
        return (
        <div key={index}>
            <QuestionComponent 
            answer={qnas.a} 
            question={qnas.q}/>
        </div>)
    });
    return (<div style={{marginBottom:'4em'}}>
    <Carousel draggable={true} ref={props.carouselReference} dots={true}>
        {questions}
    </Carousel> 
    </div>
    );
}

export default questionsCarousel