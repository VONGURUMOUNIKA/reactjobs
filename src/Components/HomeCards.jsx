import React from 'react';
import HomeCard from './HomeCard.jsx';
import {Link} from "react-router-dom"

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
       <HomeCard>
       <h2 className="text-2xl font-bold">For Job Seekers</h2>
          <p className="mt-2 mb-4">
            Browse  jobs and start your career today
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs & Companies
          </Link>
       </HomeCard>
          
        <HomeCard bg='bg-teal-200'>
        <h2 className="text-2xl font-bold">For Recruiters</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect candidate for the role
          </p>
          <Link
            to="/add-job"
            className="inline-block bg-teal-700 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Add Job
          </Link>
        </HomeCard>
      </div>
    </div>
  </section>
  )
}

export default HomeCards