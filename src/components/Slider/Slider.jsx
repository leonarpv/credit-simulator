import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Slider.scss'

const SliderComponent = observer(({
    initialValues,
    valueSlider,
    onChange
}) => (
        <div className='Slider'>
            <div className='Slider__slider'>
                <Slider

                    defaultValue={valueSlider}
                    min={initialValues.min}
                    step={initialValues.step}
                    max={initialValues.max} allowCross={true} onChange={onChange} />

            </div>
            <div className='Slider__labels'>
                <span>{initialValues.min}</span>
                <span>{initialValues.max}</span>
            </div>
        </div>
    ))

export default SliderComponent
