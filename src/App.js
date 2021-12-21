import "./App.css";
import Form from "./Components/forms/Form";
// import { PDFViewer } from "@react-pdf/renderer";
// import MyDocument from "./Components/reactPdf/ReactPdf";
// import UploadAndDisplayImage from "./Components/imageUpload/ImageUpload";

function App() {
  return (
    <div className="App">
      {/* <PDFViewer width="602" height="849" showToolbar={false}>
        <MyDocument />
      </PDFViewer> */}
      {/* <UploadAndDisplayImage /> */}
      <Form />
    </div>
  );
}

export default App;
