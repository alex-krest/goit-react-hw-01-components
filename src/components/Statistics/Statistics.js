//      ВАРИАНТ 1----не получается сделать ключ-----------------
// export default function Statistics(props) {
//   const { title, stats } = props;
//   return (
//     <section className="statistics">
//       {title  &&(<h2 className="title">{title}</h2>)}
//       <ul className="stat-list">
//         {stats.map(el => (
//           <li className="item">
//             <span className="label">{el.label}</span>
//             <span className="percentage">{el.percentage}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }

//      ВАРИАНТ 2----костыли--но с ключем-и консоль ругается--------------
// export default function Statistics(props) {
// 	const { format, value } = props;
// 	return (
// 			  <li className="item">
// 				 <span className="label">{format}</span>
// 				 <span className="percentage">{value}</span>
// 			  </li>
// );
//  }

//------Вариант 3----но опять без ключа------
function Cell({ stats }) {
  return stats.map(el => (
    <li className="item">
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}%</span>
    </li>
  ));
}
function Wrapper({ title, children }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{children}</ul>
    </section>
  );
}
export default function Statistics({ title, stats }) {
  return (
    <Wrapper title={title}>
      <Cell stats={stats} />
    </Wrapper>
  );
}
