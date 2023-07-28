import {
    FaClinicMedical,
    FaRegUserCircle,
    FaUserCircle,
    FaOldRepublic,
    FaOrcid,
    FaPaypal,
    FaItunesNote,
    FaRegMoon,
    FaCalendar,
    FaSkating,
    FaChalkboardTeacher,
    FaFontAwesomeLogoFull
} from "react-icons/fa";
export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: <FaClinicMedical />,
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: <FaRegUserCircle />,
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: <FaUserCircle />,
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: <FaOldRepublic />,
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: <FaOrcid />,
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: <FaPaypal />,
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: <FaPaypal />,
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: <FaItunesNote />,
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: <FaRegMoon />,
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: <FaCalendar />,
            },
        ],
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: <FaSkating />,
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: <FaPaypal />,
            },
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: <FaChalkboardTeacher />,
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: <FaFontAwesomeLogoFull />,
            },
        ],
    },
];
export const topDealUsers = [
    {
        id: 1,
        img: "../images/t-shirt-1.jpg",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "../images/t-shirt-1.jpg",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256",
    },
    {
        id: 3,
        img: "../images/t-shirt-1.jpg",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.998",
    },
    {
        id: 4,
        img: "../images/t-shirt-1.jpg",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 5,
        img: "../images/t-shirt-1.jpg",
        username: "Juan Harrington",
        email: "juan@gmail.com",
        amount: "2.134",
    },
    {
        id: 6,
        img: "../images/t-shirt-1.jpg",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "1.932",
    },
    {
        id: 7,
        img: "../images/t-shirt-1.jpg",
        username: "Angel Thomas",
        email: "angel@gmail.com",
        amount: "1.560",
    },
];