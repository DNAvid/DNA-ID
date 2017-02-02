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
            <p>SNP genotyping from <a target="_blank" href="https://www.23andme.com">23 and Me</a>. Done on Illumina HumanOmniExpress-24 format chipwith custom probes.</p>
        <form>
          <FieldGroup
            id="formControlsFile"
            type="file"
            label="File"
            help=""
          />
          <Button type="submit">
            Upload
          </Button>
        </form>
          </Media.Body>
        </Media>
         <Media>
           <br/><br/>
          <Media.Left>
            <img width={64} height={64} src="https://storage.googleapis.com/dnavid/ancestrydnaBadge.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>AncestryDNA genotyping</Media.Heading>
            <p>AncestryDNA</p>
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
        <DNAProfiles/>
      </div>
    );
  }
}

export default DNA;
