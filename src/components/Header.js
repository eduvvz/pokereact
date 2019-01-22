import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/header.scss'

class Header extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', () => {

        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
            });
        }

        });
    }

    render(){
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src={require('../assets/img/pikachu.png')} alt="logo"/>
                    </a>

                    <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </span>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>

                        <Link to="/pokemons" className="navbar-item">
                            Pokemons
                        </Link>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
