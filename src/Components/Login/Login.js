import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase()
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin:"20px"}}>
                <button onClick ={singInWithGoogle}>Google sing in</button>
            </div>
            <from>
               <input type="email" placeholder=" Your Email"/>
               <br />
              <input type="password" name="" id="" placeholder="  password" />
              <br />
              <input type="submit" value="Login" />
           </from>
        </div>
    );
};

export default Login;