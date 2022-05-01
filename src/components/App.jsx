import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/stats.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      {/* ---ВАРИАНТ 1---не получается сделать ключ----- */}
      {/* <Statistics
		  key={data.id}
		title="Upload stats" 
	   stats={data} 
		  /> */}

      {/*   ВАРИАНТ 2---костыли-но с ключом-и консоль ругается---- */}
      {/* <section className="Statistics">
<h2 className="title">Upload stats</h2>
<ul className="stat-list">
		{data.map(el => (
		<Statistics 
	key={el.id}
	format={el.label}
	value={el.percentage}
		/>
		))
      }
</ul>
</section> */}

      {/*  //------Вариант 3----но опять без ключа------ */}

      <Statistics
        title="Upload stats"
        stats={data}
        // {{data}.map(el=>(key=el.id)) }
      />
    </div>
  );
};
