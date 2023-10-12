import 'package:budget_app/controller/auth/login.dart';
import 'package:budget_app/views/auth/login.dart';
import 'package:flutter/material.dart';

class RegistrationScreen extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  RegistrationScreen({super.key});
  @override
  Widget build(context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Registration")),
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
          ElevatedButton(
              onPressed: () async {
                await signUp(emailController.text, passwordController.text);

                if (!context.mounted) return;
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => LoginScreen()),
                );
              },
              child: const Text("Register")),
          ElevatedButton(
              onPressed: () async {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => LoginScreen()),
                );
              },
              child: const Text("Login"))
        ],
      ),
    );
  }
}
