// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const ViewProduct = () => {
  const [items,setItems] = useState([]);
  let {id} = useParams();

    useEffect(() => {
      debugger;
      fetch(`http://localhost:4000/products/${id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          console.log("data of subcat", items);
        })
        .catch((error) => console.log(error));
    }, [id]);

  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/image/shop-bg.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px 0", // Optional: Adjust padding for better spacing
      }}
    >
      <div className="p-3 position-relative mt-n4 mx-5 z-index-2">
        <div
          className="contact py-4 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          <h5
            className="text-center text-white"
            style={{ fontWeight: "bold", fontFamily: "DM Serif Display" }}
          >
            Products
          </h5>
        </div>
      </div>
      <Container>
        <Row>
          {items.map((elem) => (
            <Col key={elem.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`http://localhost:4000${elem.prodimage}`}
                />
                <Card.Body>
                  <Card.Title>{elem.name}</Card.Title>
                  <Card.Text className="mt-4">
                    <span className="mr-4 font-bold ">Price :</span>₹
                    {elem.price}
                  </Card.Text>
                  <div className="flex my-4 justify-between">
                    <Link
                      to={`/ProductDetail/${elem.id}`}
                      className="btn btn-primary mx-2"
                    >
                      View details
                    </Link>
                    <Link
                      to="/wishlist"
                      className="btn mx-2 text-center items-center"
                    >
                      <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ViewProduct;
