export const apiTitle="A helping hand...";
export const apiCategories = ["transport", "geocoding", "weather"];

export const welcomeTitle = "Welcome to TravelHack!";
export const welcomeText = "It's great to have you on-board! This website is a one-stop-shop for any information you might need during the hackathon. You can find essential event information, check out our list of public APIs or get to know the volunteers.";

export const icebreakers = [
    {
        title: "Two Truths and a Lie",
        body: "Sit in a circle if possible or ask the speaker to move to where they can be seen if not. Each attendee takes a turn to introduce themselves by name, then states three ‘facts’ about themselves – one of which is untrue. Take a poll to see if the group can spot the lie. Then leave enough time for a brief chat between attendees (you can start this off, if that’s needed) to explore the truths."
    },
    {
        title: "Five of Anything",
        body: "Give each group a prompt to start the conversation, asking for their personal top five on a simple topic of your choice: five cities they’d like to visit, their top five TV shows, five favourite meals."
    },
    {
        title: "Three Life Highlights",
        body: "Some people are great at talking about themselves with positivity; others less so. This icebreaker encourages everyone to feel positive about themselves, by taking a moment to think of three great moments from their life: a successful project, a promotion, a moment of recognition. After they’ve shared in their small groups, encourage them to think about how it makes them feel, and to note any commonalities."
    },
    {
        title: "The Instagram Icebreaker",
        body: "To conduct this idea from William Joseph, just give employees a few minutes to scroll through their Instagram photos and pick a snapshot they want to share with the group. They can share the photo and explain why they picked it. This will help some personality shine through, especially if people on your team need to get to know each other."
    }
];

export const taskTitle = "The task in hand";
export const taskQuestions = ["Who is the user/are the users?",
                         "Where is the user/are the users?",
                         "What difficulty are they facing?",
                         "How are you going to solve it?"];

export const travelhackEventList = [
    {
        name: "hackers arrive",
        time: "November 15, 2019 10:00:00"
    },
    {
        name: "welcome presentations",
        time: "November 15, 2019 11:00:00"
    },
    {
        name: "lunch",
        time: "November 15, 2019 12:30:00"
    },
    {
        name: "hacking begins",
        time: "November 15, 2019 14:00:00"
    },
    {
        name: "office tours",
        time: "November 15, 2019 17:00:00"
    },
    {
        name: "dinner",
        time: "November 15, 2019 18:00:00"
    },
    {
        name: "midnight snacks",
        time: "November 16, 2019 00:00:00"
    },
    {
        name: "breakfast",
        time: "November 16, 2019 9:00:00"
    },
    {
        name: "hacking stops",
        time: "November 16, 2019 11:00:00"
    },
    {
        name: "lunch",
        time: "November 16, 2019 12:00:00"
    },
    {
        name: "presentations & prizes",
        time: "November 16, 2019 14:00:00"
    },
    {
        name: "hackers leave",
        time: "November 16, 2019 15:30:00"
    }
];

const buildTravelAidImages = () => {
  let images = [];

  for (let i=0; i<84; i++) {
      images.push(`https://travelaid-prev-year-photos.s3-us-west-1.amazonaws.com/TravelAid${i}.jpg`);
  }

  return images;
};
export const lastTravelAidImages = buildTravelAidImages();

