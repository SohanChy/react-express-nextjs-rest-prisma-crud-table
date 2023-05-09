import React from 'react'
import Router from 'next/navigation'

export type EmployeeProps = {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
}

const EmployeeTable: React.FC<{employeeList: EmployeeProps[]}> = ({ employeeList }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Salary</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {employeeList.map((employee)=>(
        <tr key={employee.id}>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>${employee.salary}</td>
          <td><button type="button" className="btn btn-light">Edit</button> <button type="button" className="btn btn-danger">Delete</button></td>
          
        </tr>        
        ))}
       </tbody>
    </table>
  )
}



export default EmployeeTable