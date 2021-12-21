import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    // backgroundColor: "#eb4034",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    height: 200,
    width: 150,
  },
});

// Create Document Component
const MyDocument = (props) => {
  const { name, email, phone, url } = props.values;
  console.log(props);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>
        <View>
          <Image style={styles.image} source={url} />
        </View>
        <View style={styles.section}>
          <Text>{email}</Text>
          <Text>{phone}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