export const volunteersTitle="Meet the team...";
export const recruiterList = [
    {
        name: "Apple Capezzera",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/applecapezzera',
        bio: "Hi, I'm Apple. I look after Early Talent at Expedia and I focus on tech recruitment. You can ask me " +
            "anything about application process, assessment centres, how to nail your CVs & how to succeed with your " +
            "application for a role here. Also, I love tech, techno & cats, so you can ask me about that, too! ",
        languages: [],
        otherSkills: []
    },
    {
        name: "Matt Wilkins",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/mattwilkins',
        bio: "Hello there, I’m Matt. I will be integral to your hackathon as I am the gatekeeper of the food and " +
            "coffee. I’m happy to help with all tech related queries as long as you don’t require tech related " +
            "answers to these. By day, during a hackathon, I am a diligent associate recruiter who will help you " +
            "with understanding the structure of the day, running the event and general housekeeping. By night I " +
            "will mostly be in charge of FIFA tournaments and watching movies.",
        languages: [],
        otherSkills: []
    },
    {
        name: "Abdi Ismail",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/abdiismail',
        bio: "Hi! I'm Abdi a recruitment coordinator here at Expedia I will be helping out throughout the day and " +
            "making sure everything runs smoothly. Socially, I enjoy the cinema and playing badminton with friends, " +
            "and the occasional Fifa sesh. Any questions on the day I'm your man!",
        languages: [],
        otherSkills: []
    }
];
export const volunteerList = [
    {
        name: "Will Taylor",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/willtaylor',
        bio: "I'm a software engineer intern in the lodging-shopping team within Brand Expedia (BEX), and study comp sci at the University of Bath.",
        languages: ["Java", "Kotlin", "React/JavaScript", "Swift (iOS)"],
        otherSkills: ["Git", "AWS", "IntelliJ", "Table Tennis"]
    },
    {
        name: "Christine Mathiesen",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/christinemathiesen',
        bio: "I’m a Backend Engineer intern for Hotels.com! I work for the Big Data Platform team so if you have any questions regarding big data then give me a shout!",
        languages: ["Java", "Python", "Debugging (or finding bugs)", "chatting to get your mind off a problem if you need a break"],
        otherSkills: []
    },
    {
        name: "Alfie Newman",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/alfienewman',
        bio: "I'm a full stack software engineer intern at Brand Expedia (BEX). My team is SEM-Ads, I work on the development of tools for search engine marketing.",
        languages: ["Java", "Kotlin", "React", "JavaScript"],
        otherSkills: ["Git","IntelliJ","Amazon RDS","APIs"]
    },
    {
        name: "Chris London",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/chrislondon',
        bio: "I study Computer Science at The University of Leeds and I am currently a software development intern within the growth team in Vrbo. I mainly work with Scala to process large amounts of data using Apache Spark to interact with different companies such as Facebook, Google and more.",
        languages: ['Scala', 'Python', 'Java'],
        otherSkills: ['AWS', 'Git', 'Debugging in general', 'general UNIX questions']
    },
    {
        name: "Jay Green Stevens",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/jaygreenstevens',
        bio: "I recently graduated from King’s College London and joined the Big Data Platform team as a backend engineer. I’m still pretty fresh but am happy to help out where needed - particularly with motivational support and building tours, but I can also provide tech (mainly Java) help if you need it 👌🏼",
        languages: [],
        otherSkills: []
    },
    {
        name: "Nick Chapman",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/nickchapman',
        bio: "I’m a backend software engineering intern within the Checkout team of Brand Expedia. I study Comp Sci with Maths and I’m currently on my placement year from the University of Bath. My strengths are Java and Python but let me know if you need help with anything, technical or non technical.",
        languages: [],
        otherSkills: []
    },
    {
        name: "Andra Andrus",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/andraandrus',
        bio: "I'm a graduate software engineer in Hotels.com's Search Engine Marketing Team, and have joined Expedia this September after finishing a Computer Science degree at University of Birmingham.",
        languages: ["Python", "Scala", "Java", "VueJS", "Git"],
        otherSkills: []
    },
    {
        name: "Caroline Moir",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/carolinemoir',
        bio: "Hey I'm Caroline, I did my placement year at Expedia and have been back as a full time employee for over a year. I've worked with back end, front end and big data technologies.",
        languages: ["Java", "Kotlin", "Scala", "Spark"],
        otherSkills: []
    },
    {
        name: "Zena Sharif",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/zenasharif',
        bio: "I'm a product analyst intern with Hotels.com. I use Spark and python to work with Big Data but the code I write tends to break a lot so, unless you're really desperate, I'll stick to helping you find the loos and guiding you to the free food.",
        languages: [],
        otherSkills: []
    },
    {
        name: "Sean Jackson",
        imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/seanjackson',
        bio: "I did my placement year at Expedia last year and am now in my final year at the University of Bath. I've worked with Java, a bit of PHP and have dabbled with python.",
        languages: [],
        otherSkills: []
    }
];
export const judgeList = [
    {
        name: "Nasreen AbdulJaleel",
        imageUrl: 'https://travelaid-judge-photos.s3-us-west-1.amazonaws.com/nasreen',
        bio: "Sr Director, Technology",
        languages: [],
        otherSkills: []
    },
    {
        name: "Anselmo Rodgrigues de Silva",
        imageUrl: 'https://travelaid-judge-photos.s3-us-west-1.amazonaws.com/anselmo',
        bio: "Director, Software Development",
        languages: [],
        otherSkills: []
    },
    {
        name: "Woody Wood",
        imageUrl: 'https://travelaid-judge-photos.s3-us-west-1.amazonaws.com/woody',
        bio: "Director of Software Egnineering",
        languages: [],
        otherSkills: []
    },
    {
        name: "Denise Neves Santos",
        imageUrl: 'https://travelaid-judge-photos.s3-us-west-1.amazonaws.com/denise',
        bio: "Director of Software Egnineering",
        languages: [],
        otherSkills: []
    },
    {
        name: "Ana Henneberke",
        imageUrl: 'https://travelaid-judge-photos.s3-us-west-1.amazonaws.com/ana',
        bio: "Director, Technology",
        languages: [],
        otherSkills: []
    }
];
