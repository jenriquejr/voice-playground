import React, { Component } from 'react';

class SourceControls extends Component {
  handleFileSelected = () => {
    console.log(this.file);
  }

  createInputRef = (input) => {
    this.file = input;
  };

  render() {
    return <input ref={this.createInputRef} type="file" onChange={this.handleFileSelected} />;
  }
}

export default SourceControls;
