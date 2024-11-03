import Item from "../components/Item.js";
import Gojo from "../images/gojo-keychain.jpg";
import "../css/Clothing.css";
const Anime = () => {
    return (
        <>

            <h3 className="label">Dragon Ball: </h3>
            <section id="item-area">
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
            </section>
            <h3 className="label">Naruto: </h3>
            <section id="item-area">
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
            </section>
            <h3 className="label">Jujutsu Kaisen: </h3>
            <section id="item-area">
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item link="/KeychainItem" type="item" name="Gojo Keychain" image={Gojo} desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
            </section>
        </>
    );
};

export default Anime;