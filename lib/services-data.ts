// Define TypeScript interfaces for our service data
export interface ServiceDetails {
    title: string
    description: string
    content: string[]
  }
  
  export interface Service {
    id: string
    title: string
    description: string
    image: string
    details: ServiceDetails
  }
  
  // Corporate services data
  export const corporateServices: Service[] = [
    {
      id: "corp-1",
      title: "In-House Health Consultant (Nutrition / Yoga)",
      description: "Health consultant in your corporate campus.",
      image: "https://images.unsplash.com/photo-1604598625038-50520974af2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwbnV0cml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
      details: {
        title: "In-House Health Consultant (Nutrition / Yoga)",
        description:
          "Our corporate wellness programs are designed to enhance employee health, boost productivity, and create a positive workplace culture.",
        content: [
          "This saves employee's time and money to visit a health care consultant",
          "Early addressing to the health issue will maintain employee’s health.",
          "Personalized consultation, to which employee can relate much better.",
          "The health goal is been tracked with follow ups which gives them a greater motivation to work on their health.",

        ],
      },
    },
    {
      id: "corp-2",
        title: "Educate your Employees",
      description: "Training programs to develop effective leadership skills at all levels of your organization.",
      image: "https://images.unsplash.com/photo-1714974528737-3e6c7e4d11af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        title: "Educate your Employees",
        description:
          "Develop strong leaders within your organization with our comprehensive leadership training programs.",
        content: [
          "Year-round Nutrition awareness lecture for international health days. E.g. world heart day/ world diabetes day/ women’s day/ breast cancer awareness day.",
          "Improves knowledge of employee towards healthy eating habits & healthy lifestyle.",
          "A big batch of individuals can attend at a go.",
          "Saves time spent on learning as compared to individual consultation of the same employee strength.",
          "All levels of employee can be touched with the same.",
        ],
      },
    },
    {
      id: "corp-3",
      title: "Yoga Workshops",
      description: "Interactive workshops designed to strengthen team cohesion and collaboration.",
      image: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        title: "Yoga Workshops",
        description:
          "Foster collaboration, trust, and effective communication within your teams through our engaging team building workshops.",
        content: [
          "Monthly planned workshops for mental & physical health improvement. E.g. desk yoga/ work ergonomics/ Meditation/ stress management etc.",
          "Helps reduce basic body aches due to sitting hours.",
          "Balances the hormones and improves mood handling of the individual.",
          "This will help them to be more focused at work task as well.",
        ],
      },
    },
    {
      id: "corp-4",
      title: "Time out for Nutrition",
      description: "Facilitated sessions to develop and refine your organization's strategic direction.",
      image: "https://images.unsplash.com/photo-1561993090-b7c00b87852a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        title: "Time out for Nutrition",
        description:
          "Take a time out from your busy schedule to learn and enjoy in the world of health & fitness. Get to know your body composition & Quick tips. Nutrition games for employees/ Quick nutrition challenge.",
        content: [
          "Give-aways for winners. (Healthy treat)",
          "A different set up to involve individuals for health awareness.",
          "Healthy competition between department, leads them in a strong team.",
          "On spot learning which they can practice on a regular basis.",
        ],
      },
    },
    {
      id: "corp-5",
      title: "Digital Motivation and Facts about Nutrition",
      description: "Support for organizations navigating significant changes or transformations.",
      image: "https://images.unsplash.com/photo-1604281019483-6f66cb10f725?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        title: "Digital Motivation and Facts about Nutrition",
        description: "Successfully navigate organizational change with our comprehensive change management services.",
        content: [
          "These mailers act like small alarms, reminding them about their health goals.",
          "These are daily routine doubts that will be solved/ answered by the consultant directly.",
          "Prevents from dropping their motivation towards working on their health goal.",
        ],
      },
    },
    // {
    //   id: "corp-6",
    //   title: "Executive Coaching",
    //   description: "One-on-one coaching to help executives maximize their leadership potential.",
    //   image: "/meal.png",
    //   details: {
    //     title: "Executive Coaching",
    //     description:
    //       "Unlock your leadership potential with personalized executive coaching tailored to your specific needs and goals.",
    //     content: [
    //       "Our executive coaching programs provide leaders with the support, guidance, and accountability they need to enhance their effectiveness and achieve their professional goals.",
    //       "We begin with a comprehensive assessment to identify strengths, development areas, and specific objectives. Based on this assessment, we create a customized coaching plan that addresses the unique challenges and opportunities facing each executive.",
    //       "Our certified executive coaches use a variety of tools and techniques to help clients gain insights, develop new skills, and implement sustainable changes in their leadership approach. Regular sessions ensure continuous progress and adaptation to evolving circumstances.",
    //     ],
    //   },
    // },
  ]
  
  // Clinical services data
  export const clinicalServices: Service[] = [
    {
      id: "clin-1",
      title: "Weight Management",
      description: "Comprehensive health evaluations to identify risk factors and develop personalized wellness plans.",
      image: "https://images.unsplash.com/photo-1634463278803-f9f71890e67d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        title: "Weight Management",
        description:
          "If you are a weight watcher and have been trying to lose those extra kilos but could not get any results! Our weight management program is tailor-made. Diet recommendation for your health goals and body’s requirement. We consider your working schedule and daily routine while curating your plan. We do not recommend any crash diet for unrealistic results; long-term lifestyle changes are a better choice for sustainable results.",
        content: [
          "Detailed 1-2-1 session",
          "Customized detailed diet recommendation.",
          "Guidance to understand the recommended changes.",
          "Holistic approach toward your health goal.",
          "Activity that you can start with, for better results.",
          "Doubt solving post the sessions.",
        ],
      },
    },
    {
      id: "clin-2",
      title: "Diabetes Management Type 1 / 2",
      description: "Personalized nutrition guidance to support health goals and manage medical conditions.",
      image: "https://images.unsplash.com/photo-1685485276219-cbdf9309be1a?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        title: "Diabetes Management Type 1 / 2",
        description:
          "If you are struggling to maintain your blood sugar levels within the range even being on oral medication / insulin therapy, then our diet consultation for diabetes management will help you get your blood sugar levels to desired readings. Be it fasting blood sugar level or post-meal readings or HbA1c level, diet modification can help you see changes on all these reports.",
        content: [
          "Detailed 1-2-1 session",
          "Customized detailed diet recommendation.",
          "Guidance to understand the recommended changes.",
          "Understanding of your health conditions and pain points.",
          "Activity that you can start with, for better results.",
          "Doubt solving post the sessions.",
        ],
      },
    },
    {
      id: "clin-3",
      title: "Poly Cystic Ovarian Disease (PCOD)",
      description: "This condition brings a metabolic change in hormone system + body composition + the way food is metabolized. PCOD makes it more difficult for the individual to lose weight, due to the imbalance of insulin production & irregular periods. Diet modification is a potent way of supporting the treatment of PCOD, which helps to manage the symptoms.",
      image: "https://media.istockphoto.com/id/1416791078/photo/hands-holding-uterus-female-reproductive-system-woman-health-pcos-gynecologic-and-cervix.jpg?s=612x612&w=0&k=20&c=Il5JtJEeSypvfJaactaCCcuB9kAjgBftiZXQlJIVhwM=",
      details: {
        title: "Poly Cystic Ovarian Disease (PCOD)",
        description:
          "This condition brings a metabolic change in hormone system + body composition + the way food is metabolized. PCOD makes it more difficult for the individual to lose weight, due to the imbalance of insulin production & irregular periods. Diet modification is a potent way of supporting the treatment of PCOD, which helps to manage the symptoms.",
        content: [
          "Detailed 1-2-1 session",
          "Customized detailed diet recommendation.",
          "Guidance to understand the recommended changes.",
          "Activity that you can start with, for better results.",
          "Doubt solving post the sessions.",
        ],
      },
    },
    {
      id: "clin-4",
      title: "Gestational Diabetes (GDM)",
      description: "Gestational diabetes is when high sugar levels are detected during pregnancy. Maintaining a healthy balanced diet is utmost important for baby’s development in the womb and mother’s health. We consider mother’s requirement and cravings; thus, the diet is planned with multiple options and substitutes..",
      image: "https://media.istockphoto.com/id/1436142520/photo/pregnant-young-woman-injecting-insulin-with-insulin-pen.jpg?s=612x612&w=0&k=20&c=27aj9o2NDct1_9g2GxCpQFI3Yr9Iu6ear0MjJyOVnBI=",
      details: {
        title: "Gestational Diabetes (GDM)",
        description:
          "Gestational diabetes is when high sugar levels are detected during pregnancy. Maintaining a healthy balanced diet is utmost important for baby’s development in the womb and mother’s health. We consider mother’s requirement and cravings; thus, the diet is planned with multiple options and substitutes..",
        content: [
          "Detailed 1-2-1 session",
          "Customized detailed diet recommendation.",
          "Guidance to understand the recommended changes.",
          "Doubt solving post the sessions.",
        ],
      },
    },
    {
      id: "clin-5",
      title: "Cancer",
      description: "Diet plays a particularly important role during cancer treatment. To successfully survive the chemotherapy / radiation therapy, one needs a strong diet backup. Scientific-based nutrition therapy during cancer treatment determines better recovery during and post-treatment. Diet recommendations will also help reduce side-effects commonly seen during cancer treatment.",
      image: "https://media.istockphoto.com/id/1756374558/photo/young-asian-people-taking-care-health-help-cancer-patients-sitting-in-wheelchair-outside-home.jpg?s=612x612&w=0&k=20&c=1ueE-UmIPUMQmq2e6LyNOUaKVd1cDH3ZMQ-Hf0AqMow=",
      details: {
        title: "Cancer",
        description: "Diet plays a particularly important role during cancer treatment. To successfully survive the chemotherapy / radiation therapy, one needs a strong diet backup. Scientific-based nutrition therapy during cancer treatment determines better recovery during and post-treatment. Diet recommendations will also help reduce side-effects commonly seen during cancer treatment.",
        content: [
          "Detailed 1-2-1 session",
          "Customized detailed diet recommendation.",
          "Guidance to understand the recommended changes.",
          "Guidance for how to prep food for alternate feeding methods.",
          "Suggestion on Yoga practice that will help in your condition.",
          "Doubt solving post the sessions.",
        ],
      },
    },
    {
      id: "clin-6",
      title: "Thyroid",
      description: "Thyroid is an inflammatory disease, where anti-inflammatory food helps the body to fight the condition better. Even being on thyroid medication if you face symptoms like weakness, hairfall, low hemoglobin, weight gain, etc., then our nutrition counseling will help you manage these symptoms well.",
      image: "https://media.istockphoto.com/id/1285293226/photo/woman-showing-painted-thyroid-gland-on-her-neck-enlarged-butterfly-shaped-thyroid-gland.jpg?s=612x612&w=0&k=20&c=QnJYfWdhSehLlRmud-efDVDVNIVTk3B2TRhRxwiMK6g=",
      details: {
        title: "Thyroid",
        description:
          "Thyroid is an inflammatory disease, where anti-inflammatory food helps the body to fight the condition better. Even being on thyroid medication if you face symptoms like weakness, hairfall, low hemoglobin, weight gain, etc., then our nutrition counseling will help you manage these symptoms well.",
        content: [
          "Detailed 1-2-1 session",
          "Customized detailed diet recommendation.",
          "Guidance to understand the recommended changes.",
          "Activity that you can start with, for better results.",
          "Doubt solving post the sessions.",
        ],
      },
    },
  ]
  
  // Function to search through all services
  export function searchServices(query: string): Service[] {
    const searchTerm = query.toLowerCase().trim()
  
    if (!searchTerm) {
      return [...corporateServices, ...clinicalServices]
    }
  
    return [...corporateServices, ...clinicalServices].filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.details.content.some((paragraph) => paragraph.toLowerCase().includes(searchTerm)),
    )
  }
  