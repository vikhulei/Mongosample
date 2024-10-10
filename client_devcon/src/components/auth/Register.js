import React, { Fragment, useState } from 'react'
import '../../App.css'

const Register = () => {
  const [formData, setFormData] = useState()
  
  return (
    <Fragment>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <form class="form" action="create-profile.html">
          <div class="form-group">
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email Address" name="email" />
            <small class="form-text"
            >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
      </section>

    </Fragment>

  )
}

export default Register