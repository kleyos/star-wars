import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  componentWillMount(){
    fetch(`https://swapi.co/api/people/`)
    .then(response => response.json() )
    .then(responseJson => {
      this.props.getPersonages((responseJson.results || []).map(item =>{
        item['likes'] = +localStorage.getItem(item.name) || 0 
        return item 
      }
      ));
      
      responseJson.results.forEach( item => localStorage.setItem(item.name, item.likes));

      this.props.getNext(responseJson.next||`https://swapi.co/api/people/`);
      this.props.getPrevious(responseJson.previous||`https://swapi.co/api/people/`);
     
     })
  }
  render() {

    console.log('myStorage', localStorage)
    return (
      <div>
        <h1>
          <Link to="/">StarWars Personages</Link>
        </h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
}
export default Main;
