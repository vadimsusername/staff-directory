import React from "react";
import "./style.css";


class Search extends React.Component {
    state = {
        found:""
    };

    handleSearch = () => {
        var justNames = this.props.employees.map(employee => {
            return employee.name.replace(" ","").toLowerCase();
        });
        var searchFor = document.getElementById("search").value;
        var index = justNames.indexOf(searchFor.replace(" ","").toLowerCase());
        if(index === -1){
            this.props.getEmployee(null);
        }else{
            this.props.getEmployee([this.props.employees[index]]);
        }
    };
    render(){
        return (
        <>
            <label for="search">Name:</label>
            <input type="text" id="search" name="name" ></input>
            <button className="searchBtn" onClick={this.handleSearch}>Search</button>
        </>
        );
    }
}

export default Search;