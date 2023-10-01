"use client";
import Header from "../../../components/Header";
import { MdModeEditOutline, MdPassword } from "react-icons/md";
import Image from "next/image";
import Input from "@/components/Input";
import { useEffect, useRef, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Button from "@/components/Button";
import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";
import axios from "axios";
import Loader from "@/components/Loader";

export default function Profileinvestor() {
  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_WEB_URL +
    `/api/v1/dashboard/investor/profile`,
    fetcher
  );

  const reset = () => {
    setFullname("");
    setEmail("");
    setDescription("");
    setOldpassword("");
    setNewpassword("");
    setConfirmnewpassword("");
  }

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmnewpassword] = useState("");
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);

  useEffect(() => {
    if (data) {
      setFullname(data.user.fullName);
      setEmail(data.user.email);
      setDescription(data.user.description);
      setPicture(data.user.profilePicture)
    }
  }, [data]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  if (isLoading) return (<div className="flex justify-center items-center h-screen"><Loader /></div>);


  const handleEditImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setProfilePictureFile(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('description', description);
    formData.append('oldpassword', oldpassword);
    formData.append('newpassword', newpassword);
    formData.append('confirmnewpassword', confirmnewpassword);

    if (profilePictureFile) {
      formData.append('profilePicture', profilePictureFile);
    }

    try {
      const response = await axios.patch("/api/v1/dashboard/investor/profile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if(response.status === 200) {
        alert("Profile updated successfully")
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20 z-50 text-white">
      <Header page="Profile" />

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <h1 className="text-2xl font-semibold">Edit Profile</h1>
          <MdModeEditOutline className="text-3xl" />
        </div>

        <div className="">
          <Image
            src={picture || "/profile.jpg"}
            width={80}
            height={80}
            alt="Ava"
            className="absolute right-6 sm:right-12 rounded-full w-20 aspect-square object-cover"
          />
          <div>
            <Image
              src="/dashboard/edit.svg"
              width={30}
              height={30}
              alt="edit"
              className="relative mt-14 cursor-pointer"
              onClick={handleEditImageClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl flex flex-col gap-8">
        <div className="flex gap-8">
          <div className="w-full">
            <label>Fullname</label>
            <Input
              type="text"
              value={fullname}
              name="fullname"
              placeholder="Enter Your Fullname"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label>Email</label>
            <Input
              type="text"
              value={email}
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full">
          <label>Description</label>
          <Input
            type="text"
            value={description}
            name="description"
            placeholder="Enter Your Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <h2 className="text-xl font-semibold">Change Password</h2>

        <div className="md:w-1/2">
          <label>Old Password</label>
          <Input
            type="password"
            value={oldpassword}
            name="address"
            placeholder="Enter Your Old Password"
            onChange={(e) => setOldpassword(e.target.value)}
          />
        </div>
        <div className="md:w-1/2">
          <label>New Password</label>
          <Input
            type="password"
            value={newpassword}
            name="address"
            placeholder="Enter Your New Password"
            onChange={(e) => setNewpassword(e.target.value)}
          />
        </div>
        <div className="md:w-1/2">
          <label>Confirm New Password</label>
          <Input
            type="password"
            value={confirmnewpassword}
            name="address"
            placeholder="Confirm Your New Password"
            onChange={(e) => setConfirmnewpassword(e.target.value)}
          />
        </div>

        <div className="flex gap-8">
          <Button
            text="Cancel"
            isPrimary={false}
            onClick={() => {
              reset();
            }}
          />
          <Button text="Save Changes" isPrimary={true} onClick={() => {handleSubmit()}} />
        </div>
      </div>
    </div>
  );
}
