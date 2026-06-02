import { StaticImageData } from "next/image";

import SjohumlorIcon from "../assets/images/icons/sjohumlor_icon.png";
import KaparnaIcon from "../assets/images/icons/kaparna_icon.png";
import KonvojenIcon from "../assets/images/icons/konvojen_icon.png";
import UtmanareIcon from "../assets/images/icons/utmanare_icon.png";
import FamiljescoutIcon from "../assets/images/icons/familyscout_icon.png";

import GreenMedalIcon from "../assets/images/icons/greenmedal.svg";
import GreenTimeIcon from "../assets/images/icons/greentime.svg";
import GreenLocationIcon from "../assets/images/icons/greenmp.svg";
import GreenLeaderIcon from "../assets/images/icons/greenledare.svg";
import GreenBackIcon from "../assets/images/icons/greenback.svg";

import BlueMedalIcon from "../assets/images/icons/bluemedal.svg";
import BlueTimeIcon from "../assets/images/icons/bluetime.svg";
import BlueLocationIcon from "../assets/images/icons/bluemp.svg";
import BlueLeaderIcon from "../assets/images/icons/blueledare.svg";
import BlueBackIcon from "../assets/images/icons/blueback.svg";

import OrangeMedalIcon from "../assets/images/icons/orangemedal.svg";
import OrangeTimeIcon from "../assets/images/icons/orangetime.svg";
import OrangeLocationIcon from "../assets/images/icons/orangemp.svg";
import OrangeLeaderIcon from "../assets/images/icons/orangeledare.svg";
import OrangeBackIcon from "../assets/images/icons/orangeback.svg";

import PinkMedalIcon from "../assets/images/icons/pinkmedel.svg";
import PinkTimeIcon from "../assets/images/icons/pinktime.svg";
import PinkLocationIcon from "../assets/images/icons/pinkmp.svg";
import PinkLeaderIcon from "../assets/images/icons/pinkledare.svg";
import PinkBackIcon from "../assets/images/icons/pinkback.svg";

import PurpleMedalIcon from "../assets/images/icons/purplemedal.svg";
import PurpleTimeIcon from "../assets/images/icons/purpletime.svg";
import PurpleLocationIcon from "../assets/images/icons/purplemp.svg";
import PurpleLeaderIcon from "../assets/images/icons/purpleledare.svg";
import PurpleBackIcon from "../assets/images/icons/purpleback.svg";

export interface VerksamhetGroup {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  bulletColor: string;
  activities: string[];
  badges: string[];
  meetingDays: string;
  meetingTime: string;
  meetingPlace: string;
  leader: string;
  description: string;
  icon: StaticImageData;
  iconWidth?: number;
  iconHeight?: number;
  badgeIcon: StaticImageData;
  timeIcon: StaticImageData;
  locationIcon: StaticImageData;
  leaderIcon: StaticImageData;
  backIcon: StaticImageData;
}

