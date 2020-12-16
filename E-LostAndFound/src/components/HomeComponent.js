import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row,
          Col, Jumbotron, Container, ButtonGroup,
          Carousel, CarouselItem, CarouselControl,
          CarouselIndicators, CarouselCaption } from 'reactstrap';
import './homeComponent.css'
import ItemCard from './ItemCard.js'
import img1 from '../images/carousel-1.PNG'
import img2 from '../images/carousel-2.PNG'
//import img3 from '../images/carousel-3.PNG'
const items = [
  {
    src: img1,
    altText: '',
    captionHeader: 'List of lost items'
  },
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

function HomeComponent() {
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false)

    //-------------------- Carousel part ---------------------------------
    
    
    
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} style = {{width:"100%"}} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.captionHeader} />
          </CarouselItem>
        );
      });
    //---------------------------------------------------------------------


    return (
        <div>
            <Jumbotron>
                <Container fluid className="container">
                    
                  <div className="welcome col-md-12">
                    <h1>Welcome!</h1><br />
                    <h2>This is the place to find your lost item, or to report a found item.</h2><br />
                    <h3 className="">First, login to your BMSCE account. If you don't have an account, sign-up below.</h3>
                    <ButtonGroup size="lg col-12 col-md-6">
                      <Button className = "button-login-signup" color="primary" onClick={() => {history.push("/signup")}}>Sign-up</Button>
                      <Button className = "button-login-signup" color="primary" onClick={() => {history.push("/login")}}>Login</Button>
                    </ButtonGroup>
                  </div>
                  <div className="login-signup">
                    <Row>
                        <Col md="6">
                          <Card body className = "card">
                            <CardTitle tag="h2">Lost something?</CardTitle>
                            <CardText>Click here to search for your item.</CardText>
                            <Button className = "button-lost-found" color="danger" onClick={() => {history.push("/lost")}}>Lost</Button>
                          </Card>
                        </Col>
                        <Col md="6">
                          <Card body className = "card">
                            <CardTitle tag="h2">Found something?</CardTitle>
                            <CardText>Click here to return the found object.</CardText>
                            <Button className = "button-lost-found" color="success" onClick={() => {history.push("/found")}}>Found</Button>
                          </Card>
                        </Col>
                    </Row>
                  </div>
                </Container>
              {/* {<div className = "wrapper">
                  <div className = "inside-wrapper">
                <ItemCard img = "https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000007319314-1000007319313_01-750.jpg"
                name = "Bose headphones" 
                type = "electronics" 
                description = "Model: qc 35, black"
                />
                  </div>
              </div>} */}

            </Jumbotron>

            <Row>
              <Col md = "12" lg = "11" xl = "10" className = "carousel-container">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
              </Col>
            </Row>

                    
            
        </div>
    )
}

export default HomeComponent