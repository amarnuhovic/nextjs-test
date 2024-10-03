import { fetchHome } from './service/home.js';
import HomeContainer from './containers/Home';

const Home = async () => {
  const rsp = await fetchHome();
  return <HomeContainer data={rsp} />;
};

export default Home;
