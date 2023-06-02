import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from '../styles/Profile.module.css';
import person1 from "../assets/person2.jpg";
import edit from "../assets/edit.png";
import close from "../assets/close.png";

function Profile({closeProfile}) {
  const [mode,setmode] = useState('view');

  const [profileData, setprofileData] = useState({
    name : 'Julia Jane',
    username : 'JuliaJane123',
    bio : "I'm a highly skilled project manager with a proven track record of successfully delivering complex projects across diverse industries. My expertise lies in effectively managing teams, optimizing resources, and driving results-oriented strategies.",
    profession : 'Project Manager'
  })

  const navigate = useNavigate();

  const handleLogOut = () =>{
    // clearing credentials
    sessionStorage.clear();
    navigate('/',{ replace : true })
  }

  
  const handleEditBtn = () =>{
        setmode("edit");
  }
  const handleSaveBtn = () =>{
       setmode('view');
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setprofileData({ ...profileData, [name]: value });
  };
  return (
    <div className={css.Container}>
        <span className={css.banner} src="" alt="" height={200}/>
         <div className={css.pfheader}>
                 <img src={person1} alt="" width={60}/>
                 <p className={css.headName}>
                    {profileData.name}
                 </p>
                 <p className={css.headTag}>
                    @{profileData.username}
                 </p>
         </div>
         <div className={css.pfInfo}>
            <div className={css.pfName}>
                 <p className={css.name}>
                     Name
                 </p>
                 {mode === 'view' ?
                 <p className={css.value}>
                    {profileData.name}
                 </p> :
                 <input type="text" 
                        value = {profileData.name}
                        name = 'name' 
                        className={css.editInput}
                        onChange={handleInputChange} />
                 }
            </div>

            <div className={css.pfUserName}>
                 <p className={css.name}>
                     Username
                 </p>
                 {mode === 'view' ?
                 <p className={css.value}>
                    {profileData.username}
                 </p>:
                 <input type="text"
                        value={profileData.username}
                        name = "username" 
                        onChange={handleInputChange}
                        className={css.editInput} />
                }
            </div>

            <div className={css.pfProfession}>
                 <p className={css.name}>
                     Profession
                 </p>
                 {mode === 'view' ?
                 <p className={css.value}>
                     {profileData.profession}
                 </p>:
                 <input type="text" 
                        value={profileData.profession}
                        name="profession"
                        onChange={handleInputChange}
                        className={css.editInput} />
            }
            </div>

            <div className={css.pfEmail}>
                 <p className={css.name}>
                     Email
                 </p>
                 <p className={css.value}>
                    Julianjan121@gmail.com
                </p>
            </div>
            <div className={css.pfBio}>
                 <p className={css.bi0Name}>
                     Bio
                 </p>
                 {mode === 'view' ?
                 <p className={css.bioValue}>
                    {profileData.bio}
                </p>:
                 <textarea type="text"
                           value={profileData.bio}
                           name = "bio"
                           maxLength={280}
                           onChange={handleInputChange}
                           className={css.editBioInput} />
                }
            </div>
         </div>

         <div className={css.pfBtns}>
             <button className={css.logoutBtn} onClick={handleLogOut}>
                 Log out
             </button>
             { mode === "view" ?
             <button className={css.editBtn} onClick={handleEditBtn}>
                 <img src={edit} alt="" width={18}/>
                 Edit
             </button> : 
             <button className={css.saveBtn} onClick={handleSaveBtn}>
              Save
             </button>
             }
         </div>

         <img src={close} alt="" width={24} className={css.pfCloseBtn} onClick={closeProfile}/>
    </div>
  )
}

export default Profile;