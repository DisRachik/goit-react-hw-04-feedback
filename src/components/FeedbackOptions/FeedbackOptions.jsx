import PropTypes from 'prop-types';
import { OptionList, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList onClick={onLeaveFeedback}>
    {options.map(option => (
      <li key={option}>
        <OptionBtn name={option} type="button">
          {option}
        </OptionBtn>
      </li>
    ))}
  </OptionList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
