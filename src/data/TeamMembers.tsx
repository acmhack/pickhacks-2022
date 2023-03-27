import {
  Filler,
  Bradley,
  Carter,
  Colton,
  Dominic,
  EricD,
  Eric,
  Jacob,
  Jason,
  Jonah,
  Keith,
  Kevin,
  Lauren,
  Lindsey,
  MaggieFu,
  Maggie,
  Marcella,
  Matt,
  Pranav,
  Rahul,
  Reid,
  Riley,
  Ryan,
  Shrija,
  Tung,
  Vishaanth,
} from "../images/Images";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IPerson {
  name: string;
  link: string;
  avatar: string;
}

interface IGroup {
  group: IPerson[];
}

const TeamMembers: IGroup[] = [
  {
    group: [
      { name: "Jason Xu", link: "https://www.linkedin.com/in/jason-xu-317585220/", avatar: Jason },
      { name: "Kevin Gu", link: "https://www.linkedin.com/in/kevin-gu-mst/", avatar: Kevin },
      { name: "Eric Wong", link: "https://www.linkedin.com/in/ewbyf/", avatar: Eric },
      { name: "Colton Jacobson", link: "https://www.linkedin.com/in/coltonjacobson/", avatar: Colton },
      { name: "Carter Wagner", link: "https://www.linkedin.com/in/carterwagner/", avatar: Carter },
    ],
  },
  {
      group: [
        { name: "Reid Haegele", link: "https://www.linkedin.com/in/reid-haegele/", avatar: Reid },
        { name: "Eric Duong", link: "https://www.linkedin.com/in/eric-duong-939604241", avatar: EricD },
        { name: "Jacob Kelly", link: "https://www.linkedin.com/in/jacobakelly/", avatar: Jacob },
        { name: "Tung Nguyen", link: "https://www.linkedin.com/in/tung-nguyen-0a509b26a", avatar: Tung },
        { name: "Vishaanth Muddu", link: "https://www.linkedin.com/in/vishaanth-muddu/", avatar: Vishaanth },
      ],
  },
  {
      group: [
        { name: "Dominic Alberico", link: "https://www.linkedin.com/in/dominic-alberico/", avatar: Dominic },
        { name: "Rahul Gopalan", link: "https://www.linkedin.com/in/rahulgopalan/", avatar: Rahul },
        { name: "Pranav Kondapaneni", link: "https://www.linkedin.com/in/pranavkondapaneni/", avatar: Pranav },
        { name: "Lindsey Chan", link: "https://www.linkedin.com/in/lindsey-chan/", avatar: Lindsey },
        { name: "Bradley Moore", link: "https://www.linkedin.com/in/bradley-moore-2021/", avatar: Bradley },
      ],
  },
  {
      group: [
        { name: "Matt Minatra", link: "https://www.linkedin.com/in/mjminatra/", avatar: Matt },
        { name: "Ryan Duffendack", link: "https://www.linkedin.com/in/ryan-duffendack-866058194/", avatar: Ryan },
        { name: "Maggie Fu", link: "https://linkedin.com/in/maggie-fu1809", avatar: MaggieFu },
        { name: "Riley Fuller", link: "https://www.linkedin.com/in/riley-fuller-ab021a1b7/", avatar: Riley },
        { name: "Jonah Yates", link: "https://www.linkedin.com/in/jonahy", avatar: Jonah },
      ],
  },
  {
      group: [
        { name: "Lauren Higgins", link: "https://www.linkedin.com/in/higgins7loh/", avatar: Lauren },
        { name: "Shrija Maganti", link: "https://www.linkedin.com/in/shrija-maganti/", avatar: Shrija },
        { name: "Marcella Tebeau", link: "https://www.linkedin.com/in/marcella-tebeau", avatar: Marcella },
        { name: "Maggie Boecker", link: "https://www.linkedin.com/in/margaret-boecker/", avatar: Maggie },
        { name: "Keith Miller", link: "https://www.linkedin.com/in/keith-miller-22387424b/", avatar: Keith },
      ],
  }
];
const MobileTeamMembers: IGroup[] = [
  {
      group: [
        { name: "Eric Wong", link: "https://www.linkedin.com/in/ewbyf/", avatar: Eric },
        { name: "Colton Jacobson", link: "https://www.linkedin.com/in/coltonjacobson/", avatar: Colton },
        { name: "Carter Wagner", link: "https://www.linkedin.com/in/carterwagner/", avatar: Carter },
        { name: "Reid Haegele", link: "https://www.linkedin.com/in/reid-haegele/", avatar: Reid },
      ],
  },
  {
      group: [
        { name: "Eric Duong", link: "https://www.linkedin.com/in/eric-duong-939604241", avatar: EricD },
        { name: "Jacob Kelly", link: "https://www.linkedin.com/in/jacobakelly/", avatar: Jacob },
        { name: "Tung Nguyen", link: "https://www.linkedin.com/in/tung-nguyen-0a509b26a", avatar: Tung },
      ],
  },
  {
      group: [
        { name: "Vishaanth Muddu", link: "https://www.linkedin.com/in/vishaanth-muddu/", avatar: Vishaanth },
        { name: "Dominic Alberico", link: "https://www.linkedin.com/in/dominic-alberico/", avatar: Dominic },
        { name: "Rahul Gopalan", link: "https://www.linkedin.com/in/rahulgopalan/", avatar: Rahul },
      ],
  },
  {
      group: [
        { name: "Pranav Kondapaneni", link: "https://www.linkedin.com/in/pranavkondapaneni/", avatar: Pranav },
        { name: "Lindsey Chan", link: "https://www.linkedin.com/in/lindsey-chan/", avatar: Lindsey },
        { name: "Bradley Moore", link: "https://www.linkedin.com/in/bradley-moore-2021/", avatar: Bradley },
      ],
  },
  {
      group: [
        { name: "Matt Minatra", link: "https://www.linkedin.com/in/mjminatra/", avatar: Matt },
        { name: "Ryan Duffendack", link: "https://www.linkedin.com/in/ryan-duffendack-866058194/", avatar: Ryan },
        { name: "Maggie Fu", link: "https://linkedin.com/in/maggie-fu1809", avatar: MaggieFu },
      ],
  },
  {
      group: [
        { name: "Riley Fuller", link: "https://www.linkedin.com/in/riley-fuller-ab021a1b7/", avatar: Riley },
        { name: "Jonah Yates", link: "https://www.linkedin.com/in/jonahy", avatar: Jonah },
        { name: "Lauren Higgins", link: "https://www.linkedin.com/in/higgins7loh/", avatar: Lauren },
      ],
  },
  {
    group: [
      { name: "Shrija Maganti", link: "https://www.linkedin.com/in/shrija-maganti/", avatar: Shrija },
      { name: "Marcella Tebeau", link: "https://www.linkedin.com/in/marcella-tebeau", avatar: Marcella },
      { name: "Maggie Boecker", link: "https://www.linkedin.com/in/margaret-boecker/", avatar: Maggie },
    ],
  },
  {
    group: [
      { name: "Keith Miller", link: "https://www.linkedin.com/in/keith-miller-22387424b/", avatar: Keith },
      { name: "Jason Xu", link: "https://www.linkedin.com/in/jason-xu-317585220/", avatar: Jason },
      { name: "Kevin Gu", link: "https://www.linkedin.com/in/kevin-gu-mst/", avatar: Kevin },
    ],
  }
];

export { TeamMembers, MobileTeamMembers };