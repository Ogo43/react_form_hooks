import React from 'react'

function Form() {
  return (
    <div className='container'>
        <form className='semi-container'>
            <h2 className='form-header'>
                Contact Us
            </h2>

            <div className='form-box'>
                <div className='form-box1'>
                    <label htmlFor='name'>Name</label>
                    <input
                    name='user_name'
                    type='text'
                    id='name'
                    placeholder='Enter your name'
                    className='input_name'
                    />
                </div>

                <div className='form-box2'>
                    <label>Email</label>
                    <input
                    type='email'
                    placeholder='sarahtom@sample.com'
                    className='input_email'
                    />
                </div>
                <div className='form-box3'>
                    <label>Subject</label>
                    <input
                        type='text'
                        placeholder='Subject (optional)'
                        className='input_subject'
                    />
                </div>
                <div className='form-box4'>
                    <label>Message</label>
                    <textarea
                        type='text'
                        placeholder='Type...'
                        className='input_message'
                    />
                </div>
                <div className='form-box5'>
                    <button 
                        type="submit"
                        className='form-submit'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form