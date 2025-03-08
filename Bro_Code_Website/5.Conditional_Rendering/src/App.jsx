import UserGreetings from "./UserGreetings";

function App(){
  return(
    <>
    <UserGreetings isLoggedIn={true} username="Nabeel"  />
    </>
  );
}

export default App;