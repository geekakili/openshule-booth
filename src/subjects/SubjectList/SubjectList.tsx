import React, { FunctionComponent } from "react";

import styles from "./SubjectList.module.scss";
import { ISubject } from "../../types/ISubject";
import SubjectListItem from "./SubjectListItem";

interface IProps {
  subjects: ISubject[];
  onItemClick?: Function;
}

const SubjectList: FunctionComponent<IProps> = ({ subjects, onItemClick }) => {
  return (
    <ul className={styles.list}>
      {subjects.map(subject => (
        <SubjectListItem onClick={onItemClick(subject.id)} key={subject.id}>
          {subject.name}
        </SubjectListItem>
      ))}
    </ul>
  );
};

SubjectList.defaultProps = {
  subjects: []
};

export default SubjectList;
