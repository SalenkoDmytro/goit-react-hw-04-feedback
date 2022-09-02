import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function BtnList({ onLeaveFeedback, options }) {
  return (
    <ul className={s.btnList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={s.btn}
            type="button"
            onClick={onLeaveFeedback}
            option={option}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}

BtnList.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BtnList;
