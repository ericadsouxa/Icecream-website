

function UserGreeting(props) {
    
    if (props.isloggedIn) {
        return <h1 className= "welcome">Welcome {props.username}</h1>
    }
    else{
        return <h1 className="login">Please Login to Continue</h1>
    }

}


export default UserGreeting