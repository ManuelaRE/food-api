import React from 'react'
import CardList from '../../components/CardList';

const Dashboard = (props) => {
    const {user, recipes} = props;
    console.log(user);
    const getUpdatedDashboard = () => {
        return user ? <CardList recipes={recipes} /> : <h1>Sign to get thousands of recipes</h1>
    }

    return (
        <div>
            {getUpdatedDashboard()}
        </div>
    )
}

export default Dashboard
