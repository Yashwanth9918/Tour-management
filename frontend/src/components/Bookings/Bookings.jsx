import React,{useState,useContext} from 'react'
import './bookings.css'
import { useNavigate } from 'react-router-dom'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import {AuthContext} from '../../context/AuthContext'
import { BASE_URL} from '../../utils/config'
const Bookings = ({tour,avgRating}) => {
    const {price,reviews,title}=tour;
    const navigate=useNavigate();

    const {user}=useContext(AuthContext)

    const [booking,setBooking]=useState({
        userId:user && user._id,
        userEmail:user && user.email,
        tourName:title,
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    });
    const handleChange= e=>{
        setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const serviceFee=10
    const totalAmount=Number(price)*Number(booking.guestSize)+Number(serviceFee)




    const handleClick= async e=>{
        e.preventDefault()
        console.log(booking)
        try{
          if(!user || user===undefined|| user===null){
            return alert('Please sign in')
          }
          const res=await fetch(`${BASE_URL}/booking`,{
            method:'post',
            headers:{ 
              'content-type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify(booking)
          })

          const result =await res.json()
          if(!res.ok){
            return alert(result.message )
          }
          navigate("/thank-you")
        }catch(err){
          return alert(err.message)
        }

    }

  return (
    <div className='booking'>
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price} <span>/per head</span></h3>
        <span className="tour__rating d-flex align-items-center">
            <i className='ri-star-fill' ></i>{avgRating===0?null:avgRating}({reviews?.length})
        </span>
      </div>
      {/* bookingform */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
            </FormGroup>
            <FormGroup className='d-flex align-items-center'>
                <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                <input type="number" placeholder='Totalpeople' id='guestSize' required onChange={handleChange} />
            </FormGroup>
        </Form>
      </div>
      {/* bookingform-end */}
      <div className="booking__bottom">
        <ListGroup>
        <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>${price} <i className='ri-close-line'>1 person</i></h5>
            <span>${price}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>${totalAmount}</span>
        </ListGroupItem>
        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </ListGroup>
      </div>
    </div>
  )
}

export default Bookings
