var Search = (props) => (
// need to change this to a class
  <div className="search-bar form-inline">
    <input onKeyUp={() => props.searchButton($('input').val())} className="form-control" type="text" />
    <button onClick= {() => props.searchButton($('input').val())} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//Taken from line 4
//onKeyUp={() => props.searchButton($('input').val())} 