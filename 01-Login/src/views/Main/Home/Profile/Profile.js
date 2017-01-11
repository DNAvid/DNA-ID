import React, { PropTypes as T } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import AuthService from '../../../../utils/AuthService'



const profile = JSON.parse(localStorage.getItem('profile'));


export class Profile  extends React.Component {
  render(){
    return (
      <Row >
        <Col md={2} mdOffset={4}>
          <Image src={profile.picture}/>
        </Col>
        <Col md={6}>
          <h3>Profile Details</h3>
          <p><strong>Name: </strong> {profile.name}</p>
          <p><strong>Email: </strong> {profile.email}</p>
          <p><strong>Nickname: </strong> {profile.nickname}</p>
          <p><strong>Created At: </strong> {profile.created_at}</p>
          <p><strong>Updated At: </strong> {profile.updated_at}</p>
        </Col>
      </Row>
    )
  }
}

export default Profile;


