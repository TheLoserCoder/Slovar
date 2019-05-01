import axios from "axios";

export default function autoreq(logdata) 
{
    axios.post("/login", logdata)
}
