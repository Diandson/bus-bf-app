import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
            <ul className="main-menu__list">

                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/lignes">Ligne de bus</Link></li>
                        <li><Link href="/tarif">Tarif</Link></li>
                    </ul>
                </li>
                <li >
                    <Link href="/abonnement">Abonnement</Link>
                </li>
                {/*<li><Link href="/actualite">Actualités</Link></li>*/}
                <li>
                    <Link href="/about">A propos</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
