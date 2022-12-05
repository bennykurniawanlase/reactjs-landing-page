import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComponent = () => {
	return (
		<div
			className="hero min-vh-100 w-100"
			id="home">
			<Container>
				<Row>
					<Col className="text-white text-center fs-5 ">
						<h1 className="fs-1">Lets Do It Together</h1>
						<p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, alias?</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeroComponent;
