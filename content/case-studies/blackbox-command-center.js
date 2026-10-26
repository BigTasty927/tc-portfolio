/**
 * Blackbox Command Center case study.
 * Public account of a private Next.js dashboard over Git-backed records.
 * No credential values, hosts, dock URLs, or other project names.
 */
export const blackboxCommandCenter = {
    slug: 'blackbox-command-center',
    name: 'Blackbox Command Center',
    tagline: 'A unified command center for managing AI projects, automation workflows, and operational knowledge.',
    summary: 'A Next.js command center for structured project records, knowledge, decisions, and automation visibility, with the records kept in Git.',
    type: 'Independent project',
    role: ['Creator, Product Designer & Full-Stack Developer'],
    focus: ['Next.js', 'React', 'AI Automation', 'GitHub API', 'Systems Design', 'API Security'],
    status: 'Independent Project · Active Development',
    timeline: '2026',
    image: {
        src: '/images/projects/blackbox-command-center/blackbox-hero.png',
        alt: 'Mission Control home with a command brief, sidebar navigation, and sample project alerts.',
        caption: 'Illustrative view of the home command brief, with sample content.',
        layout: 'wide',
        width: 1865,
        height: 1388,
    },
    imageLabel: 'Home command brief.',
    sections: [
        {
            type: 'prose',
            id: 'problem',
            title: 'The problem',
            lede: 'Several AI and automation projects do not share one system of record.',
            paragraphs: [
                'Progress, decisions, priorities, documentation, and tools each tend to land in a different place. A status note, a workflow export, and a project decision are easy to split apart.',
                'Blackbox Command Center is built for that design problem: one operational view for those records. It is not a claim of measured productivity gains.',
            ],
        },
        {
            type: 'prose',
            id: 'solution',
            title: 'The solution',
            lede: 'A custom Next.js command center.',
            paragraphs: [
                'Structured project records, knowledge, decisions, and automation visibility sit in one interface. In the product the interface is branded Mission Control.',
                'The records stay in a companion Git repository as JSON and Markdown. The page reads a bundle prepared when the app is built, and Next.js routes can write updates back.',
            ],
        },
        {
            type: 'image',
            id: 'project-cockpit',
            src: '/images/projects/blackbox-command-center/blackbox-dashboard.png',
            alt: 'Project cockpit showing priority, milestones, cost ranges, and suggested next moves.',
            caption: 'Illustrative view of a project cockpit, with sample content.',
            layout: 'wide',
            width: 1865,
            height: 1388,
        },
        {
            type: 'workflow',
            id: 'architecture',
            title: 'Architecture',
            lede: 'GitHub-backed records, a build-time sync, and API routes for change.',
            steps: [
                {
                    title: 'GitHub-backed records',
                    detail: 'Status, blueprints, decisions, and knowledge are JSON and Markdown in a companion repository. Git is the record. There is no separate SQL schema for that operational state.',
                },
                {
                    title: 'Build-time synchronization',
                    detail: 'A build script downloads the data repository, merges blueprint and mission-control JSON, and indexes knowledge documents into files the client can import.',
                },
                {
                    title: 'Mutations through Next.js routes',
                    detail: 'Route handlers log decisions, record experiments, create a project, and read an allowlisted knowledge file. Writes go through the GitHub Contents API.',
                },
                {
                    title: 'Supporting integrations',
                    detail: 'OpenAI is called when a project is created from an idea. The inbox route targets Supabase. An n8n route can list workflows when that integration is configured. The app is hosted on Vercel.',
                },
            ],
        },
        {
            type: 'image',
            id: 'decisions',
            src: '/images/projects/blackbox-command-center/blackbox-decisions.png',
            alt: 'Decision Engine ranking next moves and showing portfolio health.',
            caption: 'Illustrative view of the decision screen, with sample content.',
            layout: 'wide',
            width: 1865,
            height: 1388,
        },
        {
            type: 'image',
            id: 'knowledge',
            src: '/images/projects/blackbox-command-center/blackbox-knowledge.png',
            alt: 'Knowledge screen with a search field and grouped documents for blueprints, procedures, prompts, and frameworks.',
            caption: 'Illustrative view of the knowledge screen, with sample content.',
            layout: 'wide',
            width: 1865,
            height: 1388,
        },
        {
            type: 'prose',
            id: 'limitations',
            title: 'Current state and limitations',
            lede: 'The structure is in place. Several surfaces are still static, exported, or unchecked.',
            paragraphs: [
                'The home stream is simulated. Stack Map and Time & Focus are static. The tools list is hardcoded unless a stack snapshot is supplied.',
                'The project registry, the generated dashboard, and the operational JSON do not all agree. Nothing in the data repository reconciles them.',
                'Workflow files stored with the records are exports. They are not a running automation. “AI Automation” on this page is a focus label for that area of the work, not proof that an export is executing.',
                'The inbox file in the data repository is a fixture from April 2026, and that repository does not record inbox writes. The app’s inbox route targets Supabase, and that live path was not verified.',
                'OpenAI and n8n are implemented in the source and were not verified running. Hosting on Vercel is confirmed. A production save and a deploy-hook rebuild were not checked.',
            ],
        },
        {
            type: 'results',
            id: 'lessons',
            title: 'Engineering lessons',
            lede: 'What this implementation makes concrete.',
            groups: [
                {
                    title: 'Illustrated by the build',
                    items: [
                        'Git-backed consistency depends on every writer updating the same files. The registry, the generated dashboard, and the operational JSON can drift, and the data repository has no reconciler.',
                        'Build-time synchronization keeps the interface on a prepared bundle. The tradeoff is freshness: the dashboard moves when the app is built, not on every edit by itself.',
                        'The security boundary in the app is an unlock gate, a signed session cookie, API middleware, and an allowlist on knowledge reads. A security test script is in the repository and was not run for this case study.',
                    ],
                },
            ],
        },
        {
            type: 'technologies',
            id: 'technologies',
            title: 'Technology stack',
            lede: 'The stack behind the command center.',
            groups: [
                {title: 'Interface', items: ['Next.js', 'React', 'Tailwind']},
                {title: 'Records', items: ['Git', 'JSON', 'Markdown', 'GitHub API']},
                {title: 'Integrations', items: ['OpenAI', 'n8n', 'Supabase', 'Vercel']},
            ],
        },
    ],
}
