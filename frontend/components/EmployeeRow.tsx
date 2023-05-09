import React, { useState } from 'react'
import Router from 'next/navigation'

export type EmployeeProps = {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
}

const EmployeeRow: React.FC<{employee: EmployeeProps}> = ({ employee}) => {

    const [isEditMode, setEditMode] = useState(false);
    const onEdit = () => {
        setEditMode(true);
    }
    const onCancel = () => {
        setEditMode(false);
    }

    if(isEditMode){
        return (
            <tr key={employee.id} className="align-middle">
                <td style={{maxWidth: '2rem'}}><input className="form-control" value={employee.firstName}/></td>
                <td style={{maxWidth: '2rem'}}><input className="form-control" value={employee.lastName}/></td>
                <td style={{maxWidth: '2rem'}}><input className="form-control" value={employee.salary}/></td>
                <td style={{minWidth: '4.5rem'}}>
                <button type="button" className="btn btn-outline-success" onClick={onEdit}>Save</button>&nbsp;
                <button type="button" className="btn btn-outline-danger" onClick={onCancel}>Cancel</button>
                </td>          
            </tr>   
          )
    }
    else return (
        <tr key={employee.id} className="align-middle">
          <td style={{maxWidth: '2rem'}}>{employee.firstName}</td>
          <td style={{maxWidth: '2rem'}}>{employee.lastName}</td>
          <td style={{maxWidth: '2rem'}}>${employee.salary}</td>
          <td style={{minWidth: '4.5rem'}}>
            <button type="button" className="btn btn-outline-info" onClick={onEdit}>Edit</button>&nbsp;
            <button type="button" className="btn btn-outline-danger">Delete</button>
          </td>          
        </tr>   
  )

}



export default EmployeeRow;