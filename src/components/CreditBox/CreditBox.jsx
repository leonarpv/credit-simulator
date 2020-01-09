import React from 'react';

import './CreditBox.scss';

const CreditBox = ({ children, className }) => (
    <div className='CreditBox'>
        <div className='content'>
            {children}
        </div>
    </div>
)



export default CreditBox;