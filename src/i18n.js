import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        event: "Event",
        blog: "Blog",
        media: "Media",
        contact: "Contact",

        //hero banner translation
        heroTitle1: "Rooted in the Word of His Grace",
        heroSubtitle1: "Nourished by the Word of His Grace — Acts 20:32",
        joinButton1: "View blog page for sermon",
       

        heroTitle2: "Welcome to Our Community",
        heroSubtitle2: "Experience worship, fellowship, and growth together.",
        joinButton2: "Join our WhatsApp community",
       

        heroTitle3: "Join our next event",
        heroSubtitle3: "Fellowship and partnership with us in our next event and experience the mighty move of God.",
        joinButton3: "View our upcoming event",
        

        Dhomologeo:'Daily homologeo',

        welcomeHome: "Welcome Home",
      welcomeTitle: "Welcome to ",
      welcomeTitle1: "The God Life Network",
      welcomeDesc: "GodLife Network International is a Christian community where believers who have received the life of Christ come together in love to fellowship with one another and with the Spirit of God; offer quality praise and worship to God and receive biblical teachings based on the gospel of God's grace. We also reach out to lost souls to help them receive and enjoy the love of Christ and become part of God's family.",
      welcomeDesc1:"You're welcome.",
      loveTitle: "HONOUR",
      loveDesc: "The mark of worship is honour. As true worshippers, we must constantly honour and reverence God in our worship and services to Him.",
      lifeTitle: "EXCELLENCE",
      lifeDesc: "We must constantly deliver excellence in our service to God at all times because He deserves the best. Mediocrity will never be tolerated in our midst.",
      impactTitle: "SPIRITUALITY",
      impactDesc: "We must always subject whatever we do to the leading of the Spirit. We do not put our trust in the flesh. As true worshippers, we must always involve the Holy Spirit in all we do.",
      

      prevEventsTitle: "Our previous Events",
      prevEventsDesc: "View our past Events, outings and gatherings.",
      event1Title: "Jesus praise party October 2026",
      event1Desc: "Here are more beautiful picture highlights from our time of intense praise, worship, and thanksgiving. God was truly in our midst!",
      event2Title: "AOF February 2026 Edition",
      event2Desc: "View the previous Alter Of Worship February Edition. Here are more beautiful picture highlights from our Valentine service highlights.",
      event3Title: "Jesus praise party October 2025",
      event3Desc: "Here are more beautiful picture highlights from our time of intense praise, worship, and thanksgiving. God was truly in our midst!",
      viewMoreBtn: "View more",

      aboutTitle: "About us",
      aboutDesc: "All you need to know about Godlife Network. View the About page to know about us.",
      aboutBtn: "View About Page",


      upcomingEventsTitle: "Our upcoming Events",
      upcomingEventsDesc: "View our upcoming Events, outings and gatherings. Join us for these upcoming gatherings and activities.",
      monthlyServiceTitle: "Monthly Service",
      monthlyServiceDate: "Oct 29, 2026",
      monthlyServiceTime: "7:30 AM",
      monthlyServiceLocation: "Simidjola Studio Yenewa",
      getDirectionsBtn: "Get directions",
      monthlyServiceDesc: "Experience Jesus — every service, an encounter. We are nourished by the revelation of who He truly is.",
      noDetailsBtn: "No Details Available",
      viewEventPageBtn: "View Event Page",


      homologeoTagline: "Daily Growth",
      homologeoTitle: "Our Daily Declarations",
      homologeoDesc: "Start your day with our daily declarations on our About page.",
      homologeoBtn: "View About Page",
      followFacebookBtn: "Follow on Facebook",

      contactTagline: "Contact",
      contactTitle: "Need a prayer?",
      contactDesc: "We would like to pray with you in your prayers. \"For where two or three gather in my name, there am I with them.\" - Matthew 18:20.",
      contactBtn: "View Contact Page",
      

      //translations for about page
      aboutHeroTitle: "About God Life Network",
      aboutHeroSubtitle: "Get to know us more.",
      aboutHeroButton: "🏠 Our Story",
      
      
      aboutIntro1: "GodLife Network International is a Christian community where believers who have received the life of Christ come together in love to fellowship with one another and with the Spirit of God; offer quality worship to God and receive biblical teachings based on the gospel.",
      aboutIntro2: "Through our online platform, we provide a welcoming space for individuals from all walks of life to explore their faith, deepen their understanding of Scripture, and experience the transformative grace of God.",
      readMoreButton: "Read More →",
      modalTitle: "About us",
      modalLeft1: "GodLife Network International is a Christian community where believers who have received the life of Christ come together in love to fellowship with one another and with the Spirit of God; offer quality worship to God and receive biblical teachings based on the gospel. We also reach out to lost souls to help them receive and enjoy the love of Christ and join our fold.",
      modalLeft2: "At GodLife Network, our vision is to raise believers to become true worshippers who express God's life and spread the love and message of the gospel of God's grace to every corner of the globe.",
      modalLeft3: "Our mission is to connect people with the life-changing power of God's love through the gospel of grace and faith in Jesus Christ, and bond with a passionate community of spirit-filled believers.",
      modalRight1: "Through our online platform, we provide a welcoming space for individuals from all walks of life to explore their faith, deepen their understanding of Scripture, and experience the transformative grace of God. Whether you're seeking answers to life's toughest questions, craving spiritual guidance, or simply yearning for fellowship, GodLife Network is here for you.",
      modalRight2: "We offer a wealth of resources, including daily confessions, inspirational articles, and interactive prayer support, to accompany you on your spiritual journey. Our goal is not only to equip and empower you in your walk with Christ but also to foster genuine connections and community among believers worldwide.",

      missionVisionTitle: "Mission & Vision",
      missionTitle: "Our Mission",
      missionText: "To connect people with the life-changing power of God’s love through the gospel of grace and faith in Christ Jesus, and bond with a passionate community of spirit-filled believers.",
      visionTitle: "Our Vision",
      visionText: "To raise believers to become true worshippers who express God’s life and spread the love and message of the gospel of God’s grace to every corner of the globe.",

      coreValuesTitle: "Our Core Values",
      loveText: "We have received the love of God in Christ Jesus, hence, we express the same love everywhere we go. (1 John 4:7–8; 16 & 19).",
      honourTitle: "HONOUR",
      honourText: "The mark of worship is honour. As true worshippers, we must constantly honour and reverence God in our worship and services to Him. We must also express honour to our leaders and other people. (Matthew 22:37, Proverbs 3:9).",
      excellenceTitle: "EXCELLENCE",
      excellenceText: "We must constantly deliver excellence in our service to God at all times because He deserves the best. Mediocrity will never be tolerated in our midst. (Psalm 8:1).",
      spiritualityTitle: "SPIRITUALITY",
      spiritualityText: "We must always subject whatever we do to the leading of the Spirit. We do not put our trust in the flesh. As true worshippers, we must always involve the Holy Spirit in all we do. (Romans 8:14, John 15:5).",

      homologeoTitle1: "Our Daily Declarations",
      homologeoDeclarations: [
        "I am a new creation.",
        "I am born of God.",
        "I look like God because I have His DNA in me.",
        "God is my Father and I am His son.",
        "The life of God runs in my vein.",
        "The Holyghost lives inside of me.",
        "Therefore, I am more than a conqueror.",
        "I am seated in heavenly places in Christ far above principalities and powers.",
        "I live the higher life.",
        "I am the righteousness of God in Christ Jesus.",
        "All things are working together for my good.",
        "Angels are constantly assisting and working for me.",
        "I can never be confused.",
        "I am above and not beneath.",
        "I have more than enough for myself and to do the work of the ministry.",
        "I am heavily guarded and protected from all evil.",
        "My path shines brighter and brighter.",
        "I live above sin, disappointment, failure, sickness, and every negative circumstance of life.",
        "My life is hid in Christ; therefore, I will fulfill the number of my days on earth.",
        "I am a useful vessel to the kingdom of God.",
        "I am the light of the world.",
        "I am anointed for impact.",
        "I do not live an ordinary life.",
        "I prosper in all that I do.",
        "I am blessed beyond measure.",
        "Glory to God!"],

      learnMoreTitle: "Want to Learn More?",
      learnMoreSubtitle: "We'd love to connect with you and answer any questions you might have about our church community.",
      contactUsButton: "Contact Us",

      leaderTitle: "Our Leader",
      leaderSubtitle: "Meet the dedicated leader who guide our church community",
      leaderName: "Apostle Ifeanyi Ewim",
      leaderRole: "Lead Pastor and Apostolic Head of The God Life Network",
      
      upcomingEventsTitle1: "Upcoming Events",
      addCalendarButton: "Do well to Add to your Calendar",

      timelineMonth: "October 2026",
      event1Month: "Oct",
      event1Day: "29",
      event1Title1: "Monthly service",
      event1DateTime: "Thursday, 7:30 PM",
      event1Location: "Simidjola Studio Yenewa",
      event1Description: "Our Monthly service is our gathering featuring prayers, praise, worship, word, Questions & Answers",
      event1DetailsUnavailable: "Details Unavailable",

      event2Month: "Nov",
      event2Day: "26",
      event2Title1: "Our Monthly Gathering.",
      event2DateTime: "Thursday, 7:30 PM",
      event2Location: "Simidjola Studio Yenewa",
      event2Description: "Our Monthly service is our gathering featuring prayers, praise, worship, word, Questions & Answers",
      event2AddCalendar: "Do well to Add to Calendar",
      event2ViewDetails: "View Details",

      regularServicesTitle: "Regular Services",
      regularServicesSubtitle: "Join us monthly for our regular services. Experience powerful worship, word, and fellowship.",
      monthlyServicesTitle: "Monthly Services",
      monthlyServicesSchedule: "Every last Thursday",
      monthlyServicesTime: "Service Time: 7:30 PM",
      },
      
    },
    
    fr: {
      translation: {
        home: "Accueil",
        about: "À propos",
        event: "Événement",
        blog: "Blog",
        media: "Media",
        contact: "Contact",

        //hero banner translation
        heroTitle1: "Enraciné dans la Parole de Sa Grâce",
        heroSubtitle1: "Nourri par la Parole de Sa Grâce — Actes 20:32",
        joinButton1: " Voir la page du blog pour le sermon",
      

        heroTitle2: "Bienvenue dans Notre Communauté",
        heroSubtitle2:
          "Vivez l’adoration, la communion et la croissance ensemble.",
        joinButton2: "Rejoignez notre communauté WhatsApp",
       

        heroTitle3: "Rejoignez notre prochain événement",
        heroSubtitle3:
          "Communiez et partenariat avec nous lors de notre prochain événement et vivez la puissante manifestation de Dieu.",
        joinButton3: " Voir notre prochain événement",
        
        Dhomologeo:'Homologéo Quotidien',

        welcomeHome: "Bienvenue à la maison",
      welcomeTitle: "Bienvenue sur ",
      welcomeDesc: "GodLife Network International est une communauté chrétienne où les croyants qui ont reçu la vie de Christ se réunissent dans l'amour pour communier les uns avec les autres et avec l'Esprit de Dieu ; offrir une louange et une adoration de qualité à Dieu et recevoir des enseignements bibliques basés sur l'Évangile de la grâce de Dieu. Nous allons également à la rencontre des âmes perdues pour les aider à recevoir et à jouir de l'amour de Christ et à devenir membres de la famille de Dieu.",
      welcomeDesc1:" Vous êtes les bienvenus.",
      loveTitle: "Amour",
      loveDesc: "Ce que nous prêchons — le message de grâce, de vérité et de Jésus.",
      lifeTitle: "Vie",
      lifeDesc: "Ce que nous donnons — une famille où vous grandissez, appartenez et vous épanouissez.",
      impactTitle: "Impact",
      impactDesc: "Ce que nous faisons — transformer des vies et des communautés par l'Esprit.",


      prevEventsTitle: "Nos événements précédents",
      prevEventsDesc: "Découvrez nos anciens événements, sorties et rassemblements.",
      event1Title: "Fête de louange de Jésus octobre 2026",
      event1Desc: "Voici d'autres magnifiques moments de louange intense, d'adoration et de remerciement. Dieu était vraiment au milieu de nous !",
      event2Title: "AOF Édition février 2026",
      event2Desc: "Découvrez l'édition précédente de l'Autel d'adoration de février. Voici d'autres magnifiques moments de notre service de la Saint-Valentin.",
      event3Title: "Fête de louange de Jésus octobre 2025",
      event3Desc: "Voici d'autres magnifiques moments de louange intense, d'adoration et de remerciement. Dieu était vraiment au milieu de nous !",
      viewMoreBtn: "Voir plus",

      
      aboutTitle: "À propos de nous",
      aboutDesc: "Tout ce que vous devez savoir sur Godlife Network. Consultez la page À propos pour en savoir plus.",
      aboutBtn: "Voir la page À propos",


      upcomingEventsTitle: "Nos événements à venir",
      upcomingEventsDesc: "Découvrez nos prochains événements, sorties et rassemblements. Rejoignez-nous pour ces prochaines activités.",
      monthlyServiceTitle: "Service mensuel",
      monthlyServiceDate: "29 octobre 2026",
      monthlyServiceTime: "18h30",
      monthlyServiceLocation: "Studio Simidjola Yenewa",
      getDirectionsBtn: "Obtenir l'itinéraire",
      monthlyServiceDesc: "Vivez Jésus — chaque service est une rencontre. Nous sommes nourris par la révélation de qui Il est vraiment.",
      noDetailsBtn: "Aucun détail disponible",
      viewEventPageBtn: "Voir la page Événement",


      homologeoTagline: "Croissance quotidienne",
      homologeoTitle: "Nos Déclarations Quotidiennes",
      homologeoDesc: "Commencez votre journée avec nos déclarations quotidiennes sur notre page À propos.",
      homologeoBtn: "Voir la page À propos",
      followFacebookBtn: "Suivre sur Facebook",

      contactTagline: "Contact",
      contactTitle: "Besoin d'une prière ?",
      contactDesc: "Nous aimerions prier avec vous dans vos prières. « Car là où deux ou trois sont réunis en mon nom, je suis au milieu d'eux. » - Matthieu 18:20.",
      contactBtn: "Voir la page Contact",

      //translations for about page
      aboutHeroTitle: "À propos de God Life Network",
      aboutHeroSubtitle: "Apprenez à mieux nous connaître.",
      aboutHeroButton: "🏠 Notre Histoire",
      
      aboutIntro1: "GodLife Network International est une communauté chrétienne où les croyants qui ont reçu la vie du Christ se réunissent dans l'amour pour communier les uns avec les autres et avec l'Esprit de Dieu ; offrir un culte de qualité à Dieu et recevoir des enseignements bibliques basés sur l'Évangile.",
      aboutIntro2: "Grâce à notre plateforme en ligne, nous offrons un espace accueillant aux personnes de tous horizons pour explorer leur foi, approfondir leur compréhension des Écritures et expérimenter la grâce transformatrice de Dieu.",
      readMoreButton: "Lire plus →",
      modalTitle: "À propos de nous",
      modalLeft1: "GodLife Network International est une communauté chrétienne où les croyants qui ont reçu la vie du Christ se réunissent dans l'amour pour communier les uns avec les autres et avec l'Esprit de Dieu ; offrir un culte de qualité à Dieu et recevoir des enseignements bibliques basés sur l'Évangile. Nous atteignons également les âmes perdues pour les aider à recevoir et à jouir de l'amour du Christ et à rejoindre notre communauté.",
      modalLeft2: "Chez GodLife Network, notre vision est d'élever les croyants pour qu'ils deviennent de véritables adorateurs qui expriment la vie de Dieu et répandent l'amour et le message de l'Évangile de la grâce de Dieu dans chaque coin du globe.",
      modalLeft3: "Notre mission est de connecter les gens avec la puissance transformatrice de l'amour de Dieu à travers l'Évangile de la grâce et la foi en Jésus-Christ, et de s'unir à une communauté passionnée de croyants remplis de l'Esprit.",
      modalRight1: "Grâce à notre plateforme en ligne, nous offrons un espace accueillant aux personnes de tous horizons pour explorer leur foi, approfondir leur compréhension des Écritures et expérimenter la grâce transformatrice de Dieu. Que vous cherchiez des réponses aux questions les plus difficiles de la vie, que vous ayez besoin de conseils spirituels ou que vous désiriez simplement la communion fraternelle, GodLife Network est là pour vous.",
      modalRight2: "Nous offrons une richesse de ressources, y compris des confessions quotidiennes, des articles inspirants et un soutien interactif par la prière, pour vous accompagner dans votre parcours spirituel. Notre objectif n'est pas seulement de vous équiper et de vous fortifier dans votre marche avec Christ, mais aussi de favoriser des connexions authentiques et une communauté parmi les croyants du monde entier.",

      missionVisionTitle: "Mission & Vision",
      missionTitle: "Notre Mission",
      missionText: "Connecter les gens avec la puissance transformatrice de l'amour de Dieu à travers l'Évangile de la grâce et la foi en Jésus-Christ, et s'unir à une communauté passionnée de croyants remplis de l'Esprit.",
      visionTitle: "Notre Vision",
      visionText: "Élever des croyants pour devenir de véritables adorateurs qui expriment la vie de Dieu et répandent l'amour et le message de l'Évangile de la grâce de Dieu dans chaque coin du globe.",

      coreValuesTitle: "Nos Valeurs Fondamentales",
      loveText: "Nous avons reçu l'amour de Dieu en Jésus-Christ, et nous exprimons donc ce même amour partout où nous allons. (1 Jean 4:7–8; 16 & 19).",
      honourTitle: "HONNEUR",
      honourText: "La marque de l'adoration est l'honneur. En tant que vrais adorateurs, nous devons constamment honorer et révérer Dieu dans notre culte et nos services envers Lui. Nous devons aussi exprimer l'honneur envers nos dirigeants et les autres. (Matthieu 22:37, Proverbes 3:9).",
      excellenceTitle: "EXCELLENCE",
      excellenceText: "Nous devons constamment offrir l'excellence dans notre service à Dieu en tout temps car Il mérite le meilleur. La médiocrité ne sera jamais tolérée parmi nous. (Psaume 8:1).",
      spiritualityTitle: "SPIRITUALITÉ",
      spiritualityText: "Nous devons toujours soumettre tout ce que nous faisons à la direction de l'Esprit. Nous ne mettons pas notre confiance dans la chair. En tant que vrais adorateurs, nous devons toujours impliquer le Saint-Esprit dans tout ce que nous faisons. (Romains 8:14, Jean 15:5).",

      homologeoTitle1: "Nos Déclarations Quotidiennes",
      homologeoDeclarations: [
        "Je suis une nouvelle création.",
        "Je suis né de Dieu.",
        "Je ressemble à Dieu car j’ai Son ADN en moi.",
        "Dieu est mon Père et je suis Son fils.",
        "La vie de Dieu coule dans mes veines.",
        "Le Saint-Esprit vit en moi.",
        "Par conséquent, je suis plus que vainqueur.",
        "Je suis assis dans les lieux célestes en Christ, bien au-dessus des principautés et des puissances.",
        "Je vis la vie supérieure.",
        "Je suis la justice de Dieu en Jésus-Christ.",
        "Toutes choses concourent à mon bien.",
        "Les anges m’assistent et travaillent constamment pour moi.",
        "Je ne peux jamais être confus.",
        "Je suis au-dessus et non en dessous.",
        "J’ai plus qu’assez pour moi-même et pour faire l’œuvre du ministère.",
        "Je suis fortement gardé et protégé de tout mal.",
        "Mon chemin brille de plus en plus.",
        "Je vis au-dessus du péché, de la déception, de l’échec, de la maladie et de toute circonstance négative de la vie.",
        "Ma vie est cachée en Christ ; par conséquent, je remplirai le nombre de mes jours sur terre.",
        "Je suis un vase utile pour le royaume de Dieu.",
        "Je suis la lumière du monde.",
        "Je suis oint pour l’impact.",
        "Je ne vis pas une vie ordinaire.",
        "Je prospère dans tout ce que je fais.",
        "Je suis béni au-delà de toute mesure.",
        "Gloire à Dieu!"
      ],
      
      learnMoreTitle: "Vous voulez en savoir plus ?",
      learnMoreSubtitle: "Nous aimerions vous rencontrer et répondre à toutes vos questions concernant notre communauté d'église.",
      contactUsButton: "Contactez-nous",

      leaderTitle: "Notre Leader",
      leaderSubtitle: "Rencontrez le leader dévoué qui guide notre communauté d'église",
      leaderName: "Apôtre Ifeanyi Ewim",
      leaderRole: "Pasteur principal et chef apostolique du God Life Network",
      
      upcomingEventsTitle1: "Événements à venir",
      addCalendarButton: "Veuillez ajouter à votre calendrier",

      timelineMonth: "Octobre 2026",
      event1Month: "Oct",
      event1Day: "29",
      event1Title1: "Service mensuel",
      event1DateTime: "Jeudi, 19h30",
      event1Location: "Studio Simidjola Yenewa",
      event1Description: "Notre service mensuel est notre rassemblement avec prières, louange, adoration, parole, Questions & Réponses",
      event1DetailsUnavailable: "Détails non disponibles",

      event2Month: "Nov",
      event2Day: "26",
      event2Title1: "Notre rassemblement mensuel.",
      event2DateTime: "Jeudi, 19h30",
      event2Location: "Studio Simidjola Yenewa",
      event2Description: "Notre service mensuel est notre rassemblement avec prières, louange, adoration, parole, Questions & Réponses",
      event2AddCalendar: "Veuillez ajouter à votre calendrier",
      event2ViewDetails: "Voir les détails",

      regularServicesTitle: "Services réguliers",
      regularServicesSubtitle: "Rejoignez-nous chaque mois pour nos services réguliers. Vivez une adoration puissante, la parole et la communion fraternelle.",
      monthlyServicesTitle: "Services mensuels",
      monthlyServicesSchedule: "Chaque dernier jeudi",
      monthlyServicesTime: "Heure du service : 19h30",
      },
    },
  },

  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
