import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-teal-50 mt-auto text-teal-800">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-lg font-bold text-teal-700 mb-2">promising abilities Initiative</h2>
                        <p className="text-sm">Breaking barriers, building opportunities</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
                            <ul className="space-y-1">
                                <li><Link to="/" className="text-sm hover:text-teal-600">Home</Link></li>
                                <li><Link to="/content" className="text-sm hover:text-teal-600">Content</Link></li>
                                <li><Link to="/opportunities" className="text-sm hover:text-teal-600">Opportunities</Link></li>
                                <li><Link to="/support" className="text-sm hover:text-teal-600">Support</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-md font-semibold mb-2">Contact</h3>
                            <p className="text-sm">Cairo University</p>
                            <p className="text-sm">Giza, Egypt</p>
                            <p className="text-sm">support@accessedu.org</p>
                        </div>

                        <div>
                            <h3 className="text-md font-semibold mb-2">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" aria-label="Facebook" className="text-teal-700 hover:text-teal-900 text-xl">
                                    <FaFacebookF />
                                </a>
                                <a href="#" aria-label="Twitter" className="text-teal-700 hover:text-teal-900 text-xl">
                                    <FaTwitter />
                                </a>
                                <a href="#" aria-label="Instagram" className="text-teal-700 hover:text-teal-900 text-xl">
                                    <FaInstagram />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="text-teal-700 hover:text-teal-900 text-xl">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-teal-200 mt-6 pt-4 text-sm text-center">
                    <p>&copy; {currentYear} promising abilities Initiative at Cairo University. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
