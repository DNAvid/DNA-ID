import axios from 'axios'
import { hashHistory } from 'react-router';
import React from 'react';
import { Button, FormGroup, Checkbox, ControlLabel, FormControl, HelpBlock, Row, Col, Panel, ProgressBar
} from 'react-bootstrap';
import walletDefault from './wallet'

function getUserProfile(){
  return(
    axios(
      {
        baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
        url: 'doesUserHaveProfile.js',
        method: 'get',
        headers: {Authorization: 'Bearer ' + localStorage.id_token}
      }
    )
  )
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

class WalletSetup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: this.props.wallet.balance,
      ETHaddress: this.props.wallet.ETHaddress,
      firstCondition: this.props.wallet.firstCondition,
      secondCondition: this.props.wallet.secondCondition,
      firstConditionPledge: this.props.wallet.firstConditionPledge,
      secondConditionPledge: this.props.wallet.secondConditionPledge,
      notForProfit: this.props.wallet.notForProfit,
      forProfit: this.props.wallet.forProfit,
      clinic: this.props.wallet.clinic
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
      axios(
        {
          baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
          url: 'updateUser.js',
          params: {
            key: "wallet",
            text: this.state,
            json: true
          },
          method: 'post',
          headers: {Authorization: 'Bearer ' + localStorage.id_token}
        }
      )
  }

  render() {
    var balance = this.state.balance
    var pledged =
      Number(this.state.firstConditionPledge) +
      Number(this.state.secondConditionPledge);
    var available = Number(this.state.balance) - Number(pledged);
    if(available>=0){
      var balanceP =100
      var pledgedP =(pledged/balance)*100
      var extraNeededP = 0
      var availableP = ((balance-pledged)/balance)*100
    }else{
      var extraNeeded = -available
      var balanceP = (balance/(balance+extraNeeded))*100
      var pledgedP = (pledged/(balance+extraNeeded))*100
      var extraNeededP = (pledged-balance)/(balance+extraNeeded)*100
      var availableP = 0      
    }


    function BuyMoreDNAcoin(props){
      if (props.extraNeeded>0){
        return <Button> Buy {props.extraNeeded} $DNA </Button>   
      }else{
        return <div></div> 
      }
    }
    return (
      <div>
        <Row>
          <Col xs={11} sm={9} md={6} lg={5}>
            <Panel header={"DNAcoin Balance"}>
              <div>
                <div>
                  <ProgressBar>
                    <ProgressBar
                      label={"Balance= " + balance + " $DNA"}
                      bsStyle="info"
                      now={balanceP}
                    />
                    <ProgressBar
                      label={"Extra needed= " + extraNeeded + " $DNA"}
                      bsStyle="danger"
                      now={extraNeededP}
                    />

                </ProgressBar>
                <ProgressBar
                  label={"Available= " + available + " $DNA"}
                  bsStyle="success"
                  now={availableP}
                />
                <ProgressBar
                  label={"Pledged= " + pledged + " $DNA"}
                  bsStyle="warning"
                  now={pledgedP}
                />

            </div>
          </div>
          <BuyMoreDNAcoin extraNeeded={-available} />
          <br />
          ETH token wallet: {this.state.ETHaddress}
        </Panel>

        <form onSubmit={this.handleSubmit}>
          <Panel header="I support these conditions">
            <FormGroup controlId="condition1">
              <ControlLabel>#1 condition supported</ControlLabel>
              <Row>
                <Col xs={9} sm={9} md={9} lg={9}>
                  <FormControl
                    id="formControlsText"
                    name="firstCondition"
                    type="text"
                    placeholder="E.g., Hereditary Breast and Ovarian Cancer"
                    value={this.state.firstCondition}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  <FormControl
                    id="formControlsText"
                    name="firstConditionPledge"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={this.state.firstConditionPledge}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>

              <HelpBlock>Enter condition and amount of $DNA pledged</HelpBlock>
              <ControlLabel>#2 condition supported</ControlLabel>
              <Row>
                <Col xs={9} sm={9} md={9} lg={9}>
                  <FormControl
                    id="formControlsText"
                    name="secondCondition"
                    type="text"
                    placeholder="E.g., Multiple Sclerosis"
                    value={this.state.secondCondition}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  <FormControl
                    id="formControlsText"
                    name="secondConditionPledge"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={this.state.secondConditionPledge}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <HelpBlock>Enter condition and amount of $DNA pledged</HelpBlock>

            </FormGroup>
          </Panel>
          <Panel header="I want compensation for use of my info">
            <Row>
              <Col xs={3} sm={3} md={3} lg={3}>
                <FieldGroup
                  id="formControlsText"
                  type="number"
                  min="0"
                  name="notForProfit"
                  label="Not for profit"
                  placeholder="0"
                  value={this.state.notForProfit}
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={3} sm={3} md={3} lg={3}>
                <FieldGroup
                  id="formControlsText"
                  name="forProfit"
                  type="number"
                  min="0"
                  label="For profit"
                  placeholder="5"
                  value={this.state.forProfit}
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={3} sm={3} md={3} lg={3}>
                <FieldGroup
                  id="formControlsText"
                  name="clinic"
                  type="number"
                  min="0"
                  label="Clinic"
                  placeholder="0"
                  value={this.state.clinic}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </Panel>
          <Panel header="Ethereum token wallet">
            <FieldGroup
              id="formControlsText"
              name="ETHaddress"
              type="text"
              label="Address"
              placeholder= "ERC20 token compatible wallet"
              value={this.state.ETHaddress}
              onChange={this.handleChange}
            />
          </Panel>
          <Button type="submit"> Update preferences</Button>
        </form>
      </Col>
    </Row>
  </div>
    );
  }
}

class Wallet extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:"loading",
    }
  }

  componentWillMount(){ 
    getUserProfile().then( 
      res => {
        this.setState({user:res.data})
      }
    )
  }

  render(){
    if(this.state.user==='loading'){ 
      return(<div>Loading your wallet preferences</div>)}
    else if(!this.state.user){
      return( <div>Redirect to Home</div>)
    }else if (!this.state.user.wallet){
      axios(
        {
          baseURL:'https://wt-davidweiss-dnavid_com-0.run.webtask.io',
          url: 'updateUser.js',
          params: {
            key: "wallet",
            text: walletDefault,
            json: true
          },
          method: 'post',
          headers: {Authorization: 'Bearer ' + localStorage.id_token}
        }
      )
      return(
        <WalletSetup
          wallet={walletDefault}
        />
      )

    }else{
      return(
        <WalletSetup
          wallet={this.state.user.wallet}
        />
      )} 
  }
}

export default Wallet
