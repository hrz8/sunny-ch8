import { useEffect, useState } from "react";

function FormCreate() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [exp, setExp] = useState(0);
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        console.log('effect', formData);
    }, [formData]);

    const createPlayer = (e) => {
        e.preventDefault();
        setFormData((before) => {
            return [
                ...before,
                {
                    username,
                    email,
                    exp
                }
            ]
        });
    }

    return (
        <div>
            <h2>Form Create Player</h2>
            <div>
                <form action="#" onSubmit={createPlayer}>
                    <label htmlFor="usernameCreate">Username</label>
                    <input id="usernameCreate" type="text" value={username} onChange={(e) => setUsername(() => e.target.value)} />
                    <br />
                    <br />
                    <label htmlFor="emailCreate">Email</label>
                    <input id="emailCreate" type="email" value={email} onChange={(e) => setEmail(() => e.target.value)} />
                    <br />
                    <br />
                    <label htmlFor="passwordCreate">Password</label>
                    <input id="passwordCreate" type="password" value={password} onChange={(e) => setPassword(() => e.target.value)}  />
                    <br />
                    <br />
                    <label htmlFor="expCreate">Experience</label>
                    <input id="expCreate" type="number" value={exp} onChange={(e) => setExp(() => e.target.value)} />
                    <br />
                    <br />
                    <button type="submit">Create</button>
                </form>
            </div>

            <h3>Summary</h3>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Exp</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((player) => {
                        return (
                            <tr key={player.username}>
                                <td>{player.username}</td>
                                <td>{player.email}</td>
                                <td>{player.exp}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FormCreate;
