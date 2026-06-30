const fs = require('fs');
const path = require('path');

/* ============================================================
   SERVICE DATA — all content lives here
   ============================================================ */
const services = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Campaigns that convert. Growth that compounds.',
    description: 'We build data-driven digital marketing strategies that attract the right audience, engage them at every touchpoint, and convert them into loyal customers. From search to social, every rupee you spend is tracked and optimised.',
    icon: '📈',
    stats: [{ n:'3x', label:'Avg. ROAS' }, { n:'200+', label:'Campaigns Run' }, { n:'98%', label:'Client Retention' }],
    process: [
      { step:'01', title:'Audit & Research',   desc:'Deep-dive into your current performance, competitors, and target audience.' },
      { step:'02', title:'Strategy Blueprint',  desc:'Custom channel mix and content calendar aligned to your business goals.' },
      { step:'03', title:'Execute & Publish',   desc:'Creative campaigns launched across your highest-impact channels.' },
      { step:'04', title:'Measure & Optimise',  desc:'Weekly reporting with continuous A/B testing for compounding results.' },
    ],
    subs: [
      {
        slug: 'seo',
        title: 'Search Engine Optimization',
        tagline: 'Rank higher. Get found faster. Grow organically.',
        description: 'Our SEO team combines technical precision with creative content strategy to push your website to the top of Google — and keep it there. We focus on long-term, sustainable traffic growth that drives real revenue.',
        icon: '🔍',
        features: [
          { title:'Technical SEO Audit',       desc:'Site speed, Core Web Vitals, crawlability, schema markup, and indexation fixes.' },
          { title:'Keyword Research',           desc:'Data-backed keyword clusters that match buyer intent at every funnel stage.' },
          { title:'On-Page Optimisation',       desc:'Title tags, meta descriptions, header hierarchy, and internal linking.' },
          { title:'Content Strategy',           desc:'Topic clusters, pillar pages, and blog roadmaps that build topical authority.' },
          { title:'Link Building',              desc:'White-hat outreach campaigns to earn high-authority backlinks naturally.' },
          { title:'Local SEO',                  desc:'Google Business Profile, local citations, and geo-targeted landing pages.' },
          { title:'E-Commerce SEO',             desc:'Category/product page optimisation, schema, and review integration.' },
          { title:'Monthly Reporting',          desc:'Transparent dashboards showing rankings, traffic, and ROI in plain English.' },
        ],
        process: [
          { step:'01', title:'Full Site Audit',    desc:'Identify every technical and content opportunity in your existing site.' },
          { step:'02', title:'Keyword Mapping',    desc:'Assign target keywords to each page with a clear content gap plan.' },
          { step:'03', title:'On-Page & Technical', desc:'Implement fixes and optimisations — site-wide, not just surface-level.' },
          { step:'04', title:'Build Authority',    desc:'Content creation, PR, and link outreach to strengthen domain rating.' },
          { step:'05', title:'Track & Iterate',    desc:'Monthly reviews to adapt strategy as Google and markets evolve.' },
        ],
        faqs: [
          { q:'How long does SEO take to show results?', a:'Most clients see meaningful movement in 3–6 months. Competitive industries may take longer, but we set clear milestones from day one.' },
          { q:'Do you guarantee first-page rankings?', a:'No agency can honestly guarantee rankings. We guarantee a rigorous, ethical process that consistently delivers growth.' },
          { q:'Will SEO work for my industry?', a:'Yes — from SaaS to local restaurants, every business benefits from organic visibility. We tailor the approach to your specific market.' },
        ],
      },
      {
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        tagline: 'Build a brand people follow, trust, and buy from.',
        description: 'We manage your social presence end-to-end — strategy, creative, posting, community management, and paid amplification. The result: a social media presence that builds brand equity and drives measurable business outcomes.',
        icon: '📱',
        features: [
          { title:'Platform Strategy',          desc:'Right channels for your audience — Instagram, LinkedIn, X, YouTube, or all of them.' },
          { title:'Content Creation',           desc:'Scroll-stopping graphics, reels, carousels, and copy crafted by our creative team.' },
          { title:'Community Management',       desc:'Daily monitoring, comment replies, and DM handling to build genuine community.' },
          { title:'Influencer Partnerships',    desc:'Micro and macro influencer outreach relevant to your niche and budget.' },
          { title:'Paid Social Campaigns',      desc:'Highly targeted Meta and LinkedIn ads with creative that converts.' },
          { title:'Analytics & Reporting',      desc:'Monthly performance reports with reach, engagement, and conversion data.' },
        ],
        process: [
          { step:'01', title:'Brand Audit',        desc:'Review your current presence, voice, and competitive landscape.' },
          { step:'02', title:'Content Strategy',   desc:'Build a content calendar with themes, formats, and posting frequency.' },
          { step:'03', title:'Creative Production', desc:'Design and copy creation for every post, story, and reel.' },
          { step:'04', title:'Publish & Engage',   desc:'Consistent posting and active community engagement every day.' },
          { step:'05', title:'Report & Refine',    desc:'Monthly data review to double down on what resonates.' },
        ],
        faqs: [
          { q:'How many posts per week do you create?', a:'Our standard plan includes 5 posts per week across your primary platform, with add-ons for additional channels.' },
          { q:'Do you handle paid social separately?', a:'Paid social can be added to any plan. We manage ad spend, creative, targeting, and optimisation.' },
          { q:'Can I approve content before it goes live?', a:'Always. Every piece of content goes through your approval before publishing.' },
        ],
      },
      {
        slug: 'ppc-advertising',
        title: 'PPC Advertising',
        tagline: 'Every click tracked. Every rupee justified.',
        description: 'Our paid search and display specialists build Google Ads and Meta Ads campaigns engineered for maximum ROI. We obsess over Quality Scores, bid strategies, and landing page alignment so your budget works as hard as possible.',
        icon: '🎯',
        features: [
          { title:'Google Search Ads',         desc:'Highly relevant text ads targeting high-intent keywords with smart bidding.' },
          { title:'Google Display Network',    desc:'Visually rich banner campaigns for awareness and remarketing.' },
          { title:'Meta Ads (FB & IG)',        desc:'Precise audience targeting with creatives that stop the scroll.' },
          { title:'Shopping Campaigns',        desc:'Product listing ads for e-commerce with optimised product feeds.' },
          { title:'YouTube Advertising',       desc:'Skippable and non-skippable video ads reaching the right viewers.' },
          { title:'Remarketing',               desc:'Re-engage warm audiences across Google and social with tailored messaging.' },
          { title:'Landing Page Optimisation', desc:'CRO-focused landing pages that convert your paid traffic.' },
          { title:'Detailed Reporting',        desc:'Real-time dashboards showing spend, clicks, conversions, and ROAS.' },
        ],
        process: [
          { step:'01', title:'Account Audit',       desc:'Review existing campaigns (if any) and identify waste and opportunity.' },
          { step:'02', title:'Keyword & Audience',  desc:'Build the targeting foundation — search terms, audiences, and match types.' },
          { step:'03', title:'Ad Creative',         desc:'Write and design compelling ads with clear value props and CTAs.' },
          { step:'04', title:'Launch & Monitor',    desc:'Go live with controlled budgets and daily performance checks.' },
          { step:'05', title:'Optimise & Scale',    desc:'Weekly bid adjustments, negative keywords, and creative tests to improve KPIs.' },
        ],
        faqs: [
          { q:'What is the minimum budget required?', a:'We recommend a minimum ad spend of ₹30,000/month to generate statistically meaningful data for optimisation.' },
          { q:'How quickly will I see results?', a:'PPC can drive traffic from day one. Optimised performance typically matures after 4–8 weeks of data collection.' },
          { q:'Do you charge a management fee on top of ad spend?', a:'Yes — our management fee is separate from your ad budget paid directly to Google/Meta.' },
        ],
      },
      {
        slug: 'email-content-marketing',
        title: 'Email & Content Marketing',
        tagline: 'Nurture leads. Build authority. Drive revenue on autopilot.',
        description: 'We craft email sequences and content strategies that keep your brand top-of-mind through every stage of the buyer journey — from first touchpoint to loyal repeat customer. Great content builds compounding assets that pay dividends forever.',
        icon: '✉️',
        features: [
          { title:'Email Strategy',            desc:'Full customer journey mapping with trigger-based automation flows.' },
          { title:'Newsletter Campaigns',      desc:'Beautifully designed newsletters that people actually read and click.' },
          { title:'Drip Sequences',            desc:'Welcome, onboarding, nurture, and win-back sequences built in your ESP.' },
          { title:'Blog & Article Writing',    desc:'SEO-optimised long-form content that ranks and drives organic traffic.' },
          { title:'Lead Magnets',              desc:'eBooks, guides, checklists, and webinars that grow your list.' },
          { title:'Content Calendar',          desc:'6-month editorial calendar aligned to your product launches and seasons.' },
          { title:'A/B Testing',               desc:'Subject line, CTA, and layout tests to continuously improve open and click rates.' },
          { title:'Analytics & Reporting',     desc:'Deliverability, open rate, click rate, and revenue attribution reporting.' },
        ],
        process: [
          { step:'01', title:'Audience Research',   desc:'Map your subscriber segments and content topics to their pain points.' },
          { step:'02', title:'Content Planning',    desc:'Build the editorial calendar and email sequence blueprints.' },
          { step:'03', title:'Create & Design',     desc:'Write, design, and code every email and content piece.' },
          { step:'04', title:'Automate & Send',     desc:'Set up automations and schedule campaigns in your ESP.' },
          { step:'05', title:'Analyse & Improve',   desc:'Monthly performance review with subscriber growth and revenue tracking.' },
        ],
        faqs: [
          { q:'Which email platforms do you work with?', a:'Mailchimp, Klaviyo, HubSpot, ActiveCampaign, SendGrid, and most major ESPs.' },
          { q:'How often should I send emails?', a:'Frequency depends on your audience and industry — we recommend 1–4 times per month for most B2C brands, less for B2B.' },
          { q:'Can you migrate our existing email list?', a:'Yes, we handle ESP migration, list cleaning, and re-engagement campaigns as part of onboarding.' },
        ],
      },
    ],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'Fast, beautiful websites that convert visitors into customers.',
    description: 'We design and develop websites that are fast, accessible, and built to rank — from marketing sites to complex web applications. Every pixel and every line of code serves a purpose: growing your business.',
    icon: '💻',
    stats: [{ n:'150+', label:'Sites Launched' }, { n:'99%', label:'Uptime SLA' }, { n:'<2s', label:'Avg Load Time' }],
    process: [
      { step:'01', title:'Discovery',          desc:'Requirements, sitemap, tech stack selection, and project roadmap.' },
      { step:'02', title:'Design',             desc:'Wireframes, UI mockups, and prototype reviews until you love it.' },
      { step:'03', title:'Development',        desc:'Clean, well-documented code built on the agreed stack.' },
      { step:'04', title:'Launch & Support',   desc:'Testing, deployment, and 30-day post-launch support included.' },
    ],
    subs: [
      {
        slug: 'custom-web-apps',
        title: 'Custom Web Applications',
        tagline: 'Complex problems. Elegant digital solutions.',
        description: 'When off-the-shelf software doesn\'t cut it, we build bespoke web applications tailored precisely to your workflows, users, and scale. From SaaS platforms to internal tools, we deliver performant, maintainable code.',
        icon: '⚙️',
        features: [
          { title:'React / Next.js Frontend',   desc:'Component-driven UIs with server-side rendering for blazing performance.' },
          { title:'Node / Laravel Backend',      desc:'Scalable APIs built on battle-tested frameworks with clean architecture.' },
          { title:'Database Design',             desc:'PostgreSQL, MySQL, MongoDB — structured for your query patterns and scale.' },
          { title:'Authentication & Auth',       desc:'OAuth, JWT, role-based access, and multi-tenant support.' },
          { title:'REST & GraphQL APIs',         desc:'Well-documented APIs ready for mobile apps, partners, and integrations.' },
          { title:'Cloud Deployment',            desc:'AWS, GCP, or Azure — containerised with Docker and CI/CD pipelines.' },
          { title:'Automated Testing',           desc:'Unit, integration, and E2E tests so releases never break production.' },
          { title:'Ongoing Maintenance',         desc:'Post-launch retainer plans to keep your app secure and up-to-date.' },
        ],
        process: [
          { step:'01', title:'Discovery & Planning', desc:'Define user stories, data models, and system architecture.' },
          { step:'02', title:'UI/UX Design',          desc:'Figma prototypes reviewed and approved before a single line of code.' },
          { step:'03', title:'Agile Development',     desc:'Two-week sprints with demo calls and your team invited to review.' },
          { step:'04', title:'QA & Testing',          desc:'Full test coverage — functional, security, performance, and device testing.' },
          { step:'05', title:'Deploy & Monitor',      desc:'Production deployment with uptime monitoring and on-call support.' },
        ],
        faqs: [
          { q:'How do you handle project communication?', a:'You get a dedicated project manager, a Slack channel, and bi-weekly demo calls. Total transparency.' },
          { q:'What if I need to change requirements mid-project?', a:'We use agile methodology so scope changes are handled via a formal change-request process with clear cost and timeline impact.' },
          { q:'Who owns the source code?', a:'You do — 100%. We hand over the full repository with documentation on completion.' },
        ],
      },
      {
        slug: 'ecommerce',
        title: 'E-Commerce Solutions',
        tagline: 'Sell more. Everywhere. Always.',
        description: 'We build e-commerce stores that are fast to browse, frictionless to buy from, and easy to manage. From Shopify customisation to full custom storefronts, we create shopping experiences that convert browsers into buyers.',
        icon: '🛒',
        features: [
          { title:'Shopify Development',       desc:'Custom themes, apps, and Shopify Plus solutions for high-volume merchants.' },
          { title:'WooCommerce',               desc:'Powerful WordPress-based stores with complete plugin and payment customisation.' },
          { title:'Custom Storefronts',        desc:'Headless commerce with Next.js and Shopify/Medusa for ultimate flexibility.' },
          { title:'Payment Integration',       desc:'Razorpay, Stripe, PayU, PayPal, and all major Indian payment gateways.' },
          { title:'Inventory Management',      desc:'Stock syncing, low-stock alerts, and multi-warehouse support.' },
          { title:'Product Catalogue Setup',   desc:'Bulk import, variant setup, SEO-optimised product pages.' },
          { title:'Mobile Optimisation',       desc:'Mobile-first design with thumb-friendly UX — 60%+ traffic is mobile.' },
          { title:'Analytics & Conversion',    desc:'Google Analytics 4, heatmaps, and A/B testing for continuous CRO.' },
        ],
        process: [
          { step:'01', title:'Store Strategy',     desc:'Platform selection, feature scoping, and integration requirements.' },
          { step:'02', title:'Design & UX',        desc:'Conversion-focused design — from homepage to checkout funnel.' },
          { step:'03', title:'Build & Integrate',  desc:'Development, payment gateway setup, shipping, and third-party tools.' },
          { step:'04', title:'Product Setup',      desc:'Product upload, category structure, and SEO metadata.' },
          { step:'05', title:'Launch & Grow',      desc:'Go-live, Google Shopping setup, and first-month performance review.' },
        ],
        faqs: [
          { q:'Shopify or WooCommerce — which is better?', a:'Shopify is easier to manage and scales effortlessly. WooCommerce gives more customisation control. We recommend the right one based on your products, team, and growth plan.' },
          { q:'Can you migrate my existing store?', a:'Yes. We migrate products, customers, orders, and SEO URLs with zero downtime.' },
          { q:'Do you help with inventory and fulfilment integrations?', a:'Absolutely — we integrate with Shiprocket, Delhivery, Unicommerce, and other Indian logistics platforms.' },
        ],
      },
      {
        slug: 'cms-wordpress',
        title: 'CMS & WordPress',
        tagline: 'Your website, fully in your control.',
        description: 'We build powerful, customised WordPress and headless CMS websites that your team can manage without a developer. Beautiful on the front, intuitive on the back — no technical knowledge required.',
        icon: '📝',
        features: [
          { title:'Custom WordPress Themes',   desc:'Pixel-perfect, block-editor-compatible themes built from scratch or from Figma.' },
          { title:'Plugin Development',        desc:'Custom plugins for any functionality your site needs — no bloated off-the-shelf solutions.' },
          { title:'Elementor / Gutenberg',     desc:'Drag-and-drop page builders configured so your team can edit with ease.' },
          { title:'WP Multisite',              desc:'Single WordPress install managing multiple sites for franchises or agencies.' },
          { title:'Headless WordPress',        desc:'WordPress as a backend CMS with React/Next.js frontend for maximum performance.' },
          { title:'Security Hardening',        desc:'Two-factor auth, file permission audits, WAF setup, and malware scanning.' },
          { title:'Speed Optimisation',        desc:'Caching, CDN, image compression, and database tuning for sub-2s loads.' },
          { title:'Maintenance Plans',         desc:'Monthly updates, backups, uptime monitoring, and priority support.' },
        ],
        process: [
          { step:'01', title:'Scope & Plan',      desc:'Sitemap, page structure, plugin stack, and hosting recommendation.' },
          { step:'02', title:'Design',             desc:'Custom design in Figma matched to your brand guidelines.' },
          { step:'03', title:'Build',              desc:'Theme development, plugin configuration, and content migration.' },
          { step:'04', title:'Training',           desc:'1-hour live CMS training session so your team is fully independent.' },
          { step:'05', title:'Launch & Maintain',  desc:'Go-live checklist, DNS setup, and optional monthly maintenance.' },
        ],
        faqs: [
          { q:'Will I be able to add pages myself after launch?', a:'Yes — we build and train you on an intuitive page builder. Adding pages, blog posts, and content takes minutes.' },
          { q:'Is WordPress secure?', a:'WordPress core is very secure. Issues arise from unmanaged plugins and poor hosting. We harden every site we build.' },
          { q:'Can you improve my existing WordPress site instead of rebuilding?', a:'Often yes. We offer audits to assess whether a rebuild or renovation is more cost-effective.' },
        ],
      },
      {
        slug: 'landing-pages',
        title: 'Landing Page Design',
        tagline: 'One goal. One page. Maximum conversions.',
        description: 'A great landing page is the difference between an ad that burns money and one that prints it. We design and build high-converting landing pages rooted in behavioural psychology and tested conversion patterns.',
        icon: '🚀',
        features: [
          { title:'CRO-First Design',           desc:'Every layout decision is driven by conversion data and user psychology principles.' },
          { title:'A/B Test Ready',             desc:'Multiple variants built-in for Google Optimize or VWO split testing.' },
          { title:'Mobile-Perfect',             desc:'Pixel-perfect mobile layouts since the majority of your traffic is mobile.' },
          { title:'Lightning Fast',             desc:'Sub-1.5s load times on mobile — because every second costs conversions.' },
          { title:'Lead Capture Forms',         desc:'Integrated with HubSpot, Mailchimp, Klaviyo, or your CRM of choice.' },
          { title:'Video Backgrounds',          desc:'Auto-play product demos or testimonial reels embedded without hurting speed.' },
          { title:'Social Proof Sections',      desc:'Testimonials, client logos, review widgets, and trust badges strategically placed.' },
          { title:'Analytics Setup',            desc:'GA4, Meta Pixel, Google Ads conversion tracking — all wired up on day one.' },
        ],
        process: [
          { step:'01', title:'Brief & Research',    desc:'Understand your offer, audience, traffic source, and current conversion rate.' },
          { step:'02', title:'Copy & Structure',    desc:'Write the headline, subheads, bullets, and CTA before designing.' },
          { step:'03', title:'Design',              desc:'High-fidelity Figma mockup with mobile and desktop views for approval.' },
          { step:'04', title:'Build & Integrate',  desc:'Developed in your preferred platform with all tracking and form integrations.' },
          { step:'05', title:'Test & Optimise',    desc:'Post-launch heatmap and session recording review with CRO recommendations.' },
        ],
        faqs: [
          { q:'How long does a landing page take to build?', a:'Typically 5–10 business days from brief to live, depending on complexity and revision rounds.' },
          { q:'Which platform do you build on?', a:'We can build on any platform — WordPress, Webflow, Unbounce, Framer, or plain HTML/CSS for maximum speed.' },
          { q:'Can you write the copy too?', a:'Yes. Our copywriters specialise in direct-response copy that sells. Copywriting is available as an add-on.' },
        ],
      },
    ],
  },
  {
    slug: 'app-development',
    title: 'App Development',
    tagline: 'Mobile experiences your users will keep coming back to.',
    description: 'We build iOS and Android apps that are beautiful, performant, and built to scale. From MVP to enterprise-grade, our mobile team has shipped apps across fintech, health, e-commerce, and edtech.',
    icon: '📲',
    stats: [{ n:'80+', label:'Apps Shipped' }, { n:'4.8★', label:'Avg App Rating' }, { n:'5M+', label:'Total Downloads' }],
    process: [
      { step:'01', title:'Discovery',        desc:'User research, feature prioritisation, and MVP scope definition.' },
      { step:'02', title:'Design',           desc:'Intuitive UX flows and pixel-perfect UI in Figma.' },
      { step:'03', title:'Development',      desc:'Agile sprints with bi-weekly builds delivered to your device.' },
      { step:'04', title:'Launch & Scale',   desc:'App Store submission, crash monitoring, and growth features.' },
    ],
    subs: [
      {
        slug: 'ios-android',
        title: 'iOS & Android Apps',
        tagline: 'Native performance. Cross-platform reach.',
        description: 'We develop fully native iOS (Swift) and Android (Kotlin) apps when you need the absolute best performance and access to all platform APIs. For most projects, we also recommend cross-platform approaches that cut cost without cutting quality.',
        icon: '📱',
        features: [
          { title:'Swift / SwiftUI (iOS)',     desc:'Native iOS apps built with Swift and SwiftUI for buttery-smooth performance.' },
          { title:'Kotlin / Jetpack (Android)',desc:'Modern Android development with Kotlin and Jetpack Compose.' },
          { title:'Push Notifications',        desc:'Rich push notifications with deep linking and segmented campaigns.' },
          { title:'Offline Support',           desc:'Local data persistence so your app works without an internet connection.' },
          { title:'In-App Purchases',          desc:'Subscription and one-time purchase flows for both App Store and Google Play.' },
          { title:'Maps & Location',           desc:'Google Maps, Apple Maps, real-time location tracking, and geofencing.' },
          { title:'Camera & Biometrics',       desc:'Face ID, Touch ID, camera, and document scanner integration.' },
          { title:'App Store Submission',      desc:'End-to-end submission to both stores, including screenshots and metadata.' },
        ],
        process: [
          { step:'01', title:'Product Definition', desc:'User stories, feature list, tech architecture, and timeline.' },
          { step:'02', title:'UI/UX Design',        desc:'Screen flows, wireframes, and high-fidelity Figma prototypes.' },
          { step:'03', title:'Agile Build',          desc:'2-week sprints with TestFlight / Firebase App Distribution builds.' },
          { step:'04', title:'QA & Testing',         desc:'Device matrix testing, crash testing, and user acceptance testing.' },
          { step:'05', title:'Store Launch',          desc:'App Store & Play Store submission, approval, and go-live support.' },
        ],
        faqs: [
          { q:'Native or cross-platform — which do you recommend?', a:'For apps needing deep hardware access or maximum performance, native is best. For most business apps, React Native or Flutter delivers 95% of the experience at 60% of the cost.' },
          { q:'How long does an app take to build?', a:'A focused MVP takes 8–16 weeks. Feature-rich apps can take 4–6 months. We always provide a detailed estimate after discovery.' },
          { q:'Can you update an app I built with another agency?', a:'Yes — we conduct a codebase audit first to assess quality and estimate effort, then propose a takeover plan.' },
        ],
      },
      {
        slug: 'react-native-flutter',
        title: 'React Native & Flutter',
        tagline: 'One codebase. Two platforms. Zero compromise.',
        description: 'React Native and Flutter let us build high-quality iOS and Android apps from a single codebase — slashing development time and cost without sacrificing the native look and feel your users expect.',
        icon: '⚛️',
        features: [
          { title:'React Native Development',  desc:'JavaScript-based cross-platform apps sharing 90%+ code between iOS and Android.' },
          { title:'Flutter Development',       desc:'Dart-powered apps with beautiful Material and Cupertino widgets on both platforms.' },
          { title:'Platform-Specific UX',      desc:'Components that respect iOS and Android design guidelines — not generic hybrid UI.' },
          { title:'Native Modules',            desc:'Bridge to native code for any features the JS layer can\'t reach.' },
          { title:'State Management',          desc:'Redux, Zustand, MobX, or Riverpod — the right solution for your app\'s complexity.' },
          { title:'API Integration',           desc:'REST, GraphQL, WebSocket, and real-time Firebase integrations.' },
          { title:'OTA Updates',               desc:'Push JavaScript bundle updates to users without an app store release.' },
          { title:'Performance Profiling',     desc:'Render time, memory, and janky frame audits to keep your app 60fps.' },
        ],
        process: [
          { step:'01', title:'Stack Selection', desc:'Choose React Native or Flutter based on team, timeline, and feature needs.' },
          { step:'02', title:'Architecture',    desc:'Folder structure, state management pattern, and API layer design.' },
          { step:'03', title:'UI Build',        desc:'Shared component library matching your brand and platform guidelines.' },
          { step:'04', title:'Feature Sprints', desc:'Iterative feature delivery with builds shipped to your phone every 2 weeks.' },
          { step:'05', title:'Deploy & Monitor', desc:'Store submission plus crash analytics and performance monitoring setup.' },
        ],
        faqs: [
          { q:'React Native or Flutter — which is better?', a:'React Native suits teams with web experience and large ecosystems. Flutter offers more consistent UI and faster rendering. We recommend Flutter for new projects in 2025.' },
          { q:'Are cross-platform apps as fast as native?', a:'For 95% of use cases, yes. The only exceptions are graphics-intensive apps and apps needing deep platform APIs — where native is still preferred.' },
          { q:'Can I hire your developers to join my existing team?', a:'Yes — see our Hire a Developer service where we offer dedicated React Native and Flutter specialists.' },
        ],
      },
      {
        slug: 'app-ui-ux-design',
        title: 'App UI/UX Design',
        tagline: 'Apps people love to use from the very first tap.',
        description: 'Great apps aren\'t just functional — they\'re delightful. Our mobile design team creates intuitive user flows, stunning interfaces, and micro-interactions that keep users engaged and coming back.',
        icon: '🎨',
        features: [
          { title:'User Research',             desc:'Interviews, surveys, and competitive analysis to ground every design decision.' },
          { title:'Information Architecture',  desc:'Logical navigation structures and user flows that feel instantly intuitive.' },
          { title:'Wireframing',               desc:'Low-fidelity wireframes to validate structure before investing in visual design.' },
          { title:'High-Fidelity UI',          desc:'Pixel-perfect Figma designs with full component libraries and style guides.' },
          { title:'Prototyping',               desc:'Interactive Figma prototypes for usability testing and stakeholder demos.' },
          { title:'Micro-interactions',        desc:'Animations, transitions, and haptic feedback that make the experience feel alive.' },
          { title:'Usability Testing',         desc:'Test with real users, capture insights, and iterate before development starts.' },
          { title:'Design Handoff',            desc:'Developer-ready Figma files with assets, specs, and a full component library.' },
        ],
        process: [
          { step:'01', title:'Discover',       desc:'User research, persona creation, and competitive benchmarking.' },
          { step:'02', title:'Define',         desc:'User journey maps, information architecture, and screen inventory.' },
          { step:'03', title:'Design',         desc:'Wireframes → UI mockups → interactive prototype.' },
          { step:'04', title:'Test',           desc:'Usability testing with real users and stakeholder review rounds.' },
          { step:'05', title:'Handoff',        desc:'Developer-ready files with full documentation and asset exports.' },
        ],
        faqs: [
          { q:'Do you follow iOS and Android design guidelines?', a:'Yes — we follow Apple\'s Human Interface Guidelines and Google\'s Material Design while keeping your brand identity front and centre.' },
          { q:'How many design revisions are included?', a:'Two full revision rounds per screen are included. Additional rounds are billed at an hourly rate.' },
          { q:'Can you work with our existing brand guidelines?', a:'Always. We extend your brand into the mobile context rather than starting from scratch.' },
        ],
      },
      {
        slug: 'api-integration',
        title: 'API Integration',
        tagline: 'Connect your tools. Eliminate your silos.',
        description: 'We integrate third-party APIs, build custom APIs, and connect your web apps, mobile apps, and internal systems so they all work together seamlessly. No more manual data entry, no more disconnected tools.',
        icon: '🔗',
        features: [
          { title:'REST API Development',      desc:'Clean, well-documented REST APIs following OpenAPI (Swagger) specifications.' },
          { title:'GraphQL APIs',              desc:'Flexible query APIs that let clients request exactly the data they need.' },
          { title:'Third-Party Integrations',  desc:'Stripe, Razorpay, Twilio, WhatsApp, Salesforce, HubSpot, and 500+ more.' },
          { title:'Webhook Setup',             desc:'Real-time event-driven integrations between your platforms.' },
          { title:'Payment Gateways',          desc:'All major Indian and international payment gateway integrations.' },
          { title:'SMS & WhatsApp',            desc:'Transactional messaging via Twilio, MSG91, and WhatsApp Business API.' },
          { title:'CRM & ERP',                 desc:'Salesforce, HubSpot, Zoho, SAP, and custom ERP integration.' },
          { title:'API Documentation',         desc:'Swagger / Postman documentation your team and partners can use immediately.' },
        ],
        process: [
          { step:'01', title:'Integration Map',  desc:'Document all systems, data flows, and integration requirements.' },
          { step:'02', title:'Architecture',     desc:'Design the integration layer — direct, middleware, or event-driven.' },
          { step:'03', title:'Build & Connect',  desc:'Develop integration code, error handling, and retry logic.' },
          { step:'04', title:'Test Thoroughly',  desc:'Unit tests, integration tests, and end-to-end flow validation.' },
          { step:'05', title:'Monitor',          desc:'Uptime monitoring, error alerting, and integration health dashboards.' },
        ],
        faqs: [
          { q:'Can you integrate with legacy systems?', a:'Yes — we have experience building adapters for SOAP services, legacy databases, and even FTP-based integrations.' },
          { q:'What if the third-party API changes?', a:'We build version-pinned integrations and monitor API changelogs. Updates are included in our maintenance plans.' },
          { q:'How do you handle API security?', a:'OAuth 2.0, API key rotation, rate limiting, and encrypted credential storage are standard in all our integrations.' },
        ],
      },
    ],
  },
  {
    slug: 'hire-developer',
    title: 'Hire a Developer',
    tagline: 'Pre-vetted talent. Zero hiring headaches.',
    description: 'Skip the months-long hiring process. We provide dedicated, pre-vetted developers who integrate seamlessly with your team, match your culture, and start delivering from week one. Full-time, part-time, or team augmentation — your call.',
    icon: '👨‍💻',
    stats: [{ n:'50+', label:'Developers Available' }, { n:'72h', label:'Avg Time to Hire' }, { n:'4.9★', label:'Client Satisfaction' }],
    process: [
      { step:'01', title:'Share Requirements', desc:'Tell us the role, stack, seniority, and time zone requirements.' },
      { step:'02', title:'Get Profiles',        desc:'We shortlist 2–3 matched candidates within 48 hours.' },
      { step:'03', title:'Interview',           desc:'You interview candidates directly — no middlemen, no surprises.' },
      { step:'04', title:'Start Immediately',   desc:'Selected developer onboards and starts within 72 hours.' },
    ],
    subs: [
      {
        slug: 'full-stack',
        title: 'Full-Stack Developers',
        tagline: 'End-to-end engineers who own the whole product.',
        description: 'Our full-stack developers are comfortable across the entire web stack — from database design and API development to frontend components and deployment pipelines. They can lead a project independently or work within your existing team.',
        icon: '🧑‍💻',
        features: [
          { title:'React / Next.js',           desc:'Component-driven frontends with server-side rendering and static generation.' },
          { title:'Node.js / Express',         desc:'Fast, scalable backend services with RESTful and GraphQL APIs.' },
          { title:'Laravel / PHP',             desc:'Full-featured backend framework for complex business logic and CMS.' },
          { title:'Python / Django / FastAPI', desc:'Data-centric backends and ML-integrated applications.' },
          { title:'PostgreSQL / MySQL',        desc:'Relational database design, query optimisation, and migration management.' },
          { title:'MongoDB / Redis',           desc:'NoSQL and caching layers for high-throughput, real-time applications.' },
          { title:'AWS / Docker / CI/CD',      desc:'Cloud deployment, containerisation, and automated release pipelines.' },
          { title:'TypeScript',               desc:'Type-safe codebases that scale without accumulating technical debt.' },
        ],
        process: [
          { step:'01', title:'Requirement Brief',  desc:'Share your stack, current team, and the role you need to fill.' },
          { step:'02', title:'Talent Match',        desc:'We match you with full-stack developers whose skills fit your exact needs.' },
          { step:'03', title:'Technical Interview', desc:'You conduct a technical interview — code review, live coding, or architecture discussion.' },
          { step:'04', title:'Onboard',             desc:'Contracts signed, tools access provisioned, and developer starts within 72 hours.' },
          { step:'05', title:'Ongoing Support',     desc:'Monthly check-ins from 8dots to ensure performance and satisfaction.' },
        ],
        faqs: [
          { q:'What experience levels are available?', a:'Junior (1–3 years), Mid-level (3–5 years), and Senior (5+ years) full-stack developers are available.' },
          { q:'Can the developer work in my time zone?', a:'We have developers across IST, GMT, and EST time zones. Most are flexible with overlap hours.' },
          { q:'What if the developer isn\'t the right fit?', a:'We offer a 2-week risk-free trial. If it\'s not working, we replace the developer at no charge.' },
        ],
      },
      {
        slug: 'frontend',
        title: 'Frontend Specialists',
        tagline: 'Pixel-perfect interfaces. Blazing fast performance.',
        description: 'Our frontend specialists live in the browser. They turn designs into flawless, accessible, performant interfaces using modern JavaScript frameworks — and they care deeply about the details that delight users.',
        icon: '🎨',
        features: [
          { title:'React & Next.js',           desc:'Production-grade React apps with SSR, ISR, and the App Router.' },
          { title:'Vue.js / Nuxt',             desc:'Progressive JavaScript apps with clean component architecture.' },
          { title:'TypeScript',               desc:'Type-safe UI code that scales without bugs accumulating over time.' },
          { title:'Tailwind CSS',              desc:'Utility-first styling for rapid, consistent, and responsive UI development.' },
          { title:'Three.js / WebGL',          desc:'3D visualisations, interactive data viz, and immersive web experiences.' },
          { title:'Animation (GSAP / Framer)', desc:'Smooth, performant animations that enhance — not distract from — the UX.' },
          { title:'Accessibility (WCAG)',      desc:'Keyboard navigation, ARIA labels, and contrast ratios that meet WCAG 2.1 AA.' },
          { title:'Performance Optimisation',  desc:'Core Web Vitals tuning — LCP, CLS, FID — for top Google PageSpeed scores.' },
        ],
        process: [
          { step:'01', title:'Skills Assessment', desc:'Share your tech stack, design tools, and the type of UI work needed.' },
          { step:'02', title:'Portfolio Review',  desc:'We shortlist specialists whose past work matches your product type.' },
          { step:'03', title:'Interview & Trial', desc:'Technical interview plus a small paid trial task to validate fit.' },
          { step:'04', title:'Start Building',    desc:'Developer integrates with your team, tools, and sprint rhythm from day one.' },
        ],
        faqs: [
          { q:'Do your frontend devs do design too?', a:'Most are strong in CSS and can implement designs pixel-perfectly. For original UI design, we recommend pairing with our design team.' },
          { q:'Can they work with my Figma designs?', a:'Absolutely — our frontend specialists are proficient in Figma handoff and love translating great designs to code.' },
          { q:'What about testing and accessibility?', a:'Our developers write unit tests with Jest and follow WCAG accessibility guidelines as standard practice.' },
        ],
      },
      {
        slug: 'backend',
        title: 'Backend Engineers',
        tagline: 'Robust systems. Scalable architecture. Rock-solid APIs.',
        description: 'Our backend engineers design and build the infrastructure that powers your product. From high-throughput APIs to complex data pipelines and microservices, they ensure your system is fast, secure, and ready to grow.',
        icon: '🖥️',
        features: [
          { title:'Node.js / Express',         desc:'Event-driven, non-blocking backend services for high concurrency.' },
          { title:'Python / Django / FastAPI', desc:'Rapid API development and ML-ready backends in Python.' },
          { title:'Laravel / PHP',             desc:'Elegant backend logic for CMS, e-commerce, and business applications.' },
          { title:'Microservices',             desc:'Distributed service architectures with Docker, Kubernetes, and message queues.' },
          { title:'Database Architecture',     desc:'Schema design, query optimisation, and migration management at scale.' },
          { title:'Caching & Queues',          desc:'Redis, RabbitMQ, and SQS for performant, async-first architectures.' },
          { title:'Security',                  desc:'OWASP best practices, input validation, rate limiting, and penetration test readiness.' },
          { title:'DevOps / CI/CD',            desc:'Infrastructure as code, automated deployments, and zero-downtime releases.' },
        ],
        process: [
          { step:'01', title:'Tech Brief',        desc:'Share your current stack, scale requirements, and the backend challenges you face.' },
          { step:'02', title:'Match & Vet',        desc:'We match engineers with proven experience in your exact tech stack.' },
          { step:'03', title:'Architecture Review', desc:'Optional system design interview to validate their approach to your problems.' },
          { step:'04', title:'Embed & Deliver',   desc:'Engineer joins your team on your tools, standups, and sprint cadence.' },
        ],
        faqs: [
          { q:'Can your backend engineers work with my existing codebase?', a:'Yes — we always conduct a codebase onboarding session first so the engineer understands existing patterns before touching production.' },
          { q:'Do they handle deployment and DevOps too?', a:'Most of our backend engineers are comfortable with AWS, GCP, and Docker. For dedicated DevOps, we also have infrastructure specialists available.' },
          { q:'What is the minimum engagement length?', a:'Minimum 1 month. We recommend at least 3 months for meaningful integration and output.' },
        ],
      },
      {
        slug: 'dedicated-teams',
        title: 'Dedicated Development Teams',
        tagline: 'Your entire tech team. Fully yours.',
        description: 'Scale your product development with a complete, dedicated team from 8dots — a full-stack pod of developers, a UI/UX designer, QA engineer, and a project manager working exclusively on your product at a fraction of the cost of hiring in-house.',
        icon: '👥',
        features: [
          { title:'Full-Stack Developers',     desc:'Frontend and backend engineers building across your entire product stack.' },
          { title:'UI/UX Designer',            desc:'Dedicated designer handling all product design and user research.' },
          { title:'QA Engineer',               desc:'Manual and automated testing ensuring every release is production-ready.' },
          { title:'Project Manager',           desc:'Your single point of contact managing sprints, timelines, and stakeholder updates.' },
          { title:'DevOps Support',            desc:'Infrastructure, deployment pipelines, and uptime monitoring.' },
          { title:'Agile Ceremonies',          desc:'Daily standups, sprint planning, reviews, and retrospectives as standard.' },
          { title:'Transparent Reporting',     desc:'Weekly sprint reports, burn-down charts, and velocity tracking.' },
          { title:'Flexible Scaling',          desc:'Add or remove team members as your product phase demands — no long-term lock-in.' },
        ],
        process: [
          { step:'01', title:'Team Design',       desc:'We design the optimal team composition based on your product and roadmap.' },
          { step:'02', title:'Onboarding',         desc:'Team meets stakeholders, gets access to tools, and aligns on processes.' },
          { step:'03', title:'Sprint 0',           desc:'Architecture decisions, tech setup, and first milestone planning.' },
          { step:'04', title:'Build & Ship',       desc:'Fortnightly sprints with demo calls and continuous delivery.' },
          { step:'05', title:'Review & Grow',      desc:'Quarterly team performance reviews and team scaling recommendations.' },
        ],
        faqs: [
          { q:'How is a dedicated team different from staff augmentation?', a:'A dedicated team is a complete, self-managing pod that owns product delivery. Staff augmentation means adding individuals to your existing team.' },
          { q:'Do I have full control over the team\'s priorities?', a:'Yes — you own the product backlog and set priorities. The PM facilitates, but your vision drives the roadmap.' },
          { q:'What is the minimum team size?', a:'We recommend a minimum of 3 people (1 dev + 1 designer + PM) for a functional team. We can scale from there.' },
        ],
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'Visuals that speak before you say a word.',
    description: 'We create bold, purposeful design that communicates your brand story instantly. From the first logo sketch to a full brand system, every visual we produce is crafted to make your business unforgettable.',
    icon: '🎨',
    stats: [{ n:'500+', label:'Designs Delivered' }, { n:'100+', label:'Brands Created' }, { n:'48h', label:'Turnaround' }],
    process: [
      { step:'01', title:'Brief',         desc:'Understand your brand values, audience, competitors, and aesthetic references.' },
      { step:'02', title:'Concept',       desc:'Multiple initial concepts for you to react to and refine.' },
      { step:'03', title:'Refine',        desc:'Iteration rounds until the design is exactly right.' },
      { step:'04', title:'Deliver',       desc:'Final files in all formats — print, digital, vector, and animated.' },
    ],
    subs: [
      {
        slug: 'logo-branding',
        title: 'Logo & Brand Identity',
        tagline: 'The visual foundation your business stands on.',
        description: 'A great logo is just the beginning. We build complete brand identity systems — logo, colour palette, typography, brand voice, and usage guidelines — that ensure your business looks and feels consistent everywhere.',
        icon: '✏️',
        features: [
          { title:'Logo Design',               desc:'3 distinct concepts delivered with unlimited refinements on the chosen direction.' },
          { title:'Colour Palette',            desc:'Primary, secondary, and functional colours with hex, RGB, and CMYK values.' },
          { title:'Typography System',         desc:'Primary and secondary typefaces with scale, weight, and usage guidelines.' },
          { title:'Brand Voice',               desc:'Tone of voice guidelines — how you write, not just how you look.' },
          { title:'Business Stationery',       desc:'Business card, letterhead, email signature, and presentation template.' },
          { title:'Brand Guidelines PDF',      desc:'Complete 20–40 page brand standards document for internal and agency use.' },
          { title:'Social Media Kit',          desc:'Profile pictures, cover photos, and post templates for all major platforms.' },
          { title:'File Pack',                 desc:'All logo variants in SVG, PNG, PDF, and AI — on dark, light, and transparent.' },
        ],
        process: [
          { step:'01', title:'Brand Discovery',  desc:'Brand questionnaire, mood board creation, and competitor visual audit.' },
          { step:'02', title:'Concept Design',   desc:'3 distinct logo directions presented with rationale.' },
          { step:'03', title:'Refinement',       desc:'Deep-dive on your chosen direction with unlimited minor iterations.' },
          { step:'04', title:'System Build',     desc:'Expand the chosen logo into a full identity system.' },
          { step:'05', title:'Guidelines & Files', desc:'Brand guidelines document and full file pack delivered.' },
        ],
        faqs: [
          { q:'How many logo concepts do we get?', a:'Three distinct concepts are presented initially. Once you choose a direction, we refine it through revision rounds until it\'s perfect.' },
          { q:'Do we own the final design?', a:'100%. You receive all source files and full copyright ownership upon final payment.' },
          { q:'Can you redesign an existing logo?', a:'Yes — we offer logo evolution (refining what exists) and full redesigns. We always start with a discovery session to understand what to keep and what to change.' },
        ],
      },
      {
        slug: 'social-media-creatives',
        title: 'Social Media Creatives',
        tagline: 'Scroll-stopping content designed to perform.',
        description: 'We design social media content that looks beautiful and drives engagement. From feed posts to reels covers, stories to carousel decks — our designers create content that\'s on-brand and optimised for each platform.',
        icon: '📸',
        features: [
          { title:'Feed Post Design',          desc:'Square, portrait, and landscape posts optimised for Instagram, LinkedIn, and Facebook.' },
          { title:'Story & Reels Templates',   desc:'Animated and static story templates your team can edit in Canva or Adobe.' },
          { title:'Carousel Design',           desc:'Multi-slide educational and storytelling carousels that drive saves and shares.' },
          { title:'Ad Creatives',              desc:'High-converting static and animated ad creatives for paid social campaigns.' },
          { title:'Profile Assets',            desc:'Profile pictures, highlight covers, link-in-bio pages, and cover banners.' },
          { title:'Branded Templates',         desc:'Editable Canva or Figma templates your team can use independently.' },
          { title:'Motion Graphics',           desc:'Short animated posts and looping videos for higher organic reach.' },
          { title:'Content Calendar Design',   desc:'Monthly batches of designed posts ready to schedule.' },
        ],
        process: [
          { step:'01', title:'Brand Intake',     desc:'Review brand guidelines, content pillars, and platform priorities.' },
          { step:'02', title:'Template Design',  desc:'Build a master design system for your social media assets.' },
          { step:'03', title:'Monthly Batch',    desc:'Design the month\'s posts based on your content calendar.' },
          { step:'04', title:'Review & Revise',  desc:'Client review with two rounds of revisions before file delivery.' },
          { step:'05', title:'Deliver',          desc:'Files delivered in platform-ready dimensions and formats.' },
        ],
        faqs: [
          { q:'Do you design for specific platforms?', a:'Yes — every design is sized and optimised for its destination platform (Instagram 1080×1080, LinkedIn 1200×627, etc.).' },
          { q:'How many posts can you design per month?', a:'Our standard social package covers 20 designed posts per month across one brand. Custom volumes available.' },
          { q:'Can we edit the templates ourselves?', a:'Yes — we deliver editable Canva links or Figma files so your team can make text/colour swaps independently.' },
        ],
      },
      {
        slug: 'print-packaging',
        title: 'Print & Packaging Design',
        tagline: 'Physical touchpoints that leave lasting impressions.',
        description: 'We design print and packaging materials that reinforce your brand at every physical touchpoint — from product boxes and labels to brochures, banners, and event materials.',
        icon: '📦',
        features: [
          { title:'Product Packaging',         desc:'Box, pouch, bottle, and label design with dieline templates ready for print.' },
          { title:'Brochures & Catalogues',    desc:'Multi-page brochures and product catalogues designed for impact and readability.' },
          { title:'Flyers & Posters',          desc:'Single-page marketing materials for campaigns, events, and promotions.' },
          { title:'Business Stationery',       desc:'Business cards, letterheads, envelopes, and notepads with full bleed printing specs.' },
          { title:'Exhibition & Banners',      desc:'Roll-up banners, pop-up stands, and exhibition booth graphics.' },
          { title:'Signage',                   desc:'Indoor and outdoor signage design with print vendor liaison.' },
          { title:'Mailer Kits',               desc:'Unboxing experience design for D2C brands — inserts, tissue, and packaging.' },
          { title:'Print Coordination',        desc:'We liaise directly with printers to ensure your files print perfectly.' },
        ],
        process: [
          { step:'01', title:'Brief',             desc:'Understand the piece, audience, print specs, and brand requirements.' },
          { step:'02', title:'Concept',           desc:'Layout and design concepts presented for initial direction approval.' },
          { step:'03', title:'Refine',            desc:'Revision rounds until the design is approved.' },
          { step:'04', title:'Artwork Prep',      desc:'Print-ready files prepared — CMYK, bleed, crop marks, and font outlines.' },
          { step:'05', title:'Print Liaison',     desc:'We send files to your printer and manage pre-press proofing.' },
        ],
        faqs: [
          { q:'Do you supply print-ready files?', a:'Always. Every file is delivered in CMYK at 300 DPI with bleed and crop marks — ready to send directly to your printer.' },
          { q:'Can you work with my printer\'s dieline template?', a:'Yes — supply the dieline and we design within its exact specifications.' },
          { q:'Do you offer printing services?', a:'We focus on design, but we work with trusted print partners across India and can manage the end-to-end process if needed.' },
        ],
      },
      {
        slug: 'motion-graphics',
        title: 'Motion Graphics',
        tagline: 'Ideas that move. Stories that stick.',
        description: 'Motion graphics add dimension to your brand storytelling. We create animated logos, explainer videos, social reels, and product demos that communicate complex ideas simply and memorably.',
        icon: '🎬',
        features: [
          { title:'Animated Logo',             desc:'A dynamic version of your logo for intros, outros, and digital touchpoints.' },
          { title:'Explainer Videos',          desc:'60–90 second animated explainers that turn complex products into simple stories.' },
          { title:'Social Reels & Shorts',     desc:'Short-form animated content optimised for Instagram, YouTube, and LinkedIn.' },
          { title:'Product Demo Videos',       desc:'App and product walkthroughs with screen recordings and motion overlays.' },
          { title:'Presentation Animation',    desc:'Animated pitch decks and investor presentations that command attention.' },
          { title:'Lower Thirds & Overlays',   desc:'Branded text animations for your video content and live streams.' },
          { title:'UI Animation',              desc:'Microanimations and transition designs exported for developer handoff.' },
          { title:'Brand Video',               desc:'Full brand story films combining motion graphics, footage, and voiceover.' },
        ],
        process: [
          { step:'01', title:'Script & Storyboard', desc:'Write the script and map out every scene before a frame is animated.' },
          { step:'02', title:'Style Frames',         desc:'Designed static frames showing the visual look and feel of the animation.' },
          { step:'03', title:'Animation',            desc:'Bring the storyboard to life with precise timing and branded motion.' },
          { step:'04', title:'Sound Design',         desc:'Background music and sound effects (or voiceover integration if provided).' },
          { step:'05', title:'Deliver',              desc:'Final video in MP4, MOV, and GIF formats at platform-required resolutions.' },
        ],
        faqs: [
          { q:'Do you write the script too?', a:'Yes — script writing is included for explainer videos. For brand videos, we collaborate with your team on messaging before scripting.' },
          { q:'How long does a motion graphics project take?', a:'A 60-second explainer video typically takes 3–4 weeks from brief to final delivery.' },
          { q:'Can you animate in our existing brand style?', a:'Absolutely — we build a motion style guide based on your existing brand identity so all animations feel cohesive.' },
        ],
      },
    ],
  },
];

/* ============================================================
   HELPERS
   ============================================================ */
const ROOT = path.join(__dirname);

function mkdir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function navbar(depth) {
  const root = '../'.repeat(depth);
  return `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="${root}index.html" class="logo">
        <img src="${root}logo.svg" alt="8dots logo" class="logo-img" />
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="${root}index.html#services">Services</a></li>
        <li><a href="${root}index.html#about">About</a></li>
        <li><a href="${root}index.html#work">Work</a></li>
        <li><a href="${root}index.html#contact">Contact</a></li>
      </ul>
      <a href="${root}index.html#contact" class="btn-nav">Get Started</a>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

function footer(depth) {
  const root = '../'.repeat(depth);
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${root}index.html" class="logo">
            <img src="${root}logo.svg" alt="8dots" class="logo-img logo-img--white" />
          </a>
          <p>Building digital products that make an impact. India's trusted IT partner for startups and enterprises.</p>
          <div class="social-links">
            <a href="#" class="social-btn">in</a>
            <a href="#" class="social-btn">𝕏</a>
            <a href="#" class="social-btn">ig</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="${root}services/digital-marketing/index.html">Digital Marketing</a></li>
            <li><a href="${root}services/website-development/index.html">Website Development</a></li>
            <li><a href="${root}services/app-development/index.html">App Development</a></li>
            <li><a href="${root}services/hire-developer/index.html">Hire a Developer</a></li>
            <li><a href="${root}services/graphic-design/index.html">Graphic Design</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="${root}index.html#about">About Us</a></li>
            <li><a href="${root}index.html#work">Portfolio</a></li>
            <li><a href="${root}index.html#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="mailto:info@8dots.in">info@8dots.in</a></li>
            <li><a href="tel:+917778882276">+91 77788 82276</a></li>
            <li><span>516, STC, Bopal, Ahmedabad, Gujarat 380058</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 8dots. All rights reserved. Crafted with ❤️ in India.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>`;
}

const BASE_URL = 'https://8dots.netlify.app';

function headTag(title, metaDesc, canonical, schema, depth) {
  const root = '../'.repeat(depth);
  const schemaJson = JSON.stringify(schema, null, 2);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <!-- Primary SEO -->
  <title>${title}</title>
  <meta name="description" content="${metaDesc}"/>
  <meta name="robots" content="index, follow"/>
  <meta name="author" content="8dots"/>
  <link rel="canonical" href="${BASE_URL}${canonical}"/>

  <!-- Open Graph -->
  <meta property="og:type" content="website"/>
  <meta property="og:site_name" content="8dots"/>
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${metaDesc}"/>
  <meta property="og:url" content="${BASE_URL}${canonical}"/>
  <meta property="og:image" content="${BASE_URL}/og-image.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:locale" content="en_IN"/>

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${metaDesc}"/>
  <meta name="twitter:image" content="${BASE_URL}/og-image.png"/>

  <!-- Sitemap reference -->
  <link rel="sitemap" type="application/xml" href="${BASE_URL}/sitemap.xml"/>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>

  <link rel="stylesheet" href="${root}style.css"/>
  <link rel="stylesheet" href="${root}service.css"/>

  <!-- Structured Data -->
  <script type="application/ld+json">${schemaJson}</script>
</head>
<body>`;
}

function scripts(depth) {
  const root = '../'.repeat(depth);
  return `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
  <script src="${root}service.js"></script>
</body>
</html>`;
}

/* ============================================================
   MAIN SERVICE PAGE
   ============================================================ */
function buildMainPage(svc) {
  const dir  = path.join(ROOT, 'services', svc.slug);
  mkdir(dir);
  const root = '../../';
  const depth = 2;
  const canonical = `/services/${svc.slug}/`;

  const metaDesc = `${svc.description.slice(0, 148).trim()}…`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": svc.title,
      "description": svc.description,
      "provider": {
        "@type": "Organization",
        "name": "8dots",
        "url": BASE_URL,
        "logo": `${BASE_URL}/logo.svg`,
        "email": "info@8dots.in",
        "address": { "@type": "PostalAddress", "streetAddress": "516, Shivam Trade Centre (STC), near One World West, opp. Saraswati Multispeciality Hospital, Bopal", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "postalCode": "380058", "addressCountry": "IN" }, "telephone": "+917778882276"
      },
      "url": `${BASE_URL}${canonical}`,
      "areaServed": "IN",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${svc.title} Services`,
        "itemListElement": svc.subs.map((s, i) => ({
          "@type": "Offer",
          "position": i + 1,
          "name": s.title,
          "description": s.tagline,
          "url": `${BASE_URL}/services/${svc.slug}/${s.slug}/`
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/#services` },
        { "@type": "ListItem", "position": 3, "name": svc.title, "item": `${BASE_URL}${canonical}` }
      ]
    }
  ];

  const pageTitle = `${svc.title} Services in India | 8dots Digital Agency`;

  const subCards = svc.subs.map(sub => `
        <a href="${sub.slug}/index.html" class="sub-card">
          <div class="sub-card-icon">${sub.icon}</div>
          <h3>${sub.title}</h3>
          <p>${sub.tagline}</p>
          <span class="sub-card-link">Explore →</span>
        </a>`).join('');

  const processSteps = svc.process.map(p => `
          <div class="process-step reveal">
            <div class="step-num">${p.step}</div>
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
          </div>`).join('');

  const statsHtml = svc.stats.map(s => `
          <div class="svc-stat">
            <span class="svc-stat-num">${s.n}</span>
            <p>${s.label}</p>
          </div>`).join('<div class="stat-divider"></div>');

  const html = `${headTag(pageTitle, metaDesc, canonical, schema, depth)}
${navbar(depth)}

  <section class="svc-hero">
    <canvas id="svcCanvas" data-scene="main"></canvas>
    <div class="container svc-hero-content">
      <div class="breadcrumb"><a href="${root}index.html">Home</a> <span>/</span> <a href="${root}index.html#services">Services</a> <span>/</span> <span>${svc.title}</span></div>
      <div class="hero-badge">${svc.icon} ${svc.title}</div>
      <h1>${svc.tagline}</h1>
      <p class="svc-hero-desc">${svc.description}</p>
      <div class="hero-cta">
        <a href="${root}index.html#contact" class="btn-primary">Start a Project</a>
        <a href="#sub-services" class="btn-ghost">Explore Sub-Services</a>
      </div>
    </div>
  </section>

  <section class="svc-stats-band">
    <div class="container svc-stats-row">
      ${statsHtml}
    </div>
  </section>

  <section class="svc-illustration-section">
    <div class="container svc-illustration-wrap reveal">
      <img src="${root}images/services/${svc.slug}.svg" alt="${svc.title} illustration" class="svc-illustration" loading="lazy" />
    </div>
  </section>

  <section class="sub-services-section" id="sub-services">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-tag">What's Included</p>
        <h2 class="section-title">Our <span class="outline-text">${svc.title}</span> Services</h2>
        <p class="section-sub">Click any service below to see full details, pricing, and our process.</p>
      </div>
      <div class="sub-services-grid">
        ${subCards}
      </div>
    </div>
  </section>

  <section class="process-section">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-tag">How We Work</p>
        <h2 class="section-title">Our <span class="outline-text">Process</span></h2>
      </div>
      <div class="process-grid">
        ${processSteps}
      </div>
    </div>
  </section>

  <section class="svc-cta-band">
    <canvas id="ctaBandCanvas"></canvas>
    <div class="svc-cta-content">
      <h2>Ready to grow with <span class="outline-text-inv">${svc.title}?</span></h2>
      <p>Let's build a strategy tailored to your goals.</p>
      <a href="${root}index.html#contact" class="btn-primary-inv btn-large">Get a Free Quote</a>
    </div>
  </section>

${footer(depth)}
${scripts(depth)}`;

  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✓ services/${svc.slug}/index.html`);
}

/* ============================================================
   SUB-SERVICE PAGE
   ============================================================ */
function buildSubPage(svc, sub) {
  const dir  = path.join(ROOT, 'services', svc.slug, sub.slug);
  mkdir(dir);
  const root  = '../../../';
  const depth = 3;
  const canonical = `/services/${svc.slug}/${sub.slug}/`;

  const metaDesc = `${sub.description.slice(0, 148).trim()}…`;
  const pageTitle = `${sub.title} | ${svc.title} | 8dots India`;

  const faqSchema = (sub.faqs || []).length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (sub.faqs || []).map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  } : null;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": sub.title,
      "description": sub.description,
      "provider": {
        "@type": "Organization",
        "name": "8dots",
        "url": BASE_URL,
        "logo": `${BASE_URL}/logo.svg`,
        "email": "info@8dots.in",
        "address": { "@type": "PostalAddress", "streetAddress": "516, Shivam Trade Centre (STC), near One World West, opp. Saraswati Multispeciality Hospital, Bopal", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "postalCode": "380058", "addressCountry": "IN" }, "telephone": "+917778882276"
      },
      "url": `${BASE_URL}${canonical}`,
      "areaServed": "IN",
      "serviceType": sub.title,
      "category": svc.title
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",           "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Services",       "item": `${BASE_URL}/#services` },
        { "@type": "ListItem", "position": 3, "name": svc.title,        "item": `${BASE_URL}/services/${svc.slug}/` },
        { "@type": "ListItem", "position": 4, "name": sub.title,        "item": `${BASE_URL}${canonical}` }
      ]
    },
    ...(faqSchema ? [faqSchema] : [])
  ];

  const featureCards = sub.features.map(f => `
          <div class="feature-card reveal">
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
          </div>`).join('');

  const processSteps = sub.process.map(p => `
          <div class="process-step reveal">
            <div class="step-num">${p.step}</div>
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
          </div>`).join('');

  const faqItems = (sub.faqs || []).map(f => `
        <div class="faq-item reveal">
          <button class="faq-q">${f.q} <span>+</span></button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>`).join('');

  // other subs for breadcrumb / related
  const relatedSubs = svc.subs.filter(s => s.slug !== sub.slug).map(s => `
        <a href="${root}services/${svc.slug}/${s.slug}/index.html" class="related-card">
          <span>${s.icon}</span>
          <div>
            <h4>${s.title}</h4>
            <p>${s.tagline}</p>
          </div>
          <span class="arrow">→</span>
        </a>`).join('');

  const html = `${headTag(pageTitle, metaDesc, canonical, schema, depth)}
${navbar(depth)}

  <section class="svc-hero">
    <canvas id="svcCanvas" data-scene="sub"></canvas>
    <div class="container svc-hero-content">
      <div class="breadcrumb">
        <a href="${root}index.html">Home</a> <span>/</span>
        <a href="${root}index.html#services">Services</a> <span>/</span>
        <a href="${root}services/${svc.slug}/index.html">${svc.title}</a> <span>/</span>
        <span>${sub.title}</span>
      </div>
      <div class="hero-badge">${sub.icon} ${sub.title}</div>
      <h1>${sub.tagline}</h1>
      <p class="svc-hero-desc">${sub.description}</p>
      <div class="hero-cta">
        <a href="${root}index.html#contact" class="btn-primary">Get Started</a>
        <a href="${root}services/${svc.slug}/index.html" class="btn-ghost">← Back to ${svc.title}</a>
      </div>
    </div>
  </section>

  <section class="svc-illustration-section">
    <div class="container svc-illustration-wrap reveal">
      <img src="${root}images/services/${sub.slug}.svg" alt="${sub.title} illustration" class="svc-illustration" loading="lazy" />
    </div>
  </section>

  <section class="features-section">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-tag">What's Included</p>
        <h2 class="section-title">Everything in Our <span class="outline-text">${sub.title}</span> Service</h2>
      </div>
      <div class="features-grid">
        ${featureCards}
      </div>
    </div>
  </section>

  <section class="process-section process-section--dark">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-tag">How We Do It</p>
        <h2 class="section-title">Our <span class="outline-text">${sub.title}</span> Process</h2>
      </div>
      <div class="process-grid">
        ${processSteps}
      </div>
    </div>
  </section>

  ${faqItems ? `
  <section class="faq-section">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-tag">FAQ</p>
        <h2 class="section-title">Common <span class="outline-text">Questions</span></h2>
      </div>
      <div class="faq-list">
        ${faqItems}
      </div>
    </div>
  </section>` : ''}

  <section class="related-section">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-tag">Also in ${svc.title}</p>
        <h2 class="section-title">Related <span class="outline-text">Services</span></h2>
      </div>
      <div class="related-grid">
        ${relatedSubs}
      </div>
    </div>
  </section>

  <section class="svc-cta-band">
    <canvas id="ctaBandCanvas"></canvas>
    <div class="svc-cta-content">
      <h2>Ready to get started with <span class="outline-text-inv">${sub.title}?</span></h2>
      <p>Drop us a message and we'll come back within 24 hours.</p>
      <a href="${root}index.html#contact" class="btn-primary-inv btn-large">Contact Us</a>
    </div>
  </section>

${footer(depth)}
${scripts(depth)}`;

  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`  ✓ services/${svc.slug}/${sub.slug}/index.html`);
}

/* ============================================================
   RUN
   ============================================================ */
services.forEach(svc => {
  buildMainPage(svc);
  svc.subs.forEach(sub => buildSubPage(svc, sub));
});
console.log('\n✅ All pages generated.');
