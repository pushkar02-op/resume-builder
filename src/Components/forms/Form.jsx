import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { PDFViewer } from "@react-pdf/renderer";
// import MyDocument from "../reactPdf/ReactPdf";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create Document Component

export default function Form() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#eb4034",
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
  const MyDocument = (props) => {
    const { name, email, phone } = props.values;

    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{name}</Text>
          </View>
          <View>
            {props.url && <Image style={styles.image} src={props.url} />}
          </View>
          <View style={styles.section}>
            <Text>{email}</Text>
            <Text>{phone}</Text>
          </View>
        </Page>
      </Document>
    );
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const initialFormValues = {
    name: "Pushkar",
    email: "pushkarishwar@gmail.com",
    phone: 82192388,

    // formSubmitted: false,
    // success: false,
  };
  const [values, setValues] = useState(initialFormValues);
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  selectedImage && console.log(selectedImage);
  return (
    <div>
      <input
        type="file"
        name="resumeImage"
        onChange={(event) => {
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}
      />

      <TextField
        required
        label="Name"
        placeholder="Enter your Full Name"
        onChange={handleInputValue}
        name="name"
      />
      <TextField
        required
        label="Email"
        placeholder="Enter your Email"
        type="email"
        onChange={handleInputValue}
        name="email"
      />
      <TextField
        required
        label="Phone"
        placeholder="Enter your Phone Number"
        type="number"
        onChange={handleInputValue}
        name="phone"
      />
      <PDFViewer width="602" height="849" showToolbar={false}>
        <MyDocument values={values} url={selectedImage} />
      </PDFViewer>
    </div>
  );
}
