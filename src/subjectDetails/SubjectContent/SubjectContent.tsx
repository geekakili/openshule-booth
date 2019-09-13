import React from "react";

import styles from "./subjectContent.module.scss";
import subjectContents from "../../fixtures/subject-content.json";

const str1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam quo
reiciendis eos debitis? Tenetur possimus nihil non vitae omnis quibusdam
inventore neque! Magnam quia suscipit blanditiis aperiam, at corrupti.`;

const str2 = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius
molestias libero eligendi dolores enim laboriosam quidem porro debitis?
Excepturi quidem fugiat odio qui ipsum dolorum a accusantium mollitia
sequi totam eius vel eligendi quaerat corporis, voluptates aliquid
officia nesciunt reiciendis soluta. Soluta quibusdam cum blanditiis
consequuntur nulla neque at possimus eum, exercitationem quaerat qui
similique veniam quos natus sed quis mollitia voluptas dolores magnam
minima asperiores tempore. Minus sunt quisquam voluptate voluptatem
ducimus et perspiciatis excepturi voluptatum, eum repudiandae similique
vitae corrupti a atque eum. Rem minima facere reiciendis modi voluptate
amet at dolorem saepe.`;

const str3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt quaerat vero facere ad architecto voluptatem ullam ipsum minus consequuntur doloribus quo cum ipsa veniam, numquam repudiandae ex temporibus excepturi?
Repellendus suscipit fuga dolorem porro ducimus ullam vitae expedita aperiam molestiae amet. Dolore quibusdam quasi quae nobis optio eaque possimus fugit nemo, accusantium cum vitae, quia, laborum quam laudantium iste.
Nostrum sit incidunt et voluptates nam dolor accusamus ut doloribus dolore, odio ipsa modi omnis ab earum aspernatur enim voluptatibus quae, totam at. Perspiciatis, culpa iste iure nihil molestiae nisi.
Sapiente consectetur numquam architecto soluta minus atque corporis illo doloribus, ad dolores aliquid cupiditate, ut porro maiores, excepturi quidem saepe. Libero nostrum a iure amet ex id nobis dolores asperiores.
Itaque nemo accusantium nam ipsa dolorem eveniet, omnis quo? Qui voluptatibus, nesciunt beatae cupiditate ad fuga blanditiis obcaecati, deserunt, ipsam natus similique hic exercitationem. Voluptatum qui rerum voluptatem commodi numquam?
Animi aliquid accusantium harum nemo aperiam, dolores atque modi quaerat. Doloribus quod, repellat dolorum minus fugit fuga enim reiciendis tempora optio tempore placeat nobis mollitia, totam consequatur debitis deleniti exercitationem.`;

const paragraphs = [str1, str2, str3];

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const SubjectContent = ({ subjectId }) => {
  const subjecContent = subjectContents.find(
    content => content.subject === subjectId
  );
  const contentCount = Math.round(Math.random() * paragraphs.length);

  return (
    <div className={styles.fakeContent}>
      <div
        className={styles.fakeContentHeader}
        dangerouslySetInnerHTML={{ __html: subjecContent.html }}
      />
      {[str1, ...shuffle(paragraphs)].map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default SubjectContent;
