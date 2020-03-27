import React, { useState } from 'react';
import './style.css';
import LogoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'; 

import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setuf] = useState('');

    const history = useHistory();     

    async function handleRegister(e) {
        e.preventDefault(); 

        const data = { name, email, whatsapp, city, uf };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (error) {
            alert('Algo deu errado, por favor tente novamente!')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>

                    <Link className="link-pagina" to="/"><FiArrowLeft size={16} color="#E02041"/> ja tenho cadastro </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="inputs-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setuf(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}


