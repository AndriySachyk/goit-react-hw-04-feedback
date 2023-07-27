import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions-style';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option, i) => {
        return (
                <Button type="button"
                    key={i}
                    onClick={()=> onLeaveFeedback(option)}
                >
                    {option}
                </Button>
        )
    })
}


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}