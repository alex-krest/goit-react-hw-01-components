import PropTypes from 'prop-types';
import './Statistics.css';

//      ВАРИАНТ 1----не получается сделать ключ-----------------
export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <Insert key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

function GetRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Insert(props) {
  const { label, percentage } = props;
  return (
    <li className="item" style={{ backgroundColor: GetRandomHexColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

Insert.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
