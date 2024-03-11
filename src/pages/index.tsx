import Layout from "@/components/layouts/Layout";
import { Character } from "@/interface";
import { homeContentEn } from "@/locale/en/home";
import { homeContentEs } from "@/locale/es/home";
import {  getCharacters } from "@/services/getCharacters";
import { GetStaticProps, NextPage } from "next";
import {  Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

  const raleway = Raleway({subsets: ["latin"]});

  interface HomePageProps {
    characters: Character[];
  }

  const HomePage: NextPage<HomePageProps> = ({characters}) => {

    const router = useRouter();
    const {navbar} = router.locale === "es" ? homeContentEs : homeContentEn; 
    //const  [character, setCharacter] = useState<Character[]>([]);
    
    return (
      <Layout title="Ecomerce DH" description="consigue todas figuras que necesites" keywords="anime, games, figuras, videojuegos, smashbros, coleccionable">
        <div
          className={`flex min-h-screen flex-col items-center justify-between p-24 ${raleway.className}`}
        >
          <h1>Ecommerce</h1>
          <section  className="grid grid-cols-4 gap-16 mt-8">
            {characters.map((item) =>(
                <div key={item.tail} className="col-span-1 border border-gray-700 p-2 roundend-xl">
                    <p>{item.name}</p>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      priority
                      className="aspect-square objective-contain"
                    />
                    <Link className="underline text-gray-600 mt-10" href={`/character/${item.tail}`}>
                      {navbar.more}
                    </Link>
                </div>
              ))
            }
          </section>
        </div>
      </Layout>
    );
  }

export const getStaticProps: GetStaticProps = async (context) => {    
  const characters = await  getCharacters();

  return {
    props: {
        characters
    }
  }
}
export default HomePage;