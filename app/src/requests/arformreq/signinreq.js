import axios from "axios";

export default function autoreq(logdata, postFunction) 
{
    axios.post("/login", logdata).then(
       (data) =>  postFunction( data.data )
    ).catch(

    )
}
