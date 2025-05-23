export async function GET() {
  const data = {
    navbar: {
      logo: "cmp",
      links: [
        { label: "about", to: "#about" },
        { label: "interests", to: "#interests" },
        { label: "experience", to: "#experience" },
        { label: "contact", to: "#contact" },
      ],
    },
    body: {
      landing: {
        message:
          "hello! im mateo pérez. senior software engineer, reader & investor",
        image: "/Subject.png",
      },
      accordion: {
        title: "book list 📚",
        sortBy: "rating",
        sortOrder: "desc",
        items: [
          {
            title: "Steve Jobs",
            author: "Walter Isaacson",
            year: "2020",
            rating: 4.5,
            genre: "Fiction",
          },
          {
            title: "12 Rules for Life",
            author: "Jordan B. Peterson",
            year: "2021",
            rating: 4.6,
            genre: "Sci-Fi",
          },
          {
            title: "Atomic Habits",
            author: "James Clear",
            year: "2018",
            rating: 4.7,
            genre: "Self-Help",
          },
          {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            year: "2020",
            rating: 5,
            genre: "Finance",
          },
          {
            title: "thinking fast and slow",
            author: "Daniel Kahneman",
            year: "2020",
            rating: 5,
            genre: "Finance",
          },
          {
            title: "the second mountain",
            author: "david brooks",
            year: "2020",
            rating: 4.9,
            genre: "personal development",
          },
          {
            title: "sapiens",
            author: "yuval noah harari",
            year: "2020",
            rating: 5,
            genre: "history",
          },
          {
            title: "homo deus",
            author: "yuval noah harari",
            year: "2020",
            rating: 5,
            genre: "history",
          },
          {
            title: "the changing world order",
            author: "ray dalio",
            year: "2020",
            rating: 4.8,
            genre: "history",
          },
          {
            title: "1984",
            author: "george orwell",
            year: "2020",
            rating: 4.1,
            genre: "history",
          },
          {
            title: "man's search for meaning",
            author: "viktor frankl",
            year: "2020",
            rating: 4.6,
            genre: "history",
          },
          
        ],
      },
      timeline: {
        title: "experience",
        items: [
          {
            type: "work",
            period: ["2025-now"],
            description:
              "sr fullstack developer.",
          },
          {
            type: "work",
            title: "Praxent",
            period: ["2023-2025"],
            description:
              "mid fullstack developer.",
          },
          {
            type: "work",
            title: "Auxo",
            period: ["2022-2022"],
            description:
              "mid fullstack developer.",
          },
          {
            type: "work",
            title: "HelloBuild",
            period: ["2021-2022"],
            description:
              "mid fullstack developer.",
          },
          {
            type: "project",
            title: "compleat",
            period: ["2021-2022"],
            description:
              "co-founder & jr fullstack developer.",
          },

          {
            type: "work",
            title: "Amcon",
            period: ["2020-2021"],
            description:
              "jr fronted developer.",
          },
          {
            type: "education",
            title: "universidad de los andes",
            period: ["2019-2020"],
            description:
              "teaching assistant for algorithms & object-oriented programming I & II, & management control systems.",
          },
        ],
      },
    },
    footer: {
      socialLinks: [
        {
          name: "linkedin",
          href: "https://www.linkedin.com/in/mateo-perez-4156291b2/",
          color: "#0077B5",
        },
        {
          name: "github",
          href: "https://github.com/Mateo-P",
          color: "#333",
        },
        {
          name: "facebook",
          href: "https://www.facebook.com/cristianmateo.perezmarin/",
          color: "#1877F2",
        },
        {
          name: "twitter",
          href: "https://twitter.com/cmp_0508",
          color: "#1DA1F2",
        },
        {
          name: "instagram",
          href: "https://www.instagram.com/cmp_0508/",
          color: "#E4405F",
        },
      ],
      footerText: "built with ⚡️ nextjs & ▲ vercel.",
    },
  };

  // Pass data to the page via props
  return Response.json(data);
}
