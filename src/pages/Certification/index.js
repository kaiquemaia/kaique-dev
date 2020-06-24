import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiRotateCw, FiBook} from 'react-icons/fi';

import './style.css'
import '../../global.css'


export default function Certification() {
    
    return (
        <div className="certification-container">
            <section className="instituicao-container">
            <h2> {"</ Certification >"} </h2>

                <div className="instituicao">
                    <div className="card-instituicao">
                        <span><FiBook size={20} color="#2AC7E3" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2020</p>
                            <h5>Digital House Brasil</h5>
                            <p>
                            Desenvolvimento Web Full Stack Área de estudoProgramação e Desenvolvimento
                            </p>
                             </li>
                         </ul>
                    </div>

                    <div className="card-instituicao">
                        <span><FiBook size={20} color="#2AC7E3" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2020</p>
                            <h5>Digital House Brasil</h5>
                            <p>
                            Desenvolvimento Web Full Stack Área de estudoProgramação e Desenvolvimento
                            </p>
                             </li>
                         </ul>
                    </div>

                    <div className="card-instituicao">
                        <span><FiBook size={20} color="#2AC7E3" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2020</p>
                            <h5>Digital House Brasil</h5>
                            <p>
                            Desenvolvimento Web Full Stack Área de estudoProgramação e Desenvolvimento
                            </p>
                             </li>
                         </ul>
                    </div>

                    <div className="card-instituicao">
                        <span><FiBook size={20} color="#2AC7E3" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2020</p>
                            <h5>Digital House Brasil</h5>
                            <p>
                            Desenvolvimento Web Full Stack Área de estudoProgramação e Desenvolvimento
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