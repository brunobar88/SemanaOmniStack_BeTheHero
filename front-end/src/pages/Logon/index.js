import React, { useState }  from 'react';
import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Logon() {
    const [id, setid] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Algo deu errado, seu id está correto?');
        }

    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be the hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setid(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="link-pagina" to="/register"><FiLogIn size={16} color="#E02041"/> Não tenho cadastro</Link>
                </form>
            </section>
            <img src={HeroesImg} alt="heroes"/>
        </div>
    );
}