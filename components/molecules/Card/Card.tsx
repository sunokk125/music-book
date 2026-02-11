"use client";
import styles from "./Card.module.css";

type CardProps = {
  title?: string;
  description?: string;
  footer?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Card({
  title,
  description,
  footer,
  children,
  onClick,
}: CardProps) {
  return (
    <div className={styles["card-layout"]} onClick={onClick}>
      {title && <div className={styles["card-header"]}>{title}</div>}
      <div className={styles["card-body"]}>
        {children} {description}
      </div>
      {footer && <div className={styles["card-footer"]}>footer</div>}
    </div>
  );
}
