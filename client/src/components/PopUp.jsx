import React, { Component } from "react";
export default class PopUp extends Component {


    constructor(props){
        super(props)

        this.state ={

            event: '',
            time: '',
            day: '',
            notes: ''


        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEventChange = (event) => {
     
        this.setState({
        event: event.target.value
        })
    }

    handleTimeChange = (event) => {
        this.setState({
        time: event.target.value
        })
    }

    handleDayChange = (event) => {
        this.setState({
        day: event.target.value
        })
    }

    handleNotesChange = event => {
        this.setState({
        notes: event.target.value
        })
    }


     handleSubmit = event => {

     

    if(this.state.event === '' || this.state.time === '' || this.state.notes === '' || this.state.day === ''){
        alert(`One or more of the inputs are empty`)
        event.preventDefault();
     } else{
        
        this.setState( { event: '' });
        this.setState( { time: '' });
        this.setState({  day:''});
        this.setState({  notes:''});
     
         event.preventDefault();
    }
       
}




  handleClick = () => {
   this.props.toggle();
  };



render() {


  return (

   <div className="modal">
     <div className="modal_content" >
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <form onSubmit={this.handleSubmit}>
<p class = "inputs" >

    <p>Event Name: </p>
    <textarea id="inputs" value={this.state.event} type='text' onChange = {this.handleEventChange} placeholder='Event'  name='event'/></p>

    <p class = "inputs">
    <p>Time: </p>
    <textarea id="inputs" value={this.state.time} type='text' onChange = {this.handleTimeChange} placeholder='Time' name='time'   /></p>
    
    <p class = "inputs" >
    <p>Day of Week: </p>
     <textarea id="inputs"  value={this.state.day} type='text' onChange = {this.handleDayChange} placeholder='Day of Week' name='day' /></p>
   
     <p class = "inputs" >
    <p>Notes: </p>
    <textarea id="notes" value={this.state.notes} type='text' onChange = {this.handleNotesChange} placeholder='Notes:' name='notes' /> </p>
    
    


    <p>
        
        <button id="formButton" >Submit</button></p>
    </form>

    </div>
   </div>
  );
 }
}
