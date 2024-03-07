function Tags (tags) {
    return (
        <ul className="tags">
            {tags.map((tag) => {return (
                <li>{tag}</li>
                )
            })}
        </ul>
    )
}

export default Tags