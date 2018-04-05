import React from 'react';
import { Input, Card } from 'antd'

const Search = Input.Search

const questionInput = (props) => {
        return(
                <Card title="Write your Question" style={{marginBottom:'3em'}}>
                        <Search
                        autoComplete="off"
                        id="inputBar"
                        size="large"
                        placeholder="your question here"
                        onSearch={value => props.validateInputHandler(value)}
                        enterButton="Ask Orolo!"/>
                </Card>
        )
}

export default questionInput