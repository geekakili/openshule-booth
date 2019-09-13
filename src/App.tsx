import React from "react";

import AppLayout from "./common/layout/AppLayout/AppLayout";
import SubjectList from "./subjects/SubjectList/SubjectList";

const App = () => {
  return (
    <AppLayout>
      <AppLayout.Sidebar>
        <SubjectList subjects={[]} />
      </AppLayout.Sidebar>
      <AppLayout.Content>Content</AppLayout.Content>
    </AppLayout>
  );
};

export default App;
