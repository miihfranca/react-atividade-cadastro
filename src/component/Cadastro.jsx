import React from "react";
import Image from './image/redesocial.png'
import './Cadastro.css'

export default function Cadastro(){

    return(
        <div className='container'>
            
            <div className='backgroud-esquerdo'>
                <form className='form'>
                    
                    <div className='title-container'>
                        <h1>Cadastro</h1>
                        <p>Preencha os dados abaixo para começar.</p>
                    </div>

                    <div className='inputs-container'>
                        <input type="text" name='nome' placeholder='Nome' />
                        <input type="text" name='sobrenome' placeholder='Sobrenome' />
                        <input type="email" name='email' placeholder='Email' />
                        <input type="password" name='senha' placeholder='Senha' />
                    </div>

                    <div className='button-container'>
                        <button className='botao'>Concluir cadastro</button>
                    </div>

                </form>
            </div>

            <div className='backgroud-lado'>
                <div className='imagem'>
                    <img src={Image} alt="" />
                </div>
            </div>

        </div>
    );
}