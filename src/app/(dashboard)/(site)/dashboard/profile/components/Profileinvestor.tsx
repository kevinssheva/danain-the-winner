"use client";
import Header from "../../../components/Header";
import { MdModeEditOutline, MdPassword } from "react-icons/md";
import Image from "next/image";
import Input from "@/components/Input";
import { useRef, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Button from "@/components/Button";

export default function Profileinvestor() {
  //tinggal ditembak ke api
  const data = {
    fullname: "Gibs",
    email: "gibranalrosa@gmail.com",
    alamat: "Jl. Kebon Jeruk Raya No. 27",
    oldpassword: "",
    newpassword: "",
    confirmnewpassword: "",
  };

  function reset() {
    setFullname(data.fullname);
    setEmail(data.email);
    setAlamat(data.alamat);
    setOldpassword(data.oldpassword);
    setNewpassword(data.newpassword);
    setConfirmnewpassword(data.confirmnewpassword);
  }

  const [fullname, setFullname] = useState(data.fullname);
  const [email, setEmail] = useState(data.email);
  const [alamat, setAlamat] = useState(data.alamat);
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmnewpassword] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

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
      console.log("Selected file:", file);
    }
  };

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
            src={"/dashboard/portofolio/gibs.jpg"}
            width={80}
            height={80}
            alt="Ava"
            className="absolute right-6 sm:right-12 rounded-full"
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
          <label>Address</label>
          <Input
            type="text"
            value={alamat}
            name="address"
            placeholder="Enter Your Address"
            onChange={(e) => setAlamat(e.target.value)}
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
          <Button text="Save Changes" isPrimary={true} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
