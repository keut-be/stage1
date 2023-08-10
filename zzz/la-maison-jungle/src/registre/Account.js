import { AuthData } from "../auth/AuthWrapper";

export const Account = () => {

    const { user } = AuthData();

    return (
        <div>
            <h2>Your Account</h2>
            <p>Account name: {user.name}</p>
        </div>
    )
}