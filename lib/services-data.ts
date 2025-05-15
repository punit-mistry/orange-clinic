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
      title: "Corporate Wellness Programs",
      description: "Comprehensive wellness programs designed to improve employee health and productivity.",
      image: "/meal.png",
      details: {
        title: "Corporate Wellness Programs",
        description:
          "Our corporate wellness programs are designed to enhance employee health, boost productivity, and create a positive workplace culture.",
        content: [
          "At our company, we believe that a healthy workforce is a productive workforce. Our corporate wellness programs are tailored to meet the specific needs of your organization and employees.",
          "Our programs include health assessments, fitness challenges, nutrition workshops, stress management seminars, and more. We work closely with your HR team to develop a program that aligns with your company's goals and values.",
          "Studies have shown that effective wellness programs can reduce healthcare costs, decrease absenteeism, and improve employee morale and retention. Invest in your employees' wellbeing and see the positive impact on your bottom line.",
        ],
      },
    },
    {
      id: "corp-2",
      title: "Leadership Development",
      description: "Training programs to develop effective leadership skills at all levels of your organization.",
      image: "/meal.png",
      details: {
        title: "Leadership Development",
        description:
          "Develop strong leaders within your organization with our comprehensive leadership training programs.",
        content: [
          "Our leadership development programs are designed to equip your team with the skills and knowledge they need to lead effectively in today's dynamic business environment.",
          "We offer a range of training modules covering essential leadership competencies such as strategic thinking, emotional intelligence, conflict resolution, team building, and change management.",
          "Our experienced facilitators use a combination of interactive workshops, case studies, role-playing exercises, and personalized coaching to ensure that participants can apply what they learn to real-world situations.",
        ],
      },
    },
    {
      id: "corp-3",
      title: "Team Building Workshops",
      description: "Interactive workshops designed to strengthen team cohesion and collaboration.",
      image: "/meal.png",
      details: {
        title: "Team Building Workshops",
        description:
          "Foster collaboration, trust, and effective communication within your teams through our engaging team building workshops.",
        content: [
          "Our team building workshops are designed to break down barriers, build trust, and improve communication among team members. Through a series of fun and challenging activities, participants learn to work together more effectively.",
          "We offer both indoor and outdoor team building options, from problem-solving challenges to adventure-based activities. All our workshops are facilitated by experienced professionals who ensure that the activities are not only enjoyable but also meaningful.",
          "Each workshop concludes with a debriefing session where participants reflect on their experiences and discuss how they can apply what they've learned to their daily work interactions.",
        ],
      },
    },
    {
      id: "corp-4",
      title: "Strategic Planning",
      description: "Facilitated sessions to develop and refine your organization's strategic direction.",
      image: "/meal.png",
      details: {
        title: "Strategic Planning",
        description:
          "Chart a clear path forward for your organization with our comprehensive strategic planning services.",
        content: [
          "Our strategic planning process helps organizations clarify their vision, define their mission, and establish clear goals and objectives. We facilitate structured discussions that encourage creative thinking and practical planning.",
          "Our experienced consultants guide your team through a thorough analysis of your organization's strengths, weaknesses, opportunities, and threats. Based on this analysis, we help you develop strategies that leverage your strengths and address your challenges.",
          "The outcome is a detailed strategic plan with specific action items, timelines, and accountability measures to ensure successful implementation. We also offer follow-up sessions to review progress and make adjustments as needed.",
        ],
      },
    },
    {
      id: "corp-5",
      title: "Change Management",
      description: "Support for organizations navigating significant changes or transformations.",
      image: "/meal.png",
      details: {
        title: "Change Management",
        description: "Successfully navigate organizational change with our comprehensive change management services.",
        content: [
          "Change is inevitable in today's business environment, but managing it effectively can be challenging. Our change management services help organizations implement changes smoothly while minimizing resistance and disruption.",
          "We use a structured approach that includes assessing readiness for change, developing a comprehensive change strategy, creating effective communication plans, and providing training and support for employees at all levels.",
          "Our experienced consultants work closely with your leadership team to address concerns, overcome obstacles, and ensure that changes are successfully integrated into your organization's culture and operations.",
        ],
      },
    },
    {
      id: "corp-6",
      title: "Executive Coaching",
      description: "One-on-one coaching to help executives maximize their leadership potential.",
      image: "/meal.png",
      details: {
        title: "Executive Coaching",
        description:
          "Unlock your leadership potential with personalized executive coaching tailored to your specific needs and goals.",
        content: [
          "Our executive coaching programs provide leaders with the support, guidance, and accountability they need to enhance their effectiveness and achieve their professional goals.",
          "We begin with a comprehensive assessment to identify strengths, development areas, and specific objectives. Based on this assessment, we create a customized coaching plan that addresses the unique challenges and opportunities facing each executive.",
          "Our certified executive coaches use a variety of tools and techniques to help clients gain insights, develop new skills, and implement sustainable changes in their leadership approach. Regular sessions ensure continuous progress and adaptation to evolving circumstances.",
        ],
      },
    },
  ]
  
  // Clinical services data
  export const clinicalServices: Service[] = [
    {
      id: "clin-1",
      title: "Health Assessments",
      description: "Comprehensive health evaluations to identify risk factors and develop personalized wellness plans.",
      image: "/meal.png",
      details: {
        title: "Health Assessments",
        description:
          "Comprehensive health evaluations that provide a clear picture of your current health status and potential risk factors.",
        content: [
          "Our health assessments go beyond standard medical check-ups to provide a holistic view of your physical, mental, and emotional wellbeing. Our experienced healthcare professionals use advanced diagnostic tools and techniques to evaluate various aspects of your health.",
          "The assessment includes a detailed medical history review, physical examination, laboratory tests, fitness evaluation, nutritional analysis, and stress assessment. We also consider lifestyle factors that may impact your health, such as sleep patterns, work-life balance, and social connections.",
          "Based on the results, we develop a personalized wellness plan with specific recommendations for improving your health and reducing risk factors. Follow-up consultations ensure that you're making progress toward your health goals.",
        ],
      },
    },
    {
      id: "clin-2",
      title: "Nutrition Counseling",
      description: "Personalized nutrition guidance to support health goals and manage medical conditions.",
      image: "/meal.png",
      details: {
        title: "Nutrition Counseling",
        description:
          "Personalized nutrition guidance to help you achieve your health goals and manage medical conditions effectively.",
        content: [
          "Our registered dietitians provide evidence-based nutrition counseling tailored to your individual needs, preferences, and health concerns. Whether you're looking to lose weight, manage a chronic condition, improve athletic performance, or simply eat healthier, we can help.",
          "We begin with a comprehensive assessment of your current eating habits, nutritional status, medical history, and lifestyle factors. Based on this assessment, we develop a personalized nutrition plan that is realistic, sustainable, and aligned with your goals.",
          "Our approach emphasizes education and skill-building rather than restrictive diets. We teach you how to make informed food choices, prepare healthy meals, navigate dining out, and overcome barriers to healthy eating. Regular follow-up sessions provide support and accountability as you implement changes.",
        ],
      },
    },
    {
      id: "clin-3",
      title: "Mental Health Services",
      description: "Counseling and therapy services to support emotional wellbeing and mental health.",
      image: "/meal.png",
      details: {
        title: "Mental Health Services",
        description:
          "Professional counseling and therapy services to support your emotional wellbeing and mental health.",
        content: [
          "Our mental health services are provided by licensed professionals who specialize in various areas of psychological wellbeing. We offer a safe, confidential space where you can explore your thoughts, feelings, and behaviors with the guidance of a skilled therapist.",
          "We provide support for a wide range of concerns, including anxiety, depression, stress management, grief and loss, relationship issues, trauma, and life transitions. Our therapists use evidence-based approaches such as cognitive-behavioral therapy, mindfulness-based interventions, and solution-focused therapy.",
          "Treatment is tailored to your specific needs and goals, with regular assessment of progress and adjustments as needed. We believe in a collaborative approach that empowers you to develop insights, coping skills, and strategies for lasting positive change.",
        ],
      },
    },
    {
      id: "clin-4",
      title: "Physical Therapy",
      description: "Rehabilitation services to restore function, reduce pain, and prevent injury.",
      image: "/meal.png",
      details: {
        title: "Physical Therapy",
        description:
          "Specialized rehabilitation services to help you recover from injury, manage chronic conditions, and improve physical function.",
        content: [
          "Our physical therapy services are provided by licensed therapists who specialize in evaluating and treating movement disorders, injuries, and physical limitations. We use a combination of hands-on techniques, therapeutic exercises, and education to help you achieve optimal physical function.",
          "Treatment begins with a comprehensive assessment of your condition, including a detailed history, physical examination, and functional testing. Based on this assessment, we develop a personalized treatment plan with specific goals and interventions tailored to your needs.",
          "Our approach emphasizes active participation and education, empowering you with the knowledge and skills to manage your condition effectively. We provide guidance on proper body mechanics, home exercises, and strategies to prevent future injuries or complications.",
        ],
      },
    },
    {
      id: "clin-5",
      title: "Wellness Workshops",
      description: "Educational sessions on various health topics to promote wellness and prevention.",
      image: "/meal.png",
      details: {
        title: "Wellness Workshops",
        description: "Interactive educational sessions on various health topics to promote wellness and prevention.",
        content: [
          "Our wellness workshops provide valuable information and practical strategies to help participants improve their health and wellbeing. Led by experienced health professionals, these interactive sessions cover a wide range of topics relevant to today's health challenges.",
          "Workshop topics include stress management, healthy eating, physical activity, sleep optimization, mindfulness, work-life balance, and prevention of common health conditions. Each workshop combines evidence-based information with practical tools and techniques that participants can immediately apply in their daily lives.",
          "Workshops can be customized for specific groups or organizations and can be delivered in various formats, including in-person sessions, webinars, or a series of classes. Participants receive handouts and resources to support continued learning and implementation.",
        ],
      },
    },
    {
      id: "clin-6",
      title: "Health Coaching",
      description: "One-on-one support to help individuals make sustainable lifestyle changes.",
      image: "/meal.png",
      details: {
        title: "Health Coaching",
        description:
          "Personalized support and guidance to help you make sustainable lifestyle changes and achieve your health goals.",
        content: [
          "Our health coaching services bridge the gap between medical recommendations and real-life implementation. Our certified health coaches work one-on-one with clients to develop personalized strategies for improving health behaviors such as nutrition, physical activity, stress management, and sleep.",
          "The coaching process begins with clarifying your health vision and specific goals. Your coach then helps you break these goals down into manageable steps, identify potential barriers, and develop strategies to overcome them. Regular sessions provide accountability, support, and guidance as you implement changes.",
          "Unlike prescriptive approaches, health coaching emphasizes your autonomy and internal motivation. Your coach serves as a partner who helps you tap into your own wisdom and strengths, develop new skills, and build confidence in your ability to maintain healthy behaviors long-term.",
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
  