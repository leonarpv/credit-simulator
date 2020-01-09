import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import './SliderSubject.scss';


const SliderSubject = observer(({
    title,
    currency,
    valueSlider
}) => (
        <div className='SliderSubject crd-ctn'>
            <div className='SliderSubject__label'><p className='SliderSubject--title'>{title}</p></div>
            <div className='SliderSubject__summary' ><span className='SliderSubject--value'><span>{currency}</span> {valueSlider}</span></div>
        </div>

    ))


export default SliderSubject
