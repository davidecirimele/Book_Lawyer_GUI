import {React,useMemo} from 'react';
import {useTable } from 'react-table';
import data_ex from '../components/data_ex.json';
import './table.css';

const COLUMNS = [
    {
        Header: 'Date',  
        accessor: 'date'  
    },
    {
        Header: 'Time',
        accessor: 'time'
    },
    {
        Header: 'State',
        accessor: 'state'
    },

];


const MyAppointment = () => {


    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> data_ex, [])
    console.log(data_ex)

    const  {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({ 
        columns,
        data

    })

    
    return (
        <div>
            <h1 className='title'>My Appointment</h1>

    <table {...getTableProps()}>
                <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
                </thead>
            
        <tbody {...getTableBodyProps()}> 
            {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}    
        </tbody>

        </table>
        </div>
    );
};

export default MyAppointment;