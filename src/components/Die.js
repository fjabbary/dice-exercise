import React from 'react';
import './Die.css'

const Die = (props) => {

    const numbers = ['one', 'two', 'three', 'four', 'five', 'six']

    if (props.isRolled) {
        var diceClass1 = `fas fa-dice-${numbers[props.dice_1 - 1]} fa-10x first roll`;
        var diceClass2 = `fas fa-dice-${numbers[props.dice_2 - 1]} fa-10x second roll`;
    } else {
        var diceClass1 = `fas fa-dice-${numbers[props.dice_1 - 1]} fa-10x first`;
        var diceClass2 = `fas fa-dice-${numbers[props.dice_2 - 1]} fa-10x second`;
    }

    console.log(props)
    return (
        <div>
            <i className={diceClass1} style={{ margin: '50px' }}></i>
            <i className={diceClass2} style={{ margin: '50px' }}></i>
            <h2>Sum: {props.dice_1 + props.dice_2}</h2>
        </div>
    );
}

export default Die;
