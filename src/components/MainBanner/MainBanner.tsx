import ClientComponent from './ClientComponent';

import { content, images } from './ServerComponent';

const MainBanner = () => {
  return <ClientComponent section2={images} heading1={content} />;
};

export default MainBanner;
