import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, List, Row } from "reactstrap";
import { FaTradeFederation } from "react-icons/fa";
import E from "../assests/imgaes/download (1).png";
import Logo from "../assests/imgaes/download.png";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import mag11 from "../assests/imgaes/center.png";
import mag13 from "../assests/imgaes/download-e.jpg";
import mag14 from "../assests/imgaes/download-2.jpg";
import mag15 from "../assests/imgaes/download (e).png";
import mag12 from "../assests/imgaes/images-k.png";


//........................................
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaPlayCircle,
  FaRegEnvelope,
  FaRegHeart,
  FaShoppingBag,
  FaTwitterSquare,
} from "react-icons/fa";
import { fetchDataRequest } from "../Store/Action/action";
import { Link, useNavigate } from "react-router-dom";

export default function Commerece() {
  const dispatch = useDispatch();
  const { loading, error,number } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  console.log("products: ", products);

  const navigate = useNavigate();

  const handlePagePush = (id) => {
    navigate(`/products/${id}`)
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response) {
          throw new Error(`HTTP Error! Status:${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error, "Error while fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container className="bg-white border" fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={3} className="image">
            <img src={Logo} className=" w-25 h-50" />
          </Col>
          <Col md={7} className="my-4">
            <Form className="d-flex" role="search  my-4">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </Form>
          </Col>
          <Col md={2} className="d-flex justify-content-evenly">
          
            <FaRegHeart className=" my-4 mx-2 fs-5" />
          <FaShoppingBag className="my-4 mx-2 fs-5"/> <p>{ number}</p>
            <FaTradeFederation className=" my-4 mx-2 fs-5 " />
           
          </Col>
        </Row>
      </Container>
      {/* //Section body */}
      <Container className="bg-white my-2" fluid>
        {/* //secetion 2 doctor........................ */}
        <Row className="bg-success d-flex justify-content-center align-items-center">
          <Col md={6} className="my-5 text-white px-5">
            <h1 className="text-danger fw-bold">Sale 20% off</h1>
            <h1 className="fw-bold">On Everything</h1>
            <span className="lh-sm">
              Elevate your health journey with exclsive discounts and unparallel
              <br />
              convenience. your path to well-being start here, where every
              purchase
              <br />
              is a Prescription for savings.
              <br />
              <Button className="bg-white my-4">
                <span>
                  <FaShoppingBag className="text-success" />
                </span>
                <span className=" text-success"> Start Shopping</span>
              </Button>
            </span>
          </Col>
          <Col md={6} className="my-5">
            <img src={E} className="w-100 e-comm" />
          </Col>
        </Row>
        <Row className=" px-5 my-5">
          <Col className="justify-content-start d-flex px-4">
            <h3>New Products</h3>
          </Col>
          <Col className="justify-content-end d-flex px-4 text-success">
            <h6>
              View All <FaArrowRight />
            </h6>
          </Col>
        </Row>
        {/* //card  section */}
        <Row md={4}>
          {products?.map((item, id) => (
            <Col md={3} className="my-4" key={id} onClick={()=>handlePagePush(item.id)}>
            

              <div className="row gap-2 card-k">
                <div className="">
                  <div className="card w-100 " style={{height: "400px"}}>
                    <div
                      className="image  d-flex justify-content-center align-items-center"
                      style={{height: "150px", objectFit: "contain"}}
                    >
                      <img
                        height={"100px"}
                        src={item?.image}
                        className="card-img my-4  w-50"
                        alt="..."
                      />
                    </div>
                    <hr />
                    <div className="card-body">
                    <h6 className="card-title fw-bold text-start">
                        {item?.title}
                      </h6>
                      <h6 className="card-text text-start">
                        ${item?.rating?.rate}
                      </h6>
                      <div className="butt">
                        <button
                          href="#"
                          className="btn btn-success butt my-4"
                          onClick={() => dispatch(fetchDataRequest(item.num))}
                        >
                          ADD To Cart
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className=" px-5 mb-5">
          <Col className="justify-content-start d-flex px-4">
            <h3>Popular Products</h3>
          </Col>
          <Col className="justify-content-end d-flex px-4 text-success">
            <h6>
              View All <FaArrowRight />
            </h6>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="my-4">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="card h-100">
                  <img
                    src={mag7}
                    className="card-img-top my-4 d-flex justify-content-center align-items-center w-100"
                    alt="..."
                  />
                  <hr />
                  <div className="card-body">
                    <h4 className="card-title fw-bold text-start">
                      Blood Test
                    </h4>
                    <h6 className="card-text text-start">$7.5</h6>
                    <a href="#" className="btn btn-success ">
                      ADD To Cart
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="card h-100 ">
                  <img
                    src={mag8}
                    className="card-img-top my-4 d-flex justify-content-center align-items-center w-75"
                    alt="..."
                  />
                  <hr />
                  <div className="card-body">
                    <h4 className="card-title fw-bold text-start">
                      Wound Dress
                    </h4>
                    <h6 className="card-text text-start">$5.00</h6>
                    <a href="#" className="btn btn-success ">
                      ADD To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="card h-100">
                  <img
                    src={mag9}
                    className="card-img-top w-50 d-flex justify-content-center align-items-center"
                    alt="..."
                  />
                  <hr />
                  <div className="card-body">
                    <h4 className="card-title fw-bold text-start">
                      Satethoscope
                    </h4>
                    <h6 className="card-text text-start">$15.00</h6>

                    <a href="#" className="btn btn-success ">
                      ADD To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="card h-100">
                  <img
                    src={mag10}
                    className="card-img-top  w-50 d-flex justify-content-center align-items-center w-75"
                    alt="..."
                  />
                  <hr />
                  <div className="card-body ">
                    <h4 className="card-title fw-bold text-start">
                      Hand Gloves
                    </h4>
                    <h6 className="card-text text-start">$2.00</h6>

                    <a href="#" className="btn btn-success ">
                      ADD To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col md={12}>
            <img src={mag11} alt="" className="w-100  img-fluid " />
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <div className="card img-k w-100">
              <img src={mag12} className="card-img-top  img-k-k " alt="..." />
              <div className="card-body">
                <h4 className="card-title fw-bold">
                  In this section we delive , we delive
                </h4>
                <h4 className=" fw-bold"> into various aspects of health</h4>
                <p className="card-text">
                  Expolore the world of medical spacialist blog sptlight
                  feature. Expolore the world of medical spacialist blog
                  sptlight feature. Expolore the world.
                </p>
                <a href="#" className="btn btn-success">
                  Read More
                </a>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card mb-4 py-2">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={mag13}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body">
                    <h5 className="card-title">Start Shopping</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="btn btn-success">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 py-2">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={mag14}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <h5 className="card-title">Start Shopping</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                    </p>
                    <a href="#" className="btn btn-success">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 py-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={mag15}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <h5 className="card-title">Start Shopping</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a href="#" className="btn btn-success">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="bg-success text-white list-unstyled py-5  d-flex justify-content-center align-items-center">
          <Col md={3}>
            <h5>Contect</h5>
            <List type="unstyled">
              <li>
                {" "}
                <FaMapMarkerAlt />
                <span>123, Road, Dakha, Bangladash</span>
              </li>
              <li>
                <FaPhoneSquareAlt />
                <span>+092083460052</span>
              </li>
              <li>
                <FaRegEnvelope />
                <span>kashifsaif052@gmail.com</span>
              </li>
            </List>
          </Col>
          <Col md={2} className="py-5">
            <h5>Quick Links</h5>
            <List type="unstyled">
              <li>Home </li>
              <li>About</li>
              <li>Service</li>
              <li>Career</li>
              <li>Contact</li>
            </List>
          </Col>
          <Col md={2} className="py-5">
            <h5>Services</h5>
            <List type="unstyled">
              <li>Medical</li>
              <li>Opration</li>
              <li>Laboratory</li>
              <li>Medical</li>
              <li>Medical</li>
            </List>
          </Col>
          <Col md={2} className="py-5">
            <h5>Specialties</h5>
            <List type="unstyled">
              <li>Anesthesiology</li>
              <li>Phychiatry</li>
              <li>Genral Surgery</li>
              <li>Famialy Medicine</li>
              <li>Pediatric</li>
            </List>
          </Col>
          <Col md={3}>
            <h5>Social Media</h5>

            <List
              type="unstyled"
              className="d-flex fs-5 fw-bold  justify-content-evenly py-5"
            >
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaPlayCircle />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
              <li>
                <FaWhatsapp />
              </li>
            </List>
          </Col>
          <hr className="fs-bold" />

          <Col md={6} className="text-start">
            <small>2023Healthy.all rights reserved</small>
          </Col>
          <Col md={6} className="text-end">
            <small>Terms and Conditions</small>
            <small>private Policy</small>
          </Col>
        </Row>
      </Container>
    </>
  );
}
