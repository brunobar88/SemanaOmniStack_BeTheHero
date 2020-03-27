import React, { useState } from 'react';
import LogoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'; 

import api from '../../services/api';

import './style.css';

export default function Icidents() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setTValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title, description, value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');

        } catch (error) {
            alert('algo deu errado, tente recarregar a pagina!');
        }
    }

    return (
        <div className="new-incident">
        <div className="content">
            <section>
                <img src={LogoImg} alt="Be the hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar heróis para resolver isso.</p>

                <Link className="link-pagina" to="/profile"><FiArrowLeft size={16} color="#E02041"/> Voltar para home</Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input placeholder="Titulo do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input placeholder="Valor em reais"
                    value={value}
                    onChange={e => setTValue(e.target.value)}
                />

                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}