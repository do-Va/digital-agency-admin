import { GiTeamIdea, GiNewspaper } from 'react-icons/gi';
import {
  MdOutlineDesignServices,
  MdSupervisedUserCircle,
  MdConnectWithoutContact,
  MdOutlineCallToAction,
  MdOutlineCopyright,
} from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';
import {
  TfiLayoutMenuSeparated,
  TfiLayoutAccordionMerged,
  TfiHeadphoneAlt,
} from 'react-icons/tfi';

const sideMenus = [
  {
    id: 1,
    name: 'header',
    Icon: TfiLayoutMenuSeparated,
    url: '/admin-dashboard',
  },
  {
    id: 2,
    name: 'hero',
    Icon: TfiLayoutAccordionMerged,
    url: '/admin-dashboard/hero',
  },
  { id: 3, name: 'about', Icon: SiAboutdotme, url: '/admin-dashboard/about' },
  {
    id: 4,
    name: 'services',
    Icon: TfiHeadphoneAlt,
    url: '/admin-dashboard/service',
  },
  {
    id: 5,
    name: 'our team',
    Icon: GiTeamIdea,
    url: '/admin-dashboard/our-team',
  },
  {
    id: 6,
    name: 'our work',
    Icon: MdOutlineDesignServices,
    url: '/admin-dashboard/our-work',
  },
  {
    id: 7,
    name: 'testimonial',
    Icon: MdSupervisedUserCircle,
    url: '/admin-dashboard/testimonial',
  },
  {
    id: 8,
    name: 'contact us',
    Icon: MdConnectWithoutContact,
    url: '/admin-dashboard/contact-us',
  },
  {
    id: 9,
    name: 'newsletters',
    Icon: GiNewspaper,
    url: '/admin-dashboard/newsletter',
  },
  {
    id: 10,
    name: 'footer',
    Icon: MdOutlineCallToAction,
    url: '/admin-dashboard/footer',
  },
  {
    id: 11,
    name: 'copyright',
    Icon: MdOutlineCopyright,
    url: '/admin-dashboard/copyright',
  },
];

export default sideMenus;
