import PropTypes from 'prop-types';
import { OptionList, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options }) => (
  <OptionList>
    {options.map(option => (
      <li key={option}>
        <OptionBtn type="button">{option}</OptionBtn>
      </li>
    ))}
  </OptionList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
