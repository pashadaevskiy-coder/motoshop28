import Head from 'next/head';
import Hero from '../src/components/Hero/Hero';
import Catalog from '../src/components/Catalog/Catalog';
import FinalCTA from '../src/components/FinalCTA/FinalCTA';
import Footer from '../src/components/Footer/Footer';
import { motorcycles } from '../src/data/motorcycles';

export const dynamic = 'force-dynamic';

export async function getServerSideProps() {
  return {
    props: {
      motorcycles: motorcycles || [],
    },
  };
}

export default function Home({ motorcycles }) {
  return (
    <>
      <Head>
        <title>Motorcycle Shop</title>
        <meta name="description" content="Enduro motorcycles" />
      </Head>
      <Hero />
      <Catalog motorcycles={motorcycles} />
      <FinalCTA />
      <Footer />
    </>
  );
}