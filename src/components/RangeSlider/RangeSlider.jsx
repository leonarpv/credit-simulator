import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import SliderSubject from './../SliderSubject';
import Slider from './../Slider';
import './RangeSlider.scss'
const RangeSlider = observer(({
    initialValues,
    label,
    currency,
    valueSlider,
    onChange
}) => (
        <div className='RangeSlider'>
            <div className='RangeSlider__subject'>
                <SliderSubject title={label} currency={currency} valueSlider={valueSlider} />
            </div>
            <div className='RangeSlider__slider'>

                <Slider initialValues={initialValues} valueSlider={valueSlider} onChange={onChange} />
            </div>

        </div>
    ))

export default RangeSlider
