import React, { Component } from 'react';
import Select from 'react-select';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import './App.css';
import flogo from './loading.gif'
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      api_url:'http://s2ic.truminds.co.in:10011',
      table:'students',
      rps:'10',
      concurr:'1',
      maxreq:'100',
      req_type:'GET',
      timeout:'100',
      output:"",
      n:"",
      comp: false
    }
  }
  handleClick=()=>{
    console.log(
      this.state.api_url,
      this.state.table,
      this.state.rps,
      this.state.concurr,
      this.state.maxreq,
      this.state.req_type,
      this.state.timeout
    )
    let body={
      urL:this.state.api_url,
      tablE:this.state.table,
      rpS:this.state.rps,
      concurR:this.state.concurr,
      maxreQ:this.state.maxreq,
      req_typE:this.state.req_type.label,
      touT:this.state.timeout
    }
    this.setState({comp: true})
    axios.post("http://10.206.14.43:5000/myapi",body)
    .then(response=>{
      this.setState({comp: false})
      // let myoutput = JSON.stringify(response.data);
      let myoutput = response.data;
      this.setState({output:myoutput})
      // alert(JSON.stringify(response.data));
    })
    .catch(err=> console.log("ERRROR"+err))
  }

  requesttype = [
    { label: "GET", value: 1 },
    { label: "POST", value: 2 },
    { label: "PUT", value: 3 },
  ];

  render() {
    console.log("this.state.output",this.state.output)
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
             title="API LOADTESTING"
             className="appbar"
        />
          <div style={{display:"flex",flexDirection:"row"}}>
          <div className="division" style={{width:"100px"}}>
          
          <TextField
            hintText="Enter the api url"
            floatingLabelText="API URL"
            value={this.state.api_url}
            onChange = {(event,newValue) => this.setState({api_url:newValue})}
            />
          <br/>
          <TextField
            hintText="Enter the table name"
            floatingLabelText="TABLE"
            value={this.state.table}
            onChange = {(event,newValue) => this.setState({table:newValue})}
            />
          <br/>
          <TextField
            hintText="Enter the requests per second"
            floatingLabelText="requests per second"
            value={this.state.rps}
            onChange = {(event,newValue) => this.setState({rps:newValue})}
            />
          <br/>
          <TextField
            hintText="Enter Concurrency"
            value={this.state.concurr}
            floatingLabelText="Concurrency"  
            onChange = {(event,newValue) => this.setState({concurr:newValue})}
            />
          <br/>
          <TextField
            hintText="Enter number of maximum requests"
            value={this.state.maxreq}
            floatingLabelText="Max Request"
            onChange = {(event,newValue) => this.setState({maxreq:newValue})}
            />
          <br/>
          <TextField
            hintText="Enter Timeout"
            value={this.state.timeout}
            floatingLabelText="TimeOut"
            onChange = {(event,newValue) => this.setState({timeout:newValue})}
            />
          <br/>
            <Select options={ this.requesttype } placeholder="REQUEST TYPE" value={this.req_type} onChange = {req_type => this.setState({req_type})} className="dropdown"/>
          <br/>
          <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.handleClick()}/>
         </div>
          { 
           this.state.comp && <img src={flogo} alt="Loading" style={{width:"250px",height:"250px", margin:"30%",marginTop:"100px"}}></img>
          }
         { !this.state.comp &&
          <div className="response">
            <p>OUTPUT RESPONSE :</p>
            <p>Total Requests => {this.state.output.totalRequests}</p>
            <p>Total time(in sec.) => {this.state.output.totalTimeSeconds}</p>
            <p>Requests per second => {this.state.output.rps}</p>
            <p>MeanLatency(in ms.) => {this.state.output.meanLatencyMs}</p>
            <p>MaxLatency(in ms.) => {this.state.output.maxLatencyMs}</p>
            <p>Percentiles => {JSON.stringify(this.state.output.percentiles)}</p>
            <p>ERRORS : {JSON.stringify(this.state.output.errorCodes)}</p>
            
          </div>
         }
          </div>
         </MuiThemeProvider>
         
         </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;