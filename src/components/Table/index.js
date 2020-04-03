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
                <th>
                    Name
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