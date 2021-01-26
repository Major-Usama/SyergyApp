import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function UserLists() {
  const [gallery, useGallery] = useState([
    {
      id: "1",
      image: require("../icons/user1.png"),
      title: "Abc Ver",
      subtitle: "Poseur",
    },
    {
      id: "2",
      image: require("../icons/suitcase-1.png"),
      title: "Abc Ver",
      subtitle: "Poseur",
    },
    {
      id: "3",
      image: require("../icons/suitcase.png"),
      title: "Abc Ver",
      subtitle: "Poseur",
    },
    {
      id: "4",
      image: require("../icons/user2.png"),
      title: "Abc Ver",
      subtitle: "Poseur",
    },
  ]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>4 Utilisateurs</Text>
      </View>
      

      <FlatList
        keyExtractor={(item) => item.id}
        data={gallery}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.imagetextContainer}>
                <Image source={item.image} style={styles.img} />

                <View style={styles.textsContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </View>

              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: WIDTH / 1.15,
    height: HEIGHT / 12,
    backgroundColor: "#F5F5F5",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  txt: {
    color: "#8D8D8D",
    marginLeft: WIDTH / 13,
    marginTop: 14,
  },

  imagetextContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: WIDTH * 0.28,
    justifyContent: "space-between",
  },

  img: {
    width: 25,
    height: 24,
  },

  textsContainer: {},

  title: {
    color: "#1B2331",
    fontSize: 18,
  },

  subtitle: {
    color: "#8D8D8D",
    fontSize: 13,
  },
});
