import React from "react";
import styles from "./list.module.scss"
import { Link } from "react-router-dom";

const vari = ({dataSource}) => {
  return <div className = {styles.worklist}>
    <ul>
      {
        dataSource && dataSource.map (item => 
          <li>
            <Link to={ `/portfolio/works/${item.id}`}>
              <div className= {styles.cover}>
                <img alt='cover' src={item.cover}/>
              </div>
              <div className= {styles.workbrief }>
                <h3>{item.title}</h3>
                <p>{item.brief}</p>
                <div className={styles.tag}>
                  { item.tags && item.tags.map( i=><span key ={i}>{i}</span>)}
                </div>
              </div>
            </Link>
          </li>
        )
      }
    </ul>
  </div>
}

export default vari;