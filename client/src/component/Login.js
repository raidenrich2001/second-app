import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import hero from "../hero.png";
export default function Login() {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[log,setLog]=useState('');
  const navigate=useNavigate();

  function submit(e){
    e.preventDefault();
    if(email.length===0||password.length===0){
        alert('input field empty')
    }
    else{
        const data={
            email:email,
            password:password
        }
        axios.post('http://localhost:3001/login',data).then((res)=>{res.data.message ==="Successfully Login"? navigate('/user'):alert('Wrong Credential')})
        // props.falses()

    }
}

  return (
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <div className="container-xxl position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-1">
        <h1 className="text-primary m-0 " ><i className="fa fa-utensils me-4" />RuruFood</h1>
    </nav>
    <div className="container-xxl py-5 bg-dark hero-header">

        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
          <h1 className="text-white mb-4">Book Your Meal</h1>
          <form onSubmit={submit}>
            <div className="row g-3">
            
              <div className="col-sm-12">
                <div className="form-floating">
                  <input type="email"  onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Email" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-floating">
                  <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control" id="name" placeholder="Password" />
                  <label htmlFor="name">Password</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
        {/* "img/hero.png" */}
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden ">
            <img className="img-fluid" src={hero} alt />
          </div>
        </div>
   
    </div>
  </div>
  {/* Menu Start */}
  {/* Menu End */}
  {/* Reservation Start */}
  {/* Reservation Start */}
  {/* Team Start */}
  {/* Team End */}
  {/* Testimonial Start */}
  {/* Testimonial End */}
  {/* Footer Start */}

</div>
  );
}
