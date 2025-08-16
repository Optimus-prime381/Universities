const apiUrl = "http://universities.hipolabs.com/search?country=India";

const top5Names = [
    "Indian Institute of Technology Madras",
    "Anna University",
    "Vellore Institute of Technology",
    "Amrita Vishwa Vidyapeetham",
    "SRM Institute of Science and Technology"
];

let top5Universities = [];

window.onload = async function () {
    alert("Click the university name to know the details");
    const ul = document.getElementById('top5List');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const tamilNaduUniversities = data.filter(u =>
            u['state-province']?.toLowerCase() === "tamil nadu"
        );

        top5Universities = tamilNaduUniversities.filter(u =>
    top5Names.some(name =>
        u.name.toLowerCase().trim().includes(name.toLowerCase().trim()) ||
        name.toLowerCase().trim().includes(u.name.toLowerCase().trim())
    )
);

        top5Universities.forEach((uni, idx) => {
            const li = document.createElement('li');
            li.textContent = uni.name;
            li.onclick = () => showTop5Modal(idx);
            ul.appendChild(li);
        });

    } catch (err) {
        console.error("Error fetching university data:", err);
    }
};

function showTop5Modal(index) {
    const uni = top5Universities[index];

    document.getElementById('top5UniversityName').textContent = "Name: " + uni.name;
    document.getElementById('top5UniversityPlace').textContent = "Country: " + (uni.country || "India");
    document.getElementById('top5UniversityCourses').textContent = "State/Province: " + (uni['state-province'] || "N/A");
    document.getElementById('top5UniversityReviews').textContent = "Website: " + (uni.web_pages?.[0] || "N/A");

    document.getElementById('top5Modal').style.display = 'flex';
}

document.getElementById('closeTop5Modal').onclick = function () {
    document.getElementById('top5Modal').style.display = 'none';
};

window.onclick = function (event) {
    const modal = document.getElementById('top5Modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};