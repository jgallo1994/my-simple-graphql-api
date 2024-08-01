import { v4 as uuidv4 } from 'uuid';

let comments = [
    { id: '1', author: 'John Doe', content: 'This is a comment', createdAt: new Date().toISOString() },
    { id: '2', author: 'Jane Doe', content: 'Another comment', createdAt: new Date().toISOString() }
];

export const resolvers = {
    Query: {
        comments: () => comments
    },
    Mutation: {
        addComment: (_: any, { author, content }: { author: string, content: string }) => {
            const newComment = { id: uuidv4(), author, content, createdAt: new Date().toISOString() };
            comments.push(newComment);
            return newComment;
        }
    }
};
