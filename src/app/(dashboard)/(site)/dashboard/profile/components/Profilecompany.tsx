"use client";
import Header from "../../../components/Header";
import {
  BsArrowRightCircleFill,
  BsFillFileEarmarkArrowUpFill,
} from "react-icons/bs";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Input from "@/components/Input";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Button from "@/components/Button";
import dynamic from "next/dynamic";
import axios from "axios";

export default function Profilecompany() {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tagline, setTagline] = useState("");
  const [founder, setFounder] = useState("");
  const [video, setVideo] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [pitchdesc, setPitchdesc] = useState("");

  const listCategory = [
    "Sport",
    "Health",
    "Technology",
    "Food & Beverage",
    "Fashion",
    "Education",
    "Finance",
    "Property",
    "Entertainment",
    "Agriculture",
    "Sustainability",
    "Others",
  ];

  useEffect(() => {
    const getCompany = async () => {
      try {
        const company = await axios.get("/api/v1/dashboard/company/profile")

        setName(company.data.company.companyName || '');
        setAddress(company.data.company.companyPlace || '');
        setTagline(company.data.company.tagline || '');
        setFounder(company.data.company.founder || '');
        setVideo(company.data.company.videoProfile || '');
        setMinimum(company.data.company.minimum || '');
        setMaximum(company.data.company.money || '');
        setCategory(company.data.company.category || []);
        setWebsite(company.data.company.website || '');
        setInstagram(company.data.company.instagram || '');
        setLinkedin(company.data.company.linkedin || '');
        setPitchdesc(company.data.company.pitchDescription || '');
      } catch (err) {
        console.log(err)
      }
    }

    getCompany();
  }, [])

  const handleCheckboxChange = (e: any) => {
    const value = e.target.value;

    if (e.target.checked) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((c) => c !== value));
    }
  };

  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20 z-50 text-white">
      <Header page="Profile" />

      <div
        className="rounded-xl mb-16 backdrop-blur-3xlxl flex flex-col md:flex-row items-center justify-between px-8 py-7"
        style={{
          background:
            "linear-gradient(89deg, rgba(14, 13, 57, 0.00) 25.82%, #1A1F37 51%, #1A1F37 51%)",
        }}
      >
        <div>
          <p className="text-[#A0AEC0] text-sm md:text-base">Welcome back,</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Kevin Lie</h1>
          <p className="text-[#A0AEC0] text-sm md:text-base mb-8">
            Glad to see you again! <br />
            Ask me anything.
          </p>

          <p className="font-bold mb-2">Complete your profile now!</p>
          <BsArrowRightCircleFill className="text-3xl cursor-pointer" />
        </div>
        <Image
          src={"/dashboard/coin.svg"}
          width={400}
          height={100}
          alt="coin"
          className=""
        />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div>
            <label>Company Name</label>
            <Input
              placeholder="Please enter your company name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Company Address</label>
            <Input
              placeholder="Please enter your company address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="">
            <label>Pitch Deck</label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="input-bg-startup flex flex-col items-center justify-center w-full h-32 border border-gray-300 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col gap-4 items-center justify-center pt-5 pb-6">
                  <p className="text-[#D8D8D8]">Please upload your file</p>
                  <BsFillFileEarmarkArrowUpFill className="text-5xl" />
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div>
            <label>Tagline</label>
            <Input
              placeholder="Please enter your tagline"
              name="tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>

          <div>
            <label>Founder</label>
            <Input
              placeholder="Please enter your founder's name"
              name="founder"
              value={founder}
              onChange={(e) => setFounder(e.target.value)}
            />
          </div>

          <div className="">
            <label>Cover Photo</label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="input-bg-startup flex flex-col items-center justify-center w-full border border-gray-300 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col gap-4 items-center justify-center pt-5 pb-6">
                  <p className="text-[#D8D8D8]">Please upload your photo</p>
                  <p>1200 x 675 pixels {"(suggested)"}</p>
                  <MdAddPhotoAlternate className="text-5xl" />
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div>
            <label>Video Profile</label>
            <Input
              placeholder="Please enter your video's link"
              name="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="h-52">
            <label>Pitch Description</label>
            <ReactQuill
              theme="snow"
              value={pitchdesc}
              onChange={(e) => setPitchdesc(e)}
              className="overflow-y-auto max-h-40"
            />
          </div>

          <div className="">
            <label className="">Minimum Raise</label>
            <p className="text-[#9C8740]">
              You must hit at least this number or your campaign will fail
            </p>
            <div className="md:w-1/2">
              <Input
                placeholder="Rp 0"
                name="minimum"
                value={minimum}
                onChange={(e) => setMinimum(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Maximum Raise</label>
            <p className="text-[#9C8740]">
              The maximum amount of money you’ll accept
            </p>
            <div className="md:w-1/2">
              <Input
                placeholder="Rp 0"
                name="maximum"
                value={maximum}
                onChange={(e) => setMaximum(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Category</label>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col gap-8">
                {listCategory.slice(0, 5).map((item) => (
                  <div className="flex gap-2" key={item}>
                    <input
                      type="checkbox"
                      name="category"
                      className="z-50 w-6 h-6 border-2 border-white bg-transparent rounded-md cursor-pointer"
                      value={item}
                      onChange={handleCheckboxChange}
                    />
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-8">
                {listCategory.slice(6, 11).map((item) => (
                  <div className="flex gap-2" key={item}>
                    <input
                      type="checkbox"
                      name="category"
                      className="z-50 w-6 h-6 border-2 border-white bg-transparent rounded-md cursor-pointer"
                      value={item}
                      onChange={handleCheckboxChange}
                    />
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label>Website Company</label>
            <Input
              placeholder="Please enter your website link"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <label>Instagram</label>
            <Input
              placeholder="Please enter your username"
              name="ig"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              icon={FaInstagram}
            />
          </div>

          <div>
            <label>Linkedin</label>
            <Input
              placeholder="Please enter your username"
              name="ig"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              icon={FaLinkedin}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Button text="Submit" isPrimary={true} onClick={() => { }} />
      </div>
    </div>
  );
}
