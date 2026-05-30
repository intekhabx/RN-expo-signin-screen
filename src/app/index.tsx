import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";


export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          {/* Logo Image */}
          <Image source={require("@/assets/images/logo.png")} style={styles.logoImage} />
        </View>

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Let's experience the joy of telecare AI.
        </Text>
      </View>

      <KeyboardAvoidingView style={styles.form}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>

          <View style={styles.inputContainer}>
            <Feather name="mail" size={20} color="#888" />

            <TextInput
              placeholder="elementary221b@gmail.com"
              style={styles.textInput}
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#888" />

            <TextInput
              placeholder="Enter your password..."
              secureTextEntry
              style={styles.textInput}
              placeholderTextColor="#888"
            />

            <Feather name="eye-off" size={20} color="#888" />
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign In →</Text>
        </Pressable>
      </KeyboardAvoidingView>

      <View style={styles.socialContainer}>
        <View style={styles.socialBtn}>
          <FontAwesome name="facebook" size={22} color="#333" />
        </View>

        <View style={styles.socialBtn}>
          <AntDesign name="google" size={22} color="#333" />
        </View>

        <View style={styles.socialBtn}>
          <AntDesign name="instagram" size={22} color="#333" />
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Text style={styles.signupLink}> Sign Up.</Text>
      </View>

      <Text style={styles.forgotPassword}>Forgot your password?</Text>
    </SafeAreaView>
  );
}

const PRIMARY = "#8CCB1F";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginBottom: 24,
  },

  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  title: {
    fontSize: 38,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },

  form: {
    width: "100%",
  },

  inputWrapper: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    height: 62,
    backgroundColor: "#fff",

    borderWidth: 2,
    borderColor: "#A5D63F",
    borderRadius: 18,

    paddingHorizontal: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  textInput: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 15,
    color: "#222",
  },

  button: {
    height: 58,
    backgroundColor: PRIMARY,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
    gap: 16,
  },

  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  signupText: {
    color: "#666",
    fontSize: 14,
  },

  signupLink: {
    color: PRIMARY,
    fontWeight: "700",
    fontSize: 14,
  },

  forgotPassword: {
    textAlign: "center",
    color: PRIMARY,
    marginTop: 12,
    fontWeight: "600",
  },
});