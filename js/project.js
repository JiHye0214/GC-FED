const projects = [
    {
        logoImg : "./assets/notion.png",
        client : "VCEC",
        projectSummary : "Create Study Abroad Center Website", // project background
        category : "Website Development",
        skills : ["jQuery", "MySQL", "HTML/CSS"],
        previews : ["./assets/kkia/", "./assets/kkia/", "./assets/kkia/"],
        challenges : "djsfefefe",
        outcomes : "dsjfieofe",
        conclude : "djisjeff",
    },
    {
        logoImg : "./assets/notion.png",
        client : "Team Project",
        projectSummary : "for Study",
        category : "Webapp Development",
        skills : ["jQuery", "MySQL", "HTML/CSS"],
        previews : ["./assets/kkia/", "./assets/kkia/", "./assets/kkia/"],
        challenges : "djsfefefe",
        outcomes : "dsjfieofe",
        conclude : "djisjeff",
    },
    {
        logoImg : "./assets/notion.png",
        client : "Team Project",
        projectSummary : "for Study",
        category : "Webapp Development",
        skills : ["jQuery", "MySQL", "HTML/CSS", "HTML/CSS"],
        previews : ["./assets/kkia/", "./assets/kkia/", "./assets/kkia/"],
        challenges : "djsfefefe",
        outcomes : "dsjfieofe",
        conclude : "djisjeff",
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
    const modalProject = projects[index];

    let modalItem = $(`
        <div id="project-modal-intro">
            <div>${modalProject.category}</div>
            <div id="project-modal-intro-client">${modalProject.client}</div>
        </div>

        <div id="project-modal-slide" class="justify-align-center">
            <div id="project-modal-slide-frame">
                <div id="project-modal-slide-pics">
                    <img src="./assets/kkia/kkia-main.png" alt="" />
                    <img src="./assets/kkia/kkia-login.png" alt="" />
                    <img src="./assets/kkia/kkia-signin.png" alt="" />
                    <img src="./assets/kkia/kkia-find.png" alt="" />
                </div>
            </div>
            <div id="project-modal-slide-btns">
                <img id="slide-btn-left" class="btn-hover" src="./assets/prev.png" alt="" />
                <img id="slide-btn-right" class="btn-hover" src="./assets/next.png" alt="" />
            </div>
        </div>
        <div id="project-modal-bgnd">
            <p class="semi-title">Project Background</p>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, rerum. Quod earum neque a nemo
                ratione culpa! Beatae eius numquam sed, velit et doloremque suscipit, repellendus accusamus rem
                placeat laboriosam.
            </div>
        </div>
        <div id="project-modal-clngs">
            <p class="semi-title">Challenges & Requirements</p>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit cumque est dolor
                similique minima in aliquam ipsum, ipsam nostrum, praesentium sit tempora deserunt et esse minus
                voluptatibus? Mollitia, odit!
            </div>
        </div>
        <div id="project-modal-outs">
            <p class="semi-title">Actions & Outcomes</p>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore est fugit unde architecto ipsa natus
                impedit reiciendis voluptatem dolorem quas ipsum, libero ad rerum ab laudantium nam voluptates
                dolores? Exercitationem.
            </div>
        </div>
        <div id="project-modal-techs">
            <p class="semi-title">Technologies Used</p>
            <div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi fugit eveniet autem
                    aspernatur natus repellat eos inventore cumque accusamus accusantium assumenda labore, facere
                    incidunt fuga ipsa fugiat, recusandae suscipit.
                </p>
            </div>
        </div>
        <div id="project-modal-fins">
            <p class="semi-title">Conclusions</p>
            <div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam modi fugit eveniet autem
                    aspernatur natus repellat eos inventore cumque accusamus accusantium assumenda labore, facere
                    incidunt fuga ipsa fugiat, recusandae suscipit.
                </p>
            </div>
        </div>

        <div id="project-modal-close">
            <img src="./assets/close.png" class="btn-hover" />
        </div>
    `);

    $("#project-modal").append(modalItem);
    functionControlSlide();
}

// Open Project Modal
$("#project-wrap").on("click", ".project-item", (event) => {
    const targetIndex = $(".project-item").index(event.currentTarget);

    functionDrowProjectModal(targetIndex);
})

// Control Modal Slide
const functionSetSliderBtn = (width) => {
    if (width == 0) {
        $("#slide-btn-left").addClass("btn-deaction");
    } else if (width == (imgCounnt - 1) * -600) {
        $("#slide-btn-right").addClass("btn-deaction");
    } else {
        $("#slide-btn-left").removeClass("btn-deaction");
        $("#slide-btn-right").removeClass("btn-deaction");
    }
};
const functionControlSlide = () => {
    const imgCounnt = document.querySelectorAll("#project-modal-slide-pics > img").length;
    let moveWidth = 0; 

    functionSetSliderBtn(moveWidth);
    
    $("#project-modal-slide-btns").on("click", ".btn-hover", (event) => {
        const targetIndex = $(".btn-hover").index(event.currentTarget);
        
        if(targetIndex == 0) { // left
            if(moveWidth != 0) {
                moveWidth += 600;
            }
        } else { // right
            if(moveWidth != (imgCounnt - 1) * -600) {
                moveWidth -= 600;
            }
        }
    
        $("#project-modal-slide-pics").css({
            transform: `translate(${moveWidth}px, 0)`,
            transition: "transform 0.5s ease" 
        });
    
        functionSetSliderBtn(moveWidth);
    })

    // Close Project Modal
    $("#project-modal-close > img").on("click", () =>{
    $("#project-modal-wrap").hide();
    $("#project-modal").html("");
})
}


