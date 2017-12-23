import React from 'react';
import PaneElement from './paneElement';
import $ from 'jquery'

class Pane extends React.Component {
  constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            data: false,
            vision: false,
            recurrent: false,
            utility: false,
            activation: false,
            normalization: false,
            common: false,
            noise: false,
            loss: false
        };
    }
    toggleClass() {
        var obj = {};
        for (var entry in this.state) {
            obj[entry] = $("#" + entry).attr("aria-expanded") === "true";
        }
        this.setState(obj);
    }
    render(){
      return (
        <div className="panel-group" id="menu" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="dataLayers"> </span>
                      Data
                    <a data-toggle="collapse" data-parent="#menu" href="#data" aria-expanded="false" aria-controls="data">
                      <span className={this.state.data ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('data')}></span>
                    </a>
                </div>
                <div id="data" className="panel-collapse collapse" role=" tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="ImageData">Image Data</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Data">Data</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="HDF5Data">HDF5 Data</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="HDF5Output">HDF5 Output</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Input">Input</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="WindowData">Window Data</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="MemoryData">Memory Data</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="DummyData">Dummy Data</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Python">Python</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="visionLayers"> </span>
                      Vision
                    <a data-toggle="collapse" data-parent="#menu" href="#vision" aria-expanded="false" aria-controls="vision">
                      <span className={this.state.vision ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('vision')}></span>
                    </a>
                </div>
                <div id="vision" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Convolution">Convolution</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Pooling">Pool</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Upsample">Upsample</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="LocallyConnected">Locally Connected</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Crop">Crop</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="SPP">SPP</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Deconvolution">Deconvolution</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="recurrentLayers"> </span>
                      Recurrent
                    <a data-toggle="collapse" data-parent="#menu" href="#recurrent" aria-expanded="false" aria-controls="recurrent">
                      <span className={this.state.recurrent ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('recurrent')}></span>
                    </a>
                </div>
                <div id="recurrent" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Recurrent">Recurrent</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="RNN">RNN</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="GRU">GRU</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="LSTM">LSTM</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="utilityLayers"> </span>
                      Utility
                    <a data-toggle="collapse" data-parent="#menu" href="#utility" aria-expanded="false" aria-controls="utility">
                      <span className={this.state.utility ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('utility')}></span>
                    </a>
                </div>
                <div id="utility" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Flatten">Flatten</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Reshape">Reshape</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="BatchReindex">Batch Reindex</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Split">Split</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Concat">Concat</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Eltwise">Eltwise</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Filter">Filter</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Reduction">Reduction</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Silence">Silence</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="ArgMax">ArgMax</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Softmax">Softmax</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Permute">Permute</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="RepeatVector">Repeat Vector</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Regularization">Regularization</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Masking">Masking</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="activationLayers"> </span>
                      Activation/Neuron
                    <a data-toggle="collapse" data-parent="#menu" href="#activation" aria-expanded="false" aria-controls="activation">
                      <span className={this.state.activation ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('activation')}></span>
                    </a>
                </div>
                <div id="activation" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="ReLU">ReLU/Leaky-ReLU</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="PReLU">PReLU</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="ELU">ELU</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="ThresholdedReLU">Thresholded ReLU</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="SELU">SELU</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Softplus">Softplus</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Softsign">Softsign</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Sigmoid">Sigmoid</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="TanH">TanH</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="HardSigmoid">Hard Sigmoid</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="AbsVal">Absolute Value</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Power">Power</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Exp">Exp</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Log">Log</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="BNLL">BNLL</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Threshold">Threshold</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Bias">Bias</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Scale">Scale</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="normalizationLayers"> </span>
                      Normalization
                    <a data-toggle="collapse" data-parent="#menu" href="#normalization" aria-expanded="false" aria-controls="normalization">
                      <span className={this.state.normalization ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('normalization')}></span>
                    </a>
                </div>
                <div id="normalization" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="LRN">LRN</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="MVN">MVN</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="BatchNorm">Batch Norm</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="commonLayers"> </span>
                      Common
                    <a data-toggle="collapse" data-parent="#menu" href="#common" aria-expanded="false" aria-controls="common">
                      <span className={this.state.common ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('common')}></span>
                    </a>
                </div>
                <div id="common" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="InnerProduct">Inner Product</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Dropout">Dropout</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Embed">Embed</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="noiseLayers"> </span>
                      Noise
                    <a data-toggle="collapse" data-parent="#menu" href="#noise" aria-expanded="false" aria-controls="noise">
                      <span className={this.state.noise ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('noise')}></span>
                    </a>
                </div>
                <div id="noise" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="GaussianNoise">Gaussian Noise</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="GaussianDropout">Gaussian Dropout</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="AlphaDropout">Alpha Dropout</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <span className="badge sidebar-badge" id="lossLayers"> </span>
                      Loss
                    <a data-toggle="collapse" data-parent="#menu" href="#loss" aria-expanded="false" aria-controls="loss">
                      <span className={this.state.loss ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} onClick={() => this.toggleClass('loss')}></span>
                    </a>
                </div>
                <div id="loss" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="MultinomialLogisticLoss">Multinomial Logistic Loss</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="InfogainLoss">Infogain Loss</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="SoftmaxWithLoss">Softmax With Loss</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="EuclideanLoss">Euclidean Loss</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="HingeLoss">Hinge Loss</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="SigmoidCrossEntropyLoss">Sigmoid Cross Entropy Loss</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Accuracy">Accuracy</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="ContrastiveLoss">Contrastive Loss</PaneElement>
                    <PaneElement setDraggingLayer={this.props.setDraggingLayer}
                      handleClick={this.props.handleClick}
                      id="Python">Python</PaneElement>
                  </div>
                </div>
              </div>
        </div>


      );
  }
}
Pane.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  setDraggingLayer: React.PropTypes.func.isRequired
};
export default Pane;