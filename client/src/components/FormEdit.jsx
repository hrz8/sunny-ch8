import { useState } from "react";

function FormEdit() {
    const [player, setPlayer] = useState({
        username: '',
        email: '',
        exp: 0
    });
    const [players, setPlayers] = useState([
        {
            username: 'johndoe',
            email: 'john@doe',
            exp: 10
        },
        {
            username: 'foobar',
            email: 'foo@bar',
            exp: 15
        },
        {
            username: 'whoami',
            email: 'who@ami',
            exp: 89
        }
    ]);

    return (
        <div>
            <h2>Form Edit Player</h2>

            <h3>List Players</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Exp</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => {
                        return (
                            <tr key={player.username}>
                                <td>{player.username}</td>
                                <td>{player.email}</td>
                                <td>{player.exp}</td>
                                <td><button className="btn btn-danger" onClick={() => {
                                    setPlayer({
                                        username: player.username,
                                        email: player.email,
                                        exp: player.exp,
                                    });
                                }}>Edit</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h3>Update Player</h3>
            <div>
                <form action="#" onSubmit={(e) => {
                    e.preventDefault();

                    if (player.email === '' || player.exp === '' || player === 0) {
                        alert('form cannot be empty');
                        return;
                    }

                    const theRest = players.filter((ply) => ply.username !== player.username);
                    setPlayers([
                        player,
                        ...theRest,
                    ]);

                    setPlayer({
                        username: '',
                        email: '',
                        exp: 0
                    });
                }}>
                    <label htmlFor="usernameUpdate" className="form-label">Username</label>
                    <input id="usernameUpdate" className="form-control" type="text" value={player.username} readOnly />
                    <label htmlFor="emailUpdate" className="form-label">Email</label>
                    <input id="emailUpdate" className="form-control" type="email" value={player.email} onChange={(e) => setPlayer((before) => {
                        return {
                            ...before,
                            email: e.target.value,
                        }
                    })} />
                    <label htmlFor="expUpdate" className="form-label">Experience</label>
                    <input min={1} id="expUpdate" className="form-control" type="number" value={player.exp} onChange={(e) => setPlayer((before) => {
                        return {
                            ...before,
                            exp: e.target.value,
                        }
                    })} />
                    <div className="d-grid gap-2 my-3">
                        <button type="submit" className="btn btn-block btn-danger">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormEdit;
