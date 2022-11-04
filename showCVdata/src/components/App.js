import React from 'react';
import ShowData from './ShowData';


const App = () => {

    const paramJson ='[{"personalInfo":[{"resumeObjective":"write something"},{"name":"Su Phone Myint","photoUrl":"","nationality":"Myanmar","phoneNo":"09447159583","email":"suphonemyint.la@gmail.com"}]},{"education":[{"degree":"B.A(Oriental Studies)","fromYear":"June 2007","toYear":"Sept 2009","association":"Dagon University"},{"degree":"PGDCA(Post Graduate Diploma in Computer Application)","fromYear":"June 2013","toYear":"Sept 2015","association":"University of Yangon"},{"degree":"Diploma in IT (Information Technology)","fromYear":"Dec 2011","toYear":"Sept 2012","association":"National Management College"}]},{"certificate":[{"certificate":"Web Developer Course","fromDate":"Aug 2016","toDate":"Oct 2016","association":"Fairway Web Development"},{"certificate":"Advanced Web Development Course (Web Design and PHP Web Development)","fromDate":" June 2018","toDate":"Nov 2018","association":"ICTTI / IMCEITS"}]},{"workingExperience":[{"companyName":"True Money Myanmar","position":"Web Developer","duration":"1 year","fromYear":"May 2015","toYear":"May 2016","rolesAndResponsibilty":["Create and develop the company official website","Update, modify, maintain and expand the website","Basic SEO services"]},{"companyName":"Myanmar Technology Gateway","position":"Wordpress Developer","duration":"2 year","fromYear":" May 2016","toYear":"May 2018","rolesAndResponsibilty":["Website Design Creation, Developing new website","Update, modify, maintain web design and develop existing websites","Prepare manual documentations of the website (how to use the admin panel)","Support sales and marketing teams"]},{"companyName":"Host Myanmar Software Solution","position":"Web Developer","duration":"1 year and 5 month","fromYear":"Sept 2019","toYear":"Jan 2021","rolesAndResponsibilty":["Website Design Creation, Developing new website","Update, modify, maintain web design and develop existing websites","Prepare manual documentations of the website (how to use the admin panel)","Support sales and marketing teams"]}]},{"project":[{"projectName":"www.globalfirealarm.com","details":"Using Customise Wordpress theme, MySql, Customise theme design,custom css"},{"projectName":"www.fda.gov.mm","details":"Government Food and Drug Administration Web System. Using Customise Wordpress theme, MySql, Custom css, Customise theme design"},{"projectName":"www.belocean.com.mm","details":"Belocean Ship Management Web System. Using Customise Wordpress theme, MySql, Custom css"}]},{"hobby":["reading","travelling"]}]';

    return (
        <div>
            <ShowData paramJson={paramJson} />
        </div>
    );
};

export default App;

