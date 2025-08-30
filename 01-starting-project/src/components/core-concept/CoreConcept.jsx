function CoreConcept({ image, title, description }) {
    // function CoreComponent({ ...concept }) { //this can be used to receive infinite number of arguments in props, which will be packed into an array called 'concept' in this example,
    // and can later be accessed as concept.property_name
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConcept;