import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component{

  handleFetch(url){
  this.props.clear();
  fetch(url)
    .then(response => response.json() )
    .then(responseJson => {
      this.props.getPersonages((responseJson.results || []).map(item => {
        item['likes'] = +localStorage.getItem(item.name) || 0 
        return item }
      ));
      this.props.getNext(responseJson.next || `https://swapi.co/api/people/`);
      this.props.getPrevious(responseJson.previous || `https://swapi.co/api/people/`);
     })
  }
  render() {
    const people = this.props.people || [];
    const next = this.props.paging.next;
    const previous = this.props.paging.previous;
    return (
    	<div className="photo-grid-wrap">
	      <div className="control-buttons">
	      	<button className="button" onClick={this.handleFetch.bind(this, previous)}>Previous</button>
	      	<button className="button" onClick={this.handleFetch.bind(this, next)}>Next</button>
	      </div>
	      <div className="photo-grid">
	        {people.map((item, i) => <Photo {...this.props} key={i} i={i} post={item} />)}
	      </div>
	    </div>
    )
  }
}

export default PhotoGrid;
