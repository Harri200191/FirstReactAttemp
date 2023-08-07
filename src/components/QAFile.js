import React from "react";

function QAFile(props){


    return(
        <div>
            <h3>Question: {props.question}</h3>
            <h4 className="Anstxt">
                Answer: {props.answer}
            </h4>

            <hr></hr>
        </div>
    )
}

export default QAFile;