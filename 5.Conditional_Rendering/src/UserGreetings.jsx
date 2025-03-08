
import PropTypes from 'prop-types';
import propTypes from 'prop-types';
function UserGreetings(props){
    
    //First Way
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Log in to constinue...</h2>
    // }
    //2nd Way
//     return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username} </h2>: 
//                               <h2 className="login-prompt">Please Log in continue...</h2>) 

// }

    //3rd Way

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username} </h2>
    
    const loginPropmt = <h2 className="login-prompt">
                        Please Log in continue...</h2>

    return (props.isLoggedIn? welcomeMessage : loginPropmt );

}

UserGreetings.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,

}

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreetings;