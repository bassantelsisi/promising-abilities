// src/pages/HomePage.jsx
import bannerImage from '../assets/project.jpg'; // Import the image

function HomePage() {
    return (
        <div className="pt-16">
            {/* Banner section */}
            <section className="relative bg-gradient-to-r from-teal-50 to-blue-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl font-bold text-teal-800 mb-4">Promising abilities</h1>
                            <p className="text-xl text-teal-600 mb-6">
                                Making higher education and career opportunities
                                accessible for everyone at Cairo University
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                <Link to="/promising-abilities/opportunities" className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-lg text-center">
                                    Find Opportunities
                                </Link>
                                <Link to="/promising-abilities/support" className="bg-white hover:bg-gray-100 text-teal-600 border border-teal-600 font-medium px-6 py-3 rounded-lg text-center">
                                    Get Support
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={bannerImage}
                                alt="A visually impaired person using a braille display connected to a laptop while wearing headphones."
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Support statement */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Mission</h2>
                    <p className="text-xl text-teal-600 max-w-3xl mx-auto">
                        We believe that every student deserves equal access to education and career opportunities.
                        Our initiative works to remove barriers, provide customized resources, and connect talented
                        individuals with disabilities to meaningful employment opportunities.
                    </p>
                </div>
            </section>

            {/* Services section */}
            <section className="bg-teal-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-teal-800 mb-12 text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-700 mb-3">Customized Content</h3>
                            <p className="text-gray-700">
                                Access educational resources tailored to various learning needs and preferences.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-700 mb-3">Job Opportunities</h3>
                            <p className="text-gray-700">
                                Connect with employers committed to inclusive hiring practices and accessible workplaces.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-teal-700 mb-3">Supportive Community</h3>
                            <p className="text-gray-700">
                                Join a network of students, faculty, and employers dedicated to advancing accessibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;