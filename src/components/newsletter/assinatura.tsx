"use client";
import { useState } from "react";
import styles from "./assinatura.module.scss";
import Arvore from '@/src/assets/hero-image.png'
import Image from "next/image";


export default function Assinatura() {
  const [isInput, setIsInput] = useState<string>("");
  return (
    <div>
      <div className={styles.Titulo}>
        <h2 className={styles.Titul1}>Sua casa com as</h2>
        <h1 className={styles.Titulo2}>
          melhores <br />
          plantas
        </h1>
      </div>
      <div className={styles.texto}>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a <br />
          sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. <br />
          Entre com seu e-mail e assine nossa newsletter para saber <br />
          das novidades da marca.
        </p>
      </div>
      <div className={styles.inputButton}>
        <form action="post">

        <input
          type="email"
          value={isInput}
          onChange={(input) => setIsInput(input.target.value)}
          placeholder="✉ Insira seu e-mail"
          required
        />
        <button
        type="submit"
        >
          Assinar newsletter
          </button>
        </form>
      </div>
      <div className={styles.Arvore}>
      <Image
        src={Arvore}
        alt="Imagem de uma árvore"
        layout="responsive"
        />
      </div>
    </div>
  );
}
