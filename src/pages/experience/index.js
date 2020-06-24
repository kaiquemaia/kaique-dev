import React from  'react';
import './style.css';
import '../../global.css'
import { Link } from 'react-router-dom';
import { FiRotateCw, FiArrowLeft } from 'react-icons/fi';



export default function Experience() {
    return (
        <div className="experience-container">
            <section className="jobs-container">
            <h2> {"</ Experience >"} </h2>

                <div className="jobs">
                    <div className="card-job">
                        <span><FiRotateCw size={20} color="#6161E1" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2019 - Agência 380 Volts</p>
                            <h5>Web Developer</h5>
                            <p>
                                Principais tecnologias utilizadas
                                PHP -JAVASCRIPT -HTML - CSS, Node.js, React
                                Metodologias ágeis.
                                Versionamento Github
                            </p>
                             </li>
                         </ul>
                    </div>
                    <div className="card-job">
                        <span><FiRotateCw size={20} color="#6161E1" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2019 - Agência 380 Volts</p>
                            <h5>Web Developer</h5>
                            <p>
                                Principais tecnologias utilizadas
                                PHP -JAVASCRIPT -HTML - CSS, Node.js, React
                                Metodologias ágeis.
                                Versionamento Github
                            </p>
                             </li>
                         </ul>
                    </div>
                    <div className="card-job">
                        <span><FiRotateCw size={20} color="#6161E1" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2019 - Agência 380 Volts</p>
                            <h5>Web Developer</h5>
                            <p>
                                Principais tecnologias utilizadas
                                PHP -JAVASCRIPT -HTML - CSS, Node.js, React
                                Metodologias ágeis.
                                Versionamento Github
                            </p>
                             </li>
                         </ul>
                    </div>
                    <div className="card-job">
                        <span><FiRotateCw size={20} color="#6161E1" /></span>
                         <ul>
                             <li>
                             <p className="empresa"> 2019 - Agência 380 Volts</p>
                            <h5>Web Developer</h5>
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