import React from "react";
import "./style.css";


class Search extends React.Component {

    handleInput = (event) => {
        //console.log("in search");
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
            <input type="text" id="search" name="name" onChange={this.handleInput} placeholder="Search"></input>
        </div>
        );
    }
}

export default Search;