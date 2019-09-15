<template>
    <div class="home">
        <div class="resume-container">
            <div class="resume-item-header">
                <hr/>
                <h2>Education</h2>
            </div>
            <div class="resume-item-info">
                <h3>Carleton University</h3>
                <i>Bachelor of computer science (minor in psychology)</i>
                <br/>
                <i>September 2016 - Present</i>
                <ul style="margin-top: 10px">
                    <li><strong>Standing</strong>: Third Year (expected graduation May 2021)</li>
                    <li><strong>CGPA</strong>: 10.7/12</li>
                    <li><strong>Awards</strong>: Director of the School of Computer Science Award and the Dean’s Honour
                        List
                    </li>
                </ul>
            </div>
        </div>
        <div class="resume-container">
            <div class="resume-item-header">
                <hr/>
                <h2>Experience</h2>
            </div>
            <div class="resume-item-info">
                <h3>Cloud Developer Intern</h3>
                <i>Interset</i>
                <br/>
                <i>Summer 2019</i>
                <ul style="margin-top: 10px">
                    <li><strong>Cloud Architecture</strong>: Assisted in developing and debugging an AWS cloud
                        deployment of
                        a
                        big data software system
                    </li>
                    <li><strong>Automation</strong>: Used SaltStack for the configuration management of virtual
                        machines
                        in
                        an
                        Amazon VPC
                    </li>
                    <li><strong>Amazon Web Services</strong>: Worked with the AWS Lambda, S3, EC2, EMR, IAM, and SQS
                        services
                    </li>
                </ul>
            </div>
            <div class="resume-item-info">
                <h3>Back-End Developer Intern</h3>
                <i>Interset</i>
                <br/>
                <i>Fall 2019</i>
                <ul style="margin-top: 10px">
                    <li><strong>Elastic Search</strong>: Aggregated documents in Elastic Search to generate data for
                        a
                        D3
                        histogram
                    </li>
                    <li><strong>Unit and Integration Tests</strong>: Developed automated unit and integration tests
                        using
                        Mockito
                    </li>
                    <li><strong>REST API</strong>: Developed and debugged REST API endpoints programmed using
                        DropWizard
                        that
                        fetched and stored data in H2 and Elastic Search
                    </li>
                </ul>
            </div>
            <div class="resume-item-info">
                <h3>Front-End Developer Intern</h3>
                <i>Interset</i>
                <br/>
                <i>Summer 2018</i>
                <ul style="margin-top: 10px">
                    <li><strong>User Interfaces</strong>: Developed and debugged user interfaces using CSS, ReactJS,
                        and
                        MobX
                    </li>
                    <li><strong>Unit and Integration Tests</strong>: Created a dynamic histogram visualisation using
                        D3
                    </li>
                    <li><strong>Data Visualizations</strong>: Wrote automated tests using Selenium for ReactJS user
                        interface
                        components
                    </li>
                </ul>
            </div>
        </div>
        <div class="resume-container">
            <div class="resume-item-header">
                <hr/>
                <h2>Personal Projects</h2>
            </div>
            <div class="resume-item-info">
                <h3>Dr. Bones</h3>
                <i>November 2018</i>
                <p>A web application to keep track of a user’s medications, medical operations, and illnesses, as well
                    as the relationships between them. Made using ReactJS, NodeJS, and SQL.</p>
                <div class="svg-link-container">
                    <SvgLink link="https://github.com/AidenRourke/DrBones"
                             svgLink="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"/>
                </div>
            </div>
            <div class="resume-item-info">
                <h3>Personal Website</h3>
                <i>September 2019</i>
                <p>A website that displays information about myself made with a VueJS web app and a NodeJS server.The
                    server queries the Spotify API and communicates real time updates to the browser using Server-Sent
                    Events.</p>
                <div class="svg-link-container">
                    <SvgLink link="https://github.com/AidenRourke/PersonalWebsite"
                             svgLink="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"/>
                </div>
            </div>
        </div>
        <div class="resume-container">
            <div class="resume-item-header">
                <hr/>
                <h2>Technical Skills</h2>
            </div>
            <div class="resume-item-info">
                <ul>
                    <li><strong>Languages</strong>: JavaScript, Python, Java, HTML, CSS, SQL, C, C++
                    </li>
                    <li><strong>Libraries and Frameworks</strong>: NodeJS, ReactJS, D3, Selenium, SaltStack, VueJS
                    </li>
                    <li><strong>Technologies</strong>: AWS, Elastic Search, Git, H2
                    </li>
                    <li><strong>Operating Systems</strong>: Linux, Windows, Unix
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import SvgLink from "../components/SvgLink"

    export default {
        name: 'Resume',
        components: {SvgLink}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    hr {
        width: 100px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        color: #42b983;
    }

    hr {
        height: 2px;
        background: black;
    }

    h2, h3, ul {
        margin: 0;
    }

    .resume-container {
        display: flex;
        @media (max-width: 1280px) {
            flex-direction: column;
        }
    }

    .svg-link-container {
        text-align: center;
    }

    .resume-item-info {
        flex: 1;
        position: relative;
        padding: 10px 10px 20px 10px;
    }

    .resume-item-header {
        display: table;
        height: auto;
        flex: 0 0 300px;
        text-align: center;
    }

</style>