import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiFeather, FiArrowUpRight, FiRotateCw} from 'react-icons/fi';
import './style.css';
import '../../global.css';

import perfilImg from '../../assets/foto-perfil.png';
import navegadorImg from '../../assets/navegador.png'
import logoReact_back from '../../assets/Logo-react.png';

// Logos das tecnologias

import logoCss from '../../assets/icons/css-3.svg';
import logoExpress from '../../assets/icons/express.svg';
import logoHtml5 from '../../assets/icons/html5-2.svg';
import logoJs from '../../assets/icons/javascript.svg';
import logoNodemon from '../../assets/icons/nodemon.svg';
import logoVscode from '../../assets/icons/visual-studio-code.svg';
import logoLaravel from '../../assets/icons/laravel-2.svg';

// Stack

import logoNode from '../../assets/icons/nodejs-icon.svg';
import logoReact from '../../assets/icons/react-2.svg';
import logoReactNative from '../../assets/icons/react-native.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <h2> {"</ About Me >"} </h2>
            <section className="stack-container">
                <div className="img-profile">
                    <div>
                    <img src={perfilImg} alt=""/>
                    <Link to="/certification" className="back-link">
                        Certificações <FiArrowRight />
                    </Link>
                    </div>
                </div>

            <section className="colum-stacks">
                <section className="card-stack">
                        <div className="resumo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo ab voluptatum fugiat! Voluptatem animi voluptate magni sit molestiae, ea ipsum quam reprehenderit ratione repudiandae commodi, beatae minus? Mollitia, cumque.</p>

                            {/* <button type="button" className="btn button">Download <FiFeather /></button> */}
                        </div>
                        <div className="tecnologias">
                            <h3><FiRotateCw /> Stack Principal</h3>
                            <div className="stack-principal">
                                <div className="logo">
                                    <img src={logoReact} className="tec-logo" alt=""/>
                                    <p>React</p>
                                </div>
                                <div className="logo">
                                    <img src={logoNode} className="tec-logo" alt=""/>
                                    <p>NodeJs</p>
                                </div>
                                <div className="logo">
                                    <img src={logoReactNative} className="tec-logo" alt=""/>
                                    <p>React Native</p>
                                </div>

                            </div>
                        </div>
                </section>
                
            </section>
            <div></div>
            <div className="tecnologias-logo">
                    <img src={logoHtml5} className="tec-logo" alt=""/>
                    <img src={logoCss} className="tec-logo" alt=""/>
                    <img src={logoJs} className="tec-logo" alt=""/>
                    <img src={logoVscode} className="tec-logo" alt=""/>
                    <img src={logoLaravel} className="tec-logo" alt=""/>
                    <img src={logoNodemon} className="tec-logo" alt=""/>
                    <img src={logoExpress} className="tec-logo" alt=""/>
                </div>
                
            </section>

            <div className="service-container">
                <section className="description-service">
                    <h2> {"</ Service >"} </h2>
                    
                    <p> Desenvolvimento de Aplicações Web de 
                        alta performance, com recursos avançados 
                        de usabilidade utilizando a Stack mais 
                        atual do mercado, <span className="reactjs">ReactJs</span>, <span className="nodejs">NodeJs</span>, <span className="react-native">React Native</span>.</p>
                        <img src={logoReact_back} alt=""/>

                        <Link className="back-link" to="/experience">
                            Minhas experiências <FiArrowRight />
                        </Link>
                </section>

                <section className="image-navegador">
                    <img src={navegadorImg} alt=""/>
                </section>
            </div>

        </div>

        
        
    )
}