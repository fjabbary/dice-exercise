import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

export default class RollDice extends Component {

    state = {
        dice_1: 1,
        dice_2: 1,
        isRolled: false
    }

    handleRoll = () => {
        this.setState({
            isRolled: true
        })
        setTimeout(() => {
            let radnomDice_1 = Math.floor(Math.random() * 6) + 1;
            let radnomDice_2 = Math.floor(Math.random() * 6) + 1;
            this.setState({
                dice_1: radnomDice_1,
                dice_2: radnomDice_2,
                isRolled: false
            })
        }, 1000)
    }

    render() {
        const { dice_1, dice_2, isRolled } = this.state
        return (
            <div>
                <Die dice_1={dice_1} dice_2={dice_2} isRolled={isRolled} />
                <div>
                    <button onClick={this.handleRoll} className="btn" disabled={isRolled}>{isRolled ? 'Rolling...' : 'Roll Dice'}</button>
                </div>
            </div>
        )
    }
}
