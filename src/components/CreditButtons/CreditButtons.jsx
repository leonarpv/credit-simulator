import React from 'react'
import { observer } from 'mobx-react';

import './CreditButtons.scss';

const CreditButtons = observer(({
    labels,
    confirm,
    details
}) => (
        <div className='CreditButtons crd-ctn'>
            <button className='CreditButtons btn confirm'>{labels.confirm}</button>
            <button className='CreditButtons btn details'>{labels.details}</button>
        </div >
    ))

export default CreditButtons
