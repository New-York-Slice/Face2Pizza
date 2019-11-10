import React from 'react';


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      success: false,
      picture: null,
    }
    this.fileChanged = this.fileChanged.bind(this);
  }

  fileChanged = (event) => {
    const file = event.target.files[0];
    this.setState({
      picture: file,
    });
  }

  submitPicture = (event) => {
    const  fileType = this.state.picture['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (!validImageTypes.includes(fileType)) {
      this.state.error = true;
    }
    else { 
        this.state.success = true;
  }
}
render(){
  return (
    <React.Fragment>
          <div class="form-group">
            <label for="picture">Attach a picture of yourself</label>
              <input 
                  type="file" 
                  class="form-control-file" 
                  id="picture"            
                  onChange={this.fileChanged}
                  required
                />
            <button className="btn btn-primary" onClick={this.submitPicture}>Upload!</button>
    </div>
    </React.Fragment>
  );
}
}

export default Upload;