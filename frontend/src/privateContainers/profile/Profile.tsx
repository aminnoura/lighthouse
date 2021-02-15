import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { PROFILE_MUTATION } from "../../graphql/types";

const Profile = () => {
    const [profile,setProfile] = useState<profileData>();
    interface profileData {
        id: number;
        email: string;
    }
    const [profileMutation] = useMutation<{ profile: profileData }> (PROFILE_MUTATION);
    useEffect(() => {
        profileMutation()
        .then(({data})=>{
            setProfile(data?.profile);
        })
        .catch(err=>{
            console.log(err);
        })
    },[profileMutation])
    return (
        <div>
            <h1>Profile</h1>
            <h3>{profile?.id}</h3>
            <h3>{profile?.email}</h3>
          </div>
      );
}

export default Profile;