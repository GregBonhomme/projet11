import "../../styles/components/tags.css"

function Tags (prop) {
    const tagList = prop.tags
    if (Array.isArray(tagList)) {
        return (
            <ul className="tags">
                {tagList.map((tag,index) => {
                    return (
                        <li key={index} className="tag">{tag}</li>
                    )
                })}
            </ul>
        )
    }
}

export default Tags