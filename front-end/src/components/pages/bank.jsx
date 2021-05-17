import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Bank extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Add Bank'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Add Bank</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Name" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="acc_no">Account No</label>
                                                <input type="text" className="form-control" id="acc_no"
                                                       placeholder="Account No" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="ifsc">IFSC Code</label>
                                                <input type="text" className="form-control" id="ifsc"
                                                       placeholder="IFSC Code" required="" />
                                            </div>
                                            <a href="#" className="btn btn-solid">Add Bank</a>
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

export default Bank