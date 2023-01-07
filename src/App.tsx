import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66bWLlp3b30OjXmTjA_u9Tlua1cQufFE",
  authDomain: "movie-watchlist-b03c4.firebaseapp.com",
  projectId: "movie-watchlist-b03c4",
  storageBucket: "movie-watchlist-b03c4.appspot.com",
  messagingSenderId: "907441925913",
  appId: "1:907441925913:web:d091236523857b0e71df88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        <h1>Movie Watchlist</h1>
        <SignOut/>
        {user ? <WatchList /> : <SignIn />}
      </section>
    </div>
  );
}

function WatchList() {
  return (
    <div>Nice</div>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      // .then((result) => {
      //   // The signed-in user info.
      //  const user = result.user;
      // }).catch((error) => {
      //   // Handle Errors here.
      //   console.log(error);
      // });
  }

  return (
    <Button id="button-id" variant="info" onClick={signInWithGoogle}>Sign in with Google</Button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <Button variant="info" onClick={() => auth.signOut()}>Sign Out</Button>
  )
}

export default App;
