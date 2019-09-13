import React from "react";

import AppLayout from "./common/layout/AppLayout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <AppLayout.Sidebar>Sidebar</AppLayout.Sidebar>
      <AppLayout.Content>Content</AppLayout.Content>
    </AppLayout>
  );
};

export default App;
