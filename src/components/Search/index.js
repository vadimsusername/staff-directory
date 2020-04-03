import React from "react";
import "./style.css";


class Search extends React.Component {
    state = {
        searchInitiated : false,
        searchValue: "Search"
    }

    handleInput = (event) => {
        var searchTerm = event.target.value.toLowerCase().trim();
       
        var filtered = this.props.employees.filter(employee => {

            return employee.name.toLowerCase().startsWith(searchTerm);

        });

        this.props.getEmployee(filtered);
        return;

    }
    render(){
        return (
        <div>
            <label for="search">Search By Name:</label>
            <input type="text" id="search" name="name" onChange={this.handleInput} placeholder="Search"></input>
        </div>
        );
    }
}

export default Search;