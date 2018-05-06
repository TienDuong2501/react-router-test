import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked : true
    }
  }
  onClick = (isChecked) => {
    this.setState({
      isChecked :isChecked
    })
  }

  render() {

    var {isChecked} = this.state;
    
    return (
      <div>
        This is Contact<br/>
        <button type="butotn" className="btn btn-inf" onClick = { () => this.onClick(false) }>Cho phep</button><br/>
        <button type="butotn" className="btn btn-inf" onClick = { () => this.onClick(true) }> ko cho phep</button><br/>
        <Prompt
        //when la true thi khi click vao button thi promt se dc kich hoat
          when={isChecked}
          message = { location => (`Ban chac chan muon den tran ${location.path}`)}
        />
        </div>
    );
  }
}

export default Contact;
