// src/pages/OpportunitiesPage.jsx
import { useState } from 'react';

function OpportunitiesPage() {
  // Categories for filtering
  const categories = ["All", "Technical", "Administrative", "Customer Service", "Creative", "Research"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Mock job listings
  const jobs = [
    {
      id: 1,
      title: "Web Developer",
      company: "TechSolutions Cairo",
      location: "Cairo, Egypt (Remote Available)",
      type: "Full-time",
      category: "Technical",
      description: "Developing accessible web applications and ensuring websites meet WCAG standards.",
      postedDate: "April 5, 2025"
    },
    {
      id: 2,
      title: "Administrative Assistant",
      company: "Cairo University",
      location: "Giza, Egypt",
      type: "Part-time",
      category: "Administrative",
      description: "Supporting faculty with administrative tasks in the Engineering department.",
      postedDate: "April 3, 2025"
    },
    {
      id: 3,
      title: "Customer Support Specialist",
      company: "EgyptTelecom",
      location: "Cairo, Egypt (Hybrid)",
      type: "Full-time",
      category: "Customer Service",
      description: "Providing technical support and assistance to customers via phone and email.",
      postedDate: "April 7, 2025"
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Creative Arts Agency",
      location: "Cairo, Egypt (Remote)",
      type: "Contract",
      category: "Creative",
      description: "Creating visual content for digital and print marketing campaigns.",
      postedDate: "April 2, 2025"
    },
    {
      id: 5,
      title: "Research Assistant",
      company: "National Research Center",
      location: "Cairo, Egypt",
      type: "Part-time",
      category: "Research",
      description: "Assisting researchers in data collection and analysis for environmental studies.",
      postedDate: "April 8, 2025"
    },
    {
      id: 6,
      title: "Software Quality Assurance",
      company: "MobiSoft",
      location: "Giza, Egypt",
      type: "Full-time",
      category: "Technical",
      description: "Testing software applications for accessibility compliance and usability.",
      postedDate: "April 1, 2025"
    }
  ];

  // Filter jobs based on active category
  const filteredJobs = activeCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  return (
    <div className="pt-16 bg-lavender-50">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">Job Opportunities</h1>
        
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <p className="text-lg text-teal-600">
            Explore job opportunities from employers committed to inclusive hiring practices
            and accessible workplaces.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-teal-700 hover:bg-teal-50'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Job listings */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-teal-800">{job.title}</h3>
                  <p className="text-gray-700 font-medium">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">
                      {job.location}
                    </span>
                    <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">
                      {job.type}
                    </span>
                    <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">
                      {job.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-3">{job.description}</p>
                  <p className="text-gray-500 text-sm mt-2">Posted: {job.postedDate}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OpportunitiesPage;