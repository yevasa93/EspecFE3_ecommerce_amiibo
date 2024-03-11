
import { homeContentEn } from "@/locale/en/home";
import { homeContentEs } from "@/locale/es/home";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter();
    const {navbar} = router.locale === "es" ? homeContentEs : homeContentEn; 

    const changeLanguage = () => {
        //const newLocale = router.locale === "es" ? "en" : "es";
        router.push( router.pathname, router.pathname, { locale: router.locale === "en" ? "es" : "en" });
    }

	return (
        <nav className="flex items-center justify-between py-5 px-7">
            <div>
                <Link href="/">
                    <Image
                        src="/images/navbar/mario.png"
                        width={40}
                        height={40}
                        alt="logo ecommerce"
                    />
                </Link>
            </div>
            <ul className="flex items-center gap-x-6">
                <li>
                    <Link href="/series">{navbar.series}</Link>
                </li>
                <li>
                    <Link href="/about">{navbar.about}</Link>
                </li>
                <li>
                    <Link href="/contact">{navbar.contact}</Link>
                </li>
                <li>
                    <Link href="/cart">{navbar.cart}</Link>
                </li>
                <li>
                    <Link href="/faqs">{navbar.faqs}</Link>
                </li>
                <li>
                    <button onClick={changeLanguage}>
                        { router.locale === "es" ? "EN" : "ES"}
                    </button>
                </li>
            </ul>
        </nav>
    )
}