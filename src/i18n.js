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

        heroTitle2: "Welcome to Godlife Network",
        heroSubtitle2: "Experience worship, fellowship, and growth together.",
        joinButton2: "Join our WhatsApp community",

        heroTitle3: "Join our next event",
        heroSubtitle3:
          "fellowship and partnership with us in our next event and experience the mighty move of God.",
        joinButton3: "View our upcoming event",

        Dhomologeo: "Daily homologeo",
        slideRight: "Slide to view translations",
        homeabout: `GodLife Network International is a Christian community where believers who have received the life of Christ come together in love to fellowship with one another and with the Spirit of God...."`,

        welcomeHome: "Welcome Home",
        welcomeTitle: "Welcome to ",
        welcomeTitle1: "GodLife Network",
        welcomeDesc:
          "GodLife Network International is a Christian community where believers who have received the life of Christ come together in love to fellowship with one another and with the Spirit of God; offer quality praise and worship to God and receive biblical teachings based on the gospel of God's grace. We also reach out to lost souls to help them receive and enjoy the love of Christ and become part of God's family.",
        welcomeDesc1: "You're welcome.",
        loveTitle: "LOVE",
        loveDesc:
          "The mark of worship is honour. As true worshippers, we must constantly honour and reverence God in our worship and services to Him.",
        lifeTitle: "EXCELLENCE",
        lifeDesc:
          "We must constantly deliver excellence in our service to God at all times because He deserves the best. Mediocrity will never be tolerated in our midst.",
        impactTitle: "SPIRITUALITY",
        impactDesc:
          "We must always subject whatever we do to the leading of the Spirit. We do not put our trust in the flesh. As true worshippers, we must always involve the Holy Spirit in all we do.",

        prevEventsTitle: "Our previous Events",
        prevEventsDesc: "View our past Events, outings and gatherings.",
        event1Title: "Jesus praise party October 2026",
        event1Desc:
          "Here are more beautiful picture highlights from our time of intense praise, worship, and thanksgiving. God was truly in our midst!",
        event2Title: "AOF February 2026 Edition",
        event2Desc:
          "View the previous Alter Of Worship February Edition. Here are more beautiful picture highlights from our Valentine service highlights.",
        event3Title: "Jesus praise party October 2025",
        event3Desc:
          "Here are more beautiful picture highlights from our time of intense praise, worship, and thanksgiving. God was truly in our midst!",
        viewMoreBtn: "View more",

        aboutTitle: "About us",
        aboutDesc:
          "All you need to know about Godlife Network. View the About page to know about us.",
        aboutBtn: "View About Page",

        upcomingEventsTitle: "Our upcoming Events",
        upcomingEventsDesc:
          "View our upcoming Events, outings and gatherings. Join us for these upcoming gatherings and activities.",
        monthlyServiceTitle: "Monthly Service",
        monthlyServiceDate: "Oct 29, 2026",
        monthlyServiceTime: "7:30 AM",
        monthlyServiceLocation: "Simidjola Studio Yenewa",
        getDirectionsBtn: "Get directions",
        monthlyServiceDesc:
          "Experience Jesus — every service, an encounter. We are nourished by the revelation of who He truly is.",
        noDetailsBtn: "No Details Available",
        viewEventPageBtn: "View Event Page",

        homologeoTagline: "Daily Growth",
        homologeoTitle: "Our Declarations",
        homologeoDesc:
          "Start your day with our daily declarations on our About page.",
        homologeoBtn: "View in About Page",
        followFacebookBtn: "follow on Facebook",

        contactTagline: "Contact",
        contactTitle: "Need a prayer?",
        contactDesc:
          'We would like to pray with you in your prayers. for where two or three gather in my name, there am I with them." - Matthew 18:20.',
        contactBtn: "View Contact Page",

        //translations for about page
        aboutHeroTitle: "About GodLife Network",
        aboutHeroSubtitle: "Get to know us more.",
        aboutHeroButton: "🏠 Our Story",

        aboutIntro1:
          "GodLife Network International is a Christian community where believers who have received the life of Christ come together in love to fellowship with one another and with the Spirit of God; offer quality worship to God and receive biblical teachings based on the gospel.",
        aboutIntro2:
          "Through our online platform, we provide a welcoming space for individuals from all walks of life to explore their faith, deepen their understanding of Scripture, and experience the transformative grace of God.",
        readMoreButton: "Read More →",
        modalTitle: "About us",
        modalLeft1:
          "GodLife Network International is a Christian community where believers who have received the life of Christ come together in love to fellowship with one another and with the Spirit of God; offer quality worship to God and receive biblical teachings based on the gospel. We also reach out to lost souls to help them receive and enjoy the love of Christ and join our fold.",
        modalLeft2:
          "At GodLife Network, our vision is to raise believers to become true worshippers who express God's life and spread the love and message of the gospel of God's grace to every corner of the globe.",
        modalLeft3:
          "Our mission is to connect people with the life-changing power of God's love through the gospel of grace and faith in Jesus Christ, and bond with a passionate community of spirit-filled believers.",
        modalRight1:
          "Through our online platform, we provide a welcoming space for individuals from all walks of life to explore their faith, deepen their understanding of Scripture, and experience the transformative grace of God. Whether you're seeking answers to life's toughest questions, craving spiritual guidance, or simply yearning for fellowship, GodLife Network is here for you.",
        modalRight2:
          "We offer a wealth of resources, including daily confessions, inspirational articles, and interactive prayer support, to accompany you on your spiritual journey. Our goal is not only to equip and empower you in your walk with Christ but also to foster genuine connections and community among believers worldwide.",

        missionVisionTitle: "Mission & Vision",
        missionTitle: "Our Mission",
        missionText:
          "To connect people with the life-changing power of God’s love through the gospel of grace and faith in Christ Jesus, and bond with a passionate community of spirit-filled believers.",
        visionTitle: "Our Vision",
        visionText:
          "To raise believers to become true worshippers who express God’s life and spread the love and message of the gospel of God’s grace to every corner of the globe.",

        coreValuesTitle: "Our Core Values",
        loveText:
          "We have received the love of God in Christ Jesus, hence, we express the same love everywhere we go. (1 John 4:7–8; 16 & 19).",
        honourTitle: "HONOUR",
        honourText:
          "The mark of worship is honour. As true worshippers, we must constantly honour and reverence God in our worship and services to Him. We must also express honour to our leaders and other people. (Matthew 22:37, Proverbs 3:9).",
        excellenceTitle: "EXCELLENCE",
        excellenceText:
          "We must constantly deliver excellence in our service to God at all times because He deserves the best. Mediocrity will never be tolerated in our midst. (Psalm 8:1).",
        spiritualityTitle: "SPIRITUALITY",
        spiritualityText:
          "We must always subject whatever we do to the leading of the Spirit. We do not put our trust in the flesh. As true worshippers, we must always involve the Holy Spirit in all we do. (Romans 8:14, John 15:5).",

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
          "Glory to God!",
        ],

        learnMoreTitle: "Want to Learn More?",
        learnMoreSubtitle:
          "We'd love to connect with you and answer any questions you might have about our church community.",
        contactUsButton: "Contact Us",

        leaderTitle: "Our Leader",
        leaderSubtitle:
          "Meet the dedicated leader who guide our spirital community",
        leaderName: "Ifeanyi Ewim",
        leaderRole: "Lead Pastor and Apostolic Head of The GodLife Network",

        upcomingEventsTitle1: "Upcoming Events",
        addCalendarButton: "Do well to Add to your Calendar",

        timelineMonth: "October 2026",
        event1Month: "Oct",
        event1Day: "29",
        event1Title1: "Monthly service",
        event1DateTime: "Thursday, 7:30 PM",
        event1Location: "Simidjola Studio Yenewa",
        event1Description:
          "Our Monthly service is our gathering featuring prayers, praise, worship, word, Questions & Answers",
        event1DetailsUnavailable: "Details Unavailable",

        event2Month: "Nov",
        event2Day: "26",
        event2Title1: "Our Monthly Gathering.",
        event2DateTime: "Thursday, 7:30 PM",
        event2Location: "Simidjola Studio Yenewa",
        event2Description:
          "Our Monthly service is our gathering featuring prayers, praise, worship, word, Questions & Answers",
        event2AddCalendar: "Do well to Add to Calendar",
        event2ViewDetails: "View Details",

        regularServicesTitle: "Regular Services",
        regularServicesSubtitle:
          "Join us monthly for our regular services. Experience powerful worship, word, and fellowship.",
        monthlyServicesTitle: "Monthly Services",
        monthlyServicesSchedule: "Every last Thursday",
        monthlyServicesTime: "Service Time: 7:30 PM",

        bblog: "Back to Blog Page",

        perfectLoveTitle: "Perfect Love",

        perfectLoveParagraph1:
          "Love is said to be a strong or deep caring affection or likeness for someone. This affection exists among family and friends in most cases, hardly will you see anyone love their enemies. People could be lovers today and tomorrow they change their minds and become enemies because they don’t truly understand what it means to be in love. Some people stop loving the moment there is no more benefits. However, we understand from scriptures that there is only one person who has the capacity to love and even die for His enemies just so that they can become His friends. This is no other but Jesus Christ. The nature of God is love. There is no hate in Him, and because of God’s nature, He does not condemn anyone rather He gives everyone the opportunity to come to Him.",

        perfectLoveParagraph2:
          "The problem of man has always been sin. Sin separated man from God from the day Adam, the first man God created, disobeyed God. The penalty for the disobedience and sin is death, but because of the nature of God, He could not watch man constantly being tormented by the sin nature and the devil. Even after man sinned, God never stopped loving man. He kept chasing after man because man is God’s most precious treasure. Since the only way man could pay for his treason or betrayal is death , God had to step in and pay the ultimate sacrifice for man to redeem us from eternal damnation and death by dying in our place. This is the great substitutionary work of Christ at redemption.(Romans 6:23)",

        perfectLoveParagraph3:
          "God’s love is so strong that He dropped all His heavenly privileges as a deity and took the form of a man (Though He was God, He did not think of equality with God as something to cling to. Instead, He gave up His divine privileges; He took the humble position of a slave and was born as a human being... Philippians 2:6-7) just so that He can feel what we feel and save us from our sinful state. God came as a man in the person of Jesus Christ, not because of any good thing that we have done but because His love for man is reckless. Even when we were still sinners, Christ died for us to give us eternal life and welcome us to the family of God, so that we can become sons (Ephesians 2:19).",

        perfectLoveParagraph4:
          "This eternal life is open for all who believe in the sacrifice of Jesus Christ that He offered on the cross just to save man from God’s wrath and eternal damnation. Anyone that receives the life of God is qualified to spend eternity with God in heaven. It does not matter how good or how bad you are, if you are not born again, which means to believe in Jesus Christ and accept His sacrifice and love for you, you are not qualified for the kingdom of God.",

        perfectLoveParagraph5:
          "Guess what, God loves you even in your struggles, addiction and immoral living, but He loves you too much not to allow you die in your sin and go to hell. No matter how deep you have fallen, His love can pull you out of any bad condition you have gotten yourself into. If you were once a believer and you have backslidden, He still cares so much about you too. Please don’t refuse God’s love because that refusal is what actually condemns a man. God’s love is not just for the church but for the world, so come to Him today (John 3:16) so that you will not spend your eternity in hell. Remember, Jesus Christ is coming soon.",

        perfectLovePrayerTitle:
          "Say this prayer to receive the life of Christ:",

        perfectLovePrayer:
          "Lord Jesus, thank you for saving me and for dying for me on the cross. Today I acknowledge that I am a sinner who needs your help. I believe you love me and died for me. Therefore, I receive your life and sacrifice. The power of sin and the devil is broken over my life. Now I am born again. Glory to God.",

        romans623Title: "Romans 6:23 NIV",
        romans623Text:
          "for the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",

        ephesians219Title: "Ephesians 2:19 NIV",
        ephesians219Text:
          "Consequently, you are no longer foreigners and strangers, but fellow citizens with God's people and also members of his household.",

        john316Title: "John 3:16 NIV",
        john316Text:
          "for God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",

        blogHeroButton: "Our Blog Page",
        blogHeroTitle: "GLN Blog",
        blogHeroSubtitle:
          "Articles grounded in the finished work of Christ, crafted to help you grow in grace, hope, and purpose.",

        blogFilterAll: "All",

        blogArticlesTitle: "Articles by Ifeanyi Ewim",
        blogPageInfo: "Page 1 of 1",

        perfectLoveCategory: "Love",
        perfectLoveDate: "february 26, 2026",
        perfectLoveAuthor: "Mr. Ifeanyi Ewim",

        perfectLoveCardTitle: "PERFECT LOVE",

        perfectLoveCardDescription:
          "The nature of God's love, how sin separates us from God's love and the penalty for sin and disobedience.",

        blogReadMore: "Read More →",

        mediaHeroTitle: "Media Center",
        mediaHeroSubtitle:
          "Watch, listen and grow through life-changing messages and resources.",

        featuredMessageTitle: "Featured Message",

        featuredVideoTitle: "Christmas Carol",

        featuredVideoDescription:
          "Discover how God's grace empowers believers to live victorious lives.",

        watchNowButton: "Watch Now",

        mediaCategorySermons: "Sermons",
        mediaCategoryPodcasts: "Podcasts",
        mediaCategoryPhotos: "Photos",
        mediaCategoryVideos: "Videos",

        recentMessagesTitle: "Recent Messages",

        mediaMessage1Title: "Standout",
        mediaMessage1Speaker: "Ifeanyi Ewim",

        mediaMessage2Title: "HOMOLOGEO: Speak the Right Words",
        mediaMessage2Speaker: "Ifeanyi Ewim",

        mediaMessage3Title: "Perfect Love",
        mediaMessage3Speaker: "Ifeanyi Ewim",

        youtubeTitle: "Stay Connected",

        youtubeDescription:
          "Subscribe to our YouTube channel and never miss a message.",

        youtubeButton: "Subscribe Now",

        mediaMessages: [
          {
            title: "Standout",
            speaker: "Ifeanyi Ewim",
            poster: "/standout-cover.png",
            video: "https://youtu.be/9uM1VMapCZY?si=NkclgRQZKDVPbPr1",
          },
          {
            title: "HOMOLOGEO: Speak the Right Words",
            speaker: "Ifeanyi Ewim",
            poster: "/homologeo-cover.png",
            video: "https://www.youtube.com/watch?v=OdNh4lB7DqQ&t=58s",
          },
          {
            title: "Perfect Love",
            speaker: "Ifeanyi Ewim",
            poster: "/perfect-love-cover.png",
            video: "https://youtu.be/B7Ijvi0JaYc?si=0ZfIWL07NFnydXyN",
          },
        ],

        contactHeroTitle: "Contact Us",
        contactHeroSubtitle: "We'd love to hear from you!",

        contactGetInTouch: "Get In Touch",

        contactCallUs: "Call Us:",
        contactPhone: "+229 01 56 78 42 87",
        contactPhone2: "+229 01 56 31 66 06",

        contactEmailUs: "Email Us:",
        contactEmail: "godlifenetworkintl@gmail.com",

        contactVisitUs: "Visit Us:",
        contactVisitDay: "Every last Thursday",
        contactVisitLocation: "Simidjola Studio, Yenewa",

        contactFollowUs: "Follow Us",

        contactFacebook: "Facebook",
        contactTiktok: "TikTok",
        contactYoutube: "YouTube",

        contactFormTitle: "Send Us a Message",

        contactNamePlaceholder: "Your Name",
        contactEmailPlaceholder: "Your Email",
        contactPhonePlaceholder: "812 345 6789",
        contactSubjectPlaceholder: "Subject",
        contactMessagePlaceholder: "Your Message",

        contactSendButton: "Send Message",

        contactSuccessMessage: "✅ Message sent successfully!",
        contactErrorMessage: "❌ Failed to send message. Please try again.",

        prayerSectionTitle: "Join Us in Prayer",
        prayerSectionSubtitle: "Let us know how we can pray for you",
        prayerRequestButton: "Submit Prayer Request",

        prayerModalTitle: "Prayer Request",

        prayerEmailPlaceholder: "Your Email",
        prayerPhonePlaceholder: "812 345 6789",
        prayerMessagePlaceholder: "Write your prayer request...",

        prayerSendButton: "Send Request",
        prayerCloseButton: "Close",

        prayerSuccessMessage: "✅ Prayer request sent successfully!",
        prayerErrorMessage:
          "❌ Failed to send prayer request. Please try again.",

        floating: {
          message1:
            "Matthew 11:28 “Come to Me, all you who labour and are heavy laden, and I will give you rest.”",
          message2:
            "1 Thessalonians 2:11-12 “For you know that we dealt with each of you as a father deals with his own children, encouraging, comforting and urging you to live lives worthy of God, who calls you into his kingdom and glory.",
          message3:
            "Philippians 1:6 “…being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.”",
          message4:
            "Psalm 37:23-24 “The LORD makes firm the steps of the one who delights in him; though he may stumble, he will not fall, for the LORD upholds him with his hand.”",
          message5:
            "Hebrews 10:24-25 “And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.”",
          message6: "Philippians 4:13 - I can do all things through Christ.",

          message7: "Isaiah 41:10 - Do not fear, for I am with you.",

          message8: "Joshua 1:9 - Be strong and courageous.",

          message9:
            "Luke 12:32 “Do not be afraid, little flock, for your Father has been pleased to give you the kingdom.”",

          message10: "1 Peter 5:7 - Cast all your cares on Him.",

          message11: "Proverbs 3:5 - Trust in the Lord with all your heart.",

          message12: "Jeremiah 29:11 - I know the plans I have for you.",

          message13: "Romans 8:28 - God works all things for good.",

          message14: "2 Corinthians 5:17 - In Christ, you are a new creation.",

          message15: "Hebrews 13:5 - I will never leave you nor forsake you.",

          message16: "Psalm 34:8 - Taste and see that the Lord is good.",

          message17: "Matthew 19:26 - With God all things are possible.",

          message18: "Galatians 2:20 - Christ lives in me.",

          message19: "John 8:12 - I am the light of the world.",

          message20: "Revelation 3:20 - I stand at the door and knock.",
        },

        footerDescription:
          "Connecting people with the life-changing power of God's love through the gospel of grace and faith in Christ Jesus.",

        footerQuickLinks: "Quick Links",

        footerHome: "Home",
        footerAbout: "About",
        footerEvents: "Events",
        footerBlog: "Blog",
        footerMedia: "Media",
        footerContact: "Contact",

        footerFollowUs: "Follow Us On Our Socials",

        footerCopyright: "GodLife Network International. All Rights Reserved.",
      },
    },

    fr: {
      translation: {
        home: "Accueil",
        about: "À propos",
        event: "Événement",
        blog: "Blog",
        media: "Médias",
        contact: "Contact",

        //hero banner translation
        heroTitle1: "Enraciné dans la Parole de Sa Grâce",
        heroSubtitle1: "Nourri par la Parole de Sa Grâce — Actes 20:32",
        joinButton1: " Voir la page du blog pour le sermon",

        heroTitle2: "Bienvenue dans Godlife Network",
        heroSubtitle2:
          "Vivez l’adoration, la communion et la croissance ensemble.",
        joinButton2: "Rejoignez notre communauté WhatsApp",

        heroTitle3: "Rejoignez notre prochain événement",
        heroSubtitle3:
          "Communiez et partenariat avec nous lors de notre prochain événement et vivez la puissante manifestation de Dieu.",
        joinButton3: " Voir notre prochain événement",

        Dhomologeo: "Homologéo Quotidien",
        slideRight: "Glissez pour voir la traductions ",
        homeabout: `GodLife Network International est une communauté chrétienne où les croyants qui ont reçu la vie du Christ se réunissent dans l'amour pour communier les uns avec les autres et avec l'Esprit de Dieu...."`,

        welcomeHome: "Bienvenue à la maison",
        welcomeTitle: "Bienvenue sur ",
        welcomeDesc:
          "GodLife Network International est une communauté chrétienne où les croyants qui ont reçu la vie de Christ se réunissent dans l'amour pour communier les uns avec les autres et avec l'Esprit de Dieu ; offrir une louange et une adoration de qualité à Dieu et recevoir des enseignements bibliques basés sur l'Évangile de la grâce de Dieu. Nous allons également à la rencontre des âmes perdues pour les aider à recevoir et à jouir de l'amour de Christ et à devenir membres de la famille de Dieu.",
        welcomeDesc1: " Vous êtes les bienvenus.",
        loveTitle: "Amour",
        loveDesc:
          "Ce que nous prêchons — le message de grâce, de vérité et de Jésus.",
        lifeTitle: "Vie",
        lifeDesc:
          "Ce que nous donnons — une famille où vous grandissez, appartenez et vous épanouissez.",
        impactTitle: "Impact",
        impactDesc:
          "Ce que nous faisons — transformer des vies et des communautés par l'Esprit.",

        prevEventsTitle: "Nos événements précédents",
        prevEventsDesc:
          "Découvrez nos anciens événements, sorties et rassemblements.",
        event1Title: "fête de louange de Jésus octobre 2026",
        event1Desc:
          "Voici d'autres magnifiques moments de louange intense, d'adoration et de remerciement. Dieu était vraiment au milieu de nous !",
        event2Title: "AOF Édition février 2026",
        event2Desc:
          "Découvrez l'édition précédente de l'Autel d'adoration de février. Voici d'autres magnifiques moments de notre service de la Saint-Valentin.",
        event3Title: "fête de louange de Jésus octobre 2025",
        event3Desc:
          "Voici d'autres magnifiques moments de louange intense, d'adoration et de remerciement. Dieu était vraiment au milieu de nous !",
        viewMoreBtn: "Voir plus",

        aboutTitle: "À propos de nous",
        aboutDesc:
          "Tout ce que vous devez savoir sur Godlife Network. Consultez la page À propos pour en savoir plus.",
        aboutBtn: "Voir la page À propos",

        upcomingEventsTitle: "Nos événements à venir",
        upcomingEventsDesc:
          "Découvrez nos prochains événements, sorties et rassemblements. Rejoignez-nous pour ces prochaines activités.",
        monthlyServiceTitle: "Service mensuel",
        monthlyServiceDate: "29 octobre 2026",
        monthlyServiceTime: "18h30",
        monthlyServiceLocation: "Studio Simidjola Yenewa",
        getDirectionsBtn: "Obtenir l'itinéraire",
        monthlyServiceDesc:
          "Vivez Jésus — chaque service est une rencontre. Nous sommes nourris par la révélation de qui Il est vraiment.",
        noDetailsBtn: "Aucun détail disponible",
        viewEventPageBtn: "Voir la page Événement",

        homologeoTagline: "Croissance quotidienne",
        homologeoTitle: "Nos Déclarations",
        homologeoDesc:
          "Commencez votre journée avec nos déclarations quotidiennes sur notre page À propos.",
        homologeoBtn: "Voir dans la page À propos",
        followFacebookBtn: "Suivre sur Facebook",

        contactTagline: "Contact",
        contactTitle: "Besoin d'une prière ?",
        contactDesc:
          "Nous aimerions prier avec vous dans vos prières. « Car là où deux ou trois sont réunis en mon nom, je suis au milieu d'eux. » - Matthieu 18:20.",
        contactBtn: "Voir la page Contact",

        //translations for about page
        aboutHeroTitle: "À propos de God Life Network",
        aboutHeroSubtitle: "Apprenez à mieux nous connaître.",
        aboutHeroButton: "🏠 Notre Histoire",

        aboutIntro1:
          "GodLife Network International est une communauté chrétienne où les croyants qui ont reçu la vie du Christ se réunissent dans l'amour pour communier les uns avec les autres et avec l'Esprit de Dieu ; offrir un culte de qualité à Dieu et recevoir des enseignements bibliques basés sur l'Évangile.",
        aboutIntro2:
          "Grâce à notre plateforme en ligne, nous offrons un espace accueillant aux personnes de tous horizons pour explorer leur foi, approfondir leur compréhension des Écritures et expérimenter la grâce transformatrice de Dieu.",
        readMoreButton: "Lire plus →",
        modalTitle: "À propos de nous",
        modalLeft1:
          "GodLife Network International est une communauté chrétienne où les croyants qui ont reçu la vie du Christ se réunissent dans l'amour pour communier les uns avec les autres et avec l'Esprit de Dieu ; offrir un culte de qualité à Dieu et recevoir des enseignements bibliques basés sur l'Évangile. Nous atteignons également les âmes perdues pour les aider à recevoir et à jouir de l'amour du Christ et à rejoindre notre communauté.",
        modalLeft2:
          "Chez GodLife Network, notre vision est d'élever les croyants pour qu'ils deviennent de véritables adorateurs qui expriment la vie de Dieu et répandent l'amour et le message de l'Évangile de la grâce de Dieu dans chaque coin du globe.",
        modalLeft3:
          "Notre mission est de connecter les gens avec la puissance transformatrice de l'amour de Dieu à travers l'Évangile de la grâce et la foi en Jésus-Christ, et de s'unir à une communauté passionnée de croyants remplis de l'Esprit.",
        modalRight1:
          "Grâce à notre plateforme en ligne, nous offrons un espace accueillant aux personnes de tous horizons pour explorer leur foi, approfondir leur compréhension des Écritures et expérimenter la grâce transformatrice de Dieu. Que vous cherchiez des réponses aux questions les plus difficiles de la vie, que vous ayez besoin de conseils spirituels ou que vous désiriez simplement la communion fraternelle, GodLife Network est là pour vous.",
        modalRight2:
          "Nous offrons une richesse de ressources, y compris des confessions quotidiennes, des articles inspirants et un soutien interactif par la prière, pour vous accompagner dans votre parcours spirituel. Notre objectif n'est pas seulement de vous équiper et de vous fortifier dans votre marche avec Christ, mais aussi de favoriser des connexions authentiques et une communauté parmi les croyants du monde entier.",

        missionVisionTitle: "Mission & Vision",
        missionTitle: "Notre Mission",
        missionText:
          "Connecter les gens avec la puissance transformatrice de l'amour de Dieu à travers l'Évangile de la grâce et la foi en Jésus-Christ, et s'unir à une communauté passionnée de croyants remplis de l'Esprit.",
        visionTitle: "Notre Vision",
        visionText:
          "Élever des croyants pour devenir de véritables adorateurs qui expriment la vie de Dieu et répandent l'amour et le message de l'Évangile de la grâce de Dieu dans chaque coin du globe.",

        coreValuesTitle: "Nos Valeurs Fondamentales",
        loveText:
          "Nous avons reçu l'amour de Dieu en Jésus-Christ, et nous exprimons donc ce même amour partout où nous allons. (1 Jean 4:7–8; 16 & 19).",
        honourTitle: "HONNEUR",
        honourText:
          "La marque de l'adoration est l'honneur. En tant que vrais adorateurs, nous devons constamment honorer et révérer Dieu dans notre culte et nos services envers Lui. Nous devons aussi exprimer l'honneur envers nos dirigeants et les autres. (Matthieu 22:37, Proverbes 3:9).",
        excellenceTitle: "EXCELLENCE",
        excellenceText:
          "Nous devons constamment offrir l'excellence dans notre service à Dieu en tout temps car Il mérite le meilleur. La médiocrité ne sera jamais tolérée parmi nous. (Psaume 8:1).",
        spiritualityTitle: "SPIRITUALITÉ",
        spiritualityText:
          "Nous devons toujours soumettre tout ce que nous faisons à la direction de l'Esprit. Nous ne mettons pas notre confiance dans la chair. En tant que vrais adorateurs, nous devons toujours impliquer le Saint-Esprit dans tout ce que nous faisons. (Romains 8:14, Jean 15:5).",

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
          "Gloire à Dieu!",
        ],

        learnMoreTitle: "Vous voulez en savoir plus ?",
        learnMoreSubtitle:
          "Nous aimerions vous rencontrer et répondre à toutes vos questions concernant notre communauté d'église.",
        contactUsButton: "Contactez-nous",

        leaderTitle: "Notre Leader",
        leaderSubtitle:
          "Rencontrez le leader dévoué qui guide notre communauté spirituelle",
        leaderName: "Ifeanyi Ewim",
        leaderRole: "Pasteur principal et chef apostolique du God Life Network",

        upcomingEventsTitle1: "Événements à venir",
        addCalendarButton: "Veuillez ajouter à votre calendrier",

        timelineMonth: "Octobre 2026",
        event1Month: "Oct",
        event1Day: "29",
        event1Title1: "Service mensuel",
        event1DateTime: "Jeudi, 19h30",
        event1Location: "Studio Simidjola Yenewa",
        event1Description:
          "Notre service mensuel est notre rassemblement avec prières, louange, adoration, parole, Questions & Réponses",
        event1DetailsUnavailable: "Détails non disponibles",

        event2Month: "Nov",
        event2Day: "26",
        event2Title1: "Notre rassemblement mensuel.",
        event2DateTime: "Jeudi, 19h30",
        event2Location: "Studio Simidjola Yenewa",
        event2Description:
          "Notre service mensuel est notre rassemblement avec prières, louange, adoration, parole, Questions & Réponses",
        event2AddCalendar: "Veuillez ajouter à votre calendrier",
        event2ViewDetails: "Voir les détails",

        regularServicesTitle: "Services réguliers",
        regularServicesSubtitle:
          "Rejoignez-nous chaque mois pour nos services réguliers. Vivez une adoration puissante, la parole et la communion fraternelle.",
        monthlyServicesTitle: "Services mensuels",
        monthlyServicesSchedule: "Chaque dernier jeudi",
        monthlyServicesTime: "Heure du service : 19h30",

        bblog: "Retour à la page du blog",

        perfectLoveTitle: "Amour Parfait",

        perfectLoveParagraph1:
          "L'amour est considéré comme une affection profonde et sincère ou une grande appréciation envers quelqu'un. Cette affection existe le plus souvent entre les membres d'une famille et les amis. Il est rare de voir quelqu'un aimer ses ennemis. Les gens peuvent être amoureux aujourd'hui et devenir ennemis demain parce qu'ils ne comprennent pas vraiment ce que signifie être amoureux. Certaines personnes cessent d'aimer lorsqu'il n'y a plus d'avantages à en tirer. Cependant, nous comprenons à travers les Écritures qu'il n'existe qu'une seule personne capable d'aimer et même de mourir pour ses ennemis afin qu'ils deviennent ses amis. Cette personne n'est autre que Jésus-Christ. La nature de Dieu est l'amour. Il n'y a aucune haine en Lui et, à cause de Sa nature, Il ne condamne personne mais donne à chacun l'opportunité de venir à Lui.",

        perfectLoveParagraph2:
          "Le problème de l'homme a toujours été le péché. Le péché a séparé l'homme de Dieu depuis le jour où Adam, le premier homme créé par Dieu, Lui a désobéi. La conséquence du péché et de la désobéissance est la mort. Mais à cause de Sa nature, Dieu ne pouvait pas regarder l'homme être continuellement tourmenté par la nature du péché et par le diable. Même après avoir péché, Dieu n'a jamais cessé d'aimer l'homme. Il a continué à le poursuivre parce que l'homme est Son trésor le plus précieux. Puisque la seule façon pour l'homme de payer sa trahison était la mort , Dieu est intervenu et a payé le sacrifice ultime afin de nous racheter de la damnation éternelle et de la mort en mourant à notre place. C'est la grande œuvre de substitution accomplie par Christ à la rédemption.(Romains 6:23)",

        perfectLoveParagraph3:
          "L'amour de Dieu est si puissant qu'Il a abandonné tous Ses privilèges célestes en tant que divinité pour prendre la forme d'un homme (Bien qu'Il fût Dieu, Il n'a pas considéré Son égalité avec Dieu comme quelque chose à conserver à tout prix. Au contraire, Il s'est dépouillé Lui-même de Ses privilèges divins ; Il a pris la condition d'un serviteur et est devenu semblable aux hommes... Philippiens 2:6-7) afin de ressentir ce que nous ressentons et de nous sauver de notre état pécheur. Dieu est venu sous la forme d'un homme en la personne de Jésus-Christ, non pas à cause de nos bonnes œuvres, mais parce que Son amour pour l'humanité est immense. Alors même que nous étions encore pécheurs, Christ est mort pour nous donner la vie éternelle et nous accueillir dans la famille de Dieu afin que nous devenions Ses enfants (Éphésiens 2:19).",

        perfectLoveParagraph4:
          "Cette vie éternelle est offerte à tous ceux qui croient au sacrifice de Jésus-Christ sur la croix pour sauver l'humanité de la colère de Dieu et de la damnation éternelle. Toute personne qui reçoit la vie de Dieu est qualifiée pour passer l'éternité avec Dieu au ciel. Peu importe à quel point vous êtes bon ou mauvais ; si vous n'êtes pas né de nouveau, c'est-à-dire si vous ne croyez pas en Jésus-Christ et n'acceptez pas Son sacrifice et Son amour pour vous, vous n'êtes pas qualifié pour entrer dans le royaume de Dieu.",

        perfectLoveParagraph5:
          "Devinez quoi ? Dieu vous aime même au milieu de vos luttes, de vos dépendances et de votre vie immorale. Mais Il vous aime trop pour vous laisser mourir dans votre péché et aller en enfer. Peu importe jusqu'où vous êtes tombé, Son amour peut vous relever de n'importe quelle situation dans laquelle vous vous trouvez. Si vous avez déjà été croyant et que vous vous êtes éloigné de Dieu, sachez qu'Il tient encore profondément à vous. Ne rejetez pas l'amour de Dieu, car c'est ce rejet qui condamne réellement l'homme. L'amour de Dieu n'est pas seulement pour l'Église mais pour le monde entier. Venez donc à Lui aujourd'hui (Jean 3:16) afin de ne pas passer votre éternité en enfer. Souvenez-vous, Jésus-Christ revient bientôt.",

        perfectLovePrayerTitle:
          "faites cette prière pour recevoir la vie de Christ :",

        perfectLovePrayer:
          "Seigneur Jésus, merci de m'avoir sauvé et d'être mort pour moi sur la croix. Aujourd'hui, je reconnais que je suis un pécheur qui a besoin de Ton aide. Je crois que Tu m'aimes et que Tu es mort pour moi. Par conséquent, je reçois Ta vie et Ton sacrifice. La puissance du péché et du diable est brisée sur ma vie. Maintenant, je suis né de nouveau. Gloire à Dieu.",

        romans623Title: "Romains 6:23 NIV",
        romans623Text:
          "Car le salaire du péché, c'est la mort ; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur.",

        ephesians219Title: "Éphésiens 2:19 NIV",
        ephesians219Text:
          "Ainsi donc, vous n'êtes plus des étrangers ni des gens du dehors ; mais vous êtes concitoyens des saints, gens de la maison de Dieu.",

        john316Title: "Jean 3:16 NIV",
        john316Text:
          "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",

        blogHeroButton: "Notre Page de Blog",
        blogHeroTitle: "Blog GLN",
        blogHeroSubtitle:
          "Des articles fondés sur l'œuvre accomplie du Christ, conçus pour vous aider à grandir dans la grâce, l'espérance et votre destinée.",

        blogFilterAll: "Tous",

        blogArticlesTitle: "Articles par Ifeanyi Ewim",
        blogPageInfo: "Page 1 sur 1",

        perfectLoveCategory: "Amour",
        perfectLoveDate: "26 Février 2026",
        perfectLoveAuthor: "M. Ifeanyi Ewim",

        perfectLoveCardTitle: "AMOUR PARFAIT",

        perfectLoveCardDescription:
          "La nature de l'amour de Dieu, comment le péché nous sépare de l'amour de Dieu et la conséquence du péché et de la désobéissance.",

        blogReadMore: "Lire la suite →",
        mediaHeroTitle: "Centre Multimédia",

        mediaHeroSubtitle:
          "Regardez, écoutez et grandissez grâce à des messages et des ressources qui transforment des vies.",

        featuredMessageTitle: "Message en Vedette",

        featuredVideoTitle: "Chants de Noël",

        featuredVideoDescription:
          "Découvrez comment la grâce de Dieu permet aux croyants de vivre une vie victorieuse.",

        watchNowButton: "Regarder Maintenant",

        mediaCategorySermons: "Prédications",

        mediaCategoryPodcasts: "Podcasts",

        mediaCategoryPhotos: "Photos",

        mediaCategoryVideos: "Vidéos",

        recentMessagesTitle: "Messages Récents",

        mediaMessage1Title: "Démarquez-vous",
        mediaMessage1Speaker: "Ifeanyi Ewim",

        mediaMessage2Title: "HOMOLOGEO : Prononcez les Bonnes Paroles",
        mediaMessage2Speaker: "Ifeanyi Ewim",

        mediaMessage3Title: "Amour Parfait",
        mediaMessage3Speaker: "Ifeanyi Ewim",

        youtubeTitle: "Restez Connectés",

        youtubeDescription:
          "Abonnez-vous à notre chaîne YouTube et ne manquez jamais un message.",

        youtubeButton: "Abonnez-vous Maintenant",

        mediaMessages: [
          {
            title: "Démarquez-vous",
            speaker: "Ifeanyi Ewim",
            poster: "/standout-cover.png",
            video: "https://youtu.be/9uM1VMapCZY?si=NkclgRQZKDVPbPr1",
          },
          {
            title: "HOMOLOGEO : Prononcez les bonnes paroles",
            speaker: "Ifeanyi Ewim",
            poster: "/homologeo-cover.png",
            video: "https://www.youtube.com/watch?v=OdNh4lB7DqQ&t=58s",
          },
          {
            title: "Amour Parfait",
            speaker: "Ifeanyi Ewim",
            poster: "/perfect-love-cover.png",
            video: "https://youtu.be/B7Ijvi0JaYc?si=0ZfIWL07NFnydXyN",
          },
        ],

        contactHeroTitle: "Contactez-Nous",
        contactHeroSubtitle: "Nous serions ravis d'avoir de vos nouvelles !",

        contactGetInTouch: "Entrer en Contact",

        contactCallUs: "Appelez-nous :",
        contactPhone: "+229 01 56 78 42 87",
        contactPhone2: "+229 01 56 31 66 06",

        contactEmailUs: "Envoyez-nous un e-mail :",
        contactEmail: "godlifenetworkintl@gmail.com",

        contactVisitUs: "Rendez-nous visite :",
        contactVisitDay: "Chaque dernier jeudi du mois",
        contactVisitLocation: "Studio Simidjola, Yenewa",

        contactFollowUs: "Suivez-nous",

        contactFacebook: "Facebook",
        contactTiktok: "TikTok",
        contactYoutube: "YouTube",

        contactFormTitle: "Envoyez-nous un Message",

        contactNamePlaceholder: "Votre Nom",
        contactEmailPlaceholder: "Votre E-mail",
        contactPhonePlaceholder: "812 345 6789",
        contactSubjectPlaceholder: "Sujet",
        contactMessagePlaceholder: "Votre Message",

        contactSendButton: "Envoyer le Message",

        contactSuccessMessage: "✅ Message envoyé avec succès !",
        contactErrorMessage:
          "❌ Échec de l'envoi du message. Veuillez réessayer.",

        prayerSectionTitle: "Joignez-Vous à Nous dans la Prière",
        prayerSectionSubtitle:
          "Faites-nous savoir comment nous pouvons prier pour vous",
        prayerRequestButton: "Soumettre une Requête de Prière",

        prayerModalTitle: "Requête de Prière",

        prayerEmailPlaceholder: "Votre E-mail",
        prayerPhonePlaceholder: "812 345 6789",
        prayerMessagePlaceholder: "Écrivez votre sujet de prière...",

        prayerSendButton: "Envoyer la Requête",
        prayerCloseButton: "Fermer",

        prayerSuccessMessage: "✅ Requête de prière envoyée avec succès !",
        prayerErrorMessage:
          "❌ Échec de l'envoi de la requête de prière. Veuillez réessayer.",

        floating: {
          message1:
            "Matthieu 11:28 « Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. »",

          message2:
            "1 Thessaloniciens 2:11-12 « Vous savez aussi que nous avons été pour chacun de vous ce qu’un père est pour ses enfants, vous exhortant, vous consolant et vous encourageant à marcher d’une manière digne de Dieu. »",

          message3:
            "Philippiens 1:6 « Celui qui a commencé en vous cette bonne œuvre la rendra parfaite pour le jour de Jésus-Christ. »",

          message4:
            "Psaume 37:23-24 « L'Éternel affermit les pas de l'homme, et il prend plaisir à sa voie. S'il tombe, il n'est pas terrassé, car l'Éternel lui prend la main. »",

          message5:
            "Hébreux 10:24-25 « Veillons les uns sur les autres pour nous inciter à l'amour et aux bonnes œuvres, sans abandonner notre assemblée. »",

          message6:
            "Philippiens 4:13 « Je puis tout par celui qui me fortifie. »",

          message7: "Ésaïe 41:10 « Ne crains rien, car je suis avec toi. »",

          message8: "Josué 1:9 « Fortifie-toi et prends courage. »",

          message9:
            "Luc 12:32 « Ne crains point, petit troupeau, car votre Père a trouvé bon de vous donner le royaume. »",

          message10:
            "1 Pierre 5:7 « Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous. »",

          message11:
            "Proverbes 3:5 « Confie-toi en l'Éternel de tout ton cœur. »",

          message12:
            "Jérémie 29:11 « Car je connais les projets que j'ai formés sur vous. »",

          message13:
            "Romains 8:28 « Toutes choses concourent au bien de ceux qui aiment Dieu. »",

          message14:
            "2 Corinthiens 5:17 « Si quelqu'un est en Christ, il est une nouvelle créature. »",

          message15:
            "Hébreux 13:5 « Je ne te délaisserai point, et je ne t'abandonnerai point. »",

          message16:
            "Psaume 34:8 « Goûtez et voyez combien l'Éternel est bon. »",

          message17: "Matthieu 19:26 « À Dieu tout est possible. »",

          message18: "Galates 2:20 « Christ vit en moi. »",

          message19: "Jean 8:12 « Je suis la lumière du monde. »",

          message20:
            "Apocalypse 3:20 « Voici, je me tiens à la porte, et je frappe. »",
        },

        footerDescription:
          "Connecter les personnes à la puissance transformatrice de l'amour de Dieu à travers l'Évangile de la grâce et la foi en Jésus-Christ.",

        footerQuickLinks: "Liens Rapides",

        footerHome: "Accueil",
        footerAbout: "À Propos",
        footerEvents: "Événements",
        footerBlog: "Blog",
        footerMedia: "Médias",
        footerContact: "Contact",

        footerFollowUs: "Suivez-Nous Sur Nos Réseaux",

        footerCopyright: "GodLife Network International. Tous Droits Réservés.",
      },
    },
  },

  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
