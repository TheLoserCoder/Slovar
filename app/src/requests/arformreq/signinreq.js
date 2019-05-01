export default function autorezationRequest(data)
{
    fetch('/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
    })
        .then(
            (res) => {
                if(res.status !== 200){
                    throw "Error: " + res.status;
                }
                    
                return res.json();
            }
        ).then(
            (data) => { 
                console.log(data)
            }
        ).catch(err => console.log(err, 123))
}