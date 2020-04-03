import React from "react";
import "./style.css";


class Search extends React.Component {
    state = {
        found:""
    };

    handleSearch = () => {
        console.log("in search");
        var justNames = this.props.employees.map(employee => {
            return employee.name.replace(" ","").toLowerCase();
        });
        console.log(justNames);
        var searchFor = document.getElementById("search").value;
        console.log(searchFor);
        var index = justNames.indexOf(searchFor.replace(" ","").toLowerCase());
        console.log(index);
        if(index === -1){
            this.props.getEmployee(null);
        }else{
            console.log(this.props.employees[index]);
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