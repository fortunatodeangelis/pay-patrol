import { ChartPie3, Users, CalendarTime, Calculator, ChartLine } from 'tabler-icons-react'

type NavigationItemType  = {
    name: string;
    path?: string;
    list?: {
        name: string;
        path: string;
        description?: string;
        icon?: React.ElementType;
    }[];
};


const navigation: NavigationItemType [] = [
    {
        name: 'navigation.home',
        path: '/',
    },
    {
        name: 'navigation.features',
        path: '/features',
        list: [
            {
                name: 'navigation.expenseTracking',
                path: '/features/expense-tracking',
                description: 'navigation.expenseTrackingDescription',
                icon: ChartLine,
            },
            {
                name: 'navigation.costCalculation',
                path: '/features/cost-calculation',
                description: 'navigation.costCalculationDescription',
                icon: Calculator,
            },
            {
                name: 'navigation.periodicReminder',
                path: '/features/periodic-reminder',
                description: 'navigation.periodicReminderDescription',
                icon: CalendarTime,
            },
            {
                name: 'navigation.expenseSharing',
                path: '/features/expense-sharing',
                description: 'navigation.expenseSharingDescription',
                icon: Users,
            
            },
            {
                name: 'navigation.reportsAndAnalysis',
                path: '/features/reports-and-analysis',
                description: 'navigation.reportsAndAnalysisDescription',
                icon: ChartPie3,
            }
        ]        
    },
    {
        name: 'navigation.pricing',
        path: '/pricing',
    }
];

const navigationList: NavigationItemType[] = [
    {
        name: 'navigation.about',
        list: [
            {
                name: 'navigation.team',
                path: '/about/team',
            },
            {
                name: 'navigation.privacy',
                path: '/about/privacy',
            },
            {
                name: 'navigation.terms',
                path: '/about/terms',
            },
        ],
    },
    {
        name: 'navigation.support',
        list: [
            {
                name: 'navigation.helpCenter',
                path: '/support/help-center',
            },
            {
                name: 'navigation.faq',
                path: '/support/faq',
            },
            {
                name: 'navigation.contacts',
                path: '/support/contacts',
            },
        ],
    },
    {
        name: 'navigation.info',
        list: [
            {
                name: 'navigation.serviceStatus',
                path: '/info/service-status',
            },
            {
                name: 'navigation.emailNewsletter',
                path: '/info/email-newsletter',
            },
            {
                name: 'navigation.suggestionsAndIdeas',
                path: '/info/suggestions-and-ideas',
            },
        ],
    },
];

export type { NavigationItemType };
export { navigation, navigationList };