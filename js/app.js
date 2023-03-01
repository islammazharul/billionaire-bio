const loadData = () =>{
    fetch(`https://forbes400.onrender.com/api/forbes400?limit=10`)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = data =>{
    // console.log(data)
    const container = document.getElementById('table-container');
    data.forEach(person =>{
        // console.log(person.personName)
        const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${person.personName}</td>
    <td>${person.countryOfCitizenship}</td>
    <td>${person.industries}</td>
    <td>${person.rank}</td>
    <td>${person.wealthList}</td>
    `
    container.appendChild(tr)
    })
}

loadData()