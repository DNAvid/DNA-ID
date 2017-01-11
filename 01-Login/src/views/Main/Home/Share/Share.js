import React from 'react';
import { Checkbox, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

export class Share extends React.Component {
  render() {
    return (
        <form>
          <FormGroup>
            <ControlLabel>Conditions for using my DNA information.</ControlLabel>
          </FormGroup>
          <FormGroup>
            <FormControl.Static>
              Financial compensation for use of my DNA information
            </FormControl.Static> 
            <Checkbox>
              From for profit research
            </Checkbox>
            <Checkbox>
              From academic research
            </Checkbox>
            <Checkbox>
              From use in the clinic
            </Checkbox>
            <FormControl.Static>
              Return of results from analysis of my DNA information
            </FormControl.Static> 
            <Checkbox>
              I want to be informed of results obtained about me that impact my health
            </Checkbox>
            <Checkbox>
              I do not want to be informed about results that impact my health but for which there is no preventive or corrective remedy known
            </Checkbox>

            <FormControl.Static>
              Participation in research
            </FormControl.Static>
            <Checkbox>
              I am available for questions from researchers who are analysing my DNA information      
            </Checkbox>    
            <Checkbox>
              I wish to be asked for permission every time my DNA is included in a study (uncheck if automatic enrollment is ok)      
            </Checkbox>

            <FormControl.Static>
              Privacy
            </FormControl.Static>
            <Checkbox>
              I do not wish to share personal information other than DNA information and I don't allow attemps at reidentification
            </Checkbox>    
            <Checkbox>
              I do not wish to share DNA information that, with current state of knowledge, could lead to disease risk identification
            </Checkbox>    
          </FormGroup>
        </form>
    );
  }
}

export default Share;


