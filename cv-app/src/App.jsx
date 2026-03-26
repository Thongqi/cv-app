import { Resume } from "./components/cv-template";
import { Form } from "./components/form";

export default function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Form></Form>
        <Resume></Resume>
      </div>
    </>
  );
}
