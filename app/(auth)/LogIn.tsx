import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "expo-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogIn = () => {
    // Implement log in logic here
    console.log("Log in pressed");
  };

  const handleGoogleLogIn = () => {
    // Implement Google log in logic here
    console.log("Google log in pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <InputField placeholder="E-mail" value={email} onChangeText={setEmail} />

      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton
        title="Log In"
        onPress={handleLogIn}
        style={styles.logInButton}
      />

      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogIn}>
        <Image
          source={require("../../assets/images/google-icon.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Log in with Google</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/(auth)/SignUp");
          }}
        >
          <Text style={styles.signUpLink}>Sign Up</Text>
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
  logInButton: {
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
  signUpContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signUpText: {
    color: "#FFFFFF",
  },
  signUpLink: {
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

export default LogIn;
