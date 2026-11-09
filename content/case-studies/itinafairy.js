/**
 * ItinAFairy case study.
 * High-level public account of collaborative work on a live product.
 * No private implementation detail, metrics, or unreleased features.
 *
 * Screenshots are local assets for this case study. They are not a claim
 * that Thomas designed or implemented every control visible in them.
 */
export const itinafairy = {
    slug: 'itinafairy',
    name: 'ItinAFairy',
    tagline: 'Engineering a More Personalized Travel Discovery Experience',
    summary: 'ItinAFairy is an AI-assisted travel discovery and planning platform designed to help users find experiences tailored to their interests, preferences, and travel needs.',
    description: 'Engineering a More Personalized Travel Discovery Experience. ItinAFairy is an AI-assisted travel discovery and planning platform designed to help users find experiences tailored to their interests, preferences, and travel needs.',
    overview: 'I contributed to the development of the platform as part of a collaborative technical team, working across application functionality, backend integrations, and production readiness.',
    type: 'Collaborative project',
    role: ['Technical Contributor'],
    focus: ['Full-Stack Development', 'AI Integration', 'Product Engineering'],
    status: 'Live Product — Ongoing Development',
    timeline: '2026',
    image: {
        src: '/images/projects/itinafairy/itinafairy-homepage.webp',
        alt: 'ItinAFairy homepage with the headline Perfect Day Planned in Seconds, actions for Explore near me and Plan a trip, and a globe showing Lisbon stops.',
        caption: 'The public homepage: Perfect Day Planned in Seconds.',
        width: 1536,
        height: 1024,
    },
    imageLabel: 'Homepage. An approved public screenshot can replace this placeholder.',
    sections: [
        {
            type: 'prose',
            id: 'challenge',
            title: 'The Challenge',
            lede: 'Personalized travel discovery requires more than presenting recommendations.',
            paragraphs: [
                'The application must translate user preferences into useful experiences, coordinate information across different services, and maintain a reliable journey from initial discovery to account creation and premium functionality.',
            ],
        },
        {
            type: 'prose',
            id: 'product-experience',
            title: 'The Product Experience',
            paragraphs: [
                'The next sections walk through the public product.',
            ],
        },
        {
            type: 'prose',
            id: 'traveler',
            title: 'Understanding the Traveler',
            paragraphs: [
                'Travelers add preferences, then travel context.',
            ],
            images: [
                {
                    src: '/images/projects/itinafairy/itinafairy-onboarding-interests.webp',
                    alt: 'ItinAFairy screen titled Anything to keep in mind?, step 3 of 3, with choices for Budget-friendly, Dietary preferences, Kid-friendly, and Accessible.',
                    caption: 'Step 3 of 3, “Anything to keep in mind?”, adds preferences such as budget, dietary needs, and accessibility.',
                    width: 1329,
                    height: 955,
                },
                {
                    src: '/images/projects/itinafairy/itinafairy-preferences.webp',
                    alt: 'ItinAFairy screen titled Anything else we should know?, step 5 of 5, asking whether the traveler has visited Atlanta and offering trip context such as A week+ and Mid-range.',
                    caption: 'Step 5 of 5, “Anything else we should know?”, asks about a prior visit, special requirements, and trip context.',
                    width: 1329,
                    height: 1081,
                },
            ],
        },
        {
            type: 'prose',
            id: 'itineraries',
            title: 'From Preferences to Itineraries',
            paragraphs: [
                'Preferences become a structured, personalized plan.',
            ],
            images: [
                {
                    src: '/images/projects/itinafairy/itinafairy-atlanta-itinerary.webp',
                    alt: 'ItinAFairy itinerary titled Atlanta A week+, with day tabs and the morning stop Biplane Over ATL.',
                    caption: 'A generated plan titled Atlanta A week+.',
                    layout: 'wide',
                    width: 1329,
                    height: 1290,
                },
            ],
        },
        {
            type: 'prose',
            id: 'refining',
            title: 'Refining the Experience',
            paragraphs: [
                'The public controls on these stop cards are Helpful, Not for me, Swap, Remove, and Book Now.',
            ],
            images: [
                {
                    src: '/images/projects/itinafairy/itinafairy-recommendation-cards.webp',
                    alt: 'ItinAFairy stop cards for Da Vinci’s Donuts and Historic Fourth Ward Park. Each visible card includes Helpful, Not for me, Swap, Remove, and Book Now.',
                    caption: 'Stop cards show Helpful, Not for me, Swap, Remove, and Book Now.',
                    layout: 'wide',
                    width: 1329,
                    height: 1290,
                },
            ],
        },
        {
            type: 'workflow',
            id: 'contributions',
            title: 'My Engineering Contributions',
            lede: 'Four areas of my work on the shared application.',
            steps: [
                {
                    title: 'Application development',
                    detail: 'I worked within an existing full-stack application, investigating functionality, reviewing implementation decisions, and contributing targeted changes.',
                },
                {
                    title: 'AI and API integration',
                    detail: 'I supported application development involving external services and AI-assisted experiences.',
                },
                {
                    title: 'Authentication and security',
                    detail: 'I contributed to improvements involving account protection, access controls, and abuse prevention.',
                },
                {
                    title: 'Collaborative development',
                    detail: 'I used GitHub-based workflows to develop, review, and validate changes before integration into the shared application.',
                },
            ],
        },
        {
            type: 'technologies',
            id: 'technologies',
            title: 'Technical Environment',
            groups: [
                {title: 'Tools', items: ['Next.js', 'React', 'TypeScript', 'Vercel']},
                {title: 'Capabilities', items: ['AI Integration', 'API Development']},
            ],
        },
        {
            type: 'prose',
            id: 'engineering-challenges',
            title: 'Engineering Challenges',
            paragraphs: [
                'Contributing to an existing application meant understanding how individual features interact with the wider system. A change had to preserve established functionality while accommodating a new product requirement.',
                'New capabilities also had to be considered alongside authentication, authorization, input validation, and abuse prevention.',
                'Personalization added decisions about preference collection, integrations, recommendation behavior, and the discovery journey.',
            ],
        },
        {
            type: 'prose',
            id: 'takeaways',
            title: 'Takeaways',
            paragraphs: [
                'My involvement strengthened my experience contributing to a production application, navigating collaborative development workflows, and implementing changes within a broader product architecture.',
            ],
        },
        {
            type: 'links',
            id: 'attribution',
            title: 'Attribution',
            paragraphs: [
                'Collaborative development project. I contributed as a technical team member. ItinAFairy and its associated intellectual property belong to their respective owners.',
            ],
            links: [
                {
                    label: 'Visit ItinAFairy',
                    href: 'https://itinafairy.com',
                    enabled: true,
                },
            ],
        },
    ],
}
