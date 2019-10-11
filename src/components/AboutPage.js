import React, { Component } from 'react';


import {
  Container,
  Row,
  Col
} from "react-bootstrap";


export default class AboutPage extends Component {
	
	
  render() {
    return (
      <Container>
	      <Row>
		      <Col><h2>About Page</h2></Col>
	      </Row>
	      
	      <Row>
		      <Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit venenatis aliquam. Nam erat tortor, aliquet ut nisl id, dictum cursus leo. Nam hendrerit leo quis placerat mattis.</p></Col>
		      
		      <Col><p>Donec ipsum nisl, efficitur sed felis sed, posuere tincidunt leo. Curabitur id venenatis erat. Pellentesque eu lorem ornare, scelerisque massa id, efficitur odio. Morbi lacinia blandit eros non cursus.</p></Col>
		      
		      <Col><p>Quisque at urna pharetra, placerat nibh a, commodo quam. Nunc consequat dolor magna, ut laoreet purus interdum facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
	      </Row>
	      
	      <Row>
		      <Col><p>Quisque at urna pharetra, placerat nibh a, commodo quam. Nunc consequat dolor magna, ut laoreet purus interdum facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis, lectus ac fringilla malesuada, nisi ligula accumsan massa, et pretium mi quam ac metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam aliquam ipsum sit amet enim fermentum placerat. Quisque vestibulum mauris dolor, vitae feugiat nibh finibus vel. Phasellus sed velit rhoncus, blandit ex et, ultricies quam. Aliquam dictum augue vel risus vulputate, eu aliquam purus gravida. Nullam ac porta ex, quis pellentesque est. Integer faucibus facilisis nulla id rutrum. Aenean turpis risus, suscipit bibendum sem vel, lacinia vulputate libero. Proin quis enim varius, bibendum diam et, ornare leo. Morbi tellus mi, vulputate ut lacus in, congue cursus libero. Nunc convallis ornare orci id ullamcorper. Etiam sit amet nisi non felis elementum dignissim.</p></Col>
	      </Row>
	    </Container>

    )
  }
}
