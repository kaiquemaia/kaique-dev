import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import '../../global.css';
import { FiArrowRight, FiGithub } from 'react-icons/fi';


import perfilImg from '../../assets/foto-perfil.png';


export default function Home() {
    return (
        <div className="home-container">
           <section className="perfil">
            <img src={perfilImg} alt="Developer"/>
            <h2>Kaique Feng</h2>
            <Link to="https://github.com/kaiquemaia" className="icon-social">
                <FiGithub color="#fff" />
            </Link>
            <p>I'm a <span>FullStack</span> Developer</p>
            

            <Link to="/profile"> 
                <button type="button" className="btn button">Conhecer <FiArrowRight /></button>
            </Link>
            
            <Link to="/contato">
                <button type="button" className="btn button-contato">Contato <FiArrowRight /></button>
            </Link>


           </section>
        </div>
    )
}