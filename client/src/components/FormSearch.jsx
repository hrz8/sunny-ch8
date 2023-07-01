import { useState } from "react";

function FormSearch() {
    // 1. membuat sebuah function yg dapat ditrigger pd saat form di submit √

    // 2. kita harus capture data
    // 2a. dari dropdown dan jg dari
    // 2b. form input

    // 3. tampilkan data dari state
    // 3a. data dropdown
    // 3b. data form input
    const [dataDropdown, setDataDropdown] = useState('');
    const [dataFormInput, setDataFormInput] = useState('');

    const [summary, setSummary] = useState({
        criteria: '',
        keyword: ''
    });

    return (
        <div>
            <h2>Form Search Player</h2>

            <div>
                <form onSubmit={function(event) {
                    // alert('hi');
                    event.preventDefault();
                    setSummary({
                        criteria: dataDropdown,
                        keyword: dataFormInput,
                    });
                }}>
                    <label htmlFor="criteria">Searching</label>
                    <select name="criteria" id="criteria" onChange={function(event) {
                        setDataDropdown(event.target.value);
                    }}>
                        <option value="username">Username</option>
                        <option value="email">Email</option>
                        <option value="exp">Experience</option>
                        <option value="lvl">Level</option>
                    </select>
                    <input type="search" id="search" placeholder="Keywords" onChange={function(event) {
                        setDataFormInput(event.target.value)
                    }} />
                    <br />
                    <br />
                    <button type="submit">Search</button>
                </form>

                <h4>{summary.criteria}</h4>
                <h4>{summary.keyword}</h4>
            </div>
        </div>
    )
}

export default FormSearch;
