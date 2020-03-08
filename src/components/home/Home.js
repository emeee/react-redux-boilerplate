import React from "react";
import Page from "../../hocs/Page";
import MaterialTable from "material-table";

const columns = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birthday", field: "birthYear", type: "numeric" },
    {
        title: "City",
        field: "city",
        lookup: { 34: "Buenos Aires", 63: "La Plata" }
    }
];

const data = [
    { name: "John", surname: "Doe", birthYear: 1987, birthCity: 63 },
    { name: "Unit", surname: "Test", birthYear: 1987, birthCity: 34 }
];

const Home = () =>
    <div style={{maxWidth: '80%', margin: "auto"}}>
        <MaterialTable
            columns={columns}
            data={data}
            title=""
        />
    </div>;

export default Page({ title: "Home" })(Home);
