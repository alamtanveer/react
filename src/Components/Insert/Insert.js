import React from 'react';
import {
    FormGroup,
    FormControl,
    ControlLabel,
    FormLabel,
    bsSize
  } from "react-bootstrap";

class Insert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Id:'',
            name:'',
            email:'',
            designation:'',
            disabled: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.updateButton =  this.updateButton.bind(this);
    }

    changeName = (data) => {
        this.setState({
            Id : data.Id,
            name : data.name,
            email : data.email,
            designation : data.designation,
            disabled: true
        })
    };

    resetForm = (data) => {
        this.setState({
            Id : data.Id,
            name : data.name,
            email : data.email,
            designation : data.designation,
            disabled: false
        })
        alert("userId is Already exist in List");
    }

    handleSubmit(e, param){
        e.preventDefault();
        this.objData = {
            Id:this.state.Id,
            name:this.state.name,
            email:this.state.email,
            designation:this.state.designation,
        }
        this.setState({Id:'', name:'', email:'', designation:''});
        this.props.triggerParent(this.objData, param);
    }

    updateButton(e){
        e.preventDefault();
        this.setState({disabled:false});
        this.props.triggerParent(this.objData);
        this.handleSubmit(e, "update");
    }

    handleFieldChange(event){
        switch(event.target.id){
            case 'ids':{
                this.setState({Id:event.target.value});
                break;    
            }
            case 'name':{
                this.setState({name:event.target.value});
                break;    
            }
            case 'email':{
                this.setState({email:event.target.value});
                break;    
            }            
            default : {
                this.setState({designation:event.target.value})    
            } 
        }
    }

    render () {
        const stl={
            background:'white',
            padding: '60px'
        };
        
        return (
            <form id="myForm" style={stl} onSubmit={(event)=>this.handleSubmit(event,'insert')}>
             <FormGroup controlId="ids" bsSize="large">
              <FormLabel>Id</FormLabel>
              <FormControl
                autoFocus
                type="ids"
                disabled={this.state.disabled}
                value={this.state.Id}
                 onChange={this.handleFieldChange}
              />
            </FormGroup>    
            <FormGroup controlId="name" bsSize="large">
              <FormLabel>Name</FormLabel>
              <FormControl
                autoFocus
                type="name"
                value={this.state.name}
                 onChange={this.handleFieldChange}
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                value={this.state.email}
                 onChange={this.handleFieldChange}
              />
            </FormGroup>
            <FormGroup controlId="designation" bsSize="large">
              <FormLabel>Designation</FormLabel>
              <FormControl
                type="designation"
                 onChange={this.handleFieldChange}
                 value={this.state.designation}
              />
            </FormGroup>
            <input type='submit' value="Insert" disabled={this.state.disabled} />
             <input
                type='submit' value="Update" disabled={!this.state.disabled} onClick={(event)=>{this.updateButton(event)}}/>    
          </form>
        )
    }
}

export default Insert;