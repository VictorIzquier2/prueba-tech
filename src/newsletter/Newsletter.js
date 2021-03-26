import React, { Fragment } from 'react'

export const Newsletter = () => {
  return (
    <Fragment>
      <div>
        <img src="/assets/images/postcards.png" className="img-fluid" alt="banner"/>
      </div>
      <div>
        <h1>Sign Up for Newsletter</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div>
        <form>
          <input/>
          <button>Subscribe</button>
        </form>
      </div>
    </Fragment>
  )
}
