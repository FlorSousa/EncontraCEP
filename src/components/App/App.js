import React, { Component } from 'react'
import Form from '../Form/Form.js'
import './App.css'
import Truck from './truck.png'
    
export default class Main extends Component {
    state = {

        CEP: '',
        cidade: '',
        bairro: '',
        UF:''
        

    }
    
    LiveChange = (val)=>{
        

        this.setState({
            CEP: val.target.value
        })
       
    }


    render(){
        const {CEP, cidade, UF,bairro} = this.state;
        
        this.Clicker = ()=>{
           if(CEP != "" && CEP.length == 9){
            let url = 'https://viacep.com.br/ws/'+`${CEP}`+'/json/'
            
            fetch(url).then(
                res=>{
                    return res.json()
                    
                }
            ).then(
                json=>{
                    this.setState({
                        cidade : json.localidade,
                        bairro : json.bairro || 'Nenhum informado',
                        UF: json.uf
                    })
        
                   
                }
            )
           }
            
           
        }
        this.teste = ()=>{ 
            
            const nordeste = ['PB','MA','PI','CE','RN','AL','SE','BA','PE']
            const sudeste = ['SP','RJ','ES','MG']
            const sul = ['PR','SC','RS']
            const norte = ['AM','RR','AP','PA','TO','RO','AC']
            const centroOeste = ['MT', 'MS', 'GO']

                let região; 

                for(let i = 0;i<nordeste.length;i++){
                    if(UF == nordeste[i]){
                    região = 'Nordeste'
                    }
                }

                for(let i =0;i<sul.length; i++){
                    if(UF == sul[i]){
                    região = 'sul'
                    }
                }

                for(let i =0;i<sudeste.length; i++){
                    if(UF == sudeste[i]){
                    região = 'sudeste'
                     }
                }

                for(let i =0;i<norte.length; i++){
                    if(UF == norte[i]){
                    região = 'norte'
                    }
                }

                for(let i =0;i<centroOeste.length; i++){
                    if(UF == centroOeste[i]){
                    região = 'centro-Oeste'
                    }
                }
            
            return região
        }

        return(
            
            <div>
        
            <Form 
                Clicker={this.Clicker}
                LiveChange={this.LiveChange}
                CEP={CEP}
            />

           
            <img src={Truck} alt="k" />
            
            <div id="box">

                <label>Cidade:{cidade}</label>
                <label>Estado:{UF}</label>
                <label>Bairro:{bairro}</label>
                <h1>{this.teste()}</h1>
            </div>
           
            </div>
        )
    }

}