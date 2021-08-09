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
          <Link to="/portfolio">
            <div className={styles.boxleft}><p>Logo</p></div>
          </Link>
          <div className={styles.boxright}>
            <Link to="/portfolio"><p className= { location.pathname === '/portfolio' ? styles.selected : null}>Home</p></Link>
            <Link to="/portfolio/works"><p className= { location.pathname === '/portfolio/works' ? styles.selected : null}>Work</p></Link>
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <Route path="/portfolio" exact component={ HomePage }/>
        <Route path="/portfolio/works" exact component={ WorkPage }/>
        <Route path="/portfolio/works/:id" exact component={ WorkPageDetail }/>
      </section>
      <footer className={styles.footer}>
        <b>@ Shiny Day Rainy Day</b>
      </footer>
    </div>
  );
}

export default withRouter(App);
