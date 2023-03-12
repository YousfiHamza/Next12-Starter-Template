import React from 'react';

import { CardProps } from './types';

import styles from './styles.module.scss';

function Card({ href, title, content, variant = 'primary' }: CardProps) {
  return (
    <div className={`${styles.card} ${variant === 'secondary' ? styles.secondary : styles.primary}`} data-testid="card">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </a>
    </div>
  );
}

export default Card;
