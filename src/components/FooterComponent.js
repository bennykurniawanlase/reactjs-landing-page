import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const FooterComponent = () => {
	return (
		<div className=" footer bg-dark pt-3 pb-3 ">
			<Container>
				<Row className="">
					<Col>
						<h3 className="text-white fw-bold fs-3">Benny.</h3>
					</Col>
					<Col className="text-white fs-4 text-end  ">
						<i class="fa-brands fa-instagram mx-2"></i>
						<i class="fa-brands fa-facebook mx-2"></i>
						<i class="fa-brands fa-tiktok mx-2"></i>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="text-center text-white fs-6 pt-3">&copy; Copyright By Benny Kurniawan Lase 2022, Allright Reserved</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterComponent;
