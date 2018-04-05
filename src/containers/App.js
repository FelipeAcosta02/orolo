import React, { Component } from 'react';
import { Row, Col, Card, notification, Input, Switch, Carousel } from 'antd';

import './App.css';
import oroloImage from '../assets/orolo.png'
import TitleComponent from '../components/TitleComponent'
import ImageComponent from '../components/ImageComponent'
import QuestionInput from '../components/QuestionInput'
import NSFWSwitch from '../components/NSFWSwitch'
import QuestionsCarousel from '../components/QuestionsCarousel'

const Search = Input.Search
const witch = Switch
const carousel = Carousel

class App extends Component {
  state = {
    qnas: [ {q: "Can you give me a quick tutorial?", a: "Write a question above. Just make sure you include a question mark! (?)"} ],
    answersNSFW: [ "Never, bitch", "Well, thing is you a hoe", "HAHAHAHA, bitch!", "Pinchi pendejo wey", "I raped you once. You didn't notice.", "Miss me with that gay shit!", "Over my nude body bitch!", "Stop doing this shit Bro!", "You fucking pig!", "What a wicked mind of you, asshole", "I am deeply pondering on why you so fucking dumb", "I don't even exist yet I can see just how fucking dumb u r", "Ur gay. That's not bad. Bad thing is you also fucking stupid", "Would you stop being a hoe? That's the real question!", "I don't answer hoes", "I refuse to answer bitches", "U so cheap bitch", "Okay, I hear u. I hear ur bitchiness", "Your crush doesn't love you. How? You bitch", "ERES UNA GOLFA, G O L F A!" ],
    answearsSFW: [ "You're literallly sexually assaulting me! #MeToo", "I see you at night", "I have been alive for so much time, but I refuse to answer", "Absolutely!", "I didn't know abortion fail rates where so high", "Did you really expect a good answer?! I was made in under 3 hours!", "you should have died long time ago. How old r u?", "You're not asking the real questions", "The Ottomans, they're very OP", "Haha!, I laugh about you", "The fact you keep asking me makes u as worthless as those who created me", "No way!", "Yes", "No", "You wish", "Third grade niggas be like", "u wot m8?!", "Ur mom gay", "... OK! I'm done with you now", "u gay", "I used to be unsure about that as well", "Where did you learn to write?", "I would answer if you weren't a huge dissapointment", "I can't answer that, but I can tell u my gender is gendervoid foxkin demiqueer, and I'm offended", "I may not be answering, but I must say u should leave to be productive", ]
  }
  randomArrayElement = (array) =>  array[Math.floor(Math.random() * array.length)]
  nsfwHandler = (acceptsNSFW) => {
    this.acceptsNSFW = acceptsNSFW;
    if (acceptsNSFW) {
      this.openNotification('NSFW mode on', 'Now Including NSFW answers')
    }else{
      this.openNotification('NSFW mode off','Not including NSFW answers')
    }
  }
  questionInputHandler = (question) => {
    const answersPool = [...this.state.answearsSFW]
    if (this.acceptsNSFW){ answersPool.push(...this.state.answersNSFW)}
    const answer = this.randomArrayElement(answersPool)
    const qnas = [...this.state.qnas]
    qnas.push({ q: question, a: answer})
    document.getElementById("inputBar").value = ""
    this.setState({qnas: qnas})
    this.carouselElementReference.goTo(this.state.qnas.length)
  }
  openNotification = (message, description) => {
    notification.open({
      message: message,
      description: description,
    })
  }
  validateInputHandler = (value) => {
    if (value==="") {
      this.openNotification('This is not a valid question', 'Your question may not be empty!')
    }else if (value.slice(-1)!=="?"){
      this.openNotification('This is not a valid question','Your question should end with a question mark! (?)')
    }else{
      this.questionInputHandler(value)
    }

  }
  render() {
    return (
      <div className="App">
            <Row gutter={32} type="flex" justify="center" align="top">
              <Col span={24} value={150}>
                <TitleComponent title="Meet Orolo. Ask Her. Change your Life."/>
              </Col>
            </Row>
            <Row gutter={32} type="flex" justify="center" align="top">
              <Col value={20}xs={{span: 22}} md={{span: 12}} lg={{span: 11}} xl={{span: 10}} >
                <ImageComponent imgSrc={oroloImage} />
              </Col>
              <Col value={20}xs={{span: 22}} md={{span: 12}} lg={{span: 11}} xl={{span: 10}}>
                <QuestionInput validateInputHandler={this.validateInputHandler}/>
                <NSFWSwitch checkedState={false} nsfwHandler={this.nsfwHandler} />
                <QuestionsCarousel questions={[...this.state.qnas]} carouselReference={el => this.carouselElementReference = el}/>
              </Col>
            </Row>
      </div>
    );
  }
}

export default App;
