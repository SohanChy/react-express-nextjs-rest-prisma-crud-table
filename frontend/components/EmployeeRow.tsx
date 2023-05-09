import React from 'react'
import Router from 'next/navigation'

export type EmployeeProps = {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
}

const EmployeeRow: React.FC<{
    employee: EmployeeProps, editMode: boolean }> = ({ employee, editMode = false }) => {
    if(editMode){
        <p>tbd</p>
    }
    else return (
        <tr key={employee.id} className="align-middle">
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>${employee.salary}</td>
          <td>
            <button type="button" className="btn btn-outline-info">Edit</button>&nbsp;
            <button type="button" className="btn btn-outline-danger">Delete</button>
          </td>          
        </tr>   
  )
}



export default EmployeeRow