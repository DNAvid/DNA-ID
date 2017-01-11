import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Media} from 'react-bootstrap'


class DNAProfiles extends React.Component {
  render(){
    return(
      <div>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="https://storage.googleapis.com/dnavid/23andmeBadge.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>23andMe genotyping</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="https://storage.googleapis.com/dnavid/ancestrydnaBadge.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>AncestryDNA data</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}



export class DNA extends React.Component {
  render(){
    return (
      <div>
        <h4>
          Upload your DNA files (23andMe, AncestryDNA, etc.)
        </h4>
        <form>
          <FieldGroup
            id="formControlsFile"
            type="file"
            label="File"
            help="Select file to upload."
          />
          <Button type="submit">
            Upload
          </Button>
        </form>
        <h4>
          Previously uploaded
        </h4>
        <DNAProfiles/>
      </div>
    );
  }
}

export default DNA;
