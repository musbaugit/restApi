# Express.js CRUD API

## Setup

```bash
npm install
node index.js


## Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Start the server with `node index.js`
4. Visit `http://localhost:3000`

## API Endpoints

### GET `/items`
Retrieve all items.

### GET `/items/:id`
Retrieve a single item by ID.

### POST `/items`
Create a new item.
- Body: `{ "name": "string", "description": "string" }`

### PUT `/items/:id`
Update an existing item by ID.
- Body: `{ "name": "string", "description": "string" }`

### DELETE `/items/:id`
Delete an item by ID.

## Example Request with Postman

POST `http://localhost:3000/items`
```json
{
  "name": "Notebook",
  "description": "A lined notebook"
}
