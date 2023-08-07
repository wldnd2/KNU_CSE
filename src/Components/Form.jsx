import React, { useState }from "react";
import axios from "axios";

const Form = () => {
    const [name, setName] = useState("");
    const [studentID, setStudentID] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios({
            url: `https://raipen.gabia.io/API/checkDues/?number=${studentID}&name=${name}`,
        });
        console.log(response.data);
    }

    return (
        <form onClick={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
