import { useState } from "react";

function FormCreate() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [exp, setExp] = useState(0);
    const [formData, setFormData] = useState([]);

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
        setUsername('');
        setEmail('');
        setPassword('');
        setExp('');
    }

    return (
        <div>
            <h2>Form Create Player</h2>
            <div>
                <form action="#" onSubmit={createPlayer}>
                    <label htmlFor="usernameCreate" className="form-label">Username</label>
                    <input id="usernameCreate" className="form-control" type="text" value={username} onChange={(e) => setUsername(() => e.target.value)} />
                    <label htmlFor="emailCreate" className="form-label">Email</label>
                    <input id="emailCreate" className="form-control" type="email" value={email} onChange={(e) => setEmail(() => e.target.value)} />
                    <label htmlFor="passwordCreate" className="form-label">Password</label>
                    <input id="passwordCreate" className="form-control" type="password" value={password} onChange={(e) => setPassword(() => e.target.value)}  />
                    <label htmlFor="expCreate" className="form-label">Experience</label>
                    <input id="expCreate" className="form-control" type="number" value={exp} onChange={(e) => setExp(() => e.target.value)} />
                    <div className="d-grid gap-2 my-3">
                        <button type="submit" className="btn btn-block btn-primary">Create</button>
                    </div>
                </form>
            </div>

            <h3>Summary</h3>
            <table className="table table-hover">
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
