import {profileUrl} from './Config';

//posting profile data to mockapi 

export const createProfile =async (movieData) => {
    const response =await fetch(
        `${profileUrl}/profiles`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(movieData)
        }
    )
    const profile=await response.json();
    return profile;
}

//importing profile data from mock api

export const getProfiles = async ()=>{
    const response =await fetch(`${profileUrl}/profiles`)
    const profile=await response.json();
    return profile;
}


//imorting single profile from mock api

export const getProfile = async (profileId)=>{
    const response =await fetch(`${profileUrl}/profiles/${profileId}`)
    const profile=await response.json();
    return profile;
}

// calling to delete profile from mock api

export const deleteProfile = async(profileId)=>{
    const response=await fetch(
        `${profileUrl}/profiles/${profileId}`,
        {
            method: 'DELETE'
        }
    )
    const profile=await response.json();
    return profile;
}


//updating profile from mock api

export const updateProfile = async (profileId, profileData)=>{
    const response =await fetch(`${profileUrl}/profiles/${profileId}`,
    {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(profileData)
    })
    const profile=await response.json();
    return profile;
}
