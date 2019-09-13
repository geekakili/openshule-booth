import React, { FunctionComponent } from "react";

import styles from "./SubjectList.module.scss";
import { ISubject } from "../../types/ISubject";
import SubjectListItem from "./SubjectListItem";

interface IProps {
  subjects: ISubject[];
}

const SubjectList: FunctionComponent<IProps> = ({ subjects }) => {
  return (
    <ul className={styles.list}>
      {subjects.map(subject => (
        <SubjectListItem key={subject.id}>{subject.name}</SubjectListItem>
      ))}
    </ul>
  );
};

SubjectList.defaultProps = {
  subjects: []
};

export default SubjectList;
