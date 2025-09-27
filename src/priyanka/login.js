import React from "react";
import data from "./task.json";

function App() {
    return (
        <>
            {data.map((student) => {
                return (
                    <ul key={student.id}>
                        <li>{student.id}</li>
                        <li>{student.name}</li>
                        <li>{student.address}</li>
                        <li>{student.group}</li>
                    </ul>
                );
            })}
        </>
    );
}

export default App;
