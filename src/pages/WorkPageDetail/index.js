import React from "react";
import styles from './detail.module.scss';

const page = () => {
  return <div className = { styles.wrap }>
    <div className={ styles.box }>
      <div className={styles.title}>
        <h1>THIS IS TITLE</h1>
        <p>September 8, 2019</p>
      </div>
      <section className={ styles.content }>
        <p>ES6模块主要有两个功能：export和import</p>
        <p>
          export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
          import用于在一个模块中加载另一个含有export接口的模块。
          也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。这几个都是ES6的语法。
        </p>
      </section>
    </div>
  </div>;
}

export default page;