import React from 'react'
import Layout from '../components/Layout'
import EmployeeTable from '../components/EmployeeTable'
import { GetServerSideProps } from 'next';
import { EmployeeProps } from '../components/EmployeeRow';

type Props = {
  employeeList: EmployeeProps[]
}


const Home : React.FC<Props> = props => {
  return (
    <Layout>
      <div className='container' style={{background: "white"}}>
        <h1>Employees</h1>
          <EmployeeTable initialEmployeeList={props.employeeList}/>
      </div>
    </Layout>
  )
}

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
