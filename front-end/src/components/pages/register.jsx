import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text" className="form-control" id="fname"
                                                       placeholder="First Name" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Last Name</label>
                                                <input type="password" className="form-control" id="lname"
                                                       placeholder="Last Name" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input type="text" className="form-control" id="email"
                                                       placeholder="Email" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Password</label>
                                                <input type="password" className="form-control" id="review"
                                                       placeholder="Enter your password" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Address Line 1</label>
                                                <input type="text" className="form-control" id="fname"
                                                       placeholder="Address Line 1" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Address Line 2</label>
                                                <input type="password" className="form-control" id="lname"
                                                       placeholder="Address Line 2" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <div className="field-label" style={{"marginBottom": "10px"}}>City</div>
                                                <select name="City" class="select_box" style={{"width": "100%", "padding": "0 22px", "height": "45px"}}>
                                                    <option>City 1</option>
                                                    <option>City 2</option>
                                                    <option>City 3</option>
                                                    <option>City 4</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="field-label" style={{"marginBottom": "10px"}}>State</label>
                                                <select name="state"  class="select_box" style={{"width": "100%", "padding": "0 22px", "height": "45px"}}>
                                                    <option>State 1</option>
                                                    <option>State 2</option>
                                                    <option>State 3</option>
                                                    <option>State 4</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="field-label" style={{"marginBottom": "10px"}}>Country</label>
                                                <select name="country"  class="select_box" style={{"width": "100%", "padding": "0 22px", "height": "45px"}}>
                                                    <option>Country 1</option>
                                                    <option>Country 2</option>
                                                    <option>Country 3</option>
                                                    <option>Country 4</option>
                                                </select>
                                            </div>
                                            <a href="#" className="btn btn-solid">create Account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register