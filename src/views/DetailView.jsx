import { useParams } from 'react-router-dom';
import exhibitionsData from '../data/exhibitionsData.json';

const DetailView = () => {

    const { id } = useParams();

    const selectedItem = exhibitionsData.find(item => String(item.id) === id);

    if (!selectedItem) {
        return <div>해당하는 아이템을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <h2>{selectedItem.name}</h2>
            <p>Date: {selectedItem.date}</p>
            <img src={selectedItem.imageSrc} alt="" />
        </div>
    );
};

export default DetailView;