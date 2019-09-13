import React, { useState } from "react";

import subjects from "./fixtures/subjects.json";
import AppLayout from "./common/layout/AppLayout/AppLayout";
import SubjectList from "./subjects/SubjectList/SubjectList";
import SidebarTitle from "./common/branding/SidebarTitle";
import SubjectContent from "./subjectDetails/SubjectContent/SubjectContent";

const App = () => {
  const [subjectId, setSubjectId] = useState(1);

  const onItemClick = subjectId => {
    return () => setSubjectId(subjectId);
  };

  return (
    <AppLayout>
      <AppLayout.Sidebar>
        <SidebarTitle />
        <SubjectList onItemClick={onItemClick} subjects={subjects} />
      </AppLayout.Sidebar>
      <AppLayout.Content>
        <SubjectContent subjectId={subjectId} />
      </AppLayout.Content>
    </AppLayout>
  );
};

export default App;
