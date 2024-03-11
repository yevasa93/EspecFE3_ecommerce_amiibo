import Layout from '@/components/layouts/Layout';
import { Faq } from '@/interface';
import { faqsContentEn } from '@/locale/en/faqs';
import { faqsContentEs } from '@/locale/es/faqs';
import { getFaqs } from '@/services/getFaqs';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface FaqsPageProps {
  faqs: Faq[];
};

const FaqsPage: NextPage<FaqsPageProps> = ({ faqs }) => {
  const router = useRouter();
  const faqsContent: { [key: string]: any } = router.locale === "es" ? faqsContentEs : faqsContentEn; 

  return (
      <Layout title='faqs page' description='some frequent questions about amiibo website.' keywords='faqs'>
          <section className='flex justify-center items-center  flex-col m-10  '>
              <h1 className='text-3xl font-bold my-6'>{ faqsContent.title.faqs}</h1>
              <div className='grid grid-cols-1 gap-4  text-center'>
                  {faqs.map((faq) => (
                      <div key={faq.id} className='bg-slate-950/45 rounded-lg shadow-md p-4'>
                        <h2 className='text-lg font-semibold mb-2'> {faqsContent[`question${faq.id}`].question}</h2>
                          <p className='text-gray-300'> {faqsContent[`question${faq.id}`].answer}</p>
                      </div>
                  ))}
              </div>
          </section>
      </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const faqs = await getFaqs();
  return {
    props: {
      faqs
    },
  }
}

export default FaqsPage;