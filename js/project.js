const projects = [
    {
        client : "VCEC",
        projectSummary : "Create Education Consulting Center Website", // project background
        category : "Website Development",
        skills : ["WIX", "database", "JavaScript"],
        previews : ["./assets/projects/vcec/vcec-main.png", "./assets/projects/vcec/vcec-main2.png", "./assets/projects/vcec/vcec-about.png", "./assets/projects/vcec/vcec-univ.png"],
        challenges : "Limits of wix: js, css,...",
        outcomes : "It was made as intended.",
        techs : ["./assets/logo/wix.png"],
        conclude : "It was helpful for my career.",
    },
    {
        client : "Team Project",
        projectSummary : "for Study",
        category : "Webapp Development",
        skills : ["jQuery", "MySQL", "HTML/CSS"],
        previews : ["./assets/projects/kkia/kkia-login.png", "./assets/projects/kkia/kkia-signin.png", "./assets/projects/kkia/kkia-find.png", "./assets/projects/kkia/kkia-main.png"],
        challenges : "Automatic generation of intermediate tables in JPA",
        outcomes : "It was made as intended.",
        techs : ["./assets/logo/html.png", "./assets/logo/css.png", "./assets/logo/js.png", 
            "./assets/logo/java.png", "./assets/logo/thymeleaf.png", "./assets/logo/springboot.png", 
            "./assets/logo/MySQL.png", "./assets/logo/mybatis.png", "./assets/logo/dbeaver.png"],
        conclude : "It was helpful for my career.",
    },
    {
        client : "Team Project",
        projectSummary : "for Study",
        category : "Webapp Development",
        skills : ["jQuery", "MySQL", "HTML/CSS"],
        previews : ["./assets/projects/mychild/mychild-main.jpg", "./assets/projects/mychild/mychild-main2.jpg", "./assets/projects/mychild/mychild-login.jpg", 
            "./assets/projects/mychild/mychild-find.jpg", "./assets/projects/mychild/mychild-signin.jpg", "./assets/projects/mychild/mychild-together.jpg", 
            "./assets/projects/mychild/mychild-together-detail.jpg", "./assets/projects/mychild/mychild-zzim.jpg"],
        challenges : "Flows in which files are stored on the server",
        outcomes : "It was made as intended.",
        techs : ["./assets/logo/html.png", "./assets/logo/css.png", "./assets/logo/js.png", 
            "./assets/logo/java.png", "./assets/logo/thymeleaf.png", "./assets/logo/springboot.png", 
            "./assets/logo/MySQL.png", "./assets/logo/mybatis.png", "./assets/logo/dbeaver.png"],
        conclude : "It was helpful for my career.",
    }
]

projects.forEach(project => {
    // 프로젝트 아이템 추가
    let projectItem = $(`
        <div class="project-item btn-hover">
            <div class="project-item-intro-wrap">
                <div class="project-item-intro-img justify-align-center">
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
    $("#project-modal-wrap").scrollTop(0);
    const modalProject = projects[index];

    let modalItem = $(`
        <div id="project-modal-intro">
            <div>${modalProject.category}</div>
            <div id="project-modal-intro-client">${modalProject.client}</div>
        </div>

        <div id="project-modal-slide" class="justify-align-center">
            <div id="project-modal-slide-frame">
                <div id="project-modal-slide-pics"></div>
            </div>
            <div id="project-modal-slide-btns">
                <img id="slide-btn-left" class="btn-hover" src="./assets/prev.png" alt="" />
                <img id="slide-btn-right" class="btn-hover" src="./assets/next.png" alt="" />
            </div>
        </div>
        <div id="project-modal-bgnd">
            <p class="semi-title">Project Background</p>
            <div>${modalProject.projectSummary}</div>
        </div>
        <div id="project-modal-clngs">
            <p class="semi-title">Challenges & Requirements</p>
            <div>${modalProject.challenges}</div>
        </div>
        <div id="project-modal-outs">
            <p class="semi-title">Actions & Outcomes</p>
            <div>${modalProject.outcomes}</div>
        </div>
        <div id="project-modal-techs">
            <p class="semi-title">Technologies Used</p>
            <div id="project-modal-techs-img"></div>
        </div>
        <div id="project-modal-fins">
            <p class="semi-title">Conclusions</p>
            <div>${modalProject.conclude}</div>
        </div>

        <div id="project-modal-close">
            <img src="./assets/close.png" class="btn-hover" />
        </div>
    `);

    $("#project-modal").append(modalItem);

    // draw previews 
    let previewsList = modalItem.find("#project-modal-slide-pics"); // > 못 씀. 하나만 지정 가능 
    modalProject.previews.forEach(pic => {
        previewsList.append(`<img src="${pic}"/>`);
    });

    // draw techs
    let techsList = modalItem.find("#project-modal-techs-img"); // > 못 씀. 하나만 지정 가능 
    modalProject.techs.forEach(tech => {
        techsList.append(`<img src="${tech}"/>`);
    });

    // Control Modal Slide
    const imgCount = document.querySelectorAll("#project-modal-slide-pics > img").length;
    const functionSetSliderBtn = (width) => {
        if (width == 0) {
            $("#slide-btn-left").addClass("btn-deaction");
        } else if (width == (imgCount - 1) * -600) {
            $("#slide-btn-right").addClass("btn-deaction");
        } else {
            $("#slide-btn-left").removeClass("btn-deaction");
            $("#slide-btn-right").removeClass("btn-deaction");
        }
    };

    let moveWidth = 0; 
    functionSetSliderBtn(moveWidth);

    $("#project-modal-slide-btns").on("click", ".btn-hover", (event) => {
        const targetIndex = $(".btn-hover").index(event.currentTarget);
        
        if(targetIndex == 0) { // left
            if(moveWidth != 0) {
                moveWidth += 600;
            }
        } else { // right
            if(moveWidth != (imgCount - 1) * -600) {
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

// Open Project Modal
$("#project-wrap").on("click", ".project-item", (event) => {
    const targetIndex = $(".project-item").index(event.currentTarget);

    functionDrowProjectModal(targetIndex);
})




