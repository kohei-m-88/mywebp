export const ProjectPost = ( props ) => {
  return(
    <>
      <div>
        <p>{props.p_title}</p>
        {props.p_coverImage && <img src={props.p_coverImage} alt={`Cover Image for ${props.p_title}`} /> }
        <p>{props.p_link}</p>
        <p>{props.p_summary}</p>
        <p>{props.p_uid}</p>
      </div>
    </>
  )
}