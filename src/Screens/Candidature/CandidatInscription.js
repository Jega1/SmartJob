import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import Api from '../../Services/Api'

export default class CandidatInscription extends Component {

        constructor(props){
                super(props)
                this.state = { apiResponse: " " };
        
                this.state = {
                        nom: "",
                        prenom: "",
                        post: "",
                        email: " ",
                        password: " "
                }
                this.api = new Api()
        }

        handleNomChange = (evt)=>{
                console.log(evt)
                this.setState({ nom: evt.target.value});
        }
        handlePrenomChange = (evt) => {
                console.log(evt)
                this.setState({ prenom: evt.target.value });
        }

        registerCandidat=(event)=>{
                event.preventDefault()
                // console.log(this.state.nom)
                // console.log(this.state.prenom)
                const dataCanditat ={
                        nom: this.state.nom,
                        prenom: this.state.prenom
                }
                this.api.registerCandidat(dataCanditat).then(res => {
                        console.log("lol")
                        console.log(res)
                })
               
             
        }

     



        render() {
                return (
                        <div>
                                <h3>Trouvez tous les jobs qu'il vous faut en créant un compte !</h3>

                                <Form >
                                        <FormGroup row >
                                                <Label sm={2}>Nom</Label>
                                                <Col sm={8}>
                                                        {/* <Input type="text" name="name"  placeholder="with a placeholder" value={this.state.name} onChange={this.handleChange}/> */}
                                                        <Input  onChange={this.handleNomChange} type="text" nom={this.state.nom} id="nom" placeholder="Nom" />
                                                </Col>
                                        </FormGroup>
                                       
                                        <FormGroup row >
                                                <Label sm={2}>Prenom</Label>
                                                <Col sm={8}>
                                                        <Input onChange={this.handlePrenomChange} type="text"prenom={this.state.prenom} id="prenom" placeholder="Prenom" />
                                                </Col>
                                        </FormGroup>
                                        <FormGroup row >
                                                <Label sm={2}>Prenom</Label>
                                                <Col sm={8}>
                                                        <Input onChange={this.handlePrenomChange} type="text" prenom={this.state.prenom} id="prenom" placeholder="Prenom" />
                                                </Col>
                                        </FormGroup>

                                        <FormGroup row >
                                                <Label sm={2}>Prenom</Label>
                                                <Col sm={8}>
                                                        <Input onChange={this.handlePrenomChange} type="text" prenom={this.state.prenom} id="prenom" placeholder="Prenom" />
                                                </Col>
                                        </FormGroup>

                                        <FormGroup row >
                                                <Label sm={2}>Prenom</Label>
                                                <Col sm={8}>
                                                        <Input onChange={this.handlePrenomChange} type="text" prenom={this.state.prenom} id="prenom" placeholder="Prenom" />
                                                </Col>
                                        </FormGroup>




                                      
                              
                                  
                                        <FormGroup check row>
                                                <Col sm={{ size: 8, offset: 4 }} >
                                                        <Button type="submit" onClick={this.registerCandidat}>Submit</Button>
                                                </Col>
                                        </FormGroup>
                                      
                                </Form>

                                
                        </div>
                )
        }
}

