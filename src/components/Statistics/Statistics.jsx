import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li className={s.item}>
        <p className={s.label}>Good:</p>
        <span className={s.value}>{good}</span>
      </li>
      <li className={s.item}>
        <p className={s.label}>Neutral:</p>
        <span className={s.value}>{neutral}</span>
      </li>
      <li className={s.item}>
        <p className={s.label}>Bad:</p>
        <span className={s.value}>{bad}</span>
      </li>
      <li className={s.item}>
        <p className={s.label}>Total:</p>
        <span className={s.value}>{total}</span>
      </li>
      <li className={s.item}>
        <p className={s.label}>Positive feedback:</p>
        <span className={s.value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
