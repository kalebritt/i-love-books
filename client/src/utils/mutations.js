//import apollo/client
import { gql } from "@apollo/client";

//export login_user
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

// add_user

// save book

// remove book