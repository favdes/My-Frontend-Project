import React from "react";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../images/fluent_add-24-filled.png";
import img2 from "../images/clarity_note-edit-line.png";
import img3 from "../images/Vector (1).png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import img4 from "../images/Vector (5).png";
import img5 from '../images/Urgent.png';
import img6 from '../images/Important.png'

const MyTask = () => { 
  
  return (
    <>
      <Container>
        <Navbar expand="lg" className="">
          <h1 className="task">My Tasks</h1>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="" className=" justify-content-end ">
            <Nav className="align-items-center ">
              <Nav.Link
                className="add d-flex align-items-center my-2 "
                to="/new task"
              >
                <img src={img1} alt="" />
                <Link
                  to="/NewTasks"
                  className="add-text text-decoration-none mt-1"
                >
                  <h5>Add New Tasks</h5>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Card>
          <div className="container">
            <Card.Header className=" d-flex justify-content-between align-items-center my-2  ">
              <div className="text"><img src={img5} alt="" /></div>
              <div className="d-flex gap-4">
                <button className="btn1 my-2" type="button" class="btn1 btn-">
                  <img src={img2} alt="" />
                  <Link to="/EditTask" className="edit text-decoration-none">
                    Edit
                  </Link>
                </button>
                <button
                  className="delete my-2 h-7 w-4"
                  type="button"
                  class="delete btn-"
                >
                  <img src={img3} alt="" />
                  Delete
                </button>
              </div>
            </Card.Header>

            <Card.Body>
              <div className=" task p1 ">
                <h3>FinTech Website Update</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, minus voluptatem nihil non amet neque molestiae
                  assumenda a iure rem ipsam laboriosam veritatis ad iusto nisi
                  quasi, magni delectus soluta hic? Praesentium necessitatibus,
                  fuga deserunt suscipit, ea eius possimus a qui facere
                  temporibus nihil voluptatibus error, debitis ipsa ex! Rem.
                </p>
              </div>
            </Card.Body>
          </div>
        </Card>
      </Container>

      <Container>
        <Card className="mt-5">
          <div className="container  ">
            <Card.Header className=" d-flex justify-content-between align-items-center my-2 ">
              <div className="text1"><img src={img6} alt="" /></div>
              <div className="d-flex gap-4">
                <button className="btn1 my-2" type="button" class="btn1 btn-">
                  <img src={img2} alt="" />
                  <Link to="/EditTask" className="edit text-decoration-none">
                    Edit
                  </Link>
                </button>
                <button
                  className="delete my-2 h-7 w-4"
                  type="button"
                  class="delete btn-"
                >
                  <img src={img3} alt="" />
                  Delete
                </button>
              </div>
            </Card.Header>

            <Card.Body>
              <div className="task p1 ">
                <h3>Agro Website Update</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi quae modi repellat cum temporibus velit consequatur
                  corporis veniam enim officia, harum provident eaque natus
                  repudiandae ab. Sint in animi a deleniti ut, culpa alias
                  corporis? Ducimus ea a optio quos! Optio amet enim, suscipit
                  tempora consequatur assumenda ea doloribus quos.
                </p>
              </div>
            </Card.Body>
          </div>
        </Card>
      </Container>

      <Container>
        <Card className="mt-5">
          <div className="container mb-3">
            <Card.Header className=" d-flex justify-content-between align-items-center my-2 ">
              <div className="text"><img src={img5} alt="" /></div>
              <div className="d-flex gap-4">
                <button className="btn1 my-2" type="button" class="btn1 btn-">
                  <img src={img2} alt="" />
                  Edit
                </button>
                <button className="delete my-2 h-7 w-4" type="button" class="delete btn-">
                  <img src={img3} alt="" /> Delete</button>
              </div>
            </Card.Header>

            <Card.Body>
              <div className="task p1 ">
                <h3>FinTech Website Update</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis necessitatibus incidunt rerum voluptatum labore
                  asperiores ab neque impedit quia ex praesentium veniam id
                  eveniet consequatur vitae laudantium vel molestias quibusdam,
                  modi, corrupti ipsam magnam tempore eligendi? Iure cumque iste
                  commodi qui voluptate non. Nostrum, id numquam. Consequuntur
                  fuga numquam quo.
                </p>
              </div>
            </Card.Body>
          </div>
        </Card>
      </Container>

      <Container>
        <Card className="mt-5">
          <div className="container">
            <Card.Header className=" d-flex justify-content-between align-items-center my-2 ">
              <div className="text1"><img src={img6} alt="" /></div>
              <div className="d-flex gap-4">
                <button className="btn1  my-2" type="button" class="btn1  btn-">
                  <img src={img2} alt="" />
                  Edit
                </button>
                <button
                  className="delete my-2 "
                  type="button"
                  class="delete btn-"
                >
                  <img src={img3} alt="" />
                  Delete
                </button>
              </div>
            </Card.Header>

            <Card.Body>
              <div className="task p1 ">
                <h3>Agro Website Update</h3>
                <p className="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto amet numquam laboriosam ratione soluta, dolorum, autem
                  adipisci deserunt quidem et cumque quae at vero quaerat dicta.
                  Aut exercitationem quod ut deleniti saepe, ad deserunt nam
                  consequatur doloremque voluptate vitae quae nulla voluptatem
                  molestiae tempore nesciunt laborum dignissimos mollitia
                  voluptatibus alias.
                </p>
              </div>
            </Card.Body>
          </div>
        </Card>
      </Container>
      <div className="text-center mt-4">
        <Link   onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className=" ">
          <h5 className="">Back To Top</h5>
        </Link>
        {/* <button   onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="btn btn-primary">
          to top
        </button> */}
      </div>

      {/* <Container>
 <Pagination>
   <div className="d-flex justify-content-between   align-items-center colour-dark " ><Pagination.Prev/><Pagination.Prev/></div>
 </Pagination></Container>
  */}
    </>
  );
};

export default MyTask;
