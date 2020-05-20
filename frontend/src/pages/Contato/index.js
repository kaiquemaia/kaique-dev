import React from 'react';
import './style.css'
import '../../global.css';
import { Link } from 'react-router-dom';
import { FiGithub, FiArrowLeft, FiPhone, FiMail} from 'react-icons/fi'

export default function Contato() {
    return (
        <div className="contato-container">
            <section className="jobs-container">
            <h2> {"</ contato >"} </h2>

                <div className="section-contato">
                    <div className="info-contato">
                    <h2>Entre em contato</h2>

                         <ul>
                             <li><FiMail size={25} color="#2AC7E3" /> kaiquefeng1@gmail.com</li>
                             <li><FiPhone size={25} color="#2AC7E3" /> (11) 94179-1762</li>
                             <li><FiGithub size={25} color="#2AC7E3" /> @kaiquemaia</li>
                         </ul>

                         <Link to="/profile"> 
                            <button type="button" className="btn button">WhatsApp</button>
                        </Link>

                        <Link to="/profile"> 
                            <button type="button" className="btn button-secondary">WhatsApp</button>
                        </Link>
                    </div>

                    <div className="info-contato">

                         <ul>
                             <li>

                            
                            <p>
                                Principais tecnologias utilizadas
                                PHP -JAVASCRIPT -HTML - CSS, Node.js, React
                                Metodologias ágeis.
                                Versionamento Github
                            </p>
                             </li>
                         </ul>
                    </div>
                    
                    

                    
                </div>

                <Link to="" className="back-link mt-">
                    <FiArrowLeft /> Voltar para Home 
                </Link>

            </section>

        </div>
    )
}