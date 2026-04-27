import React, { useState } from "react";

function Search({ users }) {
    const [input, setInput] = useState('');
    return (
        <>
            <input type="text" value={input} onChange={(event) => { setInput(event.target.value) }} />
        </>
    );
}

export default Search;