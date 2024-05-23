import Footer from "@/app/ui/Footer"


export default function PrivacyPage () {

    const policies = [
        {title: "Information we collect",
         p1: "Personal Information: When you create an account on Streamwan, we may collect personal information such as your name, email address, and contact details.",
         p2: "Usage Information: We collect information about how you use Streamwan, including your interactions with the platform, device information, IP address, and browsing history."
        },
        {title: "How we use your information",
        p1: "Analytics: We use data analytics to analyze usage patterns, trends, and performance metrics to improve Streamwan's functionality and user experience.",
        p2: "Communication: We may use your contact information to send you updates, newsletters, and promotional offers related to Streamwan."
       },
       {title: "Data security",
         p1: "We take data security seriously and implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
         p2: "However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
        },
        {title: "Data sharing",
         p1: "We do not sell, trade, or rent your personal information to third parties without your consent.",
         p2: "We may share your information with trusted service providers who assist us in operating Streamwan, such as hosting providers, payment processors, and analytics services."
        },
        {title: "Your rights",
         p1: "You have the right to access, update, or delete your personal information stored on Streamwan.",
         p2: "You can opt-out of receiving marketing communications from us by following the unsubscribe instructions provided in the emails or by contacting us directly."
        },
        {title: "Children's privacy",
         p1: "Streamwan is not intended for children under the age of 18. We do not knowingly collect personal information from children.",
         p2: ""
        },
        {title: "Changes to privacy policy",
         p1: "We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on Streamwan or through other communication channels",
         p2: ""
        },
        {title: "Contact us",
         p1: "If you have any questions, concerns, or feedback regarding this Privacy Policy or our data practices, please Contact Us.",
         p2: "By using Streamwan, you agree to the terms outlined in this Privacy Policy. Please review this policy periodically for any updates or changes."
        },
    ]

    return (
        <>
            <div className="px-[13%] sm:my-24">
                <div className="text-center">
                    <h1 className="text-green-900 font-extrabold text-[60px]">Privacy policy</h1>
                    <p className="text-slate-300 my-5">Last updated: 14 th May 2024</p>

                    <p className="mb-10">Thank you for using Streamwan! This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.</p>
                </div>

                <div className="px-[20%] my-5">
                    {/* Map them out here */}
                    {policies.map(( element, index ) => (
                        <div>
                            <h1 className="text-2xl font-bold my-5">{index + 1}{". " + element.title}</h1>
                            <p className="my-5">{element.p1}</p>
                            <p>{element.p2}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}