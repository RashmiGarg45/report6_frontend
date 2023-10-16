import React, {useMemo} from "react";
import {useTable} from 'react-table'
import {COLUMNS} from './columns_table'
import './table.css'

export const BasicTable = (props) => {
    const {resp_data} = props;

const columns = useMemo(() => {
        return COLUMNS(resp_data);
    }, [resp_data]);

console.log(columns)

const data = useMemo(() => resp_data, [resp_data]);
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
});

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))
                            }
                            
                        </tr>
                    ))
                }
                
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    })
                                }
                                
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}