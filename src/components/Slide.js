import React from "react";

const Slide = ({url, description, caption, user, loading}) => {
return (
<li>
    <figure>
        <img loading={loading} width="700px" src={url} alt={`the photographer's desctipion is ${description}`} />
        <figcaption><a href={user} target="_blank" rel="noreferrer" title={`to ${caption} profile`}> By: {caption}</a></figcaption>
    </figure>
</li>
);
}

export default Slide;