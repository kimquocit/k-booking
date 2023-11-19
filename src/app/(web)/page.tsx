import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';
import Gallery from '@/components/Gallery/Gallery';
import MainBanner from '@/components/MainBanner/MainBanner';
import { getFeaturedRoom } from '@/libs/apis';

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  console.log(featuredRoom)

  return (
    <>
      <MainBanner />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
    </>
  );
};

export default Home;
