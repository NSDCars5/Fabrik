import React from 'react';
import ReactTooltip from 'react-tooltip';

class TopBar extends React.Component {
  componentWillMount() {
    this.setState({ "loginState": "in" })
    this.checkLogin();
  }
  checkLogin() {
    $.ajax({
      url: '/backendAPI/checkLogin',
      type: 'GET',
      processData: false,  // tell jQuery not to process the data
      contentType: false,
      success: function (response) {
          this.setState({ "loginState": response.result })
          this.forceUpdate()
      }.bind(this)
    });
  }
  getButton() {
    if (this.state.loginState) {
      return(
        <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown"
                      onClick={() => window.location="/accounts/logout"} data-tip="Log Out">
                        <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
        </button>
      )
    }
    else {
      return(
        <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown"
                      onClick={() => window.location="/accounts/github/login"} data-tip="Log In">
                        <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
        </button>
      )
    }
  }
  render() {
    return (
      <div className="topBar">
        <div className="row">
            <div className="col-md-2">
              <div className="form-group">
                    <div className="dropdown">
                      {this.getButton()}
                    </div>
                </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                  <div className="dropdown">
                    <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown"
                    onClick={() => this.props.zooModal()} data-tip="Load from zoo">
                      <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
                    </button>
                  </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <div className="dropdown">
                  <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown" data-tip="Export">
                    <span className="glyphicon glyphicon-export" aria-hidden="true"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="btn" href="#" onClick={() => this.props.exportNet('caffe')}>Caffe</a></li>
                    <li><a className="btn" href="#" onClick={() => this.props.exportNet('keras')}>Keras</a></li>
                    <li><a className="btn" href="#" onClick={() => this.props.exportNet('tensorflow')}>Tensorflow</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <div className="dropdown">
                  <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown" data-tip="Import">
                    <span className="glyphicon glyphicon-import" aria-hidden="true"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                        <a className="btn">
                        <label htmlFor="inputFilecaffe">Caffe</label>
                        <input id="inputFilecaffe" type="file" accept=".prototxt" onChange={() => this.props.importNet('caffe', '')}/>
                        </a>
                    </li>
                    <li>
                        <a className="btn">
                        <label htmlFor="inputFilekeras">Keras</label>
                        <input id="inputFilekeras" type="file" accept=".json" onChange={() => this.props.importNet('keras', '')}/>
                        </a>
                    </li>
                    <li>
                        <a className="btn">
                        <label htmlFor="inputFiletensorflow">Tensorflow</label>
                        <input id="inputFiletensorflow" type="file" accept=".pbtxt" onChange={() => this.props.importNet('tensorflow', '')}/>
                        </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown"
                onClick={() => this.props.saveDb()} data-tip="Save">
                    <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                </button>
              </div>
            </div>
        </div>
      <ReactTooltip type="dark" multiline={true}/>
      </div>
    );
  }
}

TopBar.propTypes = {
  exportNet: React.PropTypes.func,
  importNet: React.PropTypes.func,
  saveDb: React.PropTypes.func,
  loadDb: React.PropTypes.func,
  zooModal: React.PropTypes.func
};

export default TopBar;
