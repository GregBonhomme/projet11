function Tags (prop) {
    const tagList = prop.tags
    if (Array.isArray(tagList)) {
        return (
            <ul className="tags">
                {tagList.map((tag,index) => {
                    return (
                        <li key={index}>{tag}</li>
                    )
                })}
            </ul>
        )
    }
}

export default Tags