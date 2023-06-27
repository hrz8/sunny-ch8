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
            <table>
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
                                <td><button onClick={() => {
                                    console.log('button', player.username);
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

            <div>
                <form action="#" onSubmit={(e) => {
                    e.preventDefault();

                    const theRest = players.filter((ply) => ply.username !== player.username);
                    setPlayers([
                        player,
                        ...theRest,
                    ]);
                }}>
                    <label htmlFor="usernameCreate">Username</label>
                    <input id="usernameCreate" type="text" value={player.username} readOnly />
                    <br />
                    <br />
                    <label htmlFor="emailCreate">Email</label>
                    <input id="emailCreate" type="email" value={player.email} onChange={(e) => setPlayer((before) => {
                        return {
                            ...before,
                            email: e.target.value,
                        }
                    })} />
                    <br />
                    <br />
                    <label htmlFor="expCreate">Experience</label>
                    <input id="expCreate" type="number" value={player.exp} onChange={(e) => setPlayer((before) => {
                        return {
                            ...before,
                            exp: e.target.value,
                        }
                    })} />
                    <br />
                    <br />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default FormEdit;
