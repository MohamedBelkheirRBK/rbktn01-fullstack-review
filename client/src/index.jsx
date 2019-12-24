import React from 'react';
import ReactDOM from 'react-dom';
import { get, find } from './service.js';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setter = this.setter.bind(this)
    this.state = {
      repos: []
    }
    this.init()
  }

  setter(repos){

    this.setState({repos: repos})
  }

  init () {
    get(this.setter)
  }



  search (term) {
    find(term, this.setter)
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));