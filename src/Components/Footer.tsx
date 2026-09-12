import pic from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-5 my-15">
                <div className="col-span-2 space-y-5">
                    <img src={pic} alt="" />
                    <p className="text-xs font-thin">Curated tools, technologies, and resources for developers building
                    <br /> modern software.</p>
                    <ul className="flex gap-4 text-xs text-gray-700">
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="font-semibold text-sm mb-4">PRODUCT</h2>
                    <ul className="text-gray-600 font-thin text-xs space-y-2">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="font-semibold text-sm mb-4">COMPANY</h2>
                    <ul className="text-gray-600 font-thin text-xs space-y-2">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="font-semibold text-sm mb-4">LEGAL</h2>
                    <ul className="text-gray-600 font-thin text-xs space-y-2">
                        <li>PrivacyPolicy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <hr className="text-gray-100" />
            <div className="flex justify-between my-10 font-light text-gray-500 font-thin
             text-xs"><p>© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-2">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;