import Kwh from '../assets/kwh.svg';
import Code from '../assets/Code.svg';
import Ui from '../assets/Ui.svg';
import Medworkflow from '../assets/Mask group4.svg';
import Ems from '../assets/Mask group5.svg';
import Deepnet from '../assets/Rectangle 799.svg';
import Idea from '../assets/Idea.svg';
import Ethics from '../assets/Ethics.svg';
import Diamond  from '../assets/Diamond.svg';
import User from '../assets/User.svg';
import BPHA from '../assets/Active-svg/BPH-Active.svg'
import JSHA from '../assets/Active-svg/JSH-Active.svg'
import HPHA from '../assets/Active-svg/HPH-active.svg'
import IreneA from '../assets/Active-svg/Irene-Active.svg'
import GroveA from '../assets/Active-svg/Grove-Active.svg'
import BPHI from '../assets/Active-svg/BPH-Inactive.svg'
import HPHI from '../assets/Active-svg/HPH-Inactive.svg'
import JSHI from '../assets/Active-svg/JSH-Inactive.svg'
import IreneI from '../assets/Active-svg/Irene-Inactive.svg'
import GroveI from '../assets/Active-svg/Grove-Inactive.svg';
import JSH from '../assets/Mask group3.svg';
import HPH from '../assets/HPH.svg';
import BPH from '../assets/BPH.svg';
import Irene from '../assets/Irene.svg';
import Grove from '../assets/Grove.svg';
import Block1 from '../Assets/Block 1.svg';
import Block2 from '../Assets/Block 2.svg';
import Block3 from '../Assets/Block 3.svg';
import Tech from '../Assets/Group 133720.svg';



export const serviceCards = [
  {
    image: Kwh,
    title: 'Utility Specialists',
    description:
      'By implementing our smart technologies, businesses can monitor usage patterns and reduce waste, leading to cost savings and environmental benefits.',
  },
  {
    image: Ui,
    title: 'Systems Architects',
    description:
      'Creating dynamic software to ensure that the architecture aligns with business goals while considering scalability, security, and performance.',
  },
  {
    image: Code,
    title: 'Systems Integrators',
    description:
      'Comprehensive and adaptable integration services designed to elevate your business operations.',
  },
];


export const projects = [
  
  {
    title: 'EMS',
    description:
      'Our bespoke EMS coordinates solar systems, battery storage systems, municipal power, and backup generators. It processes real-time data, applies predictive analytics, and executes automated decisions — all within a single, integrated platform.',
    image: Ems,
  },
  {
    title: 'MedWorkflow',
    description:
      'MedWorkflow is a hospital management system that simplifies operations and improves patient care. Its intuitive interface helps healthcare professionals efficiently handle patient records, appointments, and billing.',
    image: Medworkflow,
  },
  {
    title: 'DeepNet Engine',
    description:
      'MedWorkflow is a hospital management system that simplifies operations and improves patient care. Its intuitive interface helps healthcare professionals efficiently handle patient records, appointments, and billing.',
    image: Deepnet,
  },
];

export const valueCards = [
  {
    image: Idea,
    title: 'Innovation',
    description:'We embrace creative thinking and forward-looking research. By staying curious and open to bold ideas, we develop transformative solutions that push the boundaries of possibility.'
  }, 
  {
    image: Diamond,
    title: 'Excellence',
    description:'Our commitment to quality spans every facet of what we do, from project management to final delivery. We hold ourselves to high standards, ensuring that each solution meets rigorous performance and reliability benchmarks.'
  },
  {
    image: Ethics,
    title: 'Integrity',
    description:'Transparency, honesty, and ethical business practices guide our decisions. We foster long-term relationships built on trust — ensuring our clients, employees, and partners know we stand by our word.'
  },
  {
    image: User,
    title: 'People-centric Focus',
    description:'We recognize that our people are our greatest asset. By investing in professional growth and well-being, we create a vibrant work environment that inspires excellence, creativity, and continuous learning.'
  } 
]

