import React,{useEffect, useState} from 'react';
import css from "../../../styles/Projects/AddProjectOverlay.module.css";
import closeIcon from "../../../assets/close.png";
import axios from "axios";


function AddTaskOverlay({onClose ,pID,modeType,onAddProject}) {
  const [selectedOption, setSelectedOption] = useState("");

  const [teamValue, setteamValue]  = useState('')
  const [teamValues, setteamValues] = useState([]);
  const userID  = sessionStorage.getItem("userID");
  const [responseData,setResponseData] = useState(null);

  const colorCodes = ["#ff8989", // red
  "rgb(255, 186, 59)",  // Orange
"rgb(249, 249, 89)",  // yellow
"rgb(158, 255, 158)", // green
"rgb(142, 243, 243)", // teal
"rgb(170, 231, 255)", // sky blue
"rgb(185, 195, 255)", // blue
"#cda5ff",            // purple
"rgb(255, 208, 216)" ,// pink
    ]

const getRandomColor = ()  => {
  const randomIndex = Math.floor(Math.random() * colorCodes.length);
  return colorCodes[randomIndex];
}

  const [UpdateData,setUpdateData] = useState({
    title : '',
    description :"",
    startDate : '',
    dueDate : '',
    priority : '',
    teams : []
  })

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


  const ActionUpdateData = (e) =>{
    const {name, value} = e.target;
    setUpdateData((UpdateData) =>({
      ...UpdateData,[name]:value
    }))
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

  const handlePrioritySelect = (event) =>{
        setSelectedOption(event.target.value)
  }
  
  const handleResponseDataWithUpdate = (resData) =>{
    if(resData){
    setUpdateData({
      title: resData.title || '',   // project title
      description : resData.description || '',  // project description
      startDate : resData.startDate || '',
      dueDate : resData.dueDate || '',        // project deadline
      priority: resData.priority || '',          // project priority
      teams: resData.subTasks || ''
    })
    }
  }
  // backend Actions

 const AxiosCreateProjectEvent = async (data) =>{
       try {
        const res = await axios.post("/track/",data,{
          headers: {
              'Content-Type': 'application/json'
            }
        });
       } catch (error) {
        console.log(error)
       }
  }
  
  const AxiosCreateNewEntry = async (event) =>{
        const Data = {
          userID: userID, // user id assigned for project
          title: projectData.title,   // project title
          description : projectData.description,  // project description
          startDate : projectData.startDate,
          dueDate : projectData.dueDate,        // project deadline
          priority: selectedOption,          // project priority
          teams: teamValues
        }
        try {
          const res = await axios.post("/projects/",Data,{
            headers: {
                'Content-Type': 'application/json'
              }
          });
          // console.log(res)

        const eventData = {
            userID: userID,
            Event: Data.title,
            start: Data.startDate,
            end: Data.dueDate,
            eventColor: getRandomColor(),
        }
        AxiosCreateProjectEvent(eventData)
          onAddProject()
          onClose()
        } catch (error) {
          console.log(error)
        }
  }

  const AxiosGetProjectDataById = async () =>{
       try {
          const res = await axios.get(`/projects/project/${pID}`);
          setResponseData(res.data[0])
          handleResponseDataWithUpdate(res.data[0]);
       } catch (error) {
         console.log(error)
       }
  }

  const AxiosUpdateNewEntry = async () =>{
    const Data = {
      userID: userID, // user id assigned for project
      title: UpdateData.title,   // project title
      description : UpdateData.description,  // project description
      startDate : UpdateData.startDate,
      dueDate : UpdateData.dueDate,        // project deadline
      priority: selectedOption,          // project priority
      teams: teamValues
    }

    try {
      const res = await axios.put(`/projects/${pID}`,Data)
      onAddProject()
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  // conditional rendering components
  useEffect(()=>{
    if(modeType === 'update'){
      AxiosGetProjectDataById();
    }
  },[pID]);

  return (
    <div className={css.addTapWrapper}>
        <div className={css.leftContainer}>

          <div className={css.titleWrap}>
             <p className={css.title}>
                 Title
             </p>
             <input value = {modeType === 'update' ?  UpdateData && UpdateData.title  : projectData.title}
                    name = "title"
                    type="text"
                    placeholder='Website Design'
                    maxLength={15}
                    className={css.titleInput} onChange={modeType === 'update' ? ActionUpdateData : handleProjectData}/>
      
          </div>

          <div className={css.descWrap}>
             <p className={css.desc}>
                 Description
             </p>
             <textarea value = {modeType === 'update' ? UpdateData && UpdateData.description : projectData.description}
                       name = "description"
                       type="textarea"
                       maxLength={350}
                       className={css.descInput} onChange={modeType === 'update' ? ActionUpdateData : handleProjectData}/>
      
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
             <input value = {modeType === 'update' ? UpdateData && UpdateData.startDate : projectData.startDate}
                    name = "startDate"
                    type="date"
                    onChange={modeType === 'update' ? ActionUpdateData : handleProjectData}
                    />
          </div>
          
          <div className={css.dueWrapper}>
             <p className={css.due}>Deadline</p>
             <input value = {modeType === 'update' ? UpdateData && UpdateData.dueDate : projectData.dueDate}
                    name = "dueDate"
                    type="date"
                    onChange={modeType === 'update' ? ActionUpdateData : handleProjectData}
                    />
          </div>

          <div className={css.priorWrap}>
            <p className={css.priority}>Priority <span>( Optional )</span></p>
            <div className={css.priorSelectWrap}>
              <select value={modeType === 'update' ? UpdateData && UpdateData.priority : selectedOption} onChange={handlePrioritySelect}>
                <option value="">Priority...</option>
                <option value="Low" key="low">Low</option>
                <option value="Medium" key="medium">Medium</option>
                <option value="High" key="high">High</option>
              </select>
            </div>
          </div>

        </div>

        <div className={css.submitWrap}>
           <button onClick={modeType === 'create' ? AxiosCreateNewEntry : AxiosUpdateNewEntry}>
                   {modeType === 'create' ? "Add" : "Save Changes"} 
           </button>
        </div>
            <img className = {css.closeOverlay} src={closeIcon} alt="" width={24}  onClick={onClose}/>
    </div>
  )
}

export default AddTaskOverlay;