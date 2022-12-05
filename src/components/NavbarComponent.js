import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
	const [changeColor, setChangeColor] = useState(false);

	const changeBackgroundColor = () => {
		if (window.scrollY > 680) {
			setChangeColor(true);
		} else {
			setChangeColor(false);
		}
	};
	useEffect(() => {
		changeBackgroundColor();
		window.addEventListener("scroll", changeBackgroundColor);
	});

	return (
		<div className="sticky-top">
			<Navbar
				className={changeColor ? "color-active" : ""}
				variant="dark"
				expand="lg">
				<Container>
					<Navbar.Brand
						href="#home"
						className="fw-bold">
						Benny.
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav jus">
						<Nav className="ms-auto text-center">
							<Nav.Link
								href="#home"
								className="mx-2">
								Home
							</Nav.Link>
							<Nav.Link
								href="#gallery"
								className="mx-2">
								Gallery
							</Nav.Link>
							<Nav.Link
								href="#service"
								className="mx-2">
								Service
							</Nav.Link>
							<Nav.Link
								href="#faq"
								className="mx-2">
								FAQ
							</Nav.Link>
							<NavDropdown
								title="Dropdown"
								id="basic-nav-dropdown">
								<NavDropdown.Item
									href="#action/3.1"
									className="text-center">
									Action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									href="#action/3.2"
									className="text-center">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									href="#action/3.3"
									className="text-center">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									href="#action/3.4"
									className="text-center">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
