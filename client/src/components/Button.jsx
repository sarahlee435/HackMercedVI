import React from "react";
import PopUp from "./PopUp"; 

export default class App extends React.Component {
  state = {
   seen: false
   };
  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };

render() {
  return (
   <div>
    <div className="btn" onClick={this.togglePop}>
      <button id="addEvent">Add Event</button>
    </div>
    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
   </div>
  );
 }
}