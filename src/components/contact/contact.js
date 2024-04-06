import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div>
       <section id="contact">
        <div className="container">
            <h1 className="head">Contact Us</h1>
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label ">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Message</label>
                            <input type="text" className="form-control" id="exampleInputPassword1 wit"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </form>
                </div>
                <div className="col-sm-2">
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}

export default Contact
