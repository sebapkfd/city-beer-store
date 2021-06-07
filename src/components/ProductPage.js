import { useParams } from "react-router";
import assets from './assets';

const ProductPage = (props) => {
    const {items, selectItem} = props;
    const {id} = useParams();
    const item = items[id];

    const addItem = (e) => {
        e.preventDefault();
        selectItem([id, item]);
    }

    const unit = (item['units-in-pack'] === 6) ? 'pack' : 'Unidad';

    return (
        <div className={'product-page'}>
            <div>
                <div className={'product-page__img'}>
                    <img src={assets[id]} alt={item.name}/>
                </div>
                <div className={'product-page__options'}>
                    <p className={'product-item__name'}>{item.name}</p>
                    <p className={'store-name'}>{item.store}</p>
                    <p className={'product-item__units'}>{item['units-in-pack']} {unit}</p>
                    <p>${item.price}</p>
                    <button onClick={(e) => addItem(e)}>add</button>
                </div>
            </div>
            <div>
                <div className={'product-page__description-title'}>
                    <p>Descripción</p>
                </div>
                <div className={'product-page__description'}>
                    <span>{item.description}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;