import React from 'react'
import Layout from '../components/Layout'
import EmployeeTable from '../components/EmployeeTable'
import { GetServerSideProps } from 'next';
import { Employee } from '../components/EmployeeRow';

type Props = {
  employeeList: Employee[]
}

// This is the entrypoint / base for the whole application
const Home : React.FC<Props> = props => {
  return (
    <Layout>
      <div className='container'>
        <h1>Employees</h1>
        <div className="card">
          <div className="card-body py-0">
            <EmployeeTable initialEmployeeList={props.employeeList}/>

          </div>
        </div>


      </div>
    </Layout>
  )
}

// This allows us to render the table on the server side 
export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch('http://localhost:3001/feed')
  // const feed = await res.json()

  const mockEmployeeList = [
    {  id: 1,
      firstName: "John",
      lastName: "Smith",
      salary: 5400,
    },
    {  id: 2,
      firstName: "Jenna",
      lastName: "Smith",
      salary: 1400,
    }
  ];

  return {
    props: { employeeList: mockEmployeeList},
  }
}

export default Home;
