import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Award, Users, Globe, Factory, Phone, Truck, Star, ArrowRight } from "lucide-react";
import heroWarehouse from "@/assets/hero-warehouse.svg";
import manufacturingImage from "@/assets/manufacturing.jpg";
import laboratoryImage from "@/assets/laboratory.jpg";

const Index = () => {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Phone,
      title: "24/7 Tech Support",
      description: "Round-the-clock technical assistance for all your chemical solution needs."
    },
    {
      icon: Truck,
      title: "Global Delivery",
      description: "Worldwide shipping and distribution network ensuring timely deliveries."
    },
    {
      icon: Star,
      title: "High-Quality Standards",
      description: "ISO certified manufacturing processes with stringent quality control measures."
    }
  ];

  const statistics = [
    { number: "500+", label: "Production Capacity (MT)" },
    { number: "15+", label: "Countries Served" },
    { number: "37+", label: "Years Experience" },
    { number: "2.5k+", label: "Satisfied Clients" }
  ];

  const businessDivisions = [
    {
      title: "Leather Chemicals",
      description: "Premium leather processing solutions",
      image: laboratoryImage,
      badge: "Premium Quality"
    },
    {
      title: "Herbal Solutions",
      description: "Natural and sustainable products",
      image: manufacturingImage,
      badge: "Eco-Friendly"
    },
    {
      title: "Shoe Division",
      description: "Specialized footwear chemicals",
      image: heroWarehouse,
      badge: "Specialized"
    },
    {
      title: "Infrastructure",
      description: "Industrial construction solutions",
      image: laboratoryImage,
      badge: "Industrial Grade"
    }
  ];

  const globalPartners = [
    "ChemCorp International", "Industrial Solutions Ltd", "Global Chemical Partners",
    "Asian Chemical Alliance", "European Chemical Group", "Americas Chemical Co."
  ];

  const directors = [
    {
      name: "Mr. Rajesh Saba",
      title: "Chairman & Managing Director",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mrs. Priya Saba",
      title: "Executive Director",
      image: "/api/placeholder/300/300"
    }
  ];

  const testimonials = [
    {
      name: "John Anderson",
      company: "Global Leather Inc.",
      rating: 5,
      text: "Saba Group has been our trusted partner for chemical solutions. Their quality and service are unmatched.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Maria Rodriguez",
      company: "EcoTech Industries",
      rating: 5,
      text: "Outstanding product quality and exceptional customer support. Highly recommend their services.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "David Chen",
      company: "Asian Manufacturing Co.",
      rating: 5,
      text: "Reliable delivery and consistent quality have made them our preferred chemical solutions provider.",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const faqs = [
    {
      question: "What types of chemical solutions does Saba Group provide?",
      answer: "We specialize in leather chemicals, herbal solutions, industrial chemicals, and infrastructure-related chemical products with over 37 years of expertise."
    },
    {
      question: "Do you offer international shipping and support?",
      answer: "Yes, we serve clients in 15+ countries worldwide with comprehensive shipping solutions and 24/7 technical support."
    },
    {
      question: "What quality certifications do you maintain?",
      answer: "We maintain ISO certifications and follow stringent quality control measures in all our manufacturing processes."
    },
    {
      question: "How can I get technical support for your products?",
      answer: "We provide 24/7 technical support through multiple channels including phone, email, and on-site consultation services."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat parallax"
        style={{ backgroundImage: `url(${heroWarehouse})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="text-left max-w-4xl">
            <h1 className="hero-text text-white mb-6 animate-fade-in-up">
              Pioneering Excellence in
              <span className="block gradient-text animate-fade-in-up stagger-2">Specialty Chemicals & Industrial Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up stagger-3 max-w-3xl">
              Trusted by industries worldwide for over 37 years, delivering innovation and quality in every solution.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in-up stagger-4 hover-lift micro-bounce">
              Know More
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <Badge variant="outline" className="mb-4 border-primary text-primary animate-pulse-custom">Since 1988</Badge>
              <h2 className="section-title mb-8 text-white text-left">
                Pioneers in the Chemical
                <span className="gradient-text block">Industry Since 1988</span>
              </h2>
              <div className="space-y-6 text-left">
                <p className="text-lg text-white/80 leading-relaxed">
                  Saba Group has been at the forefront of chemical innovation for over three decades, 
                  providing cutting-edge solutions that drive industrial progress across the globe.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  From our humble beginnings to becoming a trusted name in specialty chemicals, 
                  we've consistently delivered excellence through innovation, quality, and 
                  unwavering commitment to our clients' success.
                </p>
                <Button variant="corporate" className="mt-6 hover-lift micro-bounce">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative scroll-animate-right">
              <img
                src={manufacturingImage}
                alt="Saba Group Manufacturing Facility"
                className="rounded-2xl shadow-corporate w-full h-96 object-cover hover-glow transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold">37+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title mb-6 text-white">
              Our Network & <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive support and infrastructure that ensures excellence in every aspect of our service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover-lift transition-all duration-500 group bg-white/10 backdrop-blur-sm border-white/20 scroll-animate-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 animate-rotate-in">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title mb-6 text-primary-foreground">
              Our <span className="text-secondary">Impact</span> in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center scroll-animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-6xl font-bold text-secondary mb-2 animate-pulse-custom">{stat.number}</div>
                <div className="text-primary-foreground/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-left mb-16 scroll-animate">
            <h2 className="section-title mb-6 text-white">
              Business <span className="gradient-text">Divisions</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl">
              Diverse portfolio of specialized chemical solutions across multiple industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessDivisions.map((division, index) => (
              <Card key={index} className="overflow-hidden hover-lift transition-all duration-500 group bg-white/10 backdrop-blur-sm border-white/20 scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground animate-pulse-custom">
                      {division.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-white">{division.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{division.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title mb-6 text-white">
              Global <span className="gradient-text">Partnerships</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Trusted by leading companies worldwide for our chemical expertise and reliable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {globalPartners.map((partner, index) => (
              <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-sm hover-lift transition-all duration-300 scroll-animate-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-2 animate-pulse-custom"></div>
                <p className="text-xs text-white/80 font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Operations */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left text-left">
              <h2 className="section-title mb-8 text-white">
                International
                <span className="gradient-text block">Operations</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Our global presence spans across 15+ countries, delivering chemical solutions 
                  that meet international standards and local market requirements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover-glow transition-all duration-300">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2 animate-rotate-in" />
                    <div className="font-bold text-white">Global Reach</div>
                    <div className="text-sm text-white/80">15+ Countries</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover-glow transition-all duration-300">
                    <Factory className="w-8 h-8 text-primary mx-auto mb-2 animate-rotate-in" />
                    <div className="font-bold text-white">Production</div>
                    <div className="text-sm text-white/80">500+ MT Capacity</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative scroll-animate-right">
              <div className="w-full h-96 bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl flex items-center justify-center hover-glow transition-all duration-500">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-primary mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold text-white mb-2">Global Presence Map</h3>
                  <p className="text-white/80">Serving clients across continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title mb-6 text-white">
              Board of <span className="gradient-text">Directors</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Visionary leadership driving innovation and excellence in chemical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <Card key={index} className="text-center p-8 hover-lift transition-all duration-500 bg-white/10 backdrop-blur-sm border-white/20 scroll-animate-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-primary animate-pulse-custom">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{director.name}</h3>
                  <p className="text-white/80">{director.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-left mb-16 scroll-animate">
            <h2 className="section-title mb-6 text-white">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl">
              Trusted by industry leaders worldwide for our commitment to quality and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-lift transition-all duration-500 bg-white/10 backdrop-blur-sm border-white/20 scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary animate-pulse-custom" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/80">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="section-title mb-6 text-white">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-white/80">
                Get answers to common questions about our services and expertise.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 scroll-animate">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-white/20 rounded-lg px-6 bg-white/10 backdrop-blur-sm hover-glow transition-all duration-300">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-secondary transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;