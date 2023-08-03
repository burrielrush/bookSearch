import { gql } from '@apollo/client';


// Mutation operation for user login
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;


// Mutation operation for adding a new user
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;


// Mutation operation for saving a book for user that is currently logged in
export const SAVE_BOOK = gql`
mutation saveBook($input: SavedBookInput) {
    saveBook(input: $input) {
        username
        _id
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}

`;

// Mutation operation for removing a book from the logged-in user's saved books
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;