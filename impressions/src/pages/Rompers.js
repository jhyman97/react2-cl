import Item from "../components/Item.js";
import flowerRomper from "../images/flower-romper.jpg";
import "../css/Clothing.css";
const Rompers = () => {
    return (
        <>

            <h3 className="label">Rompers: </h3>
            <section id="item-area">
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
                <Item type="item" name="Flower Romper" image={flowerRomper} link="/ClothingItem" desc="This is a bunch of example text describing the example romper. The example romper is a romper that's an example."/>
            </section>
        </>
    );
};

export default Rompers;