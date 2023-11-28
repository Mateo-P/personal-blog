export async function getData() {

  //const res = await fetch(`http://localhost:3000/api/data`); // Update URL as per your setup
  const data = {
    navbar: {
      logo: { src: '/logo_me.png', alt: 'mateo perez' },
      links: [
        { label: 'About', to: 'about' },
        { label: 'Interests', to: 'interests' },
        { label: 'Experience', to: 'experience' },
        { label: 'Contact', to: 'contact' }
      ]
    },
    body: 'restaurant-name',
    footer: [
      {
        name: 'category-1',
        items: [
          {
            name: 'item-1',
            description: 'description-1',
            price: 10,
            options: [
              {
                name: 'option1',
                min: 1,
                max: 1,
                choices: [
                  { name: 'choice-1', extra_cost: 2 },
                  { name: 'choice-2', extra_cost: 2 },
                  { name: 'choice-3', extra_cost: 2 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'category-2',
        items: [
          {
            image: '/icon.png',
            name: 'item-1',
            description: 'description-1',
            price: 10,
            options: [
              {
                name: 'option1',
                min: 1,
                max: 1,
                choices: [
                  { name: 'choice-1', extra_cost: 2 },
                  { name: 'choice-2', extra_cost: 2 },
                  { name: 'choice-3', extra_cost: 2 }
                ]
              },
              {
                name: 'option1',
                min: 1,
                max: 1,
                choices: [
                  { name: 'choice-1', extra_cost: 2 },
                  { name: 'choice-2', extra_cost: 2 },
                  { name: 'choice-3', extra_cost: 2 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'category-3',
        items: [
          {
            name: 'item-1',
            description: 'description-1',
            price: 10,
            options: [
              {
                name: 'option1',
                min: 1,
                max: 1,
                choices: [
                  { name: 'choice-1', extra_cost: 2 },
                  { name: 'choice-2', extra_cost: 2 },
                  { name: 'choice-3', extra_cost: 2 }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  // Pass data to the page via props
  return data;
}

export default async (req, res) => {
  const jsonData = await getData()
  res.status(200).json(jsonData);
};
