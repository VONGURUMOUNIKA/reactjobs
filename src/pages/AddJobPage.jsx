import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AddJobPage = ({ addJobSubmit }) => {
   
    const[type, setType] = useState('');
    const[role, setRole] = useState('');
    const[description, setDescription] = useState('');
    const[salary, setSalary] = useState('');
    const[location, setLocation] = useState('');
    const[companyName, setCompanyName] = useState('');
    const[companyDescription, setCompanyDescription] = useState('');
    const[contactEmail, setContactEmail] = useState('');
    const[contactPhone, setContectPhone] = useState('');


    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            type,
            role,
            description,
            salary,
            location,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            },
        };

        addJobSubmit(newJob);

        return navigate('/jobs')
    }


  return (
    <section className="bg-teal-50">
    <div className="container bg-white m-auto max-w-2xl py-24">
      <div
        className="bg-teal-950 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form onSubmit={submitForm}>
          <h2 className=" text-white 500 text-3xl text-center font-semibold mb-6">Add Job</h2>

          <div className="mb-4">
            <label htmlFor="type" className="block text-white font-bold mb-2"
              >Job Type : 
              </label>
            <select
              id="type"
              name="type"
              className="text-white border rounded w-full py-2 px-3"
              required
              value={type}
              onChange={(e)=> setType(e.target.value)}
            >
              
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2"
              >Job Role :</label
            >
            <input
              type="text"
              id="title"
              name="title"
              className="text-white border rounded w-full py-2 px-3 mb-2"
              placeholder="Add position name"
              required
              value= {role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              className="text-white border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add Job roles and responsibilities, expectations, requirements, etc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block text-white font-bold mb-2"
              >Salary</label
            >
            <input
              type="text"
              id="title"
              name="title"
              className="text-white border rounded w-full py-2 px-3 mb-2"
              placeholder="Add Salary range per year"
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-white font-bold mb-2'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='text-white border rounded w-full py-2 px-3 mb-2'
              placeholder='Company Location'
              required 
              value={location}
              onChange={(e) => setLocation(e.target.value)}          
            />
          </div>

          <h3 className="text-white text-2xl mb-5">Company Info</h3>

          <div className="mb-4">
            <label htmlFor="company" className="block text-white font-bold mb-2"
              >Company Name</label
            >
            <input
              type="text"
              id="company"
              name="company"
              className="text-white border rounded w-full py-2 px-3"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="company_description"
              className="block text-white font-bold mb-2"
              >Company Description</label
            >
            <textarea
              id="company_description"
              name="company_description"
              className="text-white border rounded w-full py-2 px-3"
              rows="4"
              placeholder="What does your company do?"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact_email"
              className="block text-white font-bold mb-2"
              >Contact Email</label
            >
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              className="text-white border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact_phone"
              className="block text-white font-bold mb-2"
              >Contact Phone</label
            >
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              className="text-white border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
              value={contactPhone}
              onChange={(e) => setContectPhone(e.target.value)}
            />
          </div>

          <div>
            <button
              className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
)
  
}

export default AddJobPage