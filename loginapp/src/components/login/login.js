import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <Grid container className="register">
        <Grid item xs={6} className="ImgMain">
        </Grid>
        <Grid item xs={6} className="LoginField">
          <h1>Login</h1><br/>
            <input className="textfield" type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input><br/>
            <input className="textfield" type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input><br/>
            <Button  className="button" onClick={login}>Login</Button><br/>
            <Button className="button" onClick={() => history.push("/register")}>Register</Button>
        </Grid>
      </Grid>
    )
}

export default Login