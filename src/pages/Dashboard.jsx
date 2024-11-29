// rafce

import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import View from '../components/View'

const Dashboard = () => {
  return (
    <>
    <Header insideDashboard={true} />
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-lg-8">
          <h1>Welcome <span className="text-warning">User</span>,</h1>
          <View />
        </div>
        <div className="col-lg-4">
          <Profile />
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard