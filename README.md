# Simple GraphQL API

## Description
This is a simple GraphQL API for a blog comment system. It allows you to perform queries to fetch comments and mutations to add new comments.

## Running the Project

1. Clone this repository:

    ```sh
    git clone https://github.com/jgallo1994/my-simple-graphql-api.git
    ```

2. Navigate to the project directory:

    ```sh
    cd simple-graphql-api
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the server:

    ```sh
    npm run dev
    ```

   The server will be available at `http://localhost:4000/graphql`.

## Testing the API

You can test the API using `curl` or Postman. Below are examples of how to perform queries and mutations.

### Query to Get All Comments

**With `curl`:**

```sh
curl -X POST http://localhost:4000/graphql \
     -H "Content-Type: application/json" \
     -d '{"query": "{ comments { id author content createdAt } }"}'
```

## In Postman:

1. Select the POST method.
2. Enter the URL http://localhost:4000/graphql.
3. In the Headers tab, add the header:
    Key: Content-Type
    Value: application/json

4. In the Body tab, select raw and choose JSON. Then, copy and paste the following JSON:
```json
{
  "query": "{ comments { id author content createdAt } }"
}
```

## Mutation to Add a New Comment
With curl:
```bash
curl -X POST http://localhost:4000/graphql \
     -H "Content-Type: application/json" \
     -d '{"query": "mutation { addComment(author: \"Alice\", content: \"This is a new comment\") { id author content createdAt } }"}'

```

## In Postman:

1. Select the POST method.
2. Enter the URL http://localhost:4000/graphql.
3. In the Headers tab, add the header:
    Key: Content-Type
    Value: application/json

4. In the Body tab, select raw and choose JSON. Then, copy and paste the following JSON:
```bash
{
  "query": "mutation { addComment(author: \"Alice\", content: \"This is a new comment\") { id author content createdAt } }"
}
```
