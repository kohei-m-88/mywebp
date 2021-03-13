// import React from 'react'
// import { Client } from '../prismic-configuration'

// const Post = ({ posts }) => {
//   const post = doc.data
//   return (
//     <div>
//       <h1>{RichText.asText(post.title)}</h1>
//       <h3>{RichText.asText(post.description)}</h3>
//     </div>
//   );
// }


// export async function getStaticProps({params}) {
//   const client = Client();
//   const doc = await client.getByUID('portfolio_posts', params.uid)

//   return {
//     props: {
//       doc,
//     },
//   }
// }

// export async function getStaticPaths() {
//      return {
//       // You can run a separate query here to get dynamic parameters from your documents.
//        paths: [
//           { params: { uid: 'longoweb' } },
//           { params: { uid: 'phylocog' } }
//        ],
//       fallback: false,
//     }
// }

// export default Post