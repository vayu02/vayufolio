import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div
      className='min-h-screen flex items-center justify-center '
      id='contact'
    >
      <div className='bg-gradient-to-br from-transparent via-blue-950 to-transparent shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md border-2 border-blue-950'>
        <h2 className='text-2xl font-bold mb-6 text-center text-[#ddd] flex items-center gap-x-4'>
          Contact Us{' '}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-[#ddd] text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-[#ddd] text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-[#ddd] text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex items-center justify-center'>
            <button
              className='bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
