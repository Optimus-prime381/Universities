const url = "http://universities.hipolabs.com/search?country=India";
let allIndianUniversities = [];

let getData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    const universityListElem = document.getElementById("universityList");
    universityListElem.innerHTML = "";

    allIndianUniversities = data;

    allIndianUniversities.forEach((university, idx) => {
        const li = document.createElement('li');
        li.textContent = university.name;
        li.onclick = () => showUniversityModal(idx);
        universityListElem.appendChild(li);
    });
};

function showUniversityModal(index) {
    const uni = allIndianUniversities[index];
    
    document.getElementById('modalUniversityName').textContent = "Name: " + uni.name;
    document.getElementById('modalUniversityPlace').textContent = "Country: " + (uni.country || "India");
    document.getElementById('modalUniversityCourses').textContent = "State/Province: " + (uni['state-province'] || "N/A");

    const websiteLink = document.getElementById('modalUniversityDetails');
    if (uni.web_pages && uni.web_pages[0]) {
        websiteLink.textContent = uni.web_pages[0];
        websiteLink.href = uni.web_pages[0];
        websiteLink.target = "_blank";
    } else {
        websiteLink.textContent = "N/A";
        websiteLink.removeAttribute("href");
    }

    document.getElementById('universityModal').style.display = 'flex';
}

document.getElementById("getUniversities").addEventListener("click", getData);

document.getElementById('closeModal').onclick = function () {
    document.getElementById('universityModal').style.display = 'none';
};

window.onclick = function (event) {
    const modal = document.getElementById('universityModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

