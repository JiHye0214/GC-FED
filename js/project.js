const projects = [
    {
        logoImg : "./assets/notion.png",
        client : "VCEC",
        projectSummary : "Create Study Abroad Center Website",
        category : "Website Development",
        skills : ["jQuery", "MySQL", "HTML/CSS"]
    },
    {
        logoImg : "./assets/notion.png",
        client : "Team Project",
        projectSummary : "for Study",
        category : "Webapp Development",
        skills : ["jQuery", "MySQL", "HTML/CSS"]
    },
    {
        logoImg : "./assets/notion.png",
        client : "Team Project",
        projectSummary : "for Study",
        category : "Webapp Development",
        skills : ["jQuery", "MySQL", "HTML/CSS", "HTML/CSS"]
    }
]

projects.forEach(project => {
    // 프로젝트 아이템 추가
    let projectItem = $(`
        <div class="project-item btn-hover">
            <div class="project-item-intro-wrap">
                <div class="project-item-intro-img justify-align-center">
                    <img src="${project.logoImg}" alt="">
                </div>
                <div class="project-item-intro-content">
                    <p>
                        client : ${project.client}
                    </p>
                    <p>
                    ${project.projectSummary}
                    </p>
                </div>
            </div>
            <div class="project-item-inform-wrap">
                <div class="project-item-inform-category">
                    ${project.category}
                </div>
                <ul class="project-item-inform-skills justify-align-center">
                
                </ul>
            </div>
        </div>
    `);

    // 프로젝트 아이템을 부모 요소에 추가
    $("#project-wrap").append(projectItem);

    // 현재 추가된 프로젝트 아이템의 스킬 리스트를 선택
    let skillList = projectItem.find(".project-item-inform-skills");

    // 해당 프로젝트의 스킬 추가
    project.skills.forEach(skill => {
        skillList.append(`<li>${skill}</li>`);
    });
});

const functionDrowProjectModal = (index) => {
    $("#project-modal-wrap").css("display", "flex");

    console.log(projects[index]);
}

// Open Project Modal
$("#project-wrap").on("click", ".project-item", (event) => {
    const targetIndex = $(".project-item").index(event.currentTarget);

    functionDrowProjectModal(targetIndex);
})

// Close Project Modal
$("#project-modal-close > img").on("click", () =>{
    $("#project-modal-wrap").hide();
})