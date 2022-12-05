/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Gallery1 from "../assets/img/gallery/gallery-1.webp";
import Gallery2 from "../assets/img/gallery/gallery-2.webp";
import Gallery3 from "../assets/img/gallery/gallery-3.webp";
import Gallery4 from "../assets/img/gallery/gallery-4.webp";
import Gallery5 from "../assets/img/gallery/gallery-5.webp";
import Gallery6 from "../assets/img/gallery/gallery-6.webp";

const GalleryComponent = () => {
	return (
		<div
			className="gallery  min-vh-100 d-flex align-items-center"
			id="gallery">
			<Container>
				<Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4 ">
					<Col>
						<img
							src={Gallery1}
							alt="Image Gallery"
							className="w-100 rounded"
						/>
					</Col>
					<Col>
						<img
							src={Gallery2}
							alt="Image Gallery"
							className="w-100 rounded"
						/>
					</Col>
					<Col>
						<img
							src={Gallery3}
							alt="Image Gallery"
							className="w-100 rounded"
						/>
					</Col>
					<Col>
						<img
							src={Gallery4}
							alt="Image Gallery"
							className="w-100 rounded"
						/>
					</Col>
					<Col>
						<img
							src={Gallery5}
							alt="Image Gallery"
							className="w-100 rounded"
						/>
					</Col>
					<Col>
						<img
							src={Gallery6}
							alt="Image Gallery"
							className="w-100 rounded"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default GalleryComponent;
