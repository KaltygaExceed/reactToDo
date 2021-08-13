import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, to, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                auth
                    ? <Component {...props} />
                    : <Redirect to={to}/>

            )}
        />
    )

}
export default PrivateRoute;