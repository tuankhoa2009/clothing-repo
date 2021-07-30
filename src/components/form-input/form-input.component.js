import React from 'react';

import './form-input.styles.scss';

const FormInput = ({refProp,label,value, ...otherProps }) => (
    
    <div className='group'>
        <input className='form-input' ref={refProp} {...otherProps} />
        {
           
            label ? (
                <label className={`${value.length > 0 ? 'shrink' : ''} form-input-label `}>
                    {label}
                 </label>
            ) : null
        }
    </div>

)

export default FormInput;
