import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

export default class Nav extends Component {
	state = {
		open: false
	};

	toggle = () => {
		this.setState({ open: !this.state.open });
	};
	render() {
		return (
			<div>
				<nav className="menu">
					<h1 className="menu__logo">Smart job</h1>

					<div className="menu__right">
						<ul className="menu__list">
							<li className="menu__list-item">
								<Link className="menu__link menu__link--active" to="/">
									Home
								</Link>
							</li>
							<li className="menu__list-item">
								<Link className="menu__link" to="/about">
									About
								</Link>
							</li>

							<li className="menu__list-item">
								<a className="menu__link" to="">
									Contact
								</a>
							</li>
							<li className="menu__list-item">
								<Dropdown isOpen={this.state.open} toggle={this.toggle}>
									<DropdownToggle caret>Connexion</DropdownToggle>
									<DropdownMenu>
										<Link to="/inscription">
											<DropdownItem>Candidature</DropdownItem>
										</Link>

										<Link to="/registerEntreprise">
											<DropdownItem>Entreprise</DropdownItem>
										</Link>
									</DropdownMenu>
								</Dropdown>
							</li>
						</ul>
					</div>
				</nav>

				{/* <p>List Based</p>
                                <Nav>
                                        <NavItem>
                                                <NavLink href="#">Link</NavLink>
                                        </NavItem>
                                        <NavItem>
                                                <NavLink href="#">Link</NavLink>
                                        </NavItem>
                                        <NavItem>
                                                <NavLink href="#">Another Link</NavLink>
                                        </NavItem>
                                        <NavItem>
                                                <NavLink disabled href="#">Disabled Link</NavLink>
                                        </NavItem>
                                </Nav>
                                <hr />
                                <p>Link Based</p>
                                <Nav>
                                        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
                                </Nav>
                         */}
			</div>
		);
	}
}
