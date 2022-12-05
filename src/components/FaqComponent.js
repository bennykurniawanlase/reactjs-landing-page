import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComponent = () => {
	return (
		<div
			className="faq"
			id="faq">
			<Container>
				<Row className="mb-5 mt-5">
					<Col>
						<h1 className="text-center fs-2 fw-bold">FAQ</h1>
						<p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, suscipit.</p>
					</Col>
				</Row>
				<Row className="row-cols-lg-2 row-cols-1 g-2 ">
					<Col>
						<Accordion>
							<Accordion.Item eventKey="0">
								<Accordion.Header>Apa Itu Coffee?</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="1">
								<Accordion.Header> Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellat nam error! #2</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="2">
								<Accordion.Header>Accordion Item #3</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="2">
								<Accordion.Header>Accordion Item #3</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col>
						<Accordion>
							<Accordion.Item eventKey="2">
								<Accordion.Header>Accordion Item #3</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FaqComponent;
