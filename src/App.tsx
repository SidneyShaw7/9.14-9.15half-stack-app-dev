import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

function App() {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
    },
  ];

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header name={courseName} />
      {/* <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
      <p>Number of exercises {totalExercises}</p> */}
      <Content
        name={courseParts[0].name}
        exerciseCount={courseParts[0].exerciseCount}
      />
      <Content
        name={courseParts[1].name}
        exerciseCount={courseParts[1].exerciseCount}
      />
      <Content
        name={courseParts[2].name}
        exerciseCount={courseParts[2].exerciseCount}
      />
      <Total number={totalExercises} />
    </div>
  );
}

export default App;