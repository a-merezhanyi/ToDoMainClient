import { useState } from "react";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { checkHeath } from "../util/http";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [status, setStatus] = useState("unknown");
  const checkStatus = async () => {
    const res = await checkHeath();
    setStatus(res.message || res);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Task</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button title="check" onPress={checkStatus} />
      <Text style={styles.title}>Status: {status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
