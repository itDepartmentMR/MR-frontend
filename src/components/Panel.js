
function Panel({url, desc}) {
    return ( 
        <>
            <div className="contCard">
                <img src={url} alt="imgNews"/>
                <p>{desc}</p>
            </div>
        </>
     );
}

export default Panel;