export const navbarItems: { text: string, url: string, subItems: { text: string, url: string }[] }[] = [
    // { text: "Home", url: "/", subItems: [] },
    { text: "About Us", url: "/about-us", subItems: [] },
    { text: "Contact", url: "/contact-us", subItems: [] },
    {
        text: "Services", url: "", subItems: [
            { text: "All Services", url: "/services" },
            { text: "Emotional Health Screening", url: "/services/emotional-health-screening" },
            { text: "Free Psychological Questionnaires", url: "services/free-self-assessment" },
            { text: "Paid Assessment", url: "/services/paid-assessment" }
        ]
    },
    { text: "Assessors", url: "/assessors", subItems: [] },
    { text: "Books To Read", url: "/books-to-read", subItems: [] },
    { text: "Keep You Safe", url: "/keeping-you-safe", subItems: [] },
    { text: "Feedback", url: "/feedback", subItems: [] },
    { text: "My Account", url: "my-account", subItems: [] },
    {
        text: "Explore More", url: "", subItems: [
            { text: "Gift Vouchers", url: "/gift-voucher" },
            { text: "How To Pay", url: "how-to-pay" }
        ]
    },
    { text: "Book Now", url: "/services/paid-assessment", subItems: [] },
]