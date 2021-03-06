import React from 'react';
import styles from './styles.module.css';

export default ({ children, className }) => (
  <li className={className ? `${styles.tag} ${className}` : styles.tag}>
    { children }
  </li>
);
