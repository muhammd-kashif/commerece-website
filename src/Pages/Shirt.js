import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { IoStar } from "react-icons/io5";
import mag1 from "../assests/imgaes/1.jpg";
import mag2 from "../assests/imgaes/2.jpg";
import mag3 from "../assests/imgaes/3.jpg";
import mag4 from "../assests/imgaes/4.jpg";
import mag5 from "../assests/imgaes/5.jpg";
import mag6 from "../assests/imgaes/6.jpg";
import mag7 from "../assests/imgaes/7.jpg";
import mag8 from "../assests/imgaes/8.jpg";
import mag9 from "../assests/imgaes/9.jpg";
import mag10 from "../assests/imgaes/10.jpg";
import { useParams, useSearchParams } from "react-router-dom";

export default function Shirt() {
  const { id } = useParams();
  console.log("id: ", id);
  const [products, setProducts] = useState([]);
  console.log("products: ", products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

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

  const myObject = { rate: 4.5, count: 100 };

  return (
    <div>
      <Container className="bg-light " fluid>
        <Row md="2">
          <Col className="bg-white border">
            <div className="imga1">
              <img src={products?.image} className="w-50" />
            </div>
            <Col className="my-4">
              <div className="d-flex justify-content-evenly">
                <span>{products.rate}</span>
                <span className="text-warning">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </span>
                <span>{products.count}</span>
                <br /> <span>{products.title}</span>
              </div>
              <span>{`Price: ${products.price}`}</span>
              <hr className="my-5" />
            </Col>
          </Col>
          <Col className="bg-white border ">
            <h5 className="text-info">{products.category}</h5>

            <h6 className="fw-bold text-secondary">{products.description}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
