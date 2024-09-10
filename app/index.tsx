import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";

const WelcomePage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.getStarted}
          title="Get Started"
          onPress={() => {
            /* Handle Get Started */
          }}
        />
        <CustomButton
          style={styles.SignUp}
          title="Sign Up"
          onPress={() => {
            router.push("/(auth)/SignUp");
          }}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Already have an account?
          <Text
            style={styles.loginLink}
            onPress={() => {
              router.push("/(auth)/LogIn");
            }}
          >
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  loginContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  loginText: {
    marginTop: "auto",
    fontSize: 16,
  },
  loginLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  getStarted: {
    marginTop: 300,
    marginBottom: 20,
    width: "60%",
  },
  SignUp: {
    marginTop: 100,
    width: "60%",
  },
});

export default WelcomePage;
