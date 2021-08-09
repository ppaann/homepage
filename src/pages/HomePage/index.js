import React from "react";
import styles from "./home.module.scss"
import WorkList from "../../components/WorkList";
import workData from "../works.json";
import avater from "../../assets/images/avater.jpg";
const page = () => {
  return <div className = { styles.wrap }>
    <section className= {styles.brief }>
      <img alt="avater" src={avater}/>
      <h2> Name </h2>

      <ul>
        <li> actor </li>
        <li> UX designer </li>
      </ul>

      <p>This is a self introduction</p>
      <p>Tell me about your self</p>

    </section>

    <section className = {styles.work}> 
      <div className = {styles.title}>
        <h3> A selection of work </h3>
        <p> You can find more from the work section. </p>
      </div>

    </section>

    <WorkList dataSource = { workData.data }/>
  
  </div>;
}

export default page;