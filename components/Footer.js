import Head from "next/head"
import Image from "next/image"
import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <a href="https://github.com/EduardoZirbell" target="_blank" rel="noopener noreferrer">
            <p>Powered by{' '}</p>
                <span className={styles.logo}>
                    <Image src="/github-logo.png" alt="Eduardo Zirbell" width={35} height={35} />
                </span>
            </a>
        </div>
    )
}