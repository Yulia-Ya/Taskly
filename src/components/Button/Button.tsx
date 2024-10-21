import { ReactElement } from 'react';
import style from './Button.module.css'

type Props = {
  
  onClick: () => void;
  children?: ReactElement | string
};

export const Button = ({ children, onClick }: Props) => {
  return <button className={style.btn} onClick={onClick} >{children}</button>;
};
