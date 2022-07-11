interface AssessmentType {
    key: string,
    type: string,
    priceOnsite: number,
    priceRemote: number
}
export const paidAssessments: AssessmentType[] = [
    {
        key: '1',
        type: 'One Hour Brief Psychological Assessment for Therapy or for Self-Awareness. Self-Help Resources Provided.',
        priceOnsite: 120,
        priceRemote: 100
    },
    {
        key: '2',
        type: 'Two Hours’ Further/Comprehensive Psychological Assessment for Therapy or for Self-Aware ness. Self-Help Resources Provided.',
        priceOnsite: 240,
        priceRemote: 200
    },
    {
        key: '3',
        type: 'One Hour Brief Psycho-Legal Assessment.',
        priceOnsite: 120,
        priceRemote: 100
    },
    {
        key: '4',
        type: 'Dyslexia Assessment\nDiscounted Fees Option.',
        priceOnsite: 490,
        priceRemote: 450
    },
    {
        key: '5',
        type: 'Autism  or ADHD or both\nDiscounted Fees Option.',
        priceOnsite: 390,
        priceRemote: 350
    },
    {
        key: '6',
        type: 'One Therapist Culture or Faith  (or both) based  Independent Assessment of one Adult or a Child Psychological Health Needs.',
        priceOnsite: 490,
        priceRemote: 450
    },
    {
        key: '7',
        type: 'Two Therapists Culture or Faith  (or both) based  Independent Assessment of one Adult or a Child Psychological Health Needs.',
        priceOnsite: 980,
        priceRemote: 900
    },
    {
        key: '8',
        type: 'Personal Qualities/Strengths Psychological Profile Assessment. Plus Self-Help/ Improvement Resources for one couple, one child, one adult family member, One team or one organisational member.',
        priceOnsite: 390,
        priceRemote: 350
    },
    {
        key: '9',
        type: 'Life Plan Profile Assessment of one adult or child. Plus Self-Help/Improvement Resources for one adult. Identifying Golden, Silver and Bronze Dreams. Quick, Mid and Long-Term Wins. Identifying SMART goals/Expected Outcomes. Plus Resources etc. Designing Implementation and Evaluation Targets.',
        priceOnsite: 390,
        priceRemote: 350
    },
    {
        key: '10',
        type: 'Cognitive/Neuropsychological Assessment.',
        priceOnsite: 850,
        priceRemote: 800
    },
    {
        key: '11',
        type: 'Learning Disability Assessment.',
        priceOnsite: 850,
        priceRemote: 800
    },
    {
        key: '12',
        type: 'Brief 1 hour pregnancy related-occupational  psychological risk screening.',
        priceOnsite: 250,
        priceRemote: 200
    }
]