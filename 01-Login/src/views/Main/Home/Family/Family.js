import React from 'react';
import {ProgressBar, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class PercentFamily extends React.Component {
  render(){
    return(
      <div>
        <h4>Completion of DNA from family sharing 50% of DNA</h4>
        <ProgressBar bsStyle="info" now={29} />
        <h4>Completion of DNA from family sharing 25% of DNA</h4>
        <ProgressBar bsStyle="info" now={58} />
      </div>
    )
  }
};

class InviteFamily extends React.Component {
  render()
  {
    return (
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Name"
          placeholder="Name of person to invite"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email (if a minor whose account you manage, enter your own)"
        />
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Relationship</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Select</option>
            <option value="sister">Sister</option>
            <option value="brother">Brother</option>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="spouse">Spouse</option>
            <option value="son">son</option>
            <option value="daughter">Daughter</option>
            <option value="cousin">Cousin</option>
            <option value="friend">Friend</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Message</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Hi, I'd like to invite you to join DNA\/ID. DNA information is much more valuable when shared!" />
        </FormGroup>
        <Button type="submit">
          Invite to join DNA\/ID
        </Button>
      </form>
    )
  }
};

export class Family  extends React.Component {
  render() {
    return (
      <div>
        <h2> My and my family's shared DNA</h2>
        <PercentFamily/>
        <h2> Grow Network </h2>
        <InviteFamily/>
      </div>
    );
  }
}

export default Family;

