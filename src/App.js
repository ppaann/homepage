//import logo from "../../assets/images/logo.svg";

//import { Button, Layout } from "antd";

//const {Header, Footer, Content} = Layout;

import "./App.css";
import styles from "./App.module.scss";
import { Link, Route, withRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import WorkPageDetail from './pages/WorkPageDetail';

function App(props) {
  const { location } = props;
  console.log(location);
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.box}>
          <Link to="/">
            <div className={styles.boxleft}><p>Logo</p></div>
          </Link>
          <div className={styles.boxright}>
            <Link to="/"><p className= { location.pathname === '/' ? styles.selected : null}>Home</p></Link>
            <Link to="/works"><p className= { location.pathname === '/works' ? styles.selected : null}>Work</p></Link>
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <Route path="/" exact component={ HomePage }/>
        <Route path="/works" exact component={ WorkPage }/>
        <Route path="/works/:id" exact component={ WorkPageDetail }/>
      </section>
      <footer className={styles.footer}>
        <b>@ Shiny Day Rainy Day</b>
      </footer>
    </div>
  );
}

export default withRouter(App);
