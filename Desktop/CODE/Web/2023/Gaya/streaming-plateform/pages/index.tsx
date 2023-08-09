import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

import Navbar from '@/components/Navbar';
import BillBoard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import InfoModal from '@/components/InfoModal';
import useInfoModal from '@/hooks/useInfoModal';


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <main>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="Les plus recherchés" data={movies} />
        <MovieList title="Ma liste" data={favorites} />
      </div>
    </main>
  )
}
