import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "./Card";
class List extends React.PureComponent {
  render() {
    const { title, content, navigation } = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({ item }) => (
              <Card item={item} navigation={navigation} />
            )}
          ></FlatList>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

export default List;
