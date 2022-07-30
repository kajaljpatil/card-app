import {useEffect, useState} from 'react'
import "./Card.css";

const Card = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            let userData = data.results[0];
            setUser(userData)
            console.log('adat-->', userData)
        })
    }, []);

    return (user &&
        <div className="card">
            <div className="border">
                <img src={user.picture.large} />
            </div>
            <div className="border">
                <p>Name: {user.name.first} {user.name.last}</p>
                <p>Email: {user.email}</p>
                <p>Gender: {user.gender}</p>
                <p>Age: {user.dob.age}</p>
            </div>
        </div>
        
    )
}

export default Card;