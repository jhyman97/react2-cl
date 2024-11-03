import Item from "../components/Item.js";
import beachOutfit from "../images/beach-outfit.jpg";
import "../css/Clothing.css";
const Outfits = () => {
    return (
        <>

            <h3 className="label">Outfits: </h3>
            <section id="item-area">
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
                <Item type="item" name="Beach Outfit" image={beachOutfit} link="/ClothingItem" desc="This is a bunch of example text describing the example outfit. The example outfit is a outfit that's an example."/>
            </section>
        </>
    );
};

export default Outfits;