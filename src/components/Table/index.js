import React from "react";
import "./style.css";


class Table extends React.Component {
    render(){
        return (
        <table>
            <tr>
                <th>
                    Image
                </th>
                <th onClick={this.handleSort}>
                    <img className="arrow" src="https://cdn.pixabay.com/photo/2013/07/12/13/52/arrow-147464_960_720.png" alt="Sort Ascending"></img>Name <img className="arrow" src="https://cdn.pixabay.com/photo/2016/03/31/18/34/arrow-1294471_960_720.png" alt="Sort Descending"></img>
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