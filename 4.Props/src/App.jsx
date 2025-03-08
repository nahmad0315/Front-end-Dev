import Student from './Student.jsx'
function App() {
  
  return(
    <>
      <Student name="Spongebob" age={23} isStudent={true}/>
      <Student name="Ali"  age={23} isStudent={false} />
      <Student name="Ahmad" age={50} isStudent={false}/>
      <Student name="Nabeel" age={24} isStudent={true}/>
    </>
  );

}

export default App



