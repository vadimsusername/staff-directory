import React from 'react';
import './App.css';
import Header from "./components/Header";
import Table from "./components/Table";
import Search from "./components/Search";
import staffData from "./staff.json";
class App extends React.Component {
  state = {
    staff: staffData
  }

  callback = (dataFromSearch) => {
    this.setState({staff:dataFromSearch});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search employees={this.state.staff} getEmployee={this.callback} />
        <Table employees={this.state.staff || [{name:"----", phone:"----"}]}/>
      </div>
    );
  }
}

export default App;
