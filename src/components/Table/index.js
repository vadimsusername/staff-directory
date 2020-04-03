import React from "react";
import "./style.css";


class Table extends React.Component {

    

    handleSortAscending = (event) => {
      
        var employeesCopy = this.props.employees;
        var sorted = employeesCopy.sort((employeeA,employeeB) => {
            if(employeeA.name.toLowerCase() < employeeB.name.toLowerCase()){
                return -1;
            }else if(employeeB.name.toLowerCase() < employeeA.name.toLowerCase()){
                return 1;
            }else {
                return 0;
            }          
        })
        console.log(sorted);
        this.props.sortEmployees(sorted);
        return sorted;
    };

    handleSortDescending = (event) => {
      
        var employeesCopy = this.props.employees;
        var sorted = employeesCopy.sort((employeeA,employeeB) => {
            if(employeeA.name.toLowerCase() < employeeB.name.toLowerCase()){
                return 1;
            }else if(employeeB.name.toLowerCase() < employeeA.name.toLowerCase()){
                return -1;
            }else {
                return 0;
            }          
        })
        console.log(sorted);
        this.props.sortEmployees(sorted);
        return sorted;
    };

    render(){
        return (
        <table>
            <tr>
                <th>
                    Image
                </th>
                <th >
                    <img className="arrow" id="down" src="https://cdn.pixabay.com/photo/2013/07/12/13/52/arrow-147464_960_720.png" alt="Sort Ascending" onClick={this.handleSortAscending}></img>Name<img className="arrow" id="up" src="https://cdn.pixabay.com/photo/2016/03/31/18/34/arrow-1294471_960_720.png" alt="Sort Descending" onClick={this.handleSortDescending}></img>
                </th>
                <th>
                    Phone
                </th>
                <th>
                    Email
                </th>
                <th>
                    DOB
                </th>
            </tr>
            { this.props.employees.map(row => {
                
                return (
                    <tr>
                        <td>
                            <img src={row.img} alt="Profile"></img>
                        </td>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.phone}
                        </td>
                        <td>
                            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">{row.email}</a>
                        </td>
                        <td>
                            {row.dob}
                        </td>
                    </tr>
                )
            })

            }
        </table>
        );
    }
}

export default Table;