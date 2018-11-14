// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as firebase from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const db = admin.firestore();
db.settings({timestampsInSnapshots: true});
const users = db.collection('users');

exports.createUserAccout = firebase.auth.user().onCreate((user, context) => {
  console.log('user', user);
  const newUser = {
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
    photoURL: user.photoURL,
    phoneNumber: user.phoneNumber,
    disabled: user.disabled,
    toBeDeleted: false
  };
  return users.doc(user.uid).set(newUser);
});

exports.deleteUserAccount = firebase.auth.user().onDelete(user => {
  return users.doc(user.uid).update({toBeDeleted: true});
});

exports.removeDeletedAccounts = firebase.https.onRequest((req, res) => {
  console.log('deleting all toBeDeleted account from DB...');
  users.where('toBeDeleted', '==', true)
    .get().then(docs => {
    docs.forEach(doc => {
      users.doc(doc.id).delete().catch(err => res.send(err));
    });
    res.send('done').status(200);
  }).catch(err => {
    res.send(err);
  });
})
