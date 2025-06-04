
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Donate = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        title="Support the Nade Proeva Scholarship Fund"
        subtitle="Honor Professor Proeva's legacy by supporting the next generation of historians studying Macedonian history and culture."
      />

      <div className="space-y-12">
        {/* About the Scholarship */}
        <section>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-memorial-700 p-8 flex items-center justify-center">
                <img
                  src="/lovable-uploads/e4f9916f-50e2-487b-91b0-94154122695f.png"
                  alt="Nade Proeva Endowment Fund"
                  className="w-32 h-auto"
                />
              </div>
              <div className="lg:w-2/3 p-8">
                <h3 className="text-2xl font-semibold text-memorial-900 mb-4">
                  About the Scholarship
                </h3>
                <p className="text-gray-700 mb-4">
                  The Professor Nade Proeva Scholarship Fund was established to honor the legacy of a distinguished scholar 
                  (September 9, 1949 - November 6, 2024) who dedicated her life to advancing Macedonian historical research 
                  and education.
                </p>
                <p className="text-gray-700">
                  The scholarship supports graduate students and early-career researchers focusing on Macedonian history, 
                  archaeology, and cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Information */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-memorial-900">How to Contribute</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-memorial-900">Contact Information</h4>
                  <p className="text-gray-700">
                    To make a donation or inquire about the scholarship fund, please contact:
                    <a href="mailto:info@macedonianarts.org" className="text-red-600 hover:underline ml-2">
                      info@macedonianarts.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-memorial-900">University Foundation</h4>
                  <p className="text-gray-700">
                    Donations can be made through the Ss. Cyril and Methodius University Foundation, 
                    earmarked for the "Professor Nade Proeva Scholarship Fund."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-memorial-900 text-white p-10 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Support the Next Generation of Scholars
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Your contribution makes a meaningful difference in supporting the next generation of scholars 
            dedicated to Macedonian historical research.
          </p>
          <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700">
            <a href="mailto:info@macedonianarts.org">Contact to Donate</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Donate;
