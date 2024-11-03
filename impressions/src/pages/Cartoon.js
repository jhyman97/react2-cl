import Item from "../components/Item.js";
import Leonardo from "../images/leo-keychain.jpg";
import "../css/Clothing.css";
const Cartoon = () => {
    return (
        <>

            <h3 className="label">Inside Out: </h3>
            <section id="item-area">
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
            </section>
            <h3 className="label">Ninja Turtles: </h3>
            <section id="item-area">
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
            </section>
            <h3 className="label">Powerpuff Girls: </h3>
            <section id="item-area">
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
                <Item type="item" name="Leonardo Keychain" image={Leonardo} link="/KeychainItem" desc="This is a bunch of example text describing the example keychain. The example keychain is a keychain that's an example."/>
            </section>
        </>
    );
};

export default Cartoon;