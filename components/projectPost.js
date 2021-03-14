import { RichText } from "prismic-reactjs";

export const ProjectPost = ( props ) => {
  return(
    <>
      <div>
        <p>{RichText.asText(props.p_title)}</p>
        {props.p_coverImage && <img src={props.p_coverImage} alt={`Cover Image for ${props.p_title}`} /> }
        <p>{props.p_link}</p>
        <p>{RichText.asText(props.p_richbody)}</p>
        <p>{props.p_uid}</p>
      </div>
    </>
  )
}