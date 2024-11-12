import 'dotenv/config.js'
import '../../config/database.js'
import Transaction from "../Transaction.js";

const movements = [
    {
        date: new Date('2024-05-01'),
        description: 'Sale of computer products',
        cost: 2000,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-03'),
        description: 'Subscription payment for design software',
        cost: 250,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-05'),
        description: 'Income from mobile development project',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-08'),
        description: 'Payment for equipment maintenance',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-10'),
        description: 'Sale of digital marketing services',
        cost: 1200,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-12'),
        description: 'Payment of employee salaries',
        cost: 2200,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-14'),
        description: 'Income from web application development',
        cost: 1500,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-17'),
        description: 'Payment for public services',
        cost: 200,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-20'),
        description: 'Sale of software licenses',
        cost: 800,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-22'),
        description: 'Payment for federal taxes',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-24'),
        description: 'Income from business consulting',
        cost: 950,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-27'),
        description: 'Payment for health insurance',
        cost: 300,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-05-29'),
        description: 'Sale of technology equipment',
        cost: 1300,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-06-01'),
        description: 'Payment for online advertising',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-06-03'),
        description: 'Income from programming classes',
        cost: 500,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-06-06'),
        description: 'Payment for technical support services',
        cost: 150,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-06-08'),
        description: 'Income from e-book sales',
        cost: 350,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-06-11'),
        description: 'Payment for office rent',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-06-14'),
        description: 'Income from digital marketing consulting',
        cost: 1000,
        asset: true,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-06-16'),
        description: 'Payment for landline phone services',
        cost: 100,
        asset: false,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        date: new Date('2024-07-01'),
        description: 'Income from product sales',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-03'),
        description: 'Payment for accounting software subscription',
        cost: 180,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-05'),
        description: 'Income from graphic design services',
        cost: 1200,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-08'),
        description: 'Payment for website maintenance services',
        cost: 250,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-10'),
        description: 'Income from IT consulting services',
        cost: 1500,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-12'),
        description: 'Payment for employee salaries',
        cost: 2100,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-15'),
        description: 'Income from custom software sales',
        cost: 950,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-17'),
        description: 'Payment for corporate health insurance',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-20'),
        description: 'Income from mobile app development projects',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-22'),
        description: 'Payment for office rent',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-25'),
        description: 'Sale of computing equipment',
        cost: 1600,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-07-28'),
        description: 'Payment for utility bills',
        cost: 320,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-01'),
        description: 'Income from digital marketing projects',
        cost: 1100,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-03'),
        description: 'Payment for online support services',
        cost: 200,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-05'),
        description: 'Income from technology solutions sales',
        cost: 2000,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-07'),
        description: 'Payment for online advertising platform',
        cost: 180,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-10'),
        description: 'Sale of software projects',
        cost: 1700,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-12'),
        description: 'Payment for taxes',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-15'),
        description: 'Income from software license sales',
        cost: 1200,
        asset: true,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-08-17'),
        description: 'Payment for mobile phone services',
        cost: 100,
        asset: false,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        date: new Date('2024-09-01'),
        description: 'Income from software product sales',
        cost: 2400,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-03'),
        description: 'Payment for subscription to project management tool',
        cost: 350,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-05'),
        description: 'Income from e-commerce platform development',
        cost: 1500,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-07'),
        description: 'Payment for digital advertising campaigns',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-10'),
        description: 'Income from IT consulting',
        cost: 1300,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-12'),
        description: 'Payment for office rent',
        cost: 850,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-15'),
        description: 'Income from website maintenance contracts',
        cost: 2100,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-17'),
        description: 'Payment for salary of marketing team',
        cost: 2400,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-20'),
        description: 'Income from cloud services subscription',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-22'),
        description: 'Payment for freelance graphic design services',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-25'),
        description: 'Sale of website themes and templates',
        cost: 900,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-09-27'),
        description: 'Payment for communication services',
        cost: 120,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-01'),
        description: 'Income from mobile app development projects',
        cost: 1000,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-03'),
        description: 'Payment for business insurance',
        cost: 200,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-05'),
        description: 'Income from digital products sales',
        cost: 2300,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-08'),
        description: 'Payment for web hosting services',
        cost: 300,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-10'),
        description: 'Income from social media campaigns',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-12'),
        description: 'Payment for online training platform subscription',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-15'),
        description: 'Income from cybersecurity services',
        cost: 1200,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        date: new Date('2024-10-13'),
        description: 'Income from Blackmail',
        cost: 120000,
        asset: true,
        user: '67328b04d4e49cc40a2bb964'
    },{
        date: new Date('2024-10-20'),
        description: 'Income from software as a service (SaaS)',
        cost: 2500,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-10-22'),
        description: 'Payment for cloud storage services',
        cost: 150,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-10-25'),
        description: 'Income from consulting services',
        cost: 3000,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-10-28'),
        description: 'Payment for content creation services',
        cost: 450,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-10-30'),
        description: 'Income from mobile app sales',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-02'),
        description: 'Payment for marketing services',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-05'),
        description: 'Income from web development contracts',
        cost: 2000,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-07'),
        description: 'Payment for legal consulting fees',
        cost: 700,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-10'),
        description: 'Income from online courses',
        cost: 1600,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-12'),
        description: 'Payment for SEO services',
        cost: 300,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-15'),
        description: 'Sale of e-books and digital guides',
        cost: 1200,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-17'),
        description: 'Payment for IT infrastructure services',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-20'),
        description: 'Income from software license renewals',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-22'),
        description: 'Payment for office supplies',
        cost: 250,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-25'),
        description: 'Income from affiliate marketing',
        cost: 900,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-11-28'),
        description: 'Payment for project management tool subscription',
        cost: 150,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-12-01'),
        description: 'Income from tech support services',
        cost: 1400,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-12-03'),
        description: 'Payment for business network services',
        cost: 350,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-12-05'),
        description: 'Income from video production services',
        cost: 2000,
        asset: true,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-12-08'),
        description: 'Payment for accounting services',
        cost: 450,
        asset: false,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        date: new Date('2024-12-10'),
        description: 'Income from cloud computing services',
        cost: 2800,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2024-12-12'),
        description: 'Payment for business advertising expenses',
        cost: 700,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2024-12-15'),
        description: 'Income from subscription-based services',
        cost: 1500,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2024-12-17'),
        description: 'Payment for office cleaning services',
        cost: 250,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2024-12-20'),
        description: 'Income from consulting in technology management',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2024-12-22'),
        description: 'Payment for data storage services',
        cost: 300,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2024-12-25'),
        description: 'Income from training and workshops',
        cost: 1200,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2024-12-28'),
        description: 'Payment for business insurance renewal',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-02'),
        description: 'Income from software development projects',
        cost: 1900,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-05'),
        description: 'Payment for legal fees',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-08'),
        description: 'Income from app maintenance services',
        cost: 850,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-10'),
        description: 'Payment for office utilities',
        cost: 150,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-13'),
        description: 'Income from technology implementation services',
        cost: 2300,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-15'),
        description: 'Payment for marketing and PR services',
        cost: 750,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-18'),
        description: 'Sale of digital products',
        cost: 1200,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-20'),
        description: 'Payment for staff training services',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-22'),
        description: 'Income from affiliate programs',
        cost: 800,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-25'),
        description: 'Payment for business subscription services',
        cost: 350,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-28'),
        description: 'Income from software product updates',
        cost: 1000,
        asset: true,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-01-28'),
        description: 'Buy a new corvette',
        cost: 2000,
        asset: false,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        date: new Date('2025-02-01'),
        description: 'Income from mobile app subscriptions',
        cost: 2500,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-03'),
        description: 'Payment for cloud computing services',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-05'),
        description: 'Income from IT support contracts',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-07'),
        description: 'Payment for marketing research',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-10'),
        description: 'Income from e-commerce platform services',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-12'),
        description: 'Payment for software licensing',
        cost: 850,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-15'),
        description: 'Income from custom software solutions',
        cost: 3000,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-17'),
        description: 'Payment for office rent',
        cost: 1000,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-20'),
        description: 'Income from mobile games revenue',
        cost: 1500,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-22'),
        description: 'Payment for freelance design services',
        cost: 300,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-25'),
        description: 'Income from software training programs',
        cost: 950,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-02-27'),
        description: 'Payment for tech support contracts',
        cost: 550,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-01'),
        description: 'Income from subscription management services',
        cost: 2100,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-03'),
        description: 'Payment for project management software',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-05'),
        description: 'Income from data analytics services',
        cost: 1700,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-07'),
        description: 'Payment for cybersecurity services',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-10'),
        description: 'Income from online marketing campaigns',
        cost: 2300,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-12'),
        description: 'Payment for legal consulting services',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-15'),
        description: 'Income from web development services',
        cost: 2000,
        asset: true,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-12'),
        description: 'Payment for federal taxes',
        cost: 1100,
        asset: false,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        date: new Date('2025-03-18'),
        description: 'Income from premium software subscriptions',
        cost: 2400,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-03-20'),
        description: 'Payment for freelance development services',
        cost: 700,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-03-22'),
        description: 'Income from consulting in cloud computing',
        cost: 3000,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-03-25'),
        description: 'Payment for business software licenses',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-03-28'),
        description: 'Income from website traffic monetization',
        cost: 1500,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-03-30'),
        description: 'Payment for office furniture',
        cost: 900,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-02'),
        description: 'Income from online course sales',
        cost: 2100,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-04'),
        description: 'Payment for internet services',
        cost: 120,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-06'),
        description: 'Income from video streaming service subscriptions',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-09'),
        description: 'Payment for office utilities',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-11'),
        description: 'Income from digital marketing services',
        cost: 2400,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-14'),
        description: 'Payment for business insurance',
        cost: 700,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-16'),
        description: 'Income from custom web applications',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-18'),
        description: 'Payment for marketing software',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-20'),
        description: 'Income from tech product sales',
        cost: 2700,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-23'),
        description: 'Payment for legal and consultancy services',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-25'),
        description: 'Income from online platform sales',
        cost: 3200,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-28'),
        description: 'Payment for IT infrastructure services',
        cost: 1500,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-30'),
        description: 'Income from hosting services',
        cost: 1000,
        asset: true,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-04-28'),
        description: 'Payment for IT consult services',
        cost: 1500,
        asset: false,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        date: new Date('2025-05-01'),
        description: 'Income from SaaS subscriptions',
        cost: 2300,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-03'),
        description: 'Payment for cloud server hosting',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-05'),
        description: 'Income from mobile app sales',
        cost: 2100,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-07'),
        description: 'Payment for digital marketing campaigns',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-10'),
        description: 'Income from online course subscriptions',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-12'),
        description: 'Payment for freelance development services',
        cost: 950,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-15'),
        description: 'Income from affiliate marketing',
        cost: 1600,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-17'),
        description: 'Payment for web hosting services',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-20'),
        description: 'Income from custom web development',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-22'),
        description: 'Payment for office software licenses',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-24'),
        description: 'Income from e-commerce sales',
        cost: 2700,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-26'),
        description: 'Payment for tech consulting services',
        cost: 900,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-05-29'),
        description: 'Income from digital product sales',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-01'),
        description: 'Payment for marketing tools subscription',
        cost: 450,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-03'),
        description: 'Income from mobile game sales',
        cost: 2500,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-05'),
        description: 'Payment for business office rent',
        cost: 1000,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-08'),
        description: 'Income from app subscription services',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-10'),
        description: 'Payment for team collaboration software',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-12'),
        description: 'Income from software license renewals',
        cost: 1500,
        asset: true,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-15'),
        description: 'Payment for business insurance premium',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        date: new Date('2025-06-18'),
        description: 'Income from enterprise software solutions',
        cost: 3000,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-06-20'),
        description: 'Payment for advertising campaigns',
        cost: 1200,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-06-22'),
        description: 'Income from cloud storage services',
        cost: 2000,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-06-25'),
        description: 'Payment for IT infrastructure management',
        cost: 1500,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-06-28'),
        description: 'Income from custom development projects',
        cost: 2500,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-01'),
        description: 'Payment for cybersecurity services',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-03'),
        description: 'Income from mobile application development',
        cost: 2900,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-05'),
        description: 'Payment for office supplies',
        cost: 300,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-08'),
        description: 'Income from data analytics services',
        cost: 2100,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-10'),
        description: 'Payment for marketing materials',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-12'),
        description: 'Income from subscription-based platforms',
        cost: 1800,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-15'),
        description: 'Payment for website design services',
        cost: 700,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-18'),
        description: 'Income from software maintenance services',
        cost: 1700,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-20'),
        description: 'Payment for business insurance premiums',
        cost: 900,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-22'),
        description: 'Income from e-commerce product sales',
        cost: 2500,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-24'),
        description: 'Payment for office rent',
        cost: 1200,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-26'),
        description: 'Income from tech consulting',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-28'),
        description: 'Payment for cloud service subscription',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-30'),
        description: 'Income from software as a service (SaaS)',
        cost: 3200,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-07-22'),
        description: 'Income from Blackmail',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        date: new Date('2025-08-01'),
        description: 'Income from corporate training programs',
        cost: 2800,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-03'),
        description: 'Payment for software upgrades',
        cost: 500,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-05'),
        description: 'Income from affiliate product sales',
        cost: 2100,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-07'),
        description: 'Payment for marketing research',
        cost: 700,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-10'),
        description: 'Income from web hosting services',
        cost: 2500,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-12'),
        description: 'Payment for office rent',
        cost: 1000,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-15'),
        description: 'Income from cloud application services',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-17'),
        description: 'Payment for internet services',
        cost: 250,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-20'),
        description: 'Income from mobile app advertising',
        cost: 2000,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-22'),
        description: 'Payment for office supplies',
        cost: 350,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-24'),
        description: 'Income from e-commerce store sales',
        cost: 2800,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-26'),
        description: 'Payment for server maintenance',
        cost: 600,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-28'),
        description: 'Income from subscription-based content',
        cost: 2500,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-08-30'),
        description: 'Payment for cloud storage solutions',
        cost: 900,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-09-02'),
        description: 'Income from tech consulting services',
        cost: 2200,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-09-04'),
        description: 'Payment for software testing services',
        cost: 400,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-09-06'),
        description: 'Income from software as a service (SaaS)',
        cost: 3000,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-09-09'),
        description: 'Payment for business insurance',
        cost: 800,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-09-12'),
        description: 'Income from online advertising networks',
        cost: 2100,
        asset: true,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        date: new Date('2025-09-14'),
        description: 'Payment for business licensing fees',
        cost: 650,
        asset: false,
        user: '67328b04d4e49cc40a2bb96b'
    }


];

Transaction.insertMany(movements)
