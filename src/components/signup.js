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
        console.log(`Your state values:
                    name: ${name}
                    email: ${email}
                    pwd: ${pwd}`)
        fetch('http://localhost:8001/api/account', {
            body:   JSON.stringify({username: name, email: email, pwd: pwd}),
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'POST'
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                alert('Congratulations, your account has been made!')
            })
    };
    
    return (
        <section className="form-container">
            <div>
                <h1>Välkommen till AirBean-familjen!</h1>
                <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            </div>
            <form onSubmit={handleSubmit} id="sign-up-form">

                <div>
                    <label htmlFor="name">Namn</label>
                    <input type="text" placeholder="Förnamn Efternamn" value={name} onChange={handleNameChange} />
                </div>

                <div>
                    <label htmlFor="email">Epost</label>
                    <input type="email" placeholder="Epost" value={email} onChange={handleEmailChange}/>
                </div>

                <div>
                    <label  htmlFor="password">Lösenord</label>
                    <input type="password" placeholder="Lösenord" value={pwd} onChange={handlePwdChange} />
                </div>
                <div>
                    <div >
                        <input type="checkbox"  id="customCheck1" required/>
                        <label  htmlFor="customCheck1">GDPR Ok?</label>
                    </div>
                </div>

                <button type="submit" >Registrera dig</button>
                <p>
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
        </section>
    );
}
export default SignUp;