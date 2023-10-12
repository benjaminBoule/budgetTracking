import 'package:firebase_auth/firebase_auth.dart';

final FirebaseAuth _auth = FirebaseAuth.instance;

Future<User?> signIn(String email, String password) async {
  try {
    UserCredential result = await _auth.signInWithEmailAndPassword(
        email: email, password: password);
    return result.user;
  } catch (e) {
    print(e);
    return null;
  }
}

Future<void> signUp(String email, String password) async {
  try {
    await _auth.createUserWithEmailAndPassword(
        email: email, password: password);
  } catch (e) {
    print(e);
  }
}

Future<void> resetPassword(String email) async {
  try {
    await _auth.sendPasswordResetEmail(email: email);
  } catch (e) {
    print(e);
  }
}
