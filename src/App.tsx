import React from "react";

import subjects from "./fixtures/subjects.json";
import AppLayout from "./common/layout/AppLayout/AppLayout";
import SubjectList from "./subjects/SubjectList/SubjectList";
import SidebarTitle from "./common/branding/SidebarTitle";
import SubjectContent from "./subjectDetails/SubjectContent/SubjectContent";

const App = () => {
  return (
    <AppLayout>
      <AppLayout.Sidebar>
        <SidebarTitle />
        <SubjectList subjects={subjects} />
      </AppLayout.Sidebar>
      <AppLayout.Content>
        <SubjectContent subjectId={1} />
      </AppLayout.Content>
    </AppLayout>
  );
};

export default App;
