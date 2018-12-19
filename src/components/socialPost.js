import React, { Component } from 'react';
import '../css/SocialPost.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const SocialPost = (props) => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>AlbumID : 1  Fetchato</CardTitle>
              <CardSubtitle>accusamus beatae ad Fetchato</CardSubtitle>
              <CardText>Tip: Hike up to the peak Fetchato</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card></Col>
        <Col>.</Col>
        <Col>.</Col>
        <Col>.</Col>
      </Row>

    </div>
  );
};

export default SocialPost;

