const paintingsCollection = [
    {
      title: "Untitled",
      artist: "Jean-Michel Basquiat",
      year: 1981,
      picture: "https://static01.nyt.com/images/2017/05/18/arts/19basquiat_web1/18BASQUIAT-videoSixteenByNineJumbo1600-v2.jpg",
      description: "This painting features Basquiat's signature graffiti-style imagery, including enigmatic symbols, text, and figures.",
      medium: "Acrylic and oilstick on canvas",
      dimensions: "183 × 122 cm (72 × 48 in)",
      style: "Graffiti Art"
    },
    {
      title: "Untitled (Club Scene)",
      artist: "Kerry James Marshall",
      year: 2013,
      picture: "data:image/jpeg;base64,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",
      description: "Marshall's work often explores African American identity and history. This painting depicts a vibrant scene from a nightclub, showcasing Marshall's mastery of color and composition.",
      medium: "Acrylic on PVC panel",
      dimensions: "243.8 × 243.8 cm (96 × 96 in)",
      style: "Contemporary Realism"
    },
    {
      title: "Resurrection",
      artist: "Alma Thomas",
      year: 1966,
      picture: "https://d7hftxdivxxvm.cloudfront.net/?height=500&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FjZdqKGamLH2-sDsiFWHyrA%2Fnormalized.jpg&width=670",
      description: "Alma Thomas was known for her abstract, colorful compositions. 'Resurrection' is characterized by vibrant hues and swirling forms.",
      medium: "Acrylic on canvas",
      dimensions: "152.4 × 182.9 cm (60 × 72 in)",
      style: "Abstract Expressionism"
    },
    {
      title: "The Migration Series",
      artist: "Jacob Lawrence",
      year: "1940-1941",
      picture: "https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDgvMTIvNHhzemt6dmZ3cV8yOF8xOTQyXzIwX0NDQ1IuanBnIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDkwIC1yZXNpemUgMjAwMHgyMDAwXHUwMDNlIl1d/28_1942_20_CCCR.jpg?sha=437cc44fca5988da",
      description: "'The Migration Series' consists of 60 paintings depicting the mass movement of African Americans from the rural South to the urban North during the early 20th century.",
      medium: "Tempera on hardboard",
      dimensions: "Each panel is 18 × 12 inches",
      style: "Modernist Figurative"
    },
    {
      title: "Michelle LaVaughn Robinson Obama",
      artist: "Amy Sherald",
      year: 2018,
      picture: "https://media.newyorker.com/photos/5a8313f7613e3802fb3f99a0/4:3/w_2500,h_1875,c_limit/StFelix-Amy-Sherald-Portrait-Michelle-Obama.jpg",
      description: "This portrait of former First Lady Michelle Obama garnered widespread acclaim for its modern interpretation and vibrant colors.",
      medium: "Oil on linen",
      dimensions: "213.4 × 152.4 cm (84 × 60 in)",
      style: "Contemporary Realism"
    },
    {
      title: "Aspects of Negro Life: From Slavery through Reconstruction",
      artist: "Aaron Douglas",
      year: "1934",
      picture: "https://www.milwaukeeindependent.com/wp-content/uploads/2020/06/061120_RedSummer_03.jpg",
      description: "Douglas was a leading figure of the Harlem Renaissance. This mural captures key moments in African American history with striking symbolism and composition.",
      medium: "Oil on canvas",
      dimensions: "5 panels, each approximately 121.9 × 609.6 cm (48 × 240 in) combined",
      style: "Harlem Renaissance Art"
    },
    {
      title: "Tar Beach",
      artist: "Faith Ringgold",
      year: 1988,
      picture: "https://www.guggenheim.org/wp-content/uploads/1988/01/88.3620_ph_web-1.png",
      description: "'Tar Beach' is part of Ringgold's story quilt series, which combines painting, quilting, and storytelling to explore African American life and culture.",
      medium: "Acrylic on canvas with fabric border",
      dimensions: "182.9 × 243.8 cm (72 × 96 in)",
      style: "Story Quilt Art"
    },
    {
      title: "Watusi (Hard Edge)",
      artist: "Alma Woodsey Thomas",
      year: 1963,
      picture: "https://uploads6.wikiart.org/images/alma-woodsey-thomas/air-view-of-a-spring-nursery-1966.jpg!Large.jpg",
      description: "Thomas was known for her abstract compositions inspired by nature. 'Watusi (Hard Edge)' features bold colors and geometric forms.",
      medium: "Acrylic on canvas",
      dimensions: "127 × 101.6 cm (50 × 40 in)",
      style: "Abstract Expressionism"
    },
    {
      title: "Lawdy Mama",
      artist: "Barkley L. Hendricks",
      year: 1969,
      picture: "https://hips.hearstapps.com/hmg-prod/images/2-lawdy-mama-31-64cc090e8c7de.jpg?crop=1xw:0.538875xh;center,top&resize=1200:*",
      description: "Hendricks was renowned for his life-sized portraits of African American individuals. 'Lawdy Mama' is a striking portrayal of a confident woman against a gold background.",
      medium: "Oil, acrylic, and magna on linen canvas with painted wood frame",
      dimensions: "106.7 × 83.8 cm (42 × 33 in)",
      style: "Contemporary Realism"
    },
    {
      title: "The Death of Cleopatra",
      artist: "Edmonia Lewis",
      year: 1876,
      picture: "https://drrichardstemp.files.wordpress.com/2020/06/lewis-cleopatra-focus.png?w=1050",
      description: "Lewis was the first professional African American sculptor. 'The Death of Cleopatra' is one of her most famous works, depicting the Egyptian queen in her final moments.",
      medium: "Marble",
      dimensions: "157.5 cm (62 in) (height)",
      style: "Neoclassical Sculpture"
    }
  ];
  

export { paintingsCollection };