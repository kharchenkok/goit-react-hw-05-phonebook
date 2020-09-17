import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Styles from "./AlertStyles.module.css";

export default class ExsistNameAlert extends Component {
  render() {
    const{alert}=this.props
    return (
      <CSSTransition
        in={alert}
        classNames={Styles}
        timeout={250}
        unmountOnExit
      >
        <div className={Styles.alert}> This name is alredy in contacts </div>
      </CSSTransition>
    );
  }
}