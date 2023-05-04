![image](https://user-images.githubusercontent.com/6205151/236349740-5517a2fc-b93e-4b97-bddf-cc844347e630.png)
# Ecommerce Database 13
  [![License: GPL](https://img.shields.io/badge/License-GPL-green.svg)](https://opensource.org/licenses/GPL)

## Description
Express.Js API back end for fictional e-commerce website that uses a MySql database.

## Table of Contents
- [Ecommerce Database 13](#ecommerce-database-13)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Routes](#api-routes)
  - [Walkthrough](#walkthrough)
  - [Licence](#licence)
  - [Questions](#questions)


## Installation

1. Clone the GitHub repository:
``` git clone git@github.com:dexit/cli-svg-logo-generator.git ```
2. Navigate to the cloned directory.
3. Rename `.env.example` to `.env` and update the values/settings to your own.
4. Use SCHEMA.SQL file to create the database
5. Install dependencies:
``` npm install ```
6. Run the database seed:
``` npm run seed ```
7. Start the server:
``` npm start ```

## Usage
Install & run the server as described in the [Installation](#installation) section.
Then proceed to follow the [Api Routes](#api-routes) section information for API access and route descriptions.

## API Routes

 ``` /api/categories ``` - GET - all Categories

 ``` /api/categories ``` - POST - create a single Category

 ``` /api/categories/:id ``` - GET - Single Category by ```id```

 ``` /api/categories/:id ``` - PUT - update a Category by ```id```

 ``` /api/categories/:id ``` - DELETE - delete a Category by ```id```

 <hr>

 ``` /api/products ``` - GET - all Products

 ``` /api/products ``` - POST - create a single Product

 ``` /api/products/:id ``` - GET - Single Product by ```id```

 ``` /api/products/:id ``` - PUT - update a Product Tag by ```id```

 ``` /api/products/:id ``` - DELETE - delete a Product Tag by ```id```

<hr>

 ``` /api/tags ``` - GET - all Tags

 ``` /api/tags ``` - POST - create a single Tag

 ``` /api/tags/:id ``` - GET - Single Tag by ```id```

 ``` /api/tags/:id ``` - PUT - update a single Tag by ```id```

 ``` /api/tags/:id ``` - DELETE - delete a single Tag by ```id```

## Walkthrough

https://user-images.githubusercontent.com/6205151/236352749-2f101575-2238-41eb-965a-5482b168acc3.mp4


## Licence
  [![License: GPL](https://img.shields.io/badge/License-GPL-green.svg)](https://opensource.org/licenses/GPL)
  \
Under a GPL License (or just GPL), a particular user can freely use, modify, or redistribute software without any restrictions. A popular example of software that uses GPL is WordPress, meaning anyone can use, modify, or extend the source code as desired. In the context of the WordPress project, GPL is equal to the software’s bill of rights.

- It grants open-source permissions for users including:

- The right to download and run the software freely

- The right to make changes to the software as desired

- The right to redistribute copies of the software

- The right to modify and distribute copies of new versions of the software

GPL achieves its goals by using the concept of copyleft. An obvious spin on copyright, copyleft uses copyright laws to enforce the open-source status of software. By copyrighting freedom into a software license, developers can ensure none of their software becomes proprietary when it’s modified or extended by another user.
  
## Questions
  
  If you have any questions, please contact me at dexit@dyc.lv. You can also check out my GitHub profile at <https://github.com/dExIT>.
