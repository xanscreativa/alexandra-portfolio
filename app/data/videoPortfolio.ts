export interface WorkflowStep {
  title: string;
  description: string;
}

export interface EditingBreakdownItem {
  title: string;
  description: string;
}

export interface ResultMetric {
  label: string;
  value: string;
  change?: string;
}

export interface VideoProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  client: string;
  year: string;
  role: string;
  industry: string;
  duration: string;
  platform: string;
  aspectRatio: string;
  heroThumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'mp4';
  overview: {
    goals: string;
    targetAudience: string;
    commObjective: string;
    businessContext: string;
  };
  creativeChallenge: {
    problem: string;
    reason: string;
    constraints: string;
  };
  creativeDirection: {
    visualStyle: string;
    editingStyle: string;
    colorMood: string;
    typography: string;
    transitions: string;
    motionLanguage: string;
    storytelling: string;
  };
  productionWorkflow: WorkflowStep[];
  editingBreakdown: EditingBreakdownItem[];
  softwareUsed: string[];
  deliverablesBadges: string[];
  results: ResultMetric[];
  reflection: {
    lessonsLearned: string;
    creativeDecisions: string;
    challengesOvercome: string;
    futureImprovements: string;
  };
  nextProject: {
    slug: string;
    title: string;
    category: string;
    thumbnail: string;
  };
}

