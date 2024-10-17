import styles from './final.module.scss'
import Image from 'next/image'
import ImagemFinal1 from '@/src/assets/Finalart.png'

export default function Final() {
    return(
        <div className={styles.containerFinal}>
            <div className={styles.containerFinal2}>
                <Image
                src={ImagemFinal1}
                alt='ImagemFinal1'
                />
            </div>
            <div className={styles.Ofertas}>
                <h2>Conheça nossas</h2>
                <p>ofertas</p>
            </div>
            <div className={styles.containerFinal3}>

            </div>
        </div>
    )
}