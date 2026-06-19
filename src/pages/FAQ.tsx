import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What types of construction projects does IKON Construction handle?',
          answer: 'We specialize in residential construction (custom homes, renovations, additions), commercial construction (office buildings, retail spaces, warehouses), and comprehensive renovation and remodeling services. Our team has experience across all project sizes, from small residential renovations to large commercial developments.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'IKON Construction primarily serves clients from Miami-Dade through the Palm Beaches. Our team has successfully completed projects across urban, suburban, and coastal communities in this region. While our core focus is within South Florida, we’re open to evaluating projects outside this area on a case-by-case basis.'
        },
        {
          question: 'How long has IKON Construction been in business?',
          answer: 'IKON Construction has been serving clients for over 25 years, establishing a reputation for quality craftsmanship, reliable service, and innovative construction solutions. Our experience spans hundreds of successful projects across various sectors.'
        }
      ]
    },
    {
      category: 'Project Process',
      questions: [
        {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary depending on the scope, size, and complexity of the work. Every job is unique, so rather than fixed durations, we provide customized scheduling details during the initial consultation. This ensures clients have a clear and realistic understanding of what to expect for their specific project.'
        },
        {
          question: 'Do you handle permits and regulatory approvals?',
          answer: 'Yes, we manage all necessary permits and regulatory approvals as part of our comprehensive project management service. Our team is familiar with local building codes and works closely with municipal authorities to ensure all requirements are met.'
        },
        {
          question: 'Can I make changes to the project after construction begins?',
          answer: 'While we prefer to finalize all details before construction begins, we understand that changes sometimes occur. We can accommodate modifications, though they may affect timeline and budget. We provide transparent change order processes to manage any adjustments.'
        }
      ]
    },
    {
      category: 'Pricing & Budget',
      questions: [
        {
          question: 'How do you determine project pricing?',
          answer: 'Our pricing is based on detailed project specifications, materials, labor requirements, timeline, and complexity. We provide transparent, itemized estimates after thorough site evaluation and project planning. We offer both fixed-price and cost-plus pricing models depending on project needs.'
        },
        {
          question: 'Do you offer financing options?',
          answer: 'While we don\'t directly provide financing, we work with several trusted lending partners who specialize in construction loans. We can provide recommendations and assist with documentation needed for financing applications.'
        },
        {
          question: 'What payment schedule do you follow?',
          answer: 'We typically follow a milestone-based payment schedule aligned with project phases. This usually includes an initial deposit, progress payments at key milestones, and final payment upon completion. Specific payment terms are outlined in our contract.'
        }
      ]
    },
    {
      category: 'Quality & Warranties',
      questions: [
        {
          question: 'What warranties do you provide?',
          answer: 'We provide comprehensive warranties on our workmanship, typically 1-2 years depending on the type of work. Additionally, many materials and systems come with manufacturer warranties. We stand behind our work and address any warranty issues promptly.'
        },
        {
          question: 'How do you ensure quality control?',
          answer: 'Our quality control process includes regular inspections at each project phase, adherence to strict building standards, use of quality materials from trusted suppliers, and final walk-through with clients. Our project managers conduct ongoing quality assessments throughout construction.'
        },
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, IKON Construction is fully licensed, and insured. We carry comprehensive general liability insurance, workers\' compensation, and professional indemnity coverage. We can provide proof of insurance and licensing upon request.'
        }
      ]
    },
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I get a quote for my project?',
          answer: 'Getting started is easy! Contact us through our website, phone, or email to schedule a free consultation. We\'ll discuss your vision, assess the project scope, and provide a detailed quote within 5-7 business days of our site visit.'
        },
        {
          question: 'What information should I prepare for the initial consultation?',
          answer: 'Please prepare any architectural plans, inspiration photos, budget range, desired timeline, and specific requirements or concerns. The more information you can provide, the more accurate our initial assessment and recommendations will be.'
        },
        {
          question: 'Do you provide design services?',
          answer: 'Yes, we offer comprehensive design consultation services including architectural design, interior design, space planning, and material selection. We can work with your existing architect or provide complete design-build services.'
        }
      ]
    }
  ];

  const allQuestions = faqs.flatMap((category, categoryIndex) =>
    category.questions.map((question, questionIndex) => ({
      ...question,
      categoryIndex,
      questionIndex,
      globalIndex: categoryIndex * 10 + questionIndex
    }))
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked
            <span className="text-orange-500 block">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our construction services, processes, 
            and what to expect when working with IKON Construction.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Our Work Section - Priority Questions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-orange-500 pb-2 mb-6">
              About Our Work
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: 'How does IKON Construction integrate sustainability into its building projects?',
                  answer: 'IKON incorporates eco-friendly materials, energy-efficient systems, and smart-home technology across both residential and commercial projects. From the initial design phase, the team evaluates green building standards and sustainable practices that reduce environmental impact without compromising quality or aesthetics.'
                },
                {
                  question: 'What specialized renovation services are available for historical or commercial properties?',
                  answer: 'IKON has decades of experience in historical restoration, having worked on landmark Miami Beach properties since the early 1990s. Services include structural restoration, period-accurate material matching, terrazzo and tile rehabilitation, and seamless integration of modern systems into historic structures.'
                },
                {
                  question: 'How does the project management process ensure quality and budget compliance?',
                  answer: 'Every IKON project is managed end-to-end by an experienced project manager who oversees permitting, scheduling, subcontractor coordination, and inspections. Regular client updates, strict budget tracking, and proactive issue resolution ensure every project is delivered on time and within scope.'
                }
              ].map((faq, index) => {
                const globalIndex = `priority-${index}`;
                const isOpen = openItem === globalIndex;
                
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                      onClick={() => setOpenItem(isOpen ? null : globalIndex)}
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-orange-500 pb-2">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex;
                    const isOpen = openItem === globalIndex;
                    
                    return (
                      <div
                        key={questionIndex}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                          onClick={() => setOpenItem(isOpen ? null : globalIndex)}
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          ) : (
                            <Plus className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. 
            Contact us directly and we'll be happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="tel:(555)123-4567"
              className="inline-flex items-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-200"
            >
              Call: 305-319-0155
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;