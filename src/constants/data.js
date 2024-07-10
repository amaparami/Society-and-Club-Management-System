import images from "./images";
import {FaEdit, FaRocket, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt, FaRobot, FaFemale, FaFile} from "react-icons/fa";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
      id: 1,
      icon: <FaFile style={{ fill: gradient }} />,
      title: "IEEE",
      text: "As a student branch of the mother body, IEEE, we are volunteering and being a part of Advancing Tech.",
      link: "/Pages/IEEE"
    },
    {
      id: 2,
      icon: <FaFemale style={{ fill: gradient }} />,
      title: "IEEE WIE",
      text: "IEEE WIE Student Branch Affinity Group KDU, strives for the promotion and betterment of Women Engineers.",
      link: "https://www.example.com/ieee-wie"
    },
    {
      id: 3,
      icon: <FaRocket style={{ fill: gradient }} />,
      title: "TOASTMASTERS",
      text: "It is a platform where individuals bloom and grow as they step out of their comfort zones to experience the marvel of connection and communication through public speaking.",
      link: "https://www.example.com/ieee-cs"
    },
    {
      id: 4,
      icon: <FaEdit style={{ fill: gradient }} />,
      title: "BCS",
      text: "We are the very first BCS Student Chapter of Sri Lanka, aiming to make IT good for society.",
      link: "https://www.example.com/bcs"
    },
    {
      id: 5,
      icon: <ImMagicWand style={{ fill: gradient }} />,
      title: "ROTARACT",
      text: "The KDU Rotaract Club provides various services for members, the university, and society at large.",
      link: "https://www.example.com/rotaract"
    },
    {
      id: 6,
      icon: <FaRobot style={{ fill: gradient }} />,
      title: "ERIC",
      text: "ERIC-KDU is a student organization that contributes to the development of KDU through robotics and innovation.",
      link: "https://www.example.com/eric"
    }
  ];
  
  const ServiceList = () => {
    return (
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <div>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text} <a href={service.link} target="_blank" rel="noopener noreferrer">Learn More</a></p>
          </div>
        ))}
      </div>
    );
  };
  

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "An application focused on societies and clubs aims to connect students with diverse interests, offering a platform to explore and engage beyond the classroom."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "Personalized onboarding guides new users, push notifications highlight events, and periodic prompts ensure engagement. Encouraging discussions, sharing, and participation fosters community. "
    }
];

const features = [
    {
        id: 10,
        title: "IEEE",
        text: "As a student branch of the mother body, IEEE, we are volunteering and being a part of Advancing Tech"
    },
    {
        id: 11,
        title: "IEEE WIE",
        text: "IEEE WIE Student Branch Affinity Group KDU, strives for the promotion and betterment of Women Engine"
    },
    {
        id: 12,
        title: "IEEE CS",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 13,
        title: "BCS",
        text: "We are the very first BCS Student Chapter of Sri Lanka commence on 2021, with the aim of making IT good for society."
    }, 
    {
        id: 14,
        title: "ROTARACT",
        text: "The KDU Rotaract Club aims to provide various services for its members, the university and the society at large."
    },
    {
        id: 15,
        title: "ERIC",
        text: "ERIC-KDU is a well reputed student organization that does its duty for the development of KDU, with invention and research on the robotics and innovation field."
    }
];

const portfolio = [
    {
        id: 16,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Marie Jordan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Ann Brown",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Bill",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stawer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Green",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+425 235 712",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "solnhub@info.com",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "United Kingdom, New Street",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
]

const sections = {services,ServiceList, about, qualities, features, portfolio, testimonials, contact};

export default sections;