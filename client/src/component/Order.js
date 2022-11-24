import React from 'react';
import brkfasta from "../brkfast.jpg";
import luncha from "../lunch.jpg";
import dinnera from "../dinner.jpg";
import "./Order.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

export default function Order() {
  const [breakfast, setBreakfast] = useState(1);
  const [lunch, setLunch] = useState(1)
  const [dinner, setDinner] = useState(1);
  const [data, setData] = useState([])
  const [datas, setDatas] = useState([])
  const [order, setOrder] = useState([])
  const date = new Date(Date.now()).toLocaleDateString()
  const time = new Date(Date.now()).toLocaleTimeString('en-US', { hour12: false }) >= '21:00:00'
  const navigate = useNavigate();

  function edit(id) {
    navigate(`/user/${id}`)
  }

  function submit(e) {
    e.preventDefault()
    window.location.reload(false)
    if (new Date(Date.now()).toLocaleTimeString('en-US', { hour12: false }) >= '21:00:00') { // change as per the time
      window.location.reload(false)
    }
    else {
      const datas = {
        empid: data.password,
        date: date,
        breakfast: breakfast,
        lunch: lunch,
        dinner: dinner
      }
      // console.log(datas);
      axios.post(`http://localhost:3001/orderfood`, datas).then(res => alert(res.data.message))
      navigate('/user')
    }

  }
  useEffect(() => {
    axios.get(`http://localhost:3001/user`, { withCredentials: true }).then(res => setData(res.data))
  }, [])

  function logout() {
    axios.get(`http://localhost:3001/logout`).then(res => res.data.message === "Successfully Logout" ? navigate('/') : alert('Invalid'))
    //  navigate('/Login')
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/aggregate`).then(res => setDatas(res.data))
  }, [])


  //update
  useEffect(() => {
    axios.get(`http://localhost:3001/getorderedfood`).then(res => setOrder(res.data))
  }, [])

  let username = order.filter((dat) => {
    return dat.empid === data.password && dat.date === new Date(Date.now()).toLocaleDateString()
  })

  function edit(id) {
    navigate(`/user/${id}`)
  }

  function backtohome() {
    navigate(`/`)
  }


  //update

  if (data.length === 0) {
    return (

      <div class="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 class="display-1">404</h1>
              <h1 class="mb-4">Page Not Found</h1>
              <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our login page and try again?</p>
              <button class="btn btn-primary rounded-pill py-3 px-5" type="button" onClick={backtohome}>Go Back To Home</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  else {
    return (
      <>
        <div className="container-xxl bg-white p-0">
          <div className="container-xxl py-0">
            <div class="container-xxl py-1 bg-dark hero-header">
              <div class="container text-center my-5 pt-5 pb-1">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                <h1 className="mb-5" style={{ color: "white" }}>Check Your Meal Today</h1>
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

          {/* Time Out!! ☹️ Sorry Contact Your Respective Admin */}

          
          <div className="container-xxl pt-0 pb-0">
            <div className="container">
              {time ?
                <div class="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="container text-center">
                    <div class="row justify-content-center">
                      <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">Time Out!! ☹️ Sorry Contact Your Respective Admin </p>
                        <button class="btn btn-primary rounded-pill py-3 px-5 my-3" type="button" onClick={logout}>Go Back To Home</button>
                      </div>
                    </div>
                  </div>
                </div> :


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
                    <div className="col-6 my-2 mx-auto">
                      <button className="btn btn-primary w-100 " type="submit">Submit</button>
                    </div>
                    {username.map((get, index) =>
                      <div className="col-6 my-2 mx-auto" key={index}>
                        <button className="btn btn-warning w-100 " type="button" onClick={() => edit(get._id)}>View / Update</button>
                      </div>)}
                  </div>
                  <div className="col-5 my-2 mx-auto">
                    <button className="btn btn-secondary w-100 " type="button" onClick={logout}>Logout</button>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </>
    );
  }
}
