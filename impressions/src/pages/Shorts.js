import Item from "../components/Item.js";
import plainShort from "../images/plain-short.jpg";
import "../css/Clothing.css";
const Shorts = () => {
    return (
        <>

            <h3 className="label">Shorts: </h3>
            <section id="item-area">
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
                <Item type="item" name="Plain Shorts" image={plainShort} link="/ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts is a shorts that's an example."/>
            </section>
        </>
    );
};

export default Shorts;