import React from 'react'
import Router from 'next/navigation'
import EmployeeRow, { EmployeeProps } from './EmployeeRow'


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
          <EmployeeRow key={employee.id} employee={employee} editMode={false}/>
        ))}
       </tbody>
    </table>
  )
}



export default EmployeeTable