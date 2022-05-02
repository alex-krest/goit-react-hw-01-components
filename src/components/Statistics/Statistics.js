import PropTypes from 'prop-types';

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

function Insert(props) {
  const { label, percentage } = props;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

Insert.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
