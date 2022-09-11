import React from "react";
import { Layout } from "./components/Layout";
import { Tiket } from "./components/Tiket";
import { tikets } from "./mocks/tikets";
import { ReduxProvider } from "./setup";

function App() {
  return (
    <ReduxProvider>
      <Layout>
        <Tiket tickets={tikets} />
      </Layout>
    </ReduxProvider>
  );
}

export default App;
