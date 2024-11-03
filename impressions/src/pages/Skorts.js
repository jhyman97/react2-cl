import Item from "../components/Item.js";
import flowerSkort from "../images/flower-skort.jpg";
import "../css/Clothing.css";
const Skorts = () => {
    return (
        <>

            <h3 className="label">Skorts: </h3>
            <section id="item-area">
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
                <Item type="item" name="Flower Skort" image={flowerSkort} link="/ClothingItem" desc="This is a bunch of example text describing the example Skorts. The example Skorts is a Skorts that's an example."/>
            </section>
        </>
    );
};

export default Skorts;