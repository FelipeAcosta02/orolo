import React from 'react';

const imageComponent = ( props ) => {
    return (
        <div className="ImageComponent">
            <img src={props.imgSrc} alt="Magnificent Portrait of Orolo our Queen" width="100%" usemap="#leftmap" usemap="#rightmap"/>
            <map name="leftmap">
                <area shape="rect" coords="200,120,250,170" href="https://youtu.be/dQw4w9WgXcQ" />
            </map>
            <map name="rightmap">
                <area shape="rect" coords="325,120,375,170" href="https://www.illuminatiofficial.org" />
            </map>
        </div>
    );
}

export default imageComponent