import React,{useState} from 'react'
import CommonSection from './../shared/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'



const SearchResultList = () => {

  const location=useLocation()
  const [data]=useState(location.state)
  console.log(data)
  return (
    <>
      <CommonSection title={"Search Result"}/>
      <section>
      <Container>
        <Row>
          {
            data.length===0? <h4 className='text-center'>No Tour Found</h4>:data?.map(tour=><Col lg='3' className="mb-4"><TourCard tour={tour} key={tour._id}/></Col>)
          }
          <Col lg='12'>

          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default SearchResultList
