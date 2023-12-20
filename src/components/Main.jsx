import Notice from './Notice';
import Slider from './Slider';
import Data from '../data/Data.json';

const Main = () => {
  const galleryData = Data.galleryData;
  const noticeData = Data.noticeData;

  return (
    <section className="main">
      <Slider galleryData={galleryData} />
      <Notice noticeData={noticeData} />
    </section>
  );
};
export default Main;
