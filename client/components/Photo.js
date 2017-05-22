import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component{

  componentDidUpdate(){
    const { i, people } = this.props
    localStorage.setItem(people[i].name, people[i].likes)
  }

  render() {
    const { people, i, likes, increment} = this.props;
    
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${people[i].name}`}>
            <div className="grid-photo">
              <h5 >{people[i].name}</h5>
              <p><span className="label">gender:</span><span className="italic">{people[i].gender}</span></p>
              <p><span className="label">height:</span><span className="italic">{people[i].height}</span></p>
              <p><span className="label">eye_color:</span><span className="italic">{people[i].eye_color}</span></p>
              <p><span className="label">hair_color:</span><span className="italic">{people[i].hair_color}</span></p>
              <p><span className="label">mass:</span><span className="italic">{people[i].mass}</span></p>
            </div>
          </Link>
          <CSSTransitionGroup 
            transitionName="like" 
            transitionEnterTimeout={500} 
            transitionLeaveTimeout={500}>
            <span key={people[i].likes} 
              className="likes-heart">
              {people[i].likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
         <div className="control-buttons">
            <button onClick={increment.bind(null, i)} className="likes">&hearts; {people[i].likes}</button>
          </div>
        </figcaption>

      </figure>
    )
  }
}

export default Photo;

