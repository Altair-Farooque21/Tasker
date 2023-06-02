import React,{useEffect, useState} from 'react';
import css from "../../../styles/Tasks/AddTaskOverlay.module.css";
import closeIcon from "../../../assets/close.png";


function AddTaskOverlay({onClose ,modeType}) {
  const [selectedOption, setSelectedOption] = useState("");

  const [teamValue, setteamValue]  = useState('')
  const [teamValues, setteamValues] = useState([]);
  const [mode,setMode] = useState(modeType);


  const [projectData,setProjectData] = useState({
      title : '',
      description :"",
      startDate : '',
      dueDate : '',
  })

  const handleProjectData = (e) =>{
    const {name, value} = e.target;
    setProjectData((projectData) =>({
      ...projectData,[name]:value
    }))
  }

  const handleAddbtn = () =>{
    console.log(projectData,teamValues);
  }

  const handleTeamData =(e)  =>{
    if (e.key === "Enter") {
      setteamValues((teamValues) => {
        const newValue = [...teamValues, teamValue];
        return newValue;
      });
      setteamValue('')
    }
  }

  // conditional rendering components
  useEffect(()=>{
      setMode(modeType);
  },[modeType]);

  return (
    <div className={css.addTapWrapper}>
        <div className={css.leftContainer}>

          <div className={css.titleWrap}>
             <p className={css.title}>
                 Title
             </p>
             <input value = {projectData.title}
                    name = "title"
                    type="text"
                    placeholder='Website Design'
                    className={css.titleInput} onChange={handleProjectData}/>
      
          </div>

          <div className={css.descWrap}>
             <p className={css.desc}>
                 Description
             </p>
             <textarea value = {projectData.description}
                       name = "description"
                       type="textarea"
                       className={css.descInput} onChange={handleProjectData}/>
      
          </div>

          <div className={css.teamsWrap}>
            <p className={css.teams}> Teams <span>( Optional )</span></p>
            <input value = {teamValue}
                   name = "teams"
                   type="text"
                   placeholder='username or email'
                   onChange={(e)=>{setteamValue(e.target.value)}}
                   onKeyDown={handleTeamData}/>
            <p className={css.teamTip}>Get things don faster, by collaborating with other. Add your team now ( Max 5 members )</p>
          </div>

      
        </div>

        <div className={css.rightContainer}>

        <div className={css.startWrapper}>
             <p className={css.start}> Start</p>
             <input value = {projectData.startDate}
                    name = "startDate"
                    type="date"
                    onChange={handleProjectData}
                    />
          </div>
          
          <div className={css.dueWrapper}>
             <p className={css.due}>Deadline</p>
             <input value = {projectData.dueDate}
                    name = "dueDate"
                    type="date"
                    onChange={handleProjectData}
                    />
          </div>

          <div className={css.priorWrap}>
            <p className={css.priority}>Priority <span>( Optional )</span></p>
            <div className={css.priorSelectWrap}>
              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">Priority...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

        </div>

        <div className={css.submitWrap}>
           <button onClick={handleAddbtn}> {mode === 'create' ? "Add" : "Save Changes"} </button>
        </div>
            <img className = {css.closeOverlay} src={closeIcon} alt="" width={24}  onClick={onClose}/>
    </div>
  )
}

export default AddTaskOverlay;