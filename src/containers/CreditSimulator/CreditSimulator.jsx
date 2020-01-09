import React, { Component } from 'react'
import { observer } from 'mobx-react'

import RangeSlider from '../../components/RangeSlider'
import CreditResume from '../../components/CreditResume'
import CreditButtons from '../../components/CreditButtons';
import CreditBox from '../../components/CreditBox';

import Store from '../../store'
@observer
class CreditSimulator extends Component {

    constructor(props) {
        super(props)
        const { config } = props
        this.Store = new Store(config)
    }

    render() {




        return (
            <CreditBox>
                <h1>{this.Store.labels.title}</h1>
                <div>
                    <RangeSlider
                        initialValues={{
                            min: this.Store.minAmount,
                            max: this.Store.maxAmount,
                            step: this.Store.stepAmount
                        }}
                        label={this.Store.labels.amount}
                        currency={this.Store.labels.currency}
                        valueSlider={this.Store.getAmount}
                        onChange={range => this.Store.setAmount(range)}
                    />
                </div>
                <div>
                    <RangeSlider
                        initialValues={{
                            min: this.Store.minTerm,
                            max: this.Store.maxTerm
                        }}
                        label={this.Store.labels.term}
                        valueSlider={this.Store.getCreditTerm}
                        onChange={range => this.Store.setTermn(range)}
                    />
                </div>
                <div>
                    <CreditResume
                        currency={this.Store.labels.currency}
                        resumeLabel={this.Store.labels.resume}
                        resumeAmount={this.Store.getResumeFinalAmountMonthly}
                    />
                </div>
                <div>
                    <CreditButtons
                        confirm={true}
                        details={true}
                        labels={this.Store.labels.buttons} />
                </div>
            </CreditBox>

        )
    }


}

export default CreditSimulator
