import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig';
import { types } from '../types/types';

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logWithGoogle = () => (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
};

export const sigInWithEmailPasswordName = (email, password, name) => (
  dispatch
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async ({ user }) => {
      await user.updateProfile({ displayName: name });

      dispatch(login(user.uid, user.displayName));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const logWithEmailPassword = (email, password) => (dispatch) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    })
    .catch((e) => {
      console.log(e);
    });

export const logout = () => ({
  type: types.logout,
});

export const logoutFromFirebase = () => async (dispatch) => {
  await firebase.auth().signOut();

  dispatch(logout());
};