export const groups: VerksamhetGroup[] = [
  {
    id: "sjohumlor",
    title: "Sjöhumlor",
    subtitle: "Spårare 8–9 år",
    color: "bg-card-one",
    bulletColor: "#3EB52C",
    icon: SjohumlorIcon,
    iconWidth: 100,
    iconHeight: 88,
    badgeIcon: GreenMedalIcon,
    timeIcon: GreenTimeIcon,
    locationIcon: GreenLocationIcon,
    leaderIcon: GreenLeaderIcon,
    backIcon: GreenBackIcon,
    activities: [
      "Tälja med kniv",
      "Övernattningar",
      "Lägga bandage",
      "Segla optimistjollar",
      "Samarbeta i patruller",
    ],
    badges: [
      "Lyktmärket",
      "Underhållning",
      "Knopmärket",
      "Sjukvårdsmärket",
      "Optimist",
    ],
    meetingDays: "Måndagar",
    meetingTime: "18:30–20:00",
    meetingPlace: "Scoutlokalen Ruffen (Hässelby Strand)",
    leader: "Abcxxx",
    description:
      'Vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2. Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna. (Tidigare hette spårarscout "miniorscout")\n\nVi har möten varje vecka samt övernattningar, både hajker och längre läger.\n\nHär får barnen lära sig knopar, grundläggande naturkunskap och sjömanskap på ett lekfullt sätt.\n\nDu lär dig något nytt nästan varje dag i Scouterna, det är alltid roliga saker men ibland är de också väldigt bra att kunna. Som att tälja med kniv eller lägga bandage på någon som gjort sig illa. Till skillnad från hur man gör i skolan läser vi inga böcker om knivar och bandage, vi lär oss genom att göra, genom att prova på allt på riktigt istället. Medans vi gör det samarbetar vi i patruller, små grupper där alla är med och bestämmer. Det är smart, för tillsammans kan man alltid hjälpas åt att hitta på ännu roligare saker.\n\nVi seglar optimistjollar och 2-kronor.\n\nSjöhumlorna har möten på måndagar i vår fina lokal Ruffen vid Hässelby Strandbad.\n\nNär man är scout gör man alltid sitt bästa och det gör inget om det råkar bli fel, därför brukar vi tänka lite på hur allting gått till så att vi blir bättre till nästa gång.',
  },
  {
    id: "kaparna",
    title: "Kaparna",
    subtitle: "Upptäckare 10–11 år",
    color: "bg-card-two",
    bulletColor: "#01A8DF",
    icon: KaparnaIcon,
    iconWidth: 100,
    iconHeight: 88,
    badgeIcon: BlueMedalIcon,
    timeIcon: BlueTimeIcon,
    locationIcon: BlueLocationIcon,
    leaderIcon: BlueLeaderIcon,
    backIcon: BlueBackIcon,
    activities: [
      "Elda",
      "Hantera kniv",
      "Sjösäkerhet",
      "Segla kölbåt",
      "Släcka mindre bränder",
    ],
    badges: ["Tända eld", "Schiffer", "Repmärket", "LABC", "Tvåkrona"],
    meetingDays: "Onsdagar",
    meetingTime: "18:30–20:15",
    meetingPlace: "Scoutlokalen Ruffen (Hässelby Strand)",
    leader: "Abcxxx",
    description:
      'På Kaparna börjar man vid 10 års ålder och stannar kvar i två år tills det är dags för nästa steg. (Tidigare hette upptäckarscout "juniorscout")\n\nPå Kaparna stegras svårighetsgraden på uppgifterna. Scouterna får lära sig segla optimist samt prova på att segla 2-krona samt kölbåt. En färdigutbildad upptäckarscout kan bland annat hantera kniv, elda och släcka mindre bränder, segla optimist själv samt grundläggande sjukvård och sjösäkerhet.\n\nAvdelningen Kaparna har möten på onsdagar i vår lokal Ruffen vid Hässelby Strandbad.\n\nNär man är scout gör man alltid sitt bästa men det gör inget om det råkar bli fel, därför brukar vi tänka lite på hur allting gått till så att vi blir bättre till nästa gång.',
  },
  {
    id: "konvojen",
    title: "Konvojen",
    subtitle: "Äventyrare 12–14 år",
    color: "bg-card-three",
    bulletColor: "#FF7024",
    icon: KonvojenIcon,
    iconWidth: 100,
    iconHeight: 88,
    badgeIcon: OrangeMedalIcon,
    timeIcon: OrangeTimeIcon,
    locationIcon: OrangeLocationIcon,
    leaderIcon: OrangeLeaderIcon,
    backIcon: OrangeBackIcon,
    activities: [
      "Vinterhajk",
      "Navigation",
      "Sjömanskap",
      "Segling i skärgården",
      "Traditionella isvaksbadet",
    ],
    badges: [
      "Tända brasa",
      "Vintermärket",
      "Rep och surrning",
      "Livräddningsmärket",
      "Rorsman",
    ],
    meetingDays: "Torsdagar",
    meetingTime: "18:30–20:00",
    meetingPlace: "Scoutlokalen Ruffen (Hässelby Strand)",
    leader: "Abcxxx",
    description:
      'Vid 12 års ålder öppnas dörrarna till Äventyrarscouterna. I tre spännande år får man lära sig nyttiga saker inom sjömansskap och natur. (Tidigare hette äventyrarscout "patrullscout")\n\nHär börjar seglingen på allvar och det bär ut i skärgården om sommaren. När vi inte seglar tränar vi navigation och gör även traditionella landscoutaktiviteter.\n\nPå vintern när det är som kallast har vi en rejäl vinterhajk då vi bor i tält. En annan höjdare är det traditionella isvaksbadet som ingen patrullscout slipper ifrån…\n\nKonvojen har möten på torsdagar.',
  },
  {
    id: "utmanare",
    title: "Utmanare",
    subtitle: "Utmanare 15+",
    color: "bg-card-four",
    bulletColor: "#FF66A3",
    icon: UtmanareIcon,
    iconWidth: 100,
    iconHeight: 88,
    badgeIcon: PinkMedalIcon,
    timeIcon: PinkTimeIcon,
    locationIcon: PinkLocationIcon,
    leaderIcon: PinkLeaderIcon,
    backIcon: PinkBackIcon,
    activities: [
      "Bilda ett lag",
      "Anta utmaningar",
      "Lära sig nya saker",
      "Segla i skärgården",
      "Öka sammanhållninge",
    ],
    badges: [
      "Motorbåtsskeppare",
      "Följebåtsskeppare",
      "Lätt kölbåtsskeppare",
      "Tung kölbåtsskeppare",
    ],
    meetingDays: "Tisdagar/onsdagar",
    meetingTime: "18:30–20:00",
    meetingPlace: "Scoutlokalen Ruffen (Hässelby Strand)",
    leader: "Abcxxx",
    description:
      'HSS utmanarscoutlag upphör aldrig att existera! Efter tiden som utmanarscout är man ett tätt sammansvetsat gäng. Det är inte ovanligt att man håller kontakten livet ut. (Tidigare hette denna avdelning "seniorscout")\n\nNär man kommer upp från äventyrarscouterna bildar man ett lag tillsammans med kullkamraterna. Sedan arbetar man mot att lära sig nya saker och anta svårare utmaningar för att öka sammanhållningen. Under de första åren har man ledare med sig och allt eftersom man utvecklas blir man själv ledare på de andra avdelningarna.\n\nUtmanarscouterna seglar själva i skärgården när de uppnått tillräcklig kunskapsnivå.\n\nVarje utmanarscoutlag hittar på sitt eget namn (av tradition slutar de på -arne och laget kallas "fjantarne" till dess att de kommit på ett eget namn.\n\nMötena sker på tisdagar eller onsdagar.',
  },
  {
    id: "familjescout",
    title: "Familjescout",
    subtitle: "Familj",
    color: "bg-card-familj",
    bulletColor: "#652482",
    icon: FamiljescoutIcon,
    iconWidth: 100,
    iconHeight: 88,
    badgeIcon: PurpleMedalIcon,
    timeIcon: PurpleTimeIcon,
    locationIcon: PurpleLocationIcon,
    leaderIcon: PurpleLeaderIcon,
    backIcon: PurpleBackIcon,
    activities: [
      "Tälja med kniv",
      "Övernattningar",
      "Lägga bandage",
      "Segla optimistjollar",
      "Samarbeta i patruller",
    ],
    badges: [
      "Lyktmärket",
      "Underhållning",
      "Knopmärket",
      "Sjukvårdsmärket",
      "Optimist",
    ],
    meetingDays: "Måndagar",
    meetingTime: "18:30–20:00",
    meetingPlace: "Scoutlokalen Ruffen (Hässelby Strand)",
    leader: "Abcxxx",
    description:
      'Vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2. Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna. (Tidigare hette spårarscout "familjescout")\n\nVi har möten varje vecka samt övernattningar, både hajker och längre läger.\n\nHär får barnen lära sig knopar, grundläggande naturkunskap och sjömanskap på ett lekfullt sätt.\n\nDu lär dig något nytt nästan varje dag i Scouterna, det är alltid roliga saker men ibland är de också väldigt bra att kunna. Som att tälja med kniv eller lägga bandage på någon som gjort sig illa. Till skillnad från hur man gör i skolan läser vi inga böcker om knivar och bandage, vi lär oss genom att göra, genom att prova på allt på riktigt istället. Medans vi gör det samarbetar vi i patruller, små grupper där alla är med och bestämmer. Det är smart, för tillsammans kan man alltid hjälpas åt att hitta på ännu roligare saker.\n\nVi seglar optimistjollar och 2-kronor.\n\nSjöhumlorna har möten på måndagar i vår fina lokal Ruffen vid Hässelby Strandbad.\n\nNär man är scout gör man alltid sitt bästa och det gör inget om det råkar bli fel, därför brukar vi tänka lite på hur allting gått till så att vi blir bättre till nästa gång.',
  },
];
