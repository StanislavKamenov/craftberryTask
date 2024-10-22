const questions = () => {
    return [
        {
            question: "What's your hair type or texture?",
            options: [
                { Option: 'a', text: "Straight" },
                { Option: 'b', text: "Curly" },
                { Option: 'c', text: "Wavy" },
                { Option: 'd', text: "Fine" }
            ]
        },
        {
            question: "How often do you wash your hair?",
            options: [
                { Option: 'a', text: "Daily" },
                { Option: 'b', text: "Every other day" },
                { Option: 'c', text: "Twice a week" },
                { Option: 'd', text: "Once a week" },
                { Option: 'e', text: "Once every two weeks" }
            ]
        },
        {
            question: "What benefit do you look for in your hair products?",
            options: [
                { Option: 'a', text: "Anti-breakage" },
                { Option: 'b', text: "Hydration" },
                { Option: 'c', text: "Soothing dry scalp" },
                { Option: 'd', text: "Repairs the appearance of damaged hair" },
                { Option: 'e', text: "Volume" },
                { Option: 'f', text: "Curl and coil enhancing" }
            ]
        },
        {
            question: "Is there anything troubling you about your hair?",
            options: [
                { Option: 'a', text: "Breakage" },
                { Option: 'b', text: "Frizz" },
                { Option: 'c', text: "Scalp dryness" },
                { Option: 'd', text: "Damage" },
                { Option: 'e', text: "Tangling" }
            ]
        },
        {
            question: "What is your natural hair color(s) today?",
            options: [
                { Option: 'a', text: "Black" },
                { Option: 'b', text: "Brown" },
                { Option: 'c', text: "Blonde" },
                { Option: 'd', text: "Red/Orange" },
                { Option: 'e', text: "Silver/Grey" }
            ]
        }
    ];
};

export default questions;
