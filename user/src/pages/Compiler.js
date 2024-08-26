import Editor from '@monaco-editor/react';
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";
import NavigationBar from "../components/NavigationBar.js";
import Cplusplus from "../icons/C++.svg";
import C from "../icons/C.svg";
import python from "../icons/Python.svg";
import reset from "../icons/Reset.svg";
import java from "../icons/java.svg";
import javascript from "../icons/javascript.svg";
import AI from "../icons/openai.svg";
import play from "../icons/play.svg";
import "./Compiler.css";

//logo credits to icons website

function Compiler(props) {
const { t } = useTranslation();
const [variant, setVariant] = useState("light");
const [program, setProgram] = useState("");
const [output, setOutput] = useState("");
const [outputAI, setOutputAI]= useState("");
const [language,setLanguage]=useState(0);
const [languagestr,setLanguagestr]=useState('Select Language');

useEffect(() => {
props.setProgress(50);
setTimeout(() => {
    props.setProgress(100);
}, 500);
}, [""]);

const handleToReset = () => {
    setProgram("");
    setOutput("");
    setOutputAI("");
    setLanguagestr('Select Language');
    setLanguage(0);
};

const classFinder=()=>{
    const firstLine=program.split('\n')[0];
    const classLine=firstLine.split(' ');
    const className=classLine[classLine.length-1].split('{')[0];
    return className
}
if(languagestr!=='Select Language'){
document.getElementById("dropdown").style.width="155px"
}
async function handelAskAI() {
    const formData= new FormData();
    const prompt="program:"+program+"output:"+output+" debug the error and suggest me what to do? do not send the whole debugged code";
    formData.append('prompt',prompt);
    if(program!==""){
        try {
            const response = await fetch('http://localhost:4000/users/askAI', {
                method:"POST",
                body:formData,
                credentials: 'include'
            });
            const data = await response.json();
            setOutputAI(data.response);
        } catch (error) {
            console.log(error);
        }
    }
    else{
        return;
    }
};

async function runcode(){
    try{
        setOutput("");
        setOutputAI("");
        if(languagestr==='Select Language'){
            alert("Select a language first")
            return
        }
        if(program===''){
            return;
        }
        let json;
        if(language===2){
            json=JSON.stringify({"language":language,"className":classFinder()});
            console.log(language,classFinder())
        }
        else{
            json=JSON.stringify({"language":language});
        }
        const formData= new FormData();
        formData.append('code',program);
        formData.append('json',json)
        const response=await fetch('http://localhost:4000/users/attend',{
            method:'POST',
            body:formData,
            credentials:'include',
        });
        const data=await response.json();
            if(data.response.stderr){
                setOutput(data.response.stderr);
                document.getElementById("code-output").focus()
            }
            else{
                setOutput(data.response.stdout);
                document.getElementById("code-output").focus()
            }
    }
    catch(error){
        console.log(error)
    }
};

const handle1 = () => {
document.getElementById("button1").style.color = "black";
};
const handleLeave1 = () => {
document.getElementById("button1").style.color = "white";
};
const handle2 = () => {
document.getElementById("button2").style.color = "white";
document.getElementById("button2").style.backgroundColor = "Red";
document.getElementById("button2").style.borderColor = "Red";
};
const handleLeave2 = () => {
document.getElementById("button2").style.color = "black";
document.getElementById("button2").style.backgroundColor = "white";
document.getElementById("button2").style.borderColor = "white";
};
const handle3 = () => {
document.getElementById("button3").style.color = "white";
document.getElementById("button3").style.backgroundColor = "#800080";
document.getElementById("button3").style.borderColor = "#800080";
};
const handleLeave3 = () => {
document.getElementById("button3").style.color = "black";
document.getElementById("button3").style.backgroundColor = "white";
document.getElementById("button3").style.borderColor = "white";
};


const handleDropdownMouseEnter = () => {
setVariant("info");
};
const handleDropdownMouseLeave = () => {
setVariant("light");
};

return (<>
<NavigationBar language={true}/>
<div className="container ">
    <div className="row  my-2">
    <div
        className="col"
        style={{ position: "relative", paddingLeft: "0px" }}
    >
        <div
        style={{
            position: "absolute",
            right: "14px",
            top: "1px",
            zIndex: "1",
        }}
        >
        </div>

        <div style={{height:"75vh", width:"50vw"}}>
        <Editor
            id='textfield'
            height='75vh'
            width='100%'
            className='mx-1'
            theme="hc-black"
            language={languagestr}
            value={program}
            onChange={(newValue)=>{setProgram(newValue)}}
            options={{tabSize: 7,autoClosingQuotes:"always",formatOnPaste:true}}
        />
        </div>
        <div className="d-flex flex-row">
        <button
            id="button1"
            className="btn btn-primary  my-2 mx-2"
            onMouseLeave={handleLeave1}
            onMouseOver={handle1}
            onClick={runcode}
            style={{ backgroundColor: "#228B22", borderColor: "green" }}
        >
            <img src={play} alt="play icon" />
            {t("compilerButton1")}
        </button>

        <button
            id="button2"
            className="btn btn-primary my-2 mx-2"
            onMouseLeave={handleLeave2}
            onMouseOver={handle2}
            style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "white",
            }}
            onClick={handleToReset}
        >
            <img src={reset} alt="reset icon" />
            {t("compilerButton2")}
        </button>
        {
            <button
            id="button3"
            className="btn btn-primary my-2 mx-2"
            onMouseLeave={handleLeave3}
            onMouseOver={handle3}
            style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "white",
            }}
            onClick={handelAskAI}
        >
            <img src={AI} alt="reset icon" />
            {t("compilerButton3")}
        </button>
        }
        </div>
    </div>
    <div className="col">
        <DropdownButton
        variant={variant}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        id="dropdown"
        title={languagestr}
        menuVariant="dark"
        style={{width:"155px"}}
        >
        <Dropdown.Item as="button"
            onClick={()=>{
            setLanguage(1)
            setLanguagestr('python')
            }}>
                Python
                <img
                className="align-bottom"
                src={python}
                style={{ width: "25px", marginLeft: "46px" }}
                alt="python icon"
                
                />
            </Dropdown.Item>
            <Dropdown.Item as="button"
            onClick={()=>{
            setLanguage(2)
            setLanguagestr('java')
            }}>
                Java
                <img
                className="align-bottom"
                src={java}
                style={{ width: "25px", marginLeft: "68px" }}
                alt="java icon"
                />
            </Dropdown.Item>
            <Dropdown.Item as="button"
                onClick={()=>{
                setLanguage(3)
                setLanguagestr('c')
                }}>
                C
                <img
                className="align-bottom"
                src={C}
                style={{ width: "25px", marginLeft: "93px" }}
                alt="C icon"
                />
            </Dropdown.Item>
    
            <Dropdown.Item as="button"
            onClick={()=>{
                setLanguage(4)
                setLanguagestr('cpp')
                }}>
                C++
                <img
                className="align-bottom"
                src={Cplusplus}
                style={{ width: "25px", marginLeft: "75px" }}
                alt="C++ icon"
                />
            </Dropdown.Item>
            <Dropdown.Item as="button"
                onClick={()=>{
                setLanguage(5)
                setLanguagestr('javascript')}}>
                Javascript
                <img
                className="align-bottom"
                src={javascript}
                style={{ width: "25px", marginLeft: "25px" }}
                alt="javascript icon"
                />
            </Dropdown.Item>   
        </DropdownButton>

        <textarea
        readOnly
        name="Output"
        className="form-control output my-2 white-placeholder"
        id="code-output"
        value={output}
        placeholder={t("compilerTextAreaPlaceholder2")}
        rows="10"
        style={{
            background: "black",
            color: "white",
            minHeight:"35vh"
        }}
        ></textarea>

        <textarea
        readOnly
        name="AI-output"
        rows="7"
        value={outputAI}

        className="form-control output my-2 white-placeholder"
        id="ai-output"
        placeholder={t("compilerTextAreaPlaceholder3")}
        style={{
            background: "black",
            color: "white",
            minHeight:"35vh"

        }}
        ></textarea>
    </div>
    </div>
</div>
</>
);
}

export default Compiler;
