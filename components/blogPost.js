import { RichText } from "prismic-reactjs";

export const BlogPost = ( props ) => {

  return (
    <>
      <div>
        <p>articles</p>
        <p>{RichText.asText(props.p_title)}</p>
        <p>{props.p_date}</p>
        <img src={props.p_coverImage.url} alt={`Cover Image for ${props.p_title}`} />
        <p>{RichText.asText(props.p_richbody)}</p>
        <p>{props.p_uid.uid}</p>
      </div>
    </>
  );
};

export default BlogPost;
