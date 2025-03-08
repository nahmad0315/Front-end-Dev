function List() {
  const Students = [
    { id: 1, name: "Bilal", age: 38 },
    { id: 2, name: "Jawad", age: 27 },
    { id: 3, name: "Irfan", age: 16 },
  ];

  return (
    <>
      <h2>Students</h2>
      <ul>
        {Students.map((student) => (
          <li key={student.id}>{student.age >= 18 && 
            `${student.name} is ${student.age} years old` }
            
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
