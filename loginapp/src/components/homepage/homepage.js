import React from "react"
import "./homepage.css"
import TodoApp from '../cmp/TodoApp'
const Homepage = ({setLoginUser}) => {
    return (
        <div className="">
            <TodoApp/>
            <button className="LogoutButton" onClick={() => setLoginUser({})} >Logout</button>
        </div>
    )
}

export default Homepage