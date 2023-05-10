import React, { useEffect, useState } from 'react'
import Router from 'next/navigation'
import { EmployeeApi } from '../api/employee';

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
  updatedAt: string
}

const EmployeeRow: React.FC<{employee: Employee, 
  isUpdating: boolean, updateEmployee, deleteEmployee, onCreateCancel?}> = 
  ({ employee, isUpdating, updateEmployee, deleteEmployee, onCreateCancel}) => {

    const [isEditMode, setEditMode] = useState(false);
    const [employeeForm, setEmployeeForm] = useState(employee);
    const [hasTouched, setHasTouched] = useState(false);

    // Reset state whenever employee id prop changes
    useEffect(() => {
      // On new creations id is null
      if(employee.id){
        setEditMode(false);
      }
      else {
        setEditMode(true);
      }
      
      setEmployeeForm(employee);
    }, [employee.id]);


    useEffect(() => {
      if(!isUpdating && employee.id){
        setEditMode(false);
      }      
    }, [isUpdating]);


    const onEdit = () => {
        setEditMode(true);
    }
    const onCancel = () => {
      if(employee.id){
        setEditMode(false);
      }
      else {
        onCreateCancel();
      }
        
    }

    // TODO: Must add confirmation dialog
    const onDelete = () => {
      deleteEmployee(employee);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasTouched(true);
      const { name, value } = e.target;
      setEmployeeForm({ ...employeeForm, [name]: value });
    };

    const onSave = () => {
      updateEmployee(employeeForm);
    }

    // Internal component to show loading animation when updating
    const SaveContent = () => {
      if(isUpdating){
        return <img style={{maxHeight: "1em"}} src='loading.gif'></img>;
      }
      else return <>Save</>;
    }

    // Display the inline form when in edit mode
    if(isEditMode){
        return (
            <tr key={employee.id} className="align-middle">
                <td style={{maxWidth: '2rem'}}>
                  <input name="firstName" onChange={handleInputChange} className="form-control" value={employeeForm.firstName}/>
                </td>
                <td style={{maxWidth: '2rem'}}>
                  <input name="lastName" onChange={handleInputChange} className="form-control" value={employeeForm.lastName}/>
                </td>
                <td style={{maxWidth: '2rem'}}>
                  <input name="salary" onChange={handleInputChange} className="form-control" value={employeeForm.salary} type="number"/>
                </td>
                <td style={{minWidth: '4.5rem'}}>
                <button style={{minWidth: '3.5rem'}} type="button" className="btn btn-outline-success mt-1" disabled={!hasTouched} onClick={onSave}><SaveContent/></button>&nbsp;
                <button type="button" className="btn btn-outline-danger mt-1" disabled={isUpdating} onClick={onCancel}>Cancel</button>
                </td>          
            </tr>
          )
    }
    else return (
        <tr key={employee.id} className="align-middle">
          <td style={{maxWidth: '2rem'}}>{employeeForm.firstName}</td>
          <td style={{maxWidth: '2rem'}}>{employeeForm.lastName}</td>
          <td style={{maxWidth: '2rem'}}>{employeeForm.salary
          .toLocaleString(
            'en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}</td>
          <td style={{minWidth: '4.5rem'}}>
            <button type="button" className="btn btn-outline-info mt-1" onClick={onEdit}>Edit</button>&nbsp;
            <button type="button" className="btn btn-outline-danger mt-1" disabled={isUpdating} onClick={onDelete}>Delete</button>
          </td>          
        </tr>   
  )

}


export default EmployeeRow;