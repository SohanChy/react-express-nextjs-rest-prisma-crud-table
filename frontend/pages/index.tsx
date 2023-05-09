import React from 'react'
import Layout from '../components/Layout'
import EmployeeTable, { EmployeeProps } from '../components/EmployeeTable'
import { GetServerSideProps } from 'next'

type Props = {
  employeeList: EmployeeProps[]
}

// Need to bring this from server later
const employeeList = [
  {  id: 1,
    firstName: "John",
    lastName: "Smith",
    salary: 5400,
  }
];

const Home : React.FC<Props> = props => {
  return (
    <Layout>
      <div>
        <h1>Employees</h1>
          <EmployeeTable employeeList={employeeList}/>
      </div>
    </Layout>
  )
}

export default Home
