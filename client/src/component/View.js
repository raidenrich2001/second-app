import React from 'react';
import brkfasta from "../brkfast.jpg";
import luncha from "../lunch.jpg";
import dinnera from "../dinner.jpg";
import "./Order.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
axios.defaults.withCredentials = true;

export default function View() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [breakfast, setBreakfast] = useState(1);
    const [lunch, setLunch] = useState(1)
    const [dinner, setDinner] = useState(1);
    const [order, setOrder] = useState({});
  
    
      useEffect(() => {
        axios.get(`http://localhost:3001/getoneorderedfood/${id}`).then(res => setOrder(res.data))
      }, [])
      //  console.log(order._id)
  
  
      function submit(id) {
  
        if (new Date(Date.now()).toLocaleTimeString('en-US', { hour12: false }) >= '21:00:00') { // change as per the time
          window.location.reload(false)
        }
        else {
    
          // console.log(datas);
          axios.patch(`http://localhost:3001/updatefood/${id}`, { breakfast: breakfast, lunch: lunch,dinner: dinner}).then(res => console.log(res.data))
          navigate('/user')
    
    
        }
        }

  function logout() {
    axios.get(`http://localhost:3001/logout`).then(res => res.data.message === "Successfully Logout" ? navigate('/') : alert('Invalid'))
    //  navigate('/Login')
  }

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-0">
          <div class="container-xxl py-1 bg-dark hero-header">
            <div class="container text-center my-5 pt-5 pb-1">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Update</h5>
              <h1 className="mb-5" style={{ color: "white" }}>Update Your Meal</h1>
            </div>
          </div>
        </div>


        {/* <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
          <li className="nav-item">
            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 " data-bs-toggle="pill" href="#tab-1">
              <i className="fa fa-coffee fa-2x text-primary" />
              <div className="ps-3">
                <small className="text-body">Lovely</small>
                <h6 className="mt-n1 mb-0">Breakfast</h6>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
              <i className="fa fa-hamburger fa-2x text-primary" />
              <div className="ps-3">
                <small className="text-body">Lovely</small>
                <h6 className="mt-n1 mb-0">Launch</h6>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
              <i className="fa fa-utensils fa-2x text-primary" />
              <div className="ps-3">
                <small className="text-body">Lovely</small>
                <h6 className="mt-n1 mb-0">Dinner</h6>
              </div>
            </a>
          </li>
        </ul>
      </div> */}


        <div className="container-xxl pt-0 pb-0">
          <div className="container">
            <form className="row g-5" onSubmit={submit}>
              <div className="col-lg-4   wow fadeInUp" data-wow-delay="0.1s">
                <div className=" service-item team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-5">
                    <img className="img-fluid" src={brkfasta} alt />
                  </div>
                  <i className="fa fa-coffee fa-2x text-primary" />

                  <h5 className="mb-0">Breakfast</h5>
                  <div className="d-flex justify-content-center">
                    <input type='checkbox' className="form-check-input btn-square my-2" checked={breakfast > 0} onChange={(e) => setBreakfast(e.target.checked)}></input>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-item team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-5">
                    <img className="img-fluid" src={luncha} alt />
                  </div>
                  <i className="fa fa-hamburger fa-2x text-primary" />
                  <h5 className="mb-0">Lunch</h5>
                  <div className="d-flex justify-content-center">
                    <input type='checkbox' className="form-check-input btn-square my-2" checked={lunch > 0} onChange={(e) => setLunch(e.target.checked)} ></input>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-5">
                    <img className="img-fluid" src={dinnera} alt />
                  </div>
                  <i className="fa fa-utensils fa-2x text-primary" />
                  <h5 className="mb-0">Dinner</h5>
                  <div className="d-flex justify-content-center">

                    <input type="checkbox" className="form-check-input btn-square my-2" checked={dinner > 0} onChange={(e) => setDinner(e.target.checked)} />

                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-5 my-2 mx-auto">
                  <button className="btn btn-warning w-100 " type="button" onClick={()=>submit(order._id)}>Update</button>
                </div>
              <div className="col-5 my-2 mx-auto">
                <button className="btn btn-secondary w-100 " type="button" onClick={logout}>Logout</button>
              </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
