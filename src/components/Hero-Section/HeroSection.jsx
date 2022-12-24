import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              शिक्षा से भरेगा सभी के जीवन में स्वाभिमान, <br/>
              और शिक्षा पाकर सब बनेंगे <br/> महान इंसान ।
              </h2>
              <p className="mb-5">
              हमारे यहां क्लास 1 से 12 तक के सभी विषयों की पढ़ाई का उत्तम व्ययस्थ है <br/>
              हमारे यहां योग्य शिक्षक द्वारा क्लास का संचालन किया जाता है
              </p>
            </div>
            <div className="search">
              {/* <input type="text" placeholder="Search" />
              <button className="btn">Search</button> */}
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 h-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
