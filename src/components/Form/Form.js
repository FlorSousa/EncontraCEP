import React from 'react'
import PropType from 'prop-types'
import './Form.css'


export default function Form({ Clicker,LiveChange,CEP}){
    return(
        
          
        <div>
            <input 
                onChange={LiveChange}
                type='text'
                value={CEP}
            />
            <button type='submit' onClick={Clicker}>Encontrar</button>
        </div>
    )
}


Form.defaultProps = {
        CEP: ''
};


Form.propType = {
 
      LiveChange: PropType.func.isRequired,
      Clicker: PropType.func.isRequired,
      CEP: PropType.string.isRequired

}