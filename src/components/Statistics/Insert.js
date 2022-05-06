import PropTypes from 'prop-types';
import s from './Insert.module.css';

function GetRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Insert(props) {
  const { label, percentage } = props;
  return (
    <li className={s.item} style={{ backgroundColor: GetRandomHexColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

Insert.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
