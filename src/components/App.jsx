
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidData: window.exampleVideoData,
      currentVid: window.exampleVideoData[0]//Can change to this.state.vidData[index];
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchHelperCB = this.searchHelperCB.bind(this);
  }
  
  // componentDidMount() {
  //   var data = {key: window.YOUTUBE_API_KEY, q:'cats', maxResults: 10 };
    
  //   //FROM SOLUTION
  //   this.props.searchYouTube(data, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }
  
  handleSearch(searchVidName) {
    let data = {
      q: searchVidName,
      maxResults: 5,
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      chart: 'mostPopular'
    };
    //searchYouTube(data, this.searchHelperCB);\
    var context = this;
    var newestSearch = function() { searchYouTube(data, context.searchHelperCB); };
    _.debounce(newestSearch, 500 )();
    //searchYouTube(data, this.searchHelperCB);
  }
  
  searchHelperCB(data) {
    console.log('DATA', data);
    this.setState({
      vidData: data,
      currentVid: data[0]
    });
  }
  
  handleClick(curVid) {
    //need to change the current video
    // var debouncedClick = function() { context.setState({currentVid: curVid}); };
    // _.debounce(debouncedClick, 500);
    this.setState({currentVid: curVid});
  }
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchButton={this.handleSearch}/></div>
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





