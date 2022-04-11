import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from '../firebase.init';
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '';
    const googleProvider = new GoogleAuthProvider();
    // to sign up with email and password 
    const handleRegister = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't matched");
            return;
        }
        if (password.length < 6) {
            setError("Password must be more than 6 character");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setError('');
                const user = res.user;
                console.log(user);
            })
            .catch(err => setError(err.message));
    };
    // to sign in with email and password 
    const handleLogIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message));
    }
    // sign in with google 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => setError(err));
    }
    // signing out 
    const handleLogOut = () => {
        signOut(auth).then(() => setUser({}));
    }
    // get current user 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return {
        setEmail,
        setPassword,
        setConfirmPassword,
        handleRegister,
        handleLogIn,
        handleGoogleSignIn,
        handleLogOut,
        user,
        error
    }
}
export default useFirebase;