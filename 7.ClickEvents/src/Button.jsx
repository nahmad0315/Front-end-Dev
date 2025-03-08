function Button() {
  // const handleClick = () => console.log("Clicked");
  let count = 0;
  const handleClick = (name) => {
    count < 3
      ? (count++, console.log(`${name} clicked me ${count} time/s..`))
      : console.log(`Stop clicking me ${name}`);
  };
  return <button onClick={() => handleClick("Nabeel")}>Click Me</button>;
}

export default Button;
