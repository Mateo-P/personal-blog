export default (req, res) => {
  res.status(200).json({
    restaurantPhone: '3144183191',
    restaurantName: 'restaurant-name',
    categories: [
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
  });
};
