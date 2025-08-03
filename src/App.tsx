import { ArrowRight, Award, Check, ChevronDown, Code, ExternalLink, Facebook, Instagram, Mail, Menu, Moon, Phone, Star, Sun, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import supabase from './supabaseClient';
type Project={
      id:number
      title:string,
     image: string
     liveUrl: string
}

type Review={
   id: number,
      name:string,
  company: string,
 rating: number,
  text:string
}
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const[projects,setProjects]=useState<Project[]>([])
  const[reviews,setReviews]=useState<Review[]>([])
  // Hero carousel images
  const heroImages = [
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  useEffect(()=>{
    const getProjects=async()=>{
      const { data, error } = await supabase
  .from('projects')
  .select('*')
    if(data){
      setProjects(data);
    }
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Products:', data);
  }
    }
    getProjects()
  },[])
  useEffect(()=>{
    const getReviews=async()=>{
      const { data, error } = await supabase
  .from('feedbacks')
  .select('*')
    if(data){
      setReviews(data);
    }
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Products:', data);
  }
    }
    getReviews()
    
  },[])
  // Auto-advance reviews carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewSlide((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);


  // Sample reviews data
  // const reviews = [
  // //   {
  //     id: 1,
  //     name: 'Sarah Johnson',
  //     company: 'TechStart Inc.',
  //     rating: 5,
  //     text: 'Outstanding work! They delivered our e-commerce platform on time and exceeded our expectations. The attention to detail and user experience is remarkable.'
  //   },
  //   {
  //     id: 2,
  //     name: 'Michael Chen',
  //     company: 'FinanceFlow',
  //     rating: 5,
  //     text: 'Professional team with excellent communication. Our financial dashboard is now the cornerstone of our business operations. Highly recommended!'
  //   },
  //   {
  //     id: 3,
  //     name: 'Emily Rodriguez',
  //     company: 'HealthCare Plus',
  //     rating: 5,
  //     text: 'The mobile app they developed for us has revolutionized how we serve our patients. Clean code, great UI/UX, and perfect performance.'
  //   }
  // ];

  const planCategories = {
   websites: [
  {
    name: 'Bronze',
    price: 'Rs 10,000',
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO Optimization',
      '6 Months Support',
      '1 Year Free Hosting'
    ],
    gradient: 'from-amber-600 to-amber-800'
  },
  {
    name: 'Silver',
    price: 'Rs 20,000',
    features: [
      'Up to 10 Pages',
      'Advanced Custom Design',
      
      'E-commerce Ready',
      '1 Year Support',
      '1 Year Free Hosting',
      'Admin Dashboard Access',
      'Free Domain'
    ],
    gradient: 'from-gray-400 to-gray-600',
    popular: true
  },
  {
    name: 'Gold',
    price: 'Rs 30,000',
    features: [
      'Unlimited Pages',
      'Fully Custom Features',
      'Database Integration',
      'Complete E-commerce Solution',
      'Admin Dashboard + User Management',
      '2 Years Priority Support',
      '1 Year Free Hosting',
      'Performance Optimization',
      'Free Domain'
    ],
    gradient: 'from-yellow-400 to-yellow-600'
  }
]
,
    apps: [
  {
    name: 'Bronze',
    price: 'Rs 15,000',
    features: [
      'iOS or Android App',
      'Basic Features & UI',
      'Push Notifications',
      'Basic Analytics',
      '6 Months Support'
    ],
    gradient: 'from-amber-600 to-amber-800'
  },
  {
    name: 'Silver',
    price: 'Rs 20,000',
    features: [
      'iOS & Android Apps',
      'Advanced Features',
      'User Authentication',
      'Cloud Backend Integration',
      'Advanced Analytics & Reporting',
      '12 Months Support'
    ],
    gradient: 'from-gray-400 to-gray-600',
    popular: true
  },
  {
    name: 'Gold',
    price: 'Rs 30,000',
    features: [
      'Cross-Platform App (iOS & Android)',
      'Custom Backend & APIs',
      'Real-time Features (Chat, Updates)',
      'AI/ML Integration',
      'Premium Analytics & Insights',
      'Admin Dashboard',
      '12 Months Priority Support'
    ],
    gradient: 'from-yellow-400 to-yellow-600'
  }
]

  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        {/* Promotion Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 text-center text-sm font-medium">
          🎉 Free hosting for small business sites - Limited time offer!
        </div>
        
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                WebBlitz
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'projects', 'plans', 'reviews', 'stats'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === item
                      ? 'text-purple-600'
                      : darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item === 'stats' ? 'Projects Done' : item}
                </button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Contact Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 py-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <nav className="flex flex-col space-y-3">
                {['hero', 'about', 'projects', 'plans', 'reviews', 'stats', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left capitalize font-medium py-2 transition-colors ${
                      activeSection === item
                        ? 'text-purple-600'
                        : darkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item === 'stats' ? 'Projects Done' : item}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Full Stack
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {' '}Solutions
                  </span>
                </h1>
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
                  We create powerful web applications and mobile apps that drive business growth. 
                  From concept to deployment, we handle everything.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-lg font-medium border-2 transition-all duration-200 ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white' 
                      : 'border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600'
                  }`}
                >
                  Get Started
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>10+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>98%</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>24/7</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Support</div>
                </div>
              </div>
            </div>

            {/* Hero Carousel */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Hero slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ))}
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About FullStack Pro
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              We are a team of passionate developers, designers, and strategists dedicated to creating 
              exceptional digital experiences that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
             {
  icon: <Code className="w-12 h-12" />,
  title: 'Expert Development',
  description: 'Full-stack expertise in React, Node.js, Supabase, and cloud platforms.'
},
{
  icon: <Zap className="w-12 h-12" />,
  title: 'Fast Delivery',
  description: 'Agile development process with quick turnaround and 1 year free hosting.'
},
{
  icon: <Award className="w-12 h-12" />,
  title: 'Quality Assurance',
  description: 'Rigorous testing and quality control to deliver bug-free, scalable solutions.'
}

            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode ? 'bg-gray-900 hover:shadow-2xl' : 'bg-white hover:shadow-xl'
                }`}
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Latest Projects
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length>0 && projects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:shadow-2xl' : 'bg-gray-50 hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Watch Live Demo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Projects Completed
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Total Projects' },
              { number: '10+', label: 'Happy Clients' },
              { number: '95%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Plans
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Choose the perfect plan for your project needs
            </p>
          </div>

          {/* Full Stack Websites */}
          <div className="mb-20">
            <h3 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Full Stack Websites
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {planCategories.websites.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 border-2 ${
                    plan.popular 
                      ? 'border-purple-500 shadow-xl' 
                      : 'border-transparent'
                  } ${
                    darkMode ? 'bg-gray-800 hover:shadow-2xl' : 'bg-white hover:shadow-xl'
                  }`}
                  style={{
                    background: darkMode 
                      ? `linear-gradient(135deg, rgba(123, 104, 238, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)` 
                      : `linear-gradient(135deg, rgba(123, 104, 238, 0.05) 0%, rgba(255, 255, 255, 1) 100%)`
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${plan.gradient} mb-4`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h4>
                    <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Apps */}
          <div className="mb-12">
            <h3 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Apps
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {planCategories.apps.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 border-2 ${
                    plan.popular 
                      ? 'border-purple-500 shadow-xl' 
                      : 'border-transparent'
                  } ${
                    darkMode ? 'bg-gray-800 hover:shadow-2xl' : 'bg-white hover:shadow-xl'
                  }`}
                  style={{
                    background: darkMode 
                      ? `linear-gradient(135deg, rgba(123, 104, 238, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)` 
                      : `linear-gradient(135deg, rgba(123, 104, 238, 0.05) 0%, rgba(255, 255, 255, 1) 100%)`
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${plan.gradient} mb-4`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h4>
                    <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Plan Message */}
          <div className="text-center">
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              Need something different? 
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-purple-600 hover:text-purple-700 font-medium text-xl  hover:underline transition-all"
            >
              If you need, you can have a custom plan
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Client Reviews
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              What our clients say about working with us
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewSlide * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div
                      className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                        darkMode ? 'bg-gray-900 hover:shadow-2xl' : 'bg-white hover:shadow-xl'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className={`text-lg mb-6 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        "{review.text}"
                      </p>
                      <div className="text-center">
                        <div className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {review.name}
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {review.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentReviewSlide((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white' : 'bg-white text-gray-600 hover:bg-purple-600 hover:text-white shadow-lg'
              }`}
            >
              <ChevronDown className="w-6 h-6 rotate-90" />
            </button>
            <button
              onClick={() => setCurrentReviewSlide((prev) => (prev + 1) % reviews.length)}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white' : 'bg-white text-gray-600 hover:bg-purple-600 hover:text-white shadow-lg'
              }`}
            >
              <ChevronDown className="w-6 h-6 -rotate-90" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentReviewSlide 
                      ? 'bg-purple-600 scale-110' 
                      : darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to start your project? Get in touch with us today!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Project Overview
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Budget
                    </label>
                    <select
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    >
                      <option value="" disabled>Select your budget range</option>
                      <option value="custom">Under Rs 10,000</option>
                      <option value="bronze">Bronze</option>
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                     
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Get in touch
                  </h3>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                    We're here to help you bring your digital vision to life. 
                    Contact us through any of the following methods.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Phone
                      </div>
                      <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        +94 725858799
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Email
                      </div>
                      <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        bashithaspc@gmail.com
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Office
                      </div>
                      <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        123 Tech Street, Digital City, DC 12345
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="pt-8">
                  <div className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Follow us
                  </div>
                  <div className="flex space-x-4">
                    {[
  { icon: <Facebook className="w-6 h-6" />, href: '#' },
  { icon: <Instagram className="w-6 h-6" />, href: '#' },
  { icon: <SiTiktok className="w-6 h-6" />, href: '#' },
  {icon:<BsWhatsapp className="w-6 h-6" />, href: '#'}
].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white'
                        }`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Web Blitz
                </span>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Creating exceptional digital experiences that drive business growth.
              </p>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Services
              </h4>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Cafe</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">POS Systems</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Company
              </h4>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-purple-600 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-purple-600 transition-colors">Portfolio</button></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Info
              </h4>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>+94 725858799</p>
                <p>bashithaspc@gmail.com</p>
                <p>123 Tech Street<br />Digital City, DC 12345</p>
              </div>
            </div>
          </div>

          <div className={`border-t pt-8 mt-8 text-center ${darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'}`}>
            <p>&copy; 2025 FullStack Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;