export const services = [
    {
      id: 1,
      title: 'Utility Specialists',
      description: 'By implementing our smart technologies, businesses can monitor usage patterns and reduce waste, leading to cost savings and environmental benefits.',
      icon: Kwh,
      background: Block1,
      link: '/utilities'
    },
    {
      id: 2,
      title: 'Systems Architects',
      description: 'Creating dynamic software to ensure that the architecture aligns with business goals while considering scalability, security, and performance.',
      icon: Tech,
      background: Block2,
      link: '/system'
    },
    {
      id: 3,
      title: 'Software Developers',
      description: 'Comprehensive and adaptable integration services designed to elevate your business operations.',
      icon: Code,
      background: Block3,
      link: '/software'
    }
  ];


export interface Client {
  id: string;
  name: string;
  description: string;
  image: string;
  activeIcon: string;
  inactiveIcon: string;
}

export const clientsData: Client[] = [
  {
    id: 'jsh',
    name: 'Johannesburg Surgical Hospital',
    description: 'We partnered with Johannesburg Surgical Hospital to integrate our MedWorkflow platform, fundamentally addressing their hospital management needs. This tailored solution optimized the entire patient journey—from admission to discharge—by centralizing all data. MedWorkflow\'s provision of seamless data management and real-time analytics empowered staff, accelerated clinical and administrative decisions, and ultimately delivered significant operational efficiency gains across the institution.',
    image: JSH,
    activeIcon: JSHA,
    inactiveIcon: JSHI
  },
  {
    id: 'hph',
    name: 'Hoedspruit Private Hospital',
    description: 'Hoedspruit\'s property market is booming, driven by a massive influx of investment from international buyers and local semigrants. The new Hoedspruit Private Hospital (HPH) anchors this growth. The HPH partnership is a strategic live testing ground for key innovations like digital triage, RFID automated theatre billing, and the deployment of an advanced EMS system, ensuring the facility proactively scales high-quality service to match the rapid expansion of this vibrant residential hub.',
    image: HPH,
    activeIcon: HPHA,
    inactiveIcon: HPHI
  },
  {
    id: 'bph',
    name: 'Baywest Private Hospital',
    description: 'The construction of Bay West Private Hospital (BWH) in Port Elizabeth (a proposed 166-bed acute care facility emphasizing holistic wellness and patient-centric design) offers a crucial opportunity to put MedWorkflow to the test. This strategic partnership allows us to rigorously evaluate the platform\'s scalability and adaptability, ensuring we can mold its features to fit BWH\'s specific operational context and support the modern, high-capacity, wellness-focused demands of the health industry.',
    image: BPH,
    activeIcon: BPHA,
    inactiveIcon: BPHI
  },
  {
    id: 'Irene',
    name: 'Irene Village Mall',
    description: 'MetMetric implemented a comprehensive Energy Management System (EMS) to manage complex energy demands at Irene Village Mall. This advanced solution features proprietary integrated hardware for precise load control and leverages predictive analytics and advanced optimization algorithms. The system successfully orchestrates energy flow across multiple sources, resulting in a highly resilient energy infrastructure that ensures seamless operational stability, even during changes in grid conditions.',
    image: Irene,
    activeIcon: IreneA,
    inactiveIcon: IreneI
  },
  {
    id: 'Grove',
    name: 'The Grove Mall',
    description: 'MetMetric introduced a state-of-the-art Energy Management System (EMS) to handle intricate power needs at The Grove Mall. This platform incorporates custom hardware for accurate power regulation and uses forecasting intelligence alongside complex models. The EMS dynamically balances energy distribution across various sources, creating an exceptionally efficient infrastructure that delivers substantial financial savings and improved operational performance through proactive power management.',
    image: Grove,
    activeIcon: GroveA,
    inactiveIcon: GroveI
  }
];