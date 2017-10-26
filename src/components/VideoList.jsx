var VideoList = (props) => (
  <div className="video-list">
     {props.videos.map((vid, index) =>
        <VideoListEntry key={index} titleSelect={props.selectedVid} video={vid}/>
     )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
  //selectedVid
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
// console.log("video list",VideoList);
// console.log("EXD", exampleVideoData);
// console.log("props", props);


 // {props.exampleVideoData.map(video =>
 //       <li class="media-player">{video}</li>
 //     )}
 
 