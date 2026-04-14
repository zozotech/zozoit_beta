
import { Menu, X, Rocket, ChevronDown, Monitor, Layout, PenTool, BarChart, PackageSearch } from 'lucide-react';

export const navLinks = [
    { name: 'Home', path: '/' },
    { 
        name: 'How We Help', 
      path: '/services',
      subMenu: [
        { name: 'Website Design', path: '/services/web-development', icon: Monitor, description: 'Make a positive impression with your target customers where it matters most' }, //id:1
        { name: 'Landing Page Design', path: '/services/landing-page', icon: Layout }, //id:9
        { name: 'E-commerce Solutions', path: '/services/ecommerce', icon: Layout }, //id:2
        { name: 'Logo Design', path: '/services/logo-design', icon: PenTool }, // id:7
        { name: 'UI/UX Design', path: '/services/ui-ux-design', icon: PenTool }, //id:4
        { name: 'Marketing Strategy', path: '/services/seo-marketing', icon: BarChart  },
        { name: 'Digital Marketing & SEO', path: '/services/seo-marketing', icon: BarChart }, //id:3
        { name: 'Branding & Identity', path: '/services/branding', icon: BarChart }, //id:5
        { name: 'Mobile App Development', path: '/services/mobile-apps', icon: BarChart }, //id:6
        { name: 'Amazon FBA Consultant', path: '/services/amazon-fba-consultation', icon: PackageSearch }, //id:8
      ]
    },
   {
    name: 'Who We Help',
    path: '/who-we-help',
    subMenu: [
      { name: 'Startups', path: '/who-we-help/startups' },
      { name: 'Small Business', path: '/who-we-help/small-business' },
      { name: 'E-commerce', path: '/who-we-help/ecommerce' },
    ],
  },

  {
    name: 'Why ZoZoIT',
    path: '/why-zozoit',
    subMenu: [
      { name: 'Our Process', path: '/why-zozoit/process' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'Testimonials', path: '/testimonials' },
    ],
  },

  {
    name: 'Resources',
    path: '/resources',
    subMenu: [
      { name: 'Blog', path: '/blog' },
      { name: 'Guides', path: '/resources/guides' },
      { name: 'FAQs', path: '/resources/faqs' },
    ],
  },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  
    { name: 'Contact', path: '/contact' },
  ];