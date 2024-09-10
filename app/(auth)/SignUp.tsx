import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignUp = () => {
    // Implement sign up logic here
    console.log("Sign up pressed");
  };

  const handleGoogleSignUp = () => {
    // Implement Google sign up logic here
    console.log("Google sign up pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <InputField placeholder="Name" value={name} onChangeText={setName} />

      <InputField placeholder="E-mail" value={email} onChangeText={setEmail} />

      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <InputField
        placeholder="Re-Password"
        value={rePassword}
        onChangeText={setRePassword}
        secureTextEntry
      />

      <CustomButton
        title="Sign Up"
        onPress={handleSignUp}
        style={styles.signUpButton}
      />

      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignUp}
      >
        <Image
          source={require("../../assets/images/google-icon.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>with Google</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/(auth)/LogIn");
          }}
        >
          <Text style={styles.loginLink}>Log In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.privacyPolicy}>
        <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#2C3E50",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  signUpButton: {
    width: "100%",
    marginTop: 10,
  },
  orText: {
    color: "#FFFFFF",
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#000000",
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    color: "#FFFFFF",
  },
  loginLink: {
    color: "#3498DB",
    fontWeight: "bold",
  },
  privacyPolicy: {
    marginTop: 20,
  },
  privacyPolicyText: {
    color: "#FFFFFF",
  },
});

export default SignUp;
