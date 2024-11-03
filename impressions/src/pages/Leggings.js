import Item from "../components/Item.js";
import coolLegging from "../images/cool-short-legging.jpg";
import "../css/Clothing.css";
const Leggings = () => {
    return (
        <>

            <h3 className="label">Leggings: </h3>
            <section id="item-area">
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
                <Item type="item" name="Cool Short Leggings" image={coolLegging} link="/ClothingItem" desc="This is a bunch of example text describing the example legging. The example legging is a legging that's an example."/>
            </section>
        </>
    );
};

export default Leggings;