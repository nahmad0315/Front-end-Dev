import PropTypes from "prop-types";

function List(props) {
  //   const name = props.name;
  //   const age = props.age;
  const Students = [
    { id: 1, name: "Nabeel", age: 24 },
    { id: 2, name: "Ahmad", age: 16 },
    { id: 3, name: "Ali", age: 28 },
  ];

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {Students.map((student) => (
          <li key={student.id}>
            {student.age >= 18 && `${student.name} is ${student.age} years old`}
          </li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

List.defaultProps = {
  name: "Guest",
  age: 0,
};

export default List;
