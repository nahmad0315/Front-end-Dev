import propTypes from 'prop-types';

function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>{props.name} is {props.isStudent ? "Student" : "not a Student"}</p>
        </div>
    );

}

Student.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    isStudent: propTypes.bool.isRequired,

}

Student.defaultProps = {
    name: "Guest",
    age: 0,
}

export default Student;