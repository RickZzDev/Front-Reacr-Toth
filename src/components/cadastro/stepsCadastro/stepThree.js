import React, {Component} from 'react'
import Inputs from '../../inputs'
import '../../login/LoginWeb.css'
import Botao from '../../botao'

    function StepThree({mudaStatus, guardaDados,mostraJson}){
        return(
            <form name="frmformulario" onSubmit={event => {
                event.preventDefault()
                mudaStatus('four')
                }}>
                <div className="container animAparecer">
                    <div className="row">
                        <Inputs name="email" type="email" placeholder="email" type="text" guardaDados={guardaDados} />
                    </div>
                    <div className="row">
                        <Inputs name="login" placeholder="login" type="text" guardaDados={guardaDados}  />
                    </div>
                    <div className="row">
                        <Inputs name="senha" placeholder="senha" type="password" guardaDados={guardaDados}  />
                    </div>
                    <div className="row">
                        <Inputs name="confirm-senha" placeholder="confirm-senha" type="password" guardaDados={guardaDados}  />
                    </div>
                </div>
                <div className="row pr-3 mt-5 pl-3 mb-2" >
                    <Botao value="Finalizar" mostraJson={mostraJson} color=" btn-primary rounded-pill"/>
                </div>
            </form>
        )
    }
    
 

export default StepThree