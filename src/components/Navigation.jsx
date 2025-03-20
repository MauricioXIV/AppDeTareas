import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="flex justify-between py-3">
        <Link to="/tasks"> 
        <h1 className="font-bold text3xl mb-4">Task App</h1> 
        </Link>
        <Link to="/tasks-create">
        <button className="bg-indigo-500 px3 py-2 rounded-lg">Create task</button>
        </Link>
        </div>
    )
}

export default Navigation