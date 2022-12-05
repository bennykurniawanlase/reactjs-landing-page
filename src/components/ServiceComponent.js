import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceComponent = () => {
	return (
		<div
			className="services min-vh-100 d-flex align-items-center"
			id="service">
			<Container>
				<Row className="mb-5 mt-5">
					<Col>
						<h1 className="text-center fs-2 fw-bold">Service</h1>
						<p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, suscipit.</p>
					</Col>
				</Row>
				<Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center	">
					<Col className="text-center mb-4 py-5 px-3 ">
						<i class="fa-solid fa-money-check-dollar fs-1 mb-4"></i>
						<h5 className="fw-bold">Harga Termurah</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed nostrum facere dolor nesciunt ipsum dolorem voluptatum sit enim tenetur?</p>
					</Col>
					<Col className="text-center mb-4 py-5 px-3 ">
						<i class="fa-solid fa-people-carry-box fs-1 mb-4"></i>
						<h5 className="fw-bold">Delivery</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed nostrum facere dolor nesciunt ipsum dolorem voluptatum sit enim tenetur?</p>
					</Col>
					<Col className="text-center mb-4 py-5 px-3 ">
						<i class="fa-solid fa-mug-hot fs-1 mb-4"></i>
						<h5 className="fw-bold">Original Coffee</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed nostrum facere dolor nesciunt ipsum dolorem voluptatum sit enim tenetur?</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ServiceComponent;
