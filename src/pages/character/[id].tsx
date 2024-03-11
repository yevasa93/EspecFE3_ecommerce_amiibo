import Card from "@/components/common/card/Card";
import Layout from "@/components/layouts/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getCharacter } from "@/services/getCharacter";
import { Character } from "@/interface";
import { getCharacters } from "@/services/getCharacters";

  const CharacterPage = ({character}: {character: Character})=>{

  return (
    <Layout title={character.name} description={character.amiiboSeries} keywords={character.gameSeries}>
      { character.name && <Card character={character}/> }      
    </Layout>      
  )
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {

  const languajes = locales as string[];
  const characters =  await getCharacters();

  // Obtener los paths para cada idioma generando la combilacion entre los locale [ES, EN] y los tail de los Character (que son como Id's)
  const paths = characters.flatMap((character: Character)=>
    languajes.map((languaje) => ({params: { id: character.tail, locale: languaje}})
    )
  )
  //El blocking es que renderiza las paginas on-demand si ellas no exisen en el servidor
  return {
    paths,
    fallback: "blocking",
  }
}
export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id as string;
  const character = await getCharacter(id);

  return {
    props: {
      character
    },
  }
}


export default  CharacterPage;