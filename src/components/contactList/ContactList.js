import React from 'react';
import Style from './ContactListStyles.module.css';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default function ContactList({ findUser, deleteUser }) {
  return (
    <TransitionGroup component="ul"className={(Style.contact__list)}>
      {findUser().map((elem,index)=> 
       <CSSTransition
       key={elem.id}
       in={findUser().length>0}
       timeout={250}
       classNames={Style}
     >
        <li className={(Style.contact__item)}>
          <p className={(Style.contact__style)}>
           {index+1 + '.'}{elem.name + ':'}
          </p>
          <p className={(Style.contact__style)}>
            {elem.number}
          </p>
          <button
            className={Style.deletebtn__style}
            type="button"
            onClick={() => deleteUser(elem.id)}
            >
            Delete contact
          </button>
        </li>
          </CSSTransition>
      )}
       </TransitionGroup>
     
     
  );
}

ContactList.propTypes = {

  findUser: PropTypes.func,
  deleteUser: PropTypes.func,
};
