import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositorios(){
    const history = useHistory();
    const [ repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        let repositoriosNomes = localStorage.getItem('repositoriosNomes');                                                                                                                                                                                          
        if(repositoriosNomes !== null){
            repositoriosNomes = JSON.parse(repositoriosNomes);
            setRepositorios(repositoriosNomes);
            localStorage.clear();
        } else {
            history.push('/')
        }
        
    }, []);

    return (
        <S.Container>
        <S.Title>Repositórios</S.Title>
        <S.List>
            { repositorios.map(repository => {
                return (
                    <S.ListItem>Repositorio: {repository}</S.ListItem>
                )
            })}
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}