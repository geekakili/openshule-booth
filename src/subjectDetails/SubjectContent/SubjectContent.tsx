import React from "react";
import subjectContents from "../../fixtures/subject-content.json";

const SubjectContent = ({ subjectId }) => {
  const subjecContent = subjectContents.find(
    content => content.subject === subjectId
  );
  return <div dangerouslySetInnerHTML={{ __html: subjecContent.html }}></div>;
};

export default SubjectContent;
