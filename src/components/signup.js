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
        event.preventDefault()
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
            })
    };
    document.body.style.backgroundColor ="#2F2926"

    return (
        <section >
            <img className="banner" src="Banner.png" alt="banner"></img>
            <div className="signup">
            <div>
                <h1>Välkommen till AirBean-familjen!</h1>
                <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            </div>
            <form onSubmit={handleSubmit} className="">

                <div>
                    <label htmlFor="name">Namn</label> <br></br>
                    <input type="text" placeholder="Förnamn Efternamn" value={name} onChange={handleNameChange} />
                </div>

                <div>
                    <label htmlFor="email">Epost</label><br></br>
                    <input type="email" placeholder="Epost" value={email} onChange={handleEmailChange}/>
                </div>

                <div>
                    <label  htmlFor="password">Lösenord</label><br></br>
                    <input type="password" placeholder="Lösenord" value={pwd} onChange={handlePwdChange} />
                </div>
                <div>
                    <div >
                        <input type="checkbox"  id="customCheck1" required/>
                        <label  htmlFor="customCheck1">GDPR Ok?</label>
                    </div>
                </div>

                <a href="/menu/"><button type="submit" className="mainButton">Registrera dig</button></a>
                <p>
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </div>
        </section>
    );
}
export default SignUp;