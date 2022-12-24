import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p className="about">

बी एन पब्लिक कोचिंग क्लासेस, हम उदाहरण के द्वारा नेतृत्व करने में विश्वास करते हैं। हमारी ताकत हमारा निरंतर परिणामोन्मुखी प्रदर्शन है।
 यह हमारी प्रतिबद्धता, प्रतिस्पर्धात्मकता और डिलीवरी में निरंतरता है जिसने बी एन पब्लिक कोचिंग क्लासेस मंसूरपुर को कक्षा 1-12 के लिए
 पिछले 30 वर्षों से सभी विषयों में नंबर 1 संस्थान बना दिया है।
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K +" />
                    </span>

                    <p className="counter__title">Satisfied Student completed their Courses from here</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Courses</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={370} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Students were learning now in 2022-23 batch</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={21} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title"> Teachers </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
