import "../../styles/components/headline.css"

function Headline ({title,image,alt}) {
    return (
        <div className="headline">
            <img src={image} className="headline_bg" alt={alt} />
            <h1>{title}</h1>
        </div>
    )
}

export default Headline