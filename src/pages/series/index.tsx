
import Layout from '@/components/layouts/Layout';
import { Serie } from '@/interface';
import { getSeries } from '@/services/getSeries';
import { NextPage, GetServerSideProps } from 'next';

interface SeriesPageProps {
    series: Serie[];
}

const SeriesPage: NextPage<SeriesPageProps> = ({series}) => {
    return (
        <Layout title='series' description='listado de series de amiibo' keywords="serie, amiibo">
            <section className='m-10'>
                <h1 className='text-3xl font-bold my-6'>Series</h1>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {series.map((serie)=> (
                        <div key={serie.key} className='bg-slate-950/45 rounded-lg shadow-md p-4'>
                            <h2 className='text-lg font-semibold mb-2'>{serie.name}</h2>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    const series = await getSeries();

    //lo siguiente permite a la pág ser cacheada por el CDN de vercel por 60 seg
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')

    return {
        props: {
            series
        }
    }
}

export default SeriesPage;