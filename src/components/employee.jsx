const Employee = (props) => {
  return (
    <>
      <h1>Employee: {props.name}</h1>
      <h2>Position: {props.role}</h2>
    </>
  );
};

export default Employee;
