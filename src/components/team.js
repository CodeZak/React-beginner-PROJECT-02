import Card from "./card";

function Team() {
    let info = [
        {
            id: 0,
            name: "Mahi Zakariae",
            job: "Web developer",
            phoneNumer: "212601535299",
            email: "mahi.zakariae@gmail.com",
        },
        {
            id: 1,
            name: "Patrick",
            job: "Web developer",
            phoneNumer: "212601535299",
            email: "mahi.zakariae@gmail.com",
        },
        {
            id: 2,
            name: "James",
            job: "Web developer",
            phoneNumer: "212601535299",
            email: "mahi.zakariae@gmail.com",
        },
        {
            id: 3,
            name: "John",
            job: "Web developer",
            email: "mahi.zakariae@gmail.com",
        },
    ];

    info = info.map((obj) => (
        <Card
            key={obj.id}
            name={obj.name}
            job={obj.job}
            phoneNumber={obj.phoneNumer}
            email={obj.email}
        />
    ));
    console.log(info[0]);

    return <div className="container">{info}</div>;
}

export default Team;
