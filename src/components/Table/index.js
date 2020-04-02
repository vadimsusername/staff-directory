import React from "react";
import "./style.css";


class Table extends React.Component {
    render(){
        return (
        <table>
            { this.props.employees.map(row => {

                return (
                    <tr>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.phone}
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