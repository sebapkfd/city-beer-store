import { useParams } from "react-router";

const ProductPage = (props) => {
    const {items, selectItem} = props;
    const {id} = useParams();
    const item = items[id];

    const addItem = (e) => {
        e.preventDefault();
        selectItem([id, item]);
    }

    return (
        <div>
            <p>{item.name}</p>
            <button onClick={(e) => addItem(e)}>add</button>
        </div>
    )
}

export default ProductPage;