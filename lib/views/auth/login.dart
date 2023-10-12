import 'package:budget_app/controller/auth/login.dart';
import 'package:budget_app/views/auth/registration.dart';
import 'package:budget_app/views/dashboard.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  LoginScreen({super.key});
  @override
  Widget build(context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Login")),
      body: Column(
        children: [
          TextField(
            controller: emailController,
            decoration: const InputDecoration(labelText: "Email"),
          ),
          TextField(
            controller: passwordController,
            decoration: const InputDecoration(labelText: "Password"),
            obscureText: true,
          ),
          const Text('Forgot password?'),
          ElevatedButton(
              onPressed: () async {
                User? user =
                    await signIn(emailController.text, passwordController.text);
                if (user != null) {
                  if (!context.mounted) return;
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const Dashboard()),
                  );
                } else {
                  //send message Error and clear all entry
                  if (!context.mounted) return;
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                      content: Text('Error! Invalid credentials.')));
                  emailController.clear();
                  passwordController.clear();
                }
              },
              child: const Text("Login")),
          ElevatedButton(
              onPressed: () async {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => RegistrationScreen()),
                );
              },
              child: const Text("Register"))
        ],
      ),
    );
  }
}
