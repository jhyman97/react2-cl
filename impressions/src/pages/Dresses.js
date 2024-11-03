import Item from "../components/Item.js";
import butterflyDress from "../images/butterfly-dress.jpg";
import "../css/Clothing.css";
const Dresses = () => {
    return (
        <>

            <h3 className="label">Dresses: </h3>
            <section id="item-area">
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                <Item type="item" name="Butterfly Dress" image={butterflyDress} link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
            </section>
        </>
    );
};

export default Dresses;