import {useState} from 'react';
function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handleNameChange = event=>{
        setName(event.target.value);
    };
    const handleEmailChange = event=>{
       setEmail(event.target.value);
    };
    const handlePwdChange = event=>{
        setPwd(event.target.value);
    };
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(`Your state values:
                    name: ${name}
                    email: ${email}
                    pwd: ${pwd}`)
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Full Name" value={name} onChange={handleNameChange} />
            </div>

            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
            </div>

            <div>
                <label  htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" value={pwd} onChange={handlePwdChange} />
            </div>
            <div>
                <div >
                    <input type="checkbox"  id="customCheck1" />
                    <label  htmlFor="customCheck1">GDPR Ok?</label>
                </div>
            </div>

            <button type="submit" >Sign Up</button>
            <p>
                Already registered <a href="/login">sign in?</a>
            </p>
        </form>
    );
}
export default SignUp;