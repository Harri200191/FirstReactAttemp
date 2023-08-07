import React from "react"

function ThreeComps() {
    return (
    <div>
        <div class="container">
            <div class="box">
                <h2>Work Experience</h2>
            </div>
            <div class="box">
                <h2>Projects</h2>
            </div>
            <div class="box">
                <h2>Certificates</h2>
            </div>
        </div>
            
        <div class="content-container">
            <div class="content-box">
                <p>Sparks Foundation.</p>
                <p>CodSoft.</p>
            </div>
            <div class="content-box">
                <p>Audio Recognition</p>
                <p>GANs with PyTorch</p>
                <p>Sequence Analysis with ARIMA</p>
                <p>Text Sentiment Analysis</p>
            </div>
            <div class="content-box">
                <p>Google Certified IT Automation Expert.</p>
            </div>
        </div>

        <br></br>
        <hr></hr>
    </div>
    )
}

export default ThreeComps;


