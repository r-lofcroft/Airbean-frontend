import {useState} from 'react';

function Login(){
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handleEmailChange = event=>{
        setEmail(event.target.value);
     };
     const handlePwdChange = event=>{
        setPwd(event.target.value);
     };
     const handleSubmit = event =>{
         event.preventDefault();
         console.log(`Your state values:
                     email: ${email}
                     pwd: ${pwd}`)
        fetch('http://localhost:8001/api/login', {
        body:   JSON.stringify({email: email, pwd: pwd}),
        headers: {
            'Content-Type': 'application/json'
          },
        method: 'POST'
        })
        .then(response => response.json())
        .then(result => {
            if(result === "Incorrect parameter"){
                console.log(result)
                alert("Incorrect email or password, please try again.")
            } else{
            console.log(result)
            alert('Congratulations, you have logged in!')}
        })
     };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
            </div>

            <div>
                <label  htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" value={pwd} onChange={handlePwdChange} />
            </div>

            <button type="submit" >Submit</button>
        </form>
    );
}
export default Login;