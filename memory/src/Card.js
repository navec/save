import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, index, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
        <span className="symbol">
            {feedback === "hidden" ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        ' justMisMatched'
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onclick: PropTypes.func.isRequired,
}

export default Card
