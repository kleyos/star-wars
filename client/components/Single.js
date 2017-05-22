import React from 'react';
import Photo from './Photo';

class Single extends React.Component{
  render() {
    const { name } = this.props.params;
    const { people } = this.props.people;

    const i = this.props.people.findIndex((item) => item.name === name);
    const item = this.props.people[i];

    return (
      <div className="single-photo">
        <Photo i={i} post={item} {...this.props} />
        <div className=" grid-photo info">
          <h3>All Info</h3>
          <div className="well">{JSON.stringify(item, null, '\t').replace(/"/g, '')|| false}</div>
        </div>
      </div>
    )
  }
};

export default Single;
