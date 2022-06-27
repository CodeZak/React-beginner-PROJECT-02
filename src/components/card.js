function Card(compos) {
    return (
        <div
            className="card"
            style={{
                backgroundColor: compos.phoneNumber ? "blue" : "red",
            }}
        >
            <img src="img.jpg" alt="" />
            <div className="info ">
                <span>{compos.name}</span>
                <span>{compos.job}</span>
                <span>Phone : {compos.phoneNumber}</span>
                <span>email : {compos.email}</span>
            </div>
        </div>
    );
}

export default Card;
