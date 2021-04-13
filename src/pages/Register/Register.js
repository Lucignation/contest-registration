import React, { useEffect, useState, useRef } from 'react';

import './Register.css';

const Register = () => {

    const [check, setCheck] = useState(false);

    const [user, setUser] = useState({
        email : "",
        fullName: "",
        location: "",
        phoneOne: "",
        phoneTwo: "",
        DOB: "",
        occupation: "",
        age: "no"
    });

    const { email, fullName, location, phoneOne, phoneTwo, DOB, occupation, age } = user;

    const onChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
    }

    const checkboxRef = useRef(false);

    const handleTandC = () =>{
        setCheck(!check);
    }

    // useEffect(() => {
    //     setCheck(check => check !== checkboxRef.current);
    // }, [check])

    console.log(check)
    return(
        <div className="container-fluid register">
            <div className="register-form animate__animated animate__bounce">
            <h1 className="register-header">TheEmeraldQueenContest Information Request</h1>
            <p className="header-subtitle">
                Please complete the following with the appropriate information.
                Kindly Note, that you must be 18 years and above to take part in this contest
            </p>
            <form className="row g-3" action="/register.php">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email Address <span className="important-field">*</span></label>
                    <input type="email" className="form-control" name="email" value={email} id="inputEmail4" onChange={onChange} />
                </div>
                <div className="col-md-6">
                    <label for="fullname" class="form-label">Full Name <span className="important-field">*</span></label>
                    <input type="text" class="form-control" name="fullName" id="fullname" value={fullName} onChange={onChange} />
                </div>

                <div className="col-12">
                    <label for="inputAddress" class="form-label">Location <span className="important-field">*</span></label>
                    <input type="text" className="form-control" name="location" id="inputAddress" placeholder="No 18 Street, Ikoyi, Island, Nigeria" value={location} onChange={onChange} />
                </div>

                <div className="col-md-6">
                    <label for="phoneOne" className="form-label">Phone No 1 <span className="important-field">*</span></label>
                    <input type="number" className="form-control" name="phoneOne" id="phoneOne" value={phoneOne} onChange={onChange} />
                </div>
                <div class="col-md-6">
                    <label for="phoneTwo" className="form-label">Phone No 2 <span className="important-field">*</span></label>
                    <input type="number" className="form-control" name="phoneTwo" id="phoneTwo" value={phoneTwo} onChange={onChange} />
                </div>

                <div className="col-md-6">
                    <label for="DOB" className="form-label">Date of Birth <span className="important-field">*</span></label>
                    <input type="date" className="form-control" name="DOB" id="DOB" value={DOB} onChange={onChange} />
                </div>
                <div className="col-md-6">
                    <label for="occupation" className="form-label">Occupation <span className="important-field">*</span></label>
                    <input type="text" className="form-control" name="occupation" id="occupation" value={occupation} onChange={onChange} />
                </div>

                <div className="col-md-6">
                    <p>Are you 18years Old</p>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="no" checked ={age === 'no'} name="age" id="inlineRadio1" onChange={onChange} />
                        <label className="form-check-label" for="inlineRadio1">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="yes" checked ={age === 'yes'} name="age" id="inlineRadio2" onChange={onChange} />
                        <label className="form-check-label" for="inlineRadio2">Yes</label>
                    </div>
                    <div class="form-check form-switch" onClick={() => handleTandC()}>
                        <input className="form-check-input" ref={checkboxRef} type="checkbox" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" for="flexSwitchCheckChecked">You have read and accept over terms &amp; conditions</label>
                    </div>
                </div>
                <br />
                <input type="submit" value="Register" className={`btn submit-btn ${!check ? 'disabled' : 'btn-dark'} col-12`} />
                {/* <input type="submit" value="Register" className= "btn btn-dark col-12" disabled/> */}
            </form>
            
        </div>
        </div>
    )
}

export default Register;