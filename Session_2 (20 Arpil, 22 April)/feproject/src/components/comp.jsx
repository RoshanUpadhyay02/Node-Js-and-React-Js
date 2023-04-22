import React,{useEffect,useState} from 'react';

const Comp = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => setUser(data.results[0]));
    }, []);

    return user? (
        <div>
            <img src={user.picture.large}/>
            <h3>{user.name.first}</h3>
            <h3>{user.email}</h3>
            <h3>{user.gender}</h3>
        </div>
    )
    :
    (
        <div>
            <h3>Data Loading . . .</h3>
        </div>
    );
}

export default Comp;