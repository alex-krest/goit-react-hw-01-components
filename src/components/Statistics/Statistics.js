import PropTypes from 'prop-types';

//      ВАРИАНТ 1----не получается сделать ключ-----------------
export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(el => (
          <Insert key={el.id} label={el.label} percentage={el.percentage} />
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
  title: PropTypes.string,
  stats: PropTypes.array,
};
