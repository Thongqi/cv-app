import { PersonalInfo } from "./personal-info"

export function Resume(){
    return(
        <div class="resume">

        </div>
    )
}

function TemplateToptoBottom(){
    return(
        <div class="vertical">
            <PersonalInfo></PersonalInfo>
            <WorkExps></WorkExps>
            <EduBackgrounds></EduBackgrounds>
            <Skills></Skills>
            <Languages></Languages>
        </div>
    )
}

function TemplateLeftToRight(){
    return(
        <div class="ltor">
            <div class="left">
                <PersonalInfo></PersonalInfo>
                <Skills></Skills>
                <Languages></Languages>
            </div>
            <div class="right">
                <WorkExps></WorkExps>
                <EduBackgrounds></EduBackgrounds>
            </div>
        </div>
    )
}



function WorkExps(){
    return(
        <div>
            <div>
                <mark><p class="template-h2">PROFESSIONAL EXPERIENCE</p></mark>
            </div>
            <WorkExp></WorkExp>
        </div>
    )
}

function WorkExp(work){
    return(
        <div class="work">
            <p class="title">{work.jobtitle}</p>
            <p class="companyname">{work.companyname}</p>
            <p class="timeframe">{work.timeframe}</p>
            <p class="descr">{work.descr}</p>
        </div>
    )
    
}

function EduBackgrounds(){


    return(
        <div>
            <div>
                <mark><p class="template-h2">EDUCATIONAL BACKGROUND</p></mark>
            </div>
            <EduBackground></EduBackground>
        </div>
    )
}

function EduBackground(edu){
    return(
        <div class="edu">
            <p class="coursename">{edu.coursename}</p>
            <p class="institutename">{edu.institutename}</p>
            <p class="timeframe">{edu.timeframe}</p>
            <p class="descr">{edu.descr}</p>
        </div>
    )
    
}

function Skills(skills){
    const skillItems = skills.map(skill => <li>{skill}</li>)

    return(
        <ul>{skillItems}</ul>
    )
}

function Languages(languages){
    const languageItems = languages.map(language => <li>{language}</li>)

    return(
        <ul>{languageItems}</ul>
    )
}

`user select sets of color, primary and background
react setcolor
react changecolor`

`user select font-family`