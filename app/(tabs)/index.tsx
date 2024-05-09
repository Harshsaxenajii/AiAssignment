import { Image, StyleSheet, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

import MainPage from "@/components/MainPage";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerText={<Text>Hii!...Welcome to my Store</Text>}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      {/* <Text style={{ color: "white" }}>hello</Text> */}
      {/* Additional Text components */}
      <MainPage />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
