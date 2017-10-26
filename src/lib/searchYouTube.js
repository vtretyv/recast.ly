var searchYouTube = (options, callback) => {
  // TODO
  console.log('OPTIONS', options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {
      console.log('RECIEVED DATA:', data);
      var parsedData = data.items;
      callback(parsedData);
    },
    error: function() {
      console.log('GET REQUEST FAILED');
    }
  });
};

window.searchYouTube = searchYouTube;
