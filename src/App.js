import React from 'react';
import './App.css';
import Header from "./components/Header";
import Table from "./components/Table";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    data: [
      {
        name: "John",
        phone: "267-544-2354"
      },
      {
        name: "Mike",
        phone: "326-954-0286"
      },
      {
        name: "Lauren",
        phone: "896-376-7204"
      }
    ]
  }

  callback = (dataFromSearch) => {
    this.setState({data:dataFromSearch});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search employees={this.state.data} getEmployee={this.callback} />
        <Table employees={this.state.data || [{name:"----", phone:"----"}]}/>
      </div>
    );
  }
}

export default App;
