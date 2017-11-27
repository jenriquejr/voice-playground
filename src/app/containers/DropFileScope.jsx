import React, { Component } from 'react';

class DropFileScope extends Component {

  state = { fileBuffer: null };

  handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const [file] = e.dataTransfer.files;
    if (file.type.includes('audio')) {
      const reader = new FileReader();
      reader.onload = (e) => this.setState({ fileBuffer: e.target.result });
      reader.readAsArrayBuffer(file);
    }
  };

  componentDidMount() {
    window.addEventListener('dragover', this.handleDragOver);
    window.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    window.addEventListener('dragover', this.handleDragOver);
    window.removeEventListener('drop', this.handleDrop);
  }

  render() {
    const { fileBuffer } = this.state;
    return (
      <div className="drop-file-scope">
        {fileBuffer ? this.props.render(fileBuffer) : <h1>Drop an audio file here</h1>}
      </div>
    );
  }
}

export default DropFileScope;