export const videoPortfolioData: Record<string, VideoProject> = {
  'data-wak-atom': {
    slug: 'data-wak-atom',
    title: 'Data Wak Atom',
    category: 'Trading Campaign',
    summary: 'Video editing project for Data Wak Atom, a mysterious, fearless, and knowledgeable character who also brings humor into educational content.',
    client: 'Data Wak Atom',
    year: '2025–2026',
    role: 'Video Editor',
    industry: 'Financial Content',
    duration: '0:18',
    platform: 'TikTok & Reels',
    aspectRatio: '9:16 Portrait',
    heroThumbnail: '/images/films/data-wak-atom.avif',
    videoUrl: '/videos/previews/data-wak-atom.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Deliver high-retention short-form educational content for active trading campaigns.',
      targetAudience: 'Retail traders and social media audiences on TikTok and Instagram.',
      commObjective: 'Simplify complex trading concepts into bite-sized, engaging visual hooks.',
      businessContext: 'Rapid campaign scaling across short-form platforms to drive user acquisition.'
    },
    creativeChallenge: {
      problem: 'Capturing viewer attention within the first 2 seconds on fast-scrolling feeds.',
      reason: 'Short-form formats demand immediate clarity and dynamic pacing.',
      constraints: 'Strict duration limit under 20 seconds with high information density.'
    },
    creativeDirection: {
      visualStyle: 'Mysterious and confident, balanced with a playful side.',
      editingStyle: 'Dynamic short-form editing that supports both educational and entertaining moments.',
      colorMood: 'Clean and engaging visual treatment that supports the character-led content.',
      typography: 'Clear, readable typography for fast-paced social content.',
      transitions: 'Clean, energetic transitions used to maintain flow.',
      motionLanguage: 'Purposeful motion and text emphasis to support key information.',
      storytelling: 'Character-led storytelling that balances mystery, courage, humor, and knowledge.'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Analyzing trading content trends, writing engaging hook scripts, and preparing visual asset concepts.' },
      { title: 'Production', description: 'Directing framing, multi-angle video setup, and clean audio capture for short-form format.' },
      { title: 'Post-Production', description: 'Fast-paced video cuts, dynamic text animations, sound design, and color grading optimized for TikTok & Reels.' }
    ],
    editingBreakdown: [
      { title: 'Offline & Assembly', description: 'Tight editing to remove dead air and maximize retention.' },
      { title: 'Motion Graphics', description: 'Dynamic text overlays and indicator callouts.' },
      { title: 'Sound Design', description: 'Punchy sound effects synced to transitions and cuts.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'CapCut'],
    deliverablesBadges: ['TikTok', 'Instagram Reel', '9:16', 'Short Form'],
    results: [
      { label: 'Views', value: '1.2M+', change: 'High viral reach' },
      { label: 'Engagement', value: '9.5%', change: 'Above platform average' },
      { label: 'Watch Time', value: '88%', change: 'Full loop completion' }
    ],
    reflection: {
      lessonsLearned: 'Hook script optimization is the single biggest factor in short-form success.',
      creativeDecisions: 'Employed kinetic captions throughout to support sound-off viewing.',
      challengesOvercome: 'Packed dense trading insights into an 18-second window without feeling cluttered.',
      futureImprovements: 'Incorporate automated template variations for multi-language testing.'
    },
    nextProject: {
      slug: 'sinyal-ordal',
      title: 'Sinyal Ordal',
      category: 'Financial Education',
      thumbnail: '/images/films/sinyal-ordal.avif'
    }
  },
  'sinyal-ordal': {
    slug: 'sinyal-ordal',
    title: 'Sinyal Ordal',
    category: 'Financial Education',
    summary: 'Short-form video editing project featuring a mysterious, fearless, friendly, and cool male character.',
    client: 'Sinyal Ordal',
    year: '2026',
    role: 'Video Editor',
    industry: 'Financial Education & Trading',
    duration: '0:26',
    platform: 'Instagram Reels & TikTok',
    aspectRatio: '9:16 Portrait',
    heroThumbnail: '/images/films/sinyal-ordal.avif',
    videoUrl: '/videos/previews/sinyal-ordal.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Educate retail investors on market signals through structured short-form videos.',
      targetAudience: 'Aspiring traders and finance learners.',
      commObjective: 'Make financial data digestible and engaging via storytelling.',
      businessContext: 'Brand authority building in financial literacy education.'
    },
    creativeChallenge: {
      problem: 'Avoiding dry financial jargon while maintaining educational accuracy.',
      reason: 'Complex charts do not translate well to mobile screens without graphical simplification.',
      constraints: 'Strict 26-second timeframe constraint.'
    },
    creativeDirection: {
      visualStyle: 'Mysterious, confident, friendly, and cool.',
      editingStyle: 'Clean and dynamic short-form editing built around the character presence.',
      colorMood: 'Modern and approachable visual treatment.',
      typography: 'Clear and readable typography for mobile viewing.',
      transitions: 'Smooth, purposeful transitions that keep the content flowing.',
      motionLanguage: 'Subtle motion accents that reinforce key moments.',
      storytelling: 'Character-led storytelling with a confident but approachable tone.'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Brainstorming financial concepts, script structuring, and visual storytelling planning.' },
      { title: 'Production', description: 'On-set video capture and audio sync setup.' },
      { title: 'Post-Production', description: 'Adding engaging motion graphics, chart overlay animations, kinetic typography, and audio enhancement.' }
    ],
    editingBreakdown: [
      { title: 'Chart Animation', description: 'Vector chart overlays highlighting key market trends.' },
      { title: 'Audio Enhancement', description: 'Clean vocal processing and subtle background ambiance.' }
    ],
    softwareUsed: ['CapCut'],
    deliverablesBadges: ['Instagram Reel', 'TikTok', '9:16', 'Short Form'],
    results: [
      { label: 'Views', value: '850K', change: 'Consistent organic reach' },
      { label: 'Engagement', value: '7.2%', change: 'High comment discussion' }
    ],
    reflection: {
      lessonsLearned: 'Visual chart animations dramatically boost viewer retention on financial topics.',
      creativeDecisions: 'Kept color palettes minimal to prevent cognitive overload.',
      challengesOvercome: 'Synchronized fast-paced voiceover with precise chart callouts.',
      futureImprovements: 'Integrate real-time data feeds directly into motion graphic templates.'
    },
    nextProject: {
      slug: 'raka-trabas',
      title: 'Raka Trabas',
      category: 'Trading Education',
      thumbnail: '/images/films/raka-trabas.avif'
    }
  },
  'raka-trabas': {
    slug: 'raka-trabas',
    title: 'Raka Trabas',
    category: 'Trading Education',
    summary: 'Short-form video editing project featuring a humorous, cool, knowledgeable, and fearless character.',
    client: 'Raka Trabas',
    year: '2026',
    role: 'Video Editor',
    industry: 'Trading Education',
    duration: '0:31',
    platform: 'YouTube Shorts & TikTok',
    aspectRatio: '9:16 Portrait',
    heroThumbnail: '/images/films/raka-trabas.avif',
    videoUrl: '/videos/previews/raka-trabas.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Deliver engaging trading educational content with high personal brand impact.',
      targetAudience: 'Active retail traders.',
      commObjective: 'Demonstrate trading strategies through clear visual walkthroughs.',
      businessContext: 'Scaling educational creator channels.'
    },
    creativeChallenge: {
      problem: 'Maintaining high engagement across a slightly longer 31-second short-form window.',
      reason: 'Longer shorts require multiple micro-hooks to prevent drop-off.',
      constraints: 'Balancing raw footage with polished graphical callouts.'
    },
    creativeDirection: {
      visualStyle: 'Cool, energetic, and humorous.',
      editingStyle: 'Dynamic pacing that supports the character’s humor and confidence.',
      colorMood: 'Punchy and engaging treatment while keeping the content clear.',
      typography: 'Bold, readable captions suited to short-form viewing.',
      transitions: 'Energetic transitions timed to the content.',
      motionLanguage: 'Snappy motion accents that highlight important information.',
      storytelling: 'Character-led storytelling that combines humor, courage, and useful knowledge.'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Trading topic selection, hook scripting, and visual storyboard drafting.' },
      { title: 'Production', description: 'Camera footage acquisition and voice-over recording.' },
      { title: 'Post-Production', description: 'Dynamic pacing, custom text captions, sound effect layering, and visual polish.' }
    ],
    editingBreakdown: [
      { title: 'Pacing & Cuts', description: 'Eliminating all pauses to maintain relentless energy.' },
      { title: 'Sound Design', description: 'Layering custom sound effects for every UI interaction.' }
    ],
    softwareUsed: ['CapCut'],
    deliverablesBadges: ['YouTube Shorts', 'TikTok', '9:16', 'Short Form'],
    results: [
      { label: 'Views', value: '950K', change: 'Strong subscriber conversion' },
      { label: 'Watch Time', value: '85%', change: 'High retention rate' }
    ],
    reflection: {
      lessonsLearned: 'Sound effect layering adds significant perceived production value to talking-head videos.',
      creativeDecisions: 'Chose dynamic framing shifts to keep visual interest high.',
      challengesOvercome: 'Balanced screen recording legibility with mobile vertical framing.',
      futureImprovements: 'Use multi-cam angles for smoother transitions.'
    },
    nextProject: {
      slug: 'gte',
      title: 'GTE',
      category: 'Gold Trading Education',
      thumbnail: '/images/films/gte.avif'
    }
  },
  'gte': {
    slug: 'gte',
    title: 'GTE',
    category: 'Gold Trading Education',
    summary: 'Educational videos focused on international gold trading.',
    client: 'Global Trading Education',
    year: '2026',
    role: 'Lead Video Editor',
    industry: 'Commodities & Gold Trading',
    duration: '0:24',
    platform: 'Digital Campaigns',
    aspectRatio: '9:16 Portrait',
    heroThumbnail: '/images/films/gte.avif',
    videoUrl: '/videos/previews/gte.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Educate viewers on gold market fundamentals and global trading strategies.',
      targetAudience: 'Commodity traders and investors.',
      commObjective: 'Visualize gold market data clearly and professionally.',
      businessContext: 'Establishing niche expertise in precious metals trading education.'
    },
    creativeChallenge: {
      problem: 'Presenting complex commodity market data within a 24-second window.',
      reason: 'Gold market indicators require clear data visualization.',
      constraints: 'Maintaining high production polish within tight schedules.'
    },
    creativeDirection: {
      visualStyle: 'Sleek, gold-accented color grading and professional studio aesthetic.',
      editingStyle: 'Precise cuts matched with data visualizations.',
      colorMood: 'Rich gold metallic accents, deep blacks, and clean whites.',
      typography: 'Elegant serif headers paired with clean sans-serif data.',
      transitions: 'Clean dissolves and graphic wipes.',
      motionLanguage: 'Chart overlays, gold market data visualization, and motion callouts.',
      storytelling: 'Market opportunity overview followed by educational breakdown.'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Researching gold market education topics and outlining key takeaway bullet points.' },
      { title: 'Production', description: 'High-definition video shooting with clean studio lighting.' },
      { title: 'Post-Production', description: 'Chart overlays, gold market data visualization, motion callouts, and clean background music integration.' }
    ],
    editingBreakdown: [
      { title: 'Data Visualization', description: 'Custom After Effects charts showing historical gold price trends.' },
      { title: 'Color Grading', description: 'Custom gold tone curve adjustments in Premiere Pro.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'Illustrator'],
    deliverablesBadges: ['Educational', 'Campaign Assets', '9:16', 'Short Form'],
    results: [
      { label: 'Views', value: '1.5M', change: 'Targeted commodity audience' },
      { label: 'Engagement', value: '8.1%', change: 'High share rate' }
    ],
    reflection: {
      lessonsLearned: 'Thematic color grading (gold tones) immediately reinforces topic branding.',
      creativeDecisions: 'Integrated subtle ambient gold particle effects for luxury feel.',
      challengesOvercome: 'Ensured charts remained readable on smaller mobile screens.',
      futureImprovements: 'Develop 3D gold bullion asset library for future videos.'
    },
    nextProject: {
      slug: 'gpib-immanuel-pekanbaru',
      title: 'GPIB Immanuel Pekanbaru',
      category: 'Church Media',
      thumbnail: '/images/films/gpib.avif'
    }
  },
  'gpib-immanuel-pekanbaru': {
    slug: 'gpib-immanuel-pekanbaru',
    title: 'GPIB Immanuel Pekanbaru',
    category: 'Church Media',
    summary: 'Church announcements, Easter campaigns, Christmas events, and ministry videos.',
    client: 'GPIB Immanuel Pekanbaru',
    year: '2026',
    role: 'Creative Director & AI Video Editor',
    industry: 'Religious & Community Media',
    duration: '0:20',
    platform: 'YouTube & Social Media',
    aspectRatio: '16:9 Landscape',
    heroThumbnail: '/images/films/gpib.avif',
    videoUrl: '/videos/previews/gpib.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Engage congregation members with high-quality ministry and event announcements.',
      targetAudience: 'Church congregation and wider community.',
      commObjective: 'Inspire and inform viewers about upcoming church events and seasonal campaigns.',
      businessContext: 'Modernizing ministry communication through AI and advanced video editing.'
    },
    creativeChallenge: {
      problem: 'Creating emotionally resonant seasonal campaigns with limited physical production resources.',
      reason: 'AI video generation and blending helped bridge the gap for conceptual scenes.',
      constraints: 'Tight turnaround for weekly announcements and seasonal church holidays.'
    },
    creativeDirection: {
      visualStyle: 'Cinematic, warm, and reverent aesthetic featuring AI-assisted visual storytelling.',
      editingStyle: 'Graceful, flowing cuts matched with uplifting orchestral or ambient music.',
      colorMood: 'Warm golden hours, soft lighting, and inviting color grades.',
      typography: 'Clean serif and elegant script typography for event details.',
      transitions: 'Seamless cross-dissolves and light leaks.',
      motionLanguage: 'AI visual blending and gentle motion graphics.',
      storytelling: 'Thematic narrative building leading to clear event call-to-action.'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Concepting event themes, AI character generation, storyboard mapping, and narration scriptwriting.' },
      { title: 'Production', description: 'AI video generation, voice-over recording, and media asset aggregation.' },
      { title: 'Post-Production', description: 'AI visual blending, background music scoring, subtitle design, and final color correction.' }
    ],
    editingBreakdown: [
      { title: 'AI Visual Generation', description: 'Utilizing advanced AI models to generate conceptual background plates.' },
      { title: 'Audio Scoring', description: 'Licensing and mixing uplifting orchestral music beds.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'AI Video Tools', 'Audition'],
    deliverablesBadges: ['Church Media', 'AI Video', '16:9', 'Landscape'],
    results: [
      { label: 'Congregation Reach', value: '5K+', change: 'Higher digital attendance' },
      { label: 'Engagement', value: '12%', change: 'Positive community response' }
    ],
    reflection: {
      lessonsLearned: 'AI video generation tools drastically expand creative possibilities for non-profit projects.',
      creativeDecisions: 'Balanced traditional footage with AI blending for a unique artistic look.',
      challengesOvercome: 'Maintained visual consistency across mixed AI and live-action sources.',
      futureImprovements: 'Expand AI workflow integration for future holiday campaigns.'
    },
    nextProject: {
      slug: 'data-wak-atom',
      title: 'Data Wak Atom',
      category: 'Trading Campaign',
      thumbnail: '/images/films/data-wak-atom.avif'
    }
  }
};