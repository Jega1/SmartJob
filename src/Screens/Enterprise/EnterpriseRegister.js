import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import Api from "../../Services/Api";

export default class EnterpriseRegister extends Component {
	constructor(props) {
		super(props);

		this.state = { ApiReponse: "" };

		this.state = {
			nom: "",
			ref: "",
			lieu: "",
			email: "",
			password: ""
		};
		//pourquoi ici on intencie api
		this.api = new Api();
	}

	render() {
		return (
			<div>
				<Form>
					<FormGroup row>
						<Label sm={2}>Nom</Label>
						<Col sm={8}>
							<Input
								onChange={this.handleInputChange}
								type="text"
								value={this.state.email}
								name="nom"
								placeholder="Nom d'entreprise"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label sm={2}>Reference</Label>
						<Col sm={8}>
							<Input
								onChange={this.handleInputChange}
								type="text"
								value={this.state.ref}
								name="ref"
								placeholder="Numero de reference"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label sm={2}>Lieu d'entreprise</Label>
						<Col sm={8}>
							<Input
								onChange={this.handleInputChange}
								type="text"
								value={this.state.lieu}
								name="lieu"
								placeholder="Nom d'entreprise"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label sm={2}>Email</Label>
						<Col sm={8}>
							<Input
								onChange={this.handleInputChange}
								type="email"
								value={this.state.email}
								name="email"
								placeholder="Email"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label sm={2}>password</Label>
						<Col sm={8}>
							<Input
								onChange={this.handleInputChange}
								type="password"
								value={this.state.password}
								name="password"
								placeholder="password"
							/>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}
