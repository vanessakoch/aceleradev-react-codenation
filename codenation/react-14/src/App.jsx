import React, { Component } from 'react';
import { URL } from "./constants";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Loading from "./components/Loading";

import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: [],
      search: '',
      sort: 'id',
      loading: false
    };
   
    this.handleTextFilter = this.handleTextFilter.bind(this);
    this.handleButtonFilter = this.handleButtonFilter.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await fetch(URL)
      .then(res => res.json())
      .then(res => this.setState({ contacts: res }))

    this.setState({
      characters: response,
      loading: false
    });
  }

  handleTextFilter(inputSearch) {
    this.setState({
      search: inputSearch
    });
  }

  handleButtonFilter(name) {
    this.setState({
      sort: name
    });
  }

  render() {

    const inputSearch = this.state.search.toLowerCase();
    const sort = this.state.sort;
    const data = this.state.contacts
      .filter(item => item.name.toLowerCase().indexOf(inputSearch) !== -1)
      .sort((a, b) => (a[sort] > b[sort]) ? 1 : (a[sort] < b[sort]) ? -1 : 0)

    return (
      
      <div className="app" data-testid="app">

        <Topbar />

        <Filters
          inputSearch={this.setState.search}
          onTextFilter={this.handleTextFilter}
          onButtonFilter={this.handleButtonFilter}
          sort={this.state.sort}
        />
        
        <Contacts >
          {this.state.loading ? <Loading /> : null}
          { data.map(contact => <Contact data={contact}/> )}
        </Contacts>

      </div>
    )
  }
}

export default App;