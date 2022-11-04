import React from 'react';

const ShowData = ({paramJson}) =>{
    //console.log(paramJson);
    let data=JSON.parse(paramJson);
    console.log(data);

    let personalInfo=data[0].personalInfo;
    //console.log(personalInfo);
    let education=data[1].education;
    //console.log(education);
    let certificate=data[2].certificate;
    //console.log(certificate);
    let workingExperience = data[3].workingExperience;
    //console.log(workingExperience);
    let project = data[4].project;
    //console.log(project);
    let hobby = data[5].hobby;
    //console.log(hobby);
    let showPersonalHeader=personalInfo[0].resumeObjective;
    //console.log(showPersonalHeader);
    let showPersonalDetail=<div>
        <table><thead><tr><th></th></tr></thead>
            <tbody>
                <tr>
                    <td>{personalInfo[1].name}</td>
                </tr>
                <tr>
                    <td><td>{personalInfo[1].nationality}</td></td>
                </tr>
                <tr>
                    <td>{personalInfo[1].phoneNo} </td>
                </tr>
                <tr>
                    <td>{personalInfo[1].email}</td>
                </tr>
            </tbody>
        </table></div>;
    //console.log(showPersonalDetail);
    let educationDetail= education.map(function(item,i){
        return(
            <div>
                <ul key={i}>
                    <li key={i++}>{item.degree}</li>
                    <li key={i++}>{item.fromYear}</li>
                    <li key={i++}>{item.toYear}</li>
                    <li key={i++}>{item.association}</li>
                </ul>
                <hr/>
            </div>
        );
    });
    //console.log(educationDetail);
    let certificateDetail=certificate.map(function(certi,k){
        return(
            <div>
                <ul key={k}>
                    <li kye={k}>{certi.certificate}</li>
                    <li key={k}>{certi.fromDate}</li>
                    <li key={k}>{certi.toDate}</li>
                    <li key={k}>{certi.association}</li>
                </ul>
                <hr/>
            </div>
        );
    });
    //console.log(certificateDetail); 
    let workingExperienceDetail = workingExperience.map((workEx)=>{
        return (
            <div>
                <ul>
                    <li>{workEx.companyName}</li>
                    <li>{workEx.position}</li>
                    <li>{workEx.duration}</li>
                    <li>{workEx.fromYear}</li>
                    <li>{workEx.toYear}</li>
                    <li>{workEx.rolesAndResponsibilty}</li>
                </ul>
                <hr />
            </div>
        );
    });
    let projectDetail = project.map((proj)=>{
        return(
            <div>
                <ul>
                    <li>{proj.projectName}</li>
                    <li>{proj.details}</li>
                </ul>
                <hr />
            </div>
        );
    });
    let hobbies= hobby.map((hob)=>{
        return(
            <div>
                {hob}
            </div>
        );
    });
    
    return (
        <div>
            <h3>PersonalInfo</h3>
            <h3>{showPersonalHeader}</h3>
            <div>{showPersonalDetail}</div>
            <hr/>
            <h3>Eductation</h3>
            {educationDetail}
            <h3>Certificate</h3>
            {certificateDetail}
            <h3>WorkingExperience</h3>
            {workingExperienceDetail}
            <h3>Project</h3>
            {projectDetail}
            <h3>Hobby</h3>
            {hobbies}
        </div>
    );       
}

export default ShowData;