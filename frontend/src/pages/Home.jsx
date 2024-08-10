import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experienceImg from '../assets/images/experience.png'
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';


const Home = () => {
  return (
    <>
    {/* herosec */}
    <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__container">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt=""/>
            </div>
            <h1>Traveling opens door to creating <span className="highlight">memories</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cumque aliquid atque dignissimos quo id, officiis eum minus laboriosam in. Architecto molestias ab eum minus excepturi commodi quaerat aut quod!</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt=""/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt=""/>
          </div>
        </Col>

        <SearchBar/>
      </Row>
    </Container>
    </section>
    {/* herosec-end */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className="services__subtitle">What We Serve</h5>
          <h2 className="services__title">We Offer Our Best Services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* tours sec */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/* tour sec-end */}
    {/* experience sec */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experiece'}/>
            <h2>
              With all of our experience <br/> we will serve you
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> In, consectetur porro odit dolore mollitia rerum.
            </p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>7k+</span>
              <h6>Successfull Trips</h6>
            </div>
            <div className="counter__box">
              <span>1.7k+</span>
              <h6>Regular Customers</h6>
            </div>
            <div className="counter__box">
              <span>1.5</span>
              <h6>Years Experience</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'>
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* experiencesec_end */}
    {/* gallery sec */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"Gallery"}/>
          <h2 className="gallery__title">
            Visit our customers tour gallery
          </h2>
          </Col>
          <Col lg='12'>
          <MasonryImageGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* gallery sec-end */}
    {/* testimonial */}
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial__title">What our customers say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonial/>
        </Col>
      </Row>
    </Container>
    {/* testimonial-end */}
    <Newsletter/>
    </>
  )
}

export default Home
