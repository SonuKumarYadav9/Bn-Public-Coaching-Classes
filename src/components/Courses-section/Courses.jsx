import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Learn English Zero to Hero :-Sonu Kumar Yadav & Chandan Kumar",
    lesson:"From Scratch to Advance Grammar",
    students:30,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "02",
    title: "Learn Spoken English Zero to Hero   By Sonu Kumar Yadav" ,
    lesson: "From Scratch With all Needed",
    students: 20,
    rating: 7.9,
    imgUrl: courseImg1,
  },

  {
    id: "03",
    title: "Class 11 & 12 'Science & Arts' For Commerce:-Hiring Teacher",
    lesson: "All Subjects Entire",
    students: 12.5,
    rating: 8.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Class 10 All Subjects With Addition Subject 'Urdu','Sanskrit'",
    lesson: "All Subjects Entire",
    students: 12.5,
    rating: 8.9,
    imgUrl: courseImg3,
  },
  {
    id: "05",
    title: "Class 9 ",
    lesson: "All Subjects Entire",
    students: 20,
    rating: 8.9,
    imgUrl: courseImg3,
  },
  {
    id: "06",
    title: "Class 1 to 8 ",
    lesson: "All Subjects Entire",
    students: 30,
    rating: 8.9,
    imgUrl: courseImg3,
  },
  {
    id: "07",
    title: "Subjects List",
    lesson: "'मैथ्स','फिजिक्स','केमिस्ट्री','बायोलॉजी','इकोनॉमिक्स','साहित्य','भूगोल','इतिहास','उर्दू','English' ",
    students: 30,
    rating: 9.1,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Courses</h2>
                <p>
                बच्चों के बेहतर पढाई और समझ के लिए हम अपने सबसे बेस्ट कोर्स आपको अपनी भाषा के साथ-साथ अंग्रेजी हिंदी के साथ सभी विषयों को अच्छी तरह समझने और पढ़ाने का भरोसा है।
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
