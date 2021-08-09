import React from "react";
import styles from './works.module.scss';
import WorkList from '../../components/WorkList';
import data from '../works.json';

const page = () => {
  return <div className = {styles.wrap}>
    This is Work Page!

    <div className = { styles.title }>
      <h3>My work</h3>
      <p> A collection of my work</p>
    </div>

    <WorkList dataSource= { data.data  } />
  </div>;
}

export default page;