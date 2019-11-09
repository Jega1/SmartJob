import React, { Component } from 'react'



export default class Nav extends Component {
        render() {
                return (
                        <div>
                                        <nav class="menu">
                                                <h1 class="menu__logo">Smart job</h1>

                                                <div class="menu__right">
                                                        <ul class="menu__list">
                                                                <li class="menu__list-item"><a class="menu__link menu__link--active" href="#">Home</a></li>
                                                                <li class="menu__list-item"><a class="menu__link" href="#">About</a></li>
                                                                <li class="menu__list-item"><a class="menu__link" href="#">Portfolio</a></li>
                                                                <li class="menu__list-item"><a class="menu__link" href="#">Contact</a></li>
                                                                <li class="menu__list-item"><a class="menu__link" href="#">Connexion</a></li>
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
                )
        }
}
