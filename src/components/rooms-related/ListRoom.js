import React, { useState } from 'react'
import './rooms.css'
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import Man2Icon from '@mui/icons-material/Man2';
import WcIcon from '@mui/icons-material/Wc';
import WomanIcon from '@mui/icons-material/Woman';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

const ListRoom = () => {
    const navigate = useNavigate();

    const [select1,setSelect1] = useState(false);
    const [select2,setSelect2] = useState(false);
    const [select3,setSelect3] = useState(false);


    const [propertyName, setPropertyName] = useState('');
    const [lender, setLender] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState('');
    const [genderRequirement, setGenderRequirement] = useState(2);
    const [images, setImages] = useState(null);
    const [contact, setContact] = useState('');
    const [propType,setPropType] = useState('');

    const handleImage=(e)=>{
      const reader = new FileReader();
      reader.onload = ()=>{
        if(reader.readyState === 2 ){
          setImages(reader.result)
        }
      };
     reader.readAsDataURL(e.target.files[0]);
    }


    const handleRegisterRoom = async(e) => {
        e.preventDefault();

        const today = new Date();
        const formattedDate = `${today.getDate().toString()}-${(today.getMonth()+1).toString()}-${today.getFullYear().toString()}`;
        console.log('Date:',formattedDate);
        console.log('DateType:',typeof formattedDate);

        const formData = new FormData();
        formData.append('propertyName',propertyName);
        formData.append('lender',lender);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('location',location);
        formData.append('genderRequirement',genderRequirement);
        formData.append('contact',contact);
        formData.append('images',images);
        formData.append('category',propType);
        formData.append('date',formattedDate);

        try {
        const response = await fetch('http://localhost:4000/api/rooms/register', {
        method: 'POST',
        body: formData, 
        });
          if (response.status === 201) {
            alert('Room registered successfully');
            navigate('/rooms')
          } else {
            alert('Room registration failed');
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };
    

  return (
    <>
    <div className="list-space-container">
    <form className='list-space'
    onSubmit={handleRegisterRoom}
    >
      <h2>About the property</h2>

      <div className="property-details1">
         <div className="property-image">
            <div>
            <input type="file" accept='images/*' onChange={handleImage} />
            </div>
         </div>
         <div className="property-title">
         <HomeIcon/>
            <input type="text"
            onChange={(e)=>setPropertyName(e.target.value)}
            placeholder='Property Title'/>
        <PersonIcon/>
            <input type="text"
            onChange={(e)=> setLender(e.target.value)}
            placeholder="Owner's Name" />
         </div>
      </div>

      <div className="property-location">
        <LocationOnIcon/>
        <input type="text" 
        onChange={(e)=>setLocation(e.target.value)}
        placeholder='Property Location/Address' />
      </div>

      <div className="property-details2">
        <div className="property-type">
            <label htmlFor="">Property Type:</label>
            <ul>
                <li
                onClick={()=>{
                    setSelect1(!select1)
                    setSelect2(false)
                    setSelect3(false)
                    setPropType('Room')
                }}
                style={{
                    color:!select1?'grey':'#2e4ae8'
                }}
                >
                    <HomeIcon/>
                    <label htmlFor="">
                     Room
                  </label>
                </li>
                <li
                onClick={()=>{
                    setSelect2(!select2)
                    setSelect1(false)
                    setSelect3(false)
                    setPropType('Flat/Appartment')
                }}
                style={{
                    color:!select2?'grey':'#2e4ae8'
                }}
                >
                  <ApartmentIcon/>
                  <label htmlFor="">
                    Flat/Appartment
                  </label>
                </li>
                <li
                onClick={()=>{
                    setSelect3(!select3)
                    setSelect1(false)
                    setSelect2(false)
                    setPropType('PG')
                }}
                style={{
                    color:!select3?'grey':'#2e4ae8'
                }}>
                   <NightShelterIcon/>
                   <label htmlFor="">
                     PG
                  </label>
                </li>
                <li>
                    <input
                    onChange={(e)=>{
                        setSelect1(false)
                        setSelect2(false)
                        setSelect3(false)
                        setPropType(e.target.value)
                    }}
                    type="text" placeholder='Other' />
                </li>
            </ul>
        </div>
        <div className="property-price">
            <label htmlFor="">Price:</label>
            <input value={price} type='range' min='0' max='50000' step='100' onChange={(e)=>setPrice(e.target.value)} />
            <h3>{price} RS</h3>
        </div>
      </div>

<div className="lower-prop-section">
     <div>
     <div className="rooms-availibility">
            <span>
                Availability for:
            </span>
            <ul>
             <li
             onClick={()=>
                setGenderRequirement(0)
               }
             >
                <Man2Icon/>
             </li>
             <li
             onClick={()=>
                setGenderRequirement(1)
               }
             >
                <WomanIcon/>
             </li>
             <li
             onClick={()=>
                setGenderRequirement(2)
               }
             >
                <WcIcon/>
             </li>
             <li
             onClick={()=>
                setGenderRequirement(3)
               }
             >
                <FamilyRestroomIcon/>
             </li>
             {genderRequirement}
            </ul>
        </div>

       <div className="property-details3">
          <div className="contact-info">
            <label htmlFor="">Contact:</label>
            <input type="text"
            onChange={(e)=>setContact(e.target.value)}
            placeholder='Contact Info1' />
            <input type="text" onChange={(e)=>setContact(e.target.value)} placeholder='Contact Info2(optional)' />
          </div>
       </div>
     </div>
     <div className="description">
            <textarea
            onChange={(e)=>setDescription(e.target.value)}
            placeholder='Property Description...'></textarea>
    </div>
</div>
     
       <div className="submit-btn">
        <button type='submit'>List Space</button>
       </div>
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default ListRoom
