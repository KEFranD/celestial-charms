import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { hero1, hero2, hero3, customer1, customer2, jewel1, jewel2, jewel3, jewel4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const heroes = [
    {
        thumbnail: hero1,
        hero: hero1,
    },
    {
        thumbnail: hero2,
        hero: hero2,
    },
    {
        thumbnail: hero3,
        hero: hero3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: jewel1,
        name: "AquaAura Earrings",
        price: "$200.20",
    },
    {
        imgURL: jewel2,
        name: "CrystalCrest Necklace",
        price: "$210.20",
    },
    {
        imgURL: jewel3,
        name: "ShellShimmer Earrings",
        price: "$220.20",
    },
    {
        imgURL: jewel4,
        name: "OceanicOpal Strand",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Emma Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Necklaces", link: "/" },
            { name: "Bracelets", link: "/" },
            { name: "Rings", link: "/" },
            { name: "Earrings", link: "/" },
            { name: "Watches", link: "/" },
            { name: "Chokers", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@celestialcharms.com", link: "mailto:customer@celestialcharms.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
