// src/pages/ContentPage.jsx

function ContentPage() {
    const workshops = [
      {
        id: 1,
        title: "Introduction to Accessible Technology",
        description: "Learn about assistive technologies and tools that can help in your academic journey.",
        videoUrl: "https://www.youtube.com/watch?v=PdbaOn2_x-M",
        videoType: "youtube",
        date: "March 15, 2025",
        instructor: "youtube"
      },
      {
        id: 2,
        title: "الذكاء الاصطناعي لذوي الإعاقة",
        description: "ورشة عمل عن كيف يمكن للذكاء الاصطناعي أن يدعم ذوي الاحتياجات الخاصة في التعلم والعمل.",
        videoUrl: "https://www.facebook.com/watch/?v=1774148516267033",
        videoType: "facebook",
        date: "August 16, 2022",
        instructor: "Cairo University"
      },
      {
        id: 3,
        title: "التقنيات المساعدة في التعليم الجامعي",
        description: "شرح استخدام الأجهزة والتطبيقات التي تسهّل التعلم داخل الجامعات.",
        videoUrl: "https://www.facebook.com/watch/?v=2089147601567513",
        videoType: "facebook",
        date: "April 5, 2025",
        instructor: "AI Union, Cairo University"
      },
      {
        id: 4,
        title: "Digital Accessibility Essentials",
        description: "Understanding web accessibility and how to navigate digital content effectively.",
        videoUrl: "https://www.youtube.com/watch?v=grrx2Lva7T0",
        videoType: "youtube",
        date: "April 12, 2025",
        instructor: "youtube"
      }
    ];
  
    return (
      <div className="pt-16 bg-lavender-50">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            Educational Content & Workshops
          </h1>
  
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-teal-600">
              Explore our workshops designed to build skills, increase confidence,
              and prepare for academic and professional success.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-100 relative">
                  {workshop.videoType === "facebook" ? (
                    <div className="flex items-center justify-center h-full bg-gray-200 p-4">
                      <p className="text-center text-gray-600">
                        {" "}
                        <a
                          href={workshop.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-700 underline font-semibold"
                        >
                          شاهد الفيديو على فيسبوك
                        </a>
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={workshop.videoUrl.replace("watch?v=", "embed/")}
                      title={workshop.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{workshop.date}</span>
                    <span>Instructor: {workshop.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default ContentPage;
  