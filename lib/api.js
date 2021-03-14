import Prismic from "prismic-javascript";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

// 共通
async function fetchAPI(query, { previewData } = {} ) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(`${GRAPHQL_API_URL}?query=${query}`, {
    headers: {
      "Prismic-Ref": prismicAPI.masterRef.ref || prismicAPI.masterRef.ref,
      "Content-Type": "application/json",
      "Accept-Language": API_LOCALE,
      Authorization: `Token ${API_TOKEN}`,
    },
  });

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

// index.js
// getStaticProps
export async function getAllBlogPosts() {
  const entries = await fetchAPI(
    `query {
      allBlogposts(sortBy: date_DESC){
        edges{
          node{
            title
            date
            image
            richbody
            _meta { uid }
          }
        }
      }
    }`
  );
  return entries.allBlogposts.edges;
}

// posts/[uid].js
// getStaticPaths
export async function getAllBlogPaths() {
  const blogPaths = await fetchAPI(
    `query {
      allBlogposts(sortBy: date_DESC){
        edges{
          node{
            _meta { uid }
          }
        }
      }
    }`
  );
  return blogPaths.allBlogposts.edges;
}

// getStaticProps
export async function getBlogPost(uid, previewData) {
  const bPost = await fetchAPI(
    `query {
      blogpost( uid: "${uid}", lang: "ja-jp" ) {
        title
        date
        image
        richbody
      }
    }`,
    { previewData }
  );
  return bPost.blogpost;
}

// project/index.js
// getStaticProps
export async function getAllProjectPosts() {
  const entries = await fetchAPI(
    `query {
      allProjectposts(sortBy: date_DESC){
        edges{
          node {
            title
            image
            link {
              _linkType
              ... on _ExternalLink {
                url
              }
            }
            richbody
            _meta {
              uid
            }
          }
        }
      }
    }`
  );
  return entries.allProjectposts.edges;
}

// project/[uid].js
// getStaticPaths
export async function getAllProjectPaths() {
  const projectPaths = await fetchAPI(
    `query {
      allProjectposts(sortBy: date_DESC){
        edges{
          node{
            _meta { uid }
          }
        }
      }
    }`
  );
  return projectPaths.allProjectposts.edges;
}

// getStaticProps
export async function getProjectPost(uid) {
  const bPost = await fetchAPI(
    `query {
      projectpost( uid: "${uid}", lang: "ja-jp" ) {
        title
        date
        image
        link {
          _linkType
          ... on _ExternalLink {
            url
          }
        }
        richbody
      }
    }
    `
  );
  return bPost.projectpost;
}
