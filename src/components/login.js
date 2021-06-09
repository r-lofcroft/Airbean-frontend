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