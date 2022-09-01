import s from './BtnList.module.css';

function BtnList({ onGoodBtnClick, onNeutralBtnClick, onBadBtnClick }) {
  return (
    <ul className={s.btnList}>
      <li>
        <button className={s.btn} type="button" onClick={onGoodBtnClick}>
          Good
        </button>
      </li>
      <li>
        <button className={s.btn} type="button" onClick={onNeutralBtnClick}>
          Neutral
        </button>
      </li>
      <li>
        <button className={s.btn} type="button" onClick={onBadBtnClick}>
          Bad
        </button>
      </li>
    </ul>
  );
}

export default BtnList;
