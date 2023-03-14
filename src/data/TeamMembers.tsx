import {
  Filler,

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
      { name: "Jason Xu", link: "https://www.linkedin.com/in/jason-xu-317585220/", avatar: Filler },
      { name: "Kevin Gu", link: "https://www.linkedin.com/in/kevin-gu-mst/", avatar: Filler },
      { name: "Eric Wong", link: "https://www.linkedin.com/in/ewbyf/", avatar: Filler },
      { name: "Colton Jacobson", link: "https://www.linkedin.com/in/coltonjacobson/", avatar: Filler },
      { name: "Carter Wagner", link: "https://www.linkedin.com/in/carterwagner/", avatar: Filler },
    ],
  },
  {
      group: [
        { name: "Reid Haegele", link: "https://www.linkedin.com/in/reid-haegele/", avatar: Filler },
        { name: "Eric Duong", link: "https://www.linkedin.com/in/eric-duong-939604241", avatar: Filler },
        { name: "Jacob Kelly", link: "https://www.linkedin.com/in/jacobakelly/", avatar: Filler },
        { name: "Tung Nguyen", link: "https://www.linkedin.com/in/tung-nguyen-0a509b26a", avatar: Filler },
        { name: "Vishaanth Muddu", link: "www.linkedin.com/in/vishaanth-muddu", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Dominic Alberico", link: "https://www.linkedin.com/in/dominic-alberico/", avatar: Filler },
        { name: "Rahul Gopalan", link: "https://www.linkedin.com/in/rahulgopalan/", avatar: Filler },
        { name: "Pranav Kondapaneni", link: "https://www.linkedin.com/in/pranavkondapaneni/", avatar: Filler },
        { name: "Lindsey Chan", link: "https://www.linkedin.com/in/lindsey-chan/", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Bradley Moore", link: "https://www.linkedin.com/in/bradley-moore-2021/", avatar: Filler },
        { name: "Matt Minatra", link: "https://www.linkedin.com/in/mjminatra/", avatar: Filler },
        { name: "Ryan Duffendack", link: "https://www.linkedin.com/in/ryan-duffendack-866058194/", avatar: Filler },
        { name: "Maggie Fu", link: "https://linkedin.com/in/maggie-fu1809", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Riley Fuller", link: "https://www.linkedin.com/in/riley-fuller-ab021a1b7/", avatar: Filler },
        { name: "Jonah Yates", link: "https://www.linkedin.com/in/jonahy", avatar: Filler },
        { name: "Lauren Higgins", link: "https://www.linkedin.com/in/higgins7loh/", avatar: Filler },
        { name: "Sabrina McRoberts", link: "https://www.linkedin.com/in/sabrina-m-baaa49162/", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Shrija Maganti", link: "https://www.linkedin.com/in/shrija-maganti/", avatar: Filler },
        { name: "Marcella Tebeau", link: "https://www.linkedin.com/in/marcella-tebeau", avatar: Filler },
        { name: "Maggie Boecker", link: "https://www.linkedin.com/in/margaret-boecker/", avatar: Filler },
        { name: "Keith Miller", link: "https://www.linkedin.com/in/keith-miller-22387424b/", avatar: Filler },
      ],
  },
];
const MobileTeamMembers: IGroup[] = [
  {
      group: [
        { name: "Eric Wong", link: "https://www.linkedin.com/in/ewbyf/", avatar: Filler },
        { name: "Colton Jacobson", link: "https://www.linkedin.com/in/coltonjacobson/", avatar: Filler },
        { name: "Carter Wagner", link: "https://www.linkedin.com/in/carterwagner/", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Reid Haegele", link: "https://www.linkedin.com/in/reid-haegele/", avatar: Filler },
        { name: "Eric Duong", link: "https://www.linkedin.com/in/eric-duong-939604241", avatar: Filler },
        { name: "Jacob Kelly", link: "https://www.linkedin.com/in/jacobakelly/", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Tung Nguyen", link: "https://www.linkedin.com/in/tung-nguyen-0a509b26a", avatar: Filler },
        { name: "Vishaanth Muddu", link: "www.linkedin.com/in/vishaanth-muddu", avatar: Filler },
        { name: "Dominic Alberico", link: "https://www.linkedin.com/in/dominic-alberico/", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Rahul Gopalan", link: "https://www.linkedin.com/in/rahulgopalan/", avatar: Filler },
        { name: "Pranav Kondapaneni", link: "https://www.linkedin.com/in/pranavkondapaneni/", avatar: Filler },
        { name: "Lindsey Chan", link: "https://www.linkedin.com/in/lindsey-chan/", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Bradley Moore", link: "https://www.linkedin.com/in/bradley-moore-2021/", avatar: Filler },
        { name: "Matt Minatra", link: "https://www.linkedin.com/in/mjminatra/", avatar: Filler },
        { name: "Ryan Duffendack", link: "https://www.linkedin.com/in/ryan-duffendack-866058194/", avatar: Filler },
      ],
  },
  {
      group: [
        { name: "Maggie Fu", link: "https://linkedin.com/in/maggie-fu1809", avatar: Filler },
        { name: "Riley Fuller", link: "https://www.linkedin.com/in/riley-fuller-ab021a1b7/", avatar: Filler },
        { name: "Jonah Yates", link: "https://www.linkedin.com/in/jonahy", avatar: Filler },
      ],
  },
  {
    group: [
      { name: "Lauren Higgins", link: "https://www.linkedin.com/in/higgins7loh/", avatar: Filler },
      { name: "Sabrina McRoberts", link: "https://www.linkedin.com/in/sabrina-m-baaa49162/", avatar: Filler },
      { name: "Shrija Maganti", link: "https://www.linkedin.com/in/shrija-maganti/", avatar: Filler },
    ],
  },
  {
    group: [
      { name: "Marcella Tebeau", link: "https://www.linkedin.com/in/marcella-tebeau", avatar: Filler },
      { name: "Maggie Boecker", link: "https://www.linkedin.com/in/margaret-boecker/", avatar: Filler },
      { name: "Keith Miller", link: "https://www.linkedin.com/in/keith-miller-22387424b/", avatar: Filler },
    ],
  },
  {
    group: [
      { name: "Jason Xu", link: "https://www.linkedin.com/in/jason-xu-317585220/", avatar: Filler },
      { name: "Kevin Gu", link: "https://www.linkedin.com/in/kevin-gu-mst/", avatar: Filler },
    ],
  },
];

export { TeamMembers, MobileTeamMembers };