import gql from 'graphql-tag';

export default gql`
  query LookUpPost($id: ID!) {
    micropost(id: $id) {
      id
      content
      updatedAt
      user {
        name
        email
      }
    }
  }
`;
