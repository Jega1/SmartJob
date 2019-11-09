import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class CandidatLogin extends Component {
       
       
       
        render() {
                return (

                        <div>
                                <h1>Connectez-vous</h1>

                        <Form>
                                <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>Email</Label>
                                        <Col sm={10}>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="votre email" />
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                        <Label for="examplePassword" sm={2}>Password</Label>
                                        <Col sm={10}>
                                                <Input type="password" name="password" id="examplePassword" placeholder="password" />
                                        </Col>
                                </FormGroup>
                                <p>Mot de passe oublié?</p>
                                <p>Vous étes nouveau? créer un compte</p>
                               
                                <FormGroup >
                                        <Col>
                                                <Button type="submit">SE CONNECTER</Button>
                                        </Col>
                                </FormGroup>
                        </Form>
                        </div>
                );
                        
                
        }
}
