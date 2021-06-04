import { useParams } from "react-router";

const ProductPage = (props) => {
    const {items} = props;
    const {id} = useParams();
    const item = items[id];

    return (
        <div>
            <p>{item.name}</p>
        </div>
    )
}

export default ProductPage;