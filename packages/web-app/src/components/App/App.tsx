import React from "react";
import { Page } from "@keth-dev/lerna-demo-shared-ui";

export const App = () => {
  return (
    <Page
      onLogin={console.log}
      onCreateAccount={console.log}
      onLogout={console.log}
    >
      Hello World from Web App 3
    </Page>
  );
};
