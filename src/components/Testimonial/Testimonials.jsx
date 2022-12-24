import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Jabse maine yaha join kiya h meri improvement kafi achhi ho rahi mene bas 2 mahino me khud ko pahle se behtar paya hai!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Gautam Kumar</h6>
                        <p>Class 10, Nawada,Vaishali,Bihar</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Yaha padhane ki tariko ki tarif karni hogi padhai k sath sah har chij ko achhi tarah se alag alag tarah se jan na use karna i loved it.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sumit Kumar</h6>
                        <p>Class 12, Mansurpur,Vaishali</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        I very feel Confident when I talk in English with someone its all happens just for our Sonu Sir Thanks Sir  !
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Khushi Kumari</h6>
                        <p>Class 8, Daudnagar,Vaishali,Bihar</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        mujhe pehle english achhe se nahi padhna ata tha when i Joined the class then i learned More things things  about Ennglish how to talk how to write properly Thanks  Sonu Sir  !
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Raushan Kumar</h6>
                        <p>Class 8, Bangri,Vaishali,Bihar</p>
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
