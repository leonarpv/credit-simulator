import React from 'react'
import { observer } from 'mobx-react'
import './CreditResume.scss';

const CreditResume = observer(({
    resumeLabel,
    resumeAmount,
    currency
}) => (
        <div className='CreditResume crd-ctn'>
            <div className='label'>{resumeLabel}</div>
            <div className='resume'><span>{currency}</span> {resumeAmount}</div>
        </div>
    ))

export default CreditResume
