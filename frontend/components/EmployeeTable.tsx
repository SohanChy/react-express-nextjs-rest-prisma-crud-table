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
        <tr>
          <th scope="row">John</th>
          <td>Smith</td>
          <td>5000$</td>
          <td>5000$</td>
        </tr>
       </tbody>
    </table>
  )
}

export default EmployeeTable;