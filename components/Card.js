import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

const placeholderImage = require("../assets/placeholder.png");
class Card extends React.PureComponent {
  render() {
    const { item, navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Detail", { movieDetail: item })}
      >
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? { uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "relative",
    alignItems: "center",
    height: 200,
  },
  image: {
    height: 200,
    width: 125,
    borderRadius: 20,
  },
  movieName: {
    position: "absolute",
    width: 100,
    top: 10,
    textAlign: "center",
  },
});
export default Card;
