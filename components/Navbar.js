import Link from "next/link"
import styles from '../styles/Navbar.module.css'
import Image from "next/image"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div>
                <h2>
                    <a href="/">
                        Poke<span className={styles.dex}>Dex</span>
                        <span className={styles.image}>
                            <Image src="/pokebola-go.png" width={20} height={20}/>
                        </span>
                    </a>
                </h2>
            </div>
            <div>
                <a>Home</a>
                <a>Pokemons</a>
            </div>
        </div>
    )
}