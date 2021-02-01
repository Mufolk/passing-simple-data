import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const app = () => {

    const user = {
        name: "Mufolk is the Phoenix",
        location: "Rio de Janeiro",
        foodType: "Everything",
        age: 24,
        likes: "Coding into the wee hours of the morning",
        twitterUsername: "mufolk",
        avatar: 'https://pbs.twimg.com/profile_images/1002165111816114177/wqoHV_Yl_400x400.jpg'
    };

    return (
        <div className="App">
            <div className="user-deets">
                <p>
                    <img src={user.avatar}></img>
                    <h3>
                        <a>{user.name}</a>
                    </h3>
                </p>

                <p>
                    <strong>Age:</strong> {user.age}
                </p>
                <p>
                    <strong>Location:</strong> {user.location}
                </p>
                <p>
                    <strong>Food type:</strong> {user.foodType}
                </p>
                <p>
                    <strong>Likes:</strong> {user.likes}
                </p>
                <p>
                    <strong>Twitter:</strong>{" "}
                    <a href={`https://twitter.com/@${user.twitterUsername}`}>
                        @{user.twitterUsername}
                    </a>
                </p>
            </div>
        </div>
    );

}

export default app;
