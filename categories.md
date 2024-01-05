# GET /categories

## Description:
This endpoint retrieves all categories.

## Request:
`GET /categories`

## Parameters:
None

## Response:
Returns a JSON array of all categories.

## Success Response:
- **Code:** 200
- **Content:** `{ categories }`

## Error Response:
- **Code:** 400 BAD REQUEST
- **Content:** `{ error : "Error message" }`

## Sample Call:
```javascript
fetch('/categories')
  .then(response => response.json())
  .then(data => console.log(data));
