import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../../styles/MainConteiner.module.css'

type MainContainerProps = {
  children: ReactNode;
};
export default function MainContainer({children}: MainContainerProps) {
  // Aqui a Navbar e o footer estarão em todas as páginas renderizadas
  return (
    <>
      <Navbar />
      <div className={styles.conteiner}>{children}</div>
      <Footer />
    </>
  )
}
