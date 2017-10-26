
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //data in state
      //current video in state
      vidData: window.exampleVideoData,
      currentVid: window.exampleVideoData[0]
    };
  }
  
  handleClick() {
    //uncomment this
      //but need to change the current video
    // this.setState({
    //   //this.currentVid: 
    // });
    console.log('clicked');
  }
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVid}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.vidData} selectedVid={this.handleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}

//onClick={this.handleClick.bind(this)}  TOOK OUT OF LINE 30

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//Don't need to render these two as they are rendered by line 45
// ReactDOM.render(<VideoPlayer />, document.getElementsByClassName('video-player'));
// ReactDOM.render(<VideoList />, document.getElementsByClassName('video-list'));





