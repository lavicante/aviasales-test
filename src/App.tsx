import React from "react";
import { Layout } from "./components/Layout";
import { Tiket } from "./components/Tiket";
import { tikets } from "./mocks/tikets";

function App() {
  return (
    <Layout>
      <Tiket tickets={tikets} />
    </Layout>
  );
}

export default App;
