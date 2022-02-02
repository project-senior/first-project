import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  render () {
    return (<div>

      <h1>Item List</h1>
      <List items={this.state.items}/>
      <Login />
      <Signup />
      <Home />

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));