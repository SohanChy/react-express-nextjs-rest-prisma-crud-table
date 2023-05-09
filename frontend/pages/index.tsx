import React from 'react'
import Layout from '../components/Layout'
import EmployeeTable from '../components/EmployeeTable'
type Props = {
  
}

const Home : React.FC<Props> = props => {
  return (
    <Layout>
      <div>
        <h1>Employees</h1>
          <EmployeeTable employeeList={[]} />
      </div>
    </Layout>
  )
}

export default Home
