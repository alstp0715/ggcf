import Notice from './Notice.jsx';
import Slider from './Slider.jsx';
import Data from '../data/Data.json';

const Main = () => {
  const {galleryData} = Data;
  const {noticeData} = Data;

  return (
    <section className="main">
      <Slider galleryData={galleryData} />
      <Notice noticeData={noticeData} />
    </section>
  );
};
export default Main;
