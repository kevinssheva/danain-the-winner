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
import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";
import axios from "axios";
import Loader from "@/components/Loader";
import Link from "next/link";
import { HiCursorClick } from "react-icons/hi";
import { deconvertCategoryName } from "@/app/(navbar)/(site)/components/CompanyCard";

export default function Profilecompany() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tagline, setTagline] = useState("");
  const [founder, setFounder] = useState("");
  const [video, setVideo] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [category, setCategory] = useState<Array<{ name: string }>>([]);
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [pitchdesc, setPitchdesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [pitchDeck, setPitchDeck] = useState("");
  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/dashboard/company/profile`,
    fetcher
  );

  const listCategory = [
    "Energy",
    "Games",
    "ARNVR",
    "FNB",
    "ClimateChange",
    "Education",
    "TravelNTourism",
    "FintechNFinance",
    "Technology",
    "HealthNFitness",
    "Agriculture",
    "Sport",
    "AI",
    "Sustainability",
  ];

  useEffect(() => {
    if (data) {
      setName(data?.company?.companyName || '');
      setAddress(data?.company?.companyPlace || '');
      setTagline(data?.company?.tagline || '');
      setFounder(data?.company?.user?.fullName || '');
      setVideo(data?.company?.videoProfile || '');
      setMinimum(data?.company?.minimum || '');
      setMaximum(data?.company?.money || '');
      setCategory(data?.company?.categories || []);
      setWebsite(data?.company?.website || '');
      setInstagram(data?.company?.instagram || '');
      setLinkedin(data?.company?.linkedin || '');
      setPitchdesc(data?.company?.pitchDescription || '');
      setPhoto(data?.company?.coverPhoto || '')
      setPitchDeck(data?.company?.pitchDeck || '')
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  const handleCheckboxChange = (e: any) => {
    const value = e.target.value;
    const isValueInArray = category.some((item) => item.name === value);

    console.log(category);

    if (isValueInArray) {
      // If it's in the array, remove it
      const updatedCategory = category.filter((item) => item.name !== value);
      setCategory(updatedCategory);
    } else {
      // If it's not in the array, add it
      const updatedCategory = [...category, { name: value }];
      setCategory(updatedCategory);
    }
  };

  const handlePitchDeckUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("Masuksini222");
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPitchDeckFile(file);
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Masuksini");
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPhotoFile(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("tagline", tagline);
    formData.append("founder", founder);
    formData.append("video", video);
    formData.append("minimum", minimum);
    formData.append("maximum", maximum);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    formData.append("website", website);
    formData.append("pitchdesc", pitchdesc);
    formData.append("category", JSON.stringify(category));
    if (photoFile) {
      formData.append("coverPhoto", photoFile);
    }

    if (pitchDeckFile) {
      formData.append("pitchDeck", pitchDeckFile);
    }

    try {
      const response = await axios.patch(
        "/api/v1/dashboard/company/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
      }
    } catch (err) {
      console.log(err);
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
          <h1 className="text-3xl md:text-5xl font-semibold">{data?.company?.companyName}</h1>
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
            <label className="font-montserrat font-semibold text-lg">
              Company Name
            </label>
            <Input
              placeholder="Please enter your company name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="font-montserrat font-semibold text-lg">
              Company Address
            </label>
            <Input
              placeholder="Please enter your company address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="">
            <label className="font-montserrat font-semibold text-lg">
              Pitch Deck
            </label>
            <div className="items-start justify-center w-full flex flex-col gap-3">
              {pitchDeck && (
                <Link
                  href={pitchDeck}
                  className="bg-white text-black font-bold px-4 py-2 rounded-md flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiCursorClick fill="black" color="black" /> Current Files
                </Link>
              )}
              <label
                htmlFor="dropzone-pitch-file"
                className="input-bg-startup flex flex-col items-center justify-center w-full h-32 border border-gray-300 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col gap-4 items-center justify-center pt-5 pb-6">
                  {pitchDeckFile ? (
                    <p className="text-[#D8D8D8]">{pitchDeckFile.name}</p>
                  ) : (
                    <p className="text-[#D8D8D8]">Please upload your file</p>
                  )}
                  <BsFillFileEarmarkArrowUpFill className="text-5xl" />
                </div>
                <input
                  id="dropzone-pitch-file"
                  type="file"
                  className="hidden"
                  onChange={handlePitchDeckUpload}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="font-montserrat font-semibold text-lg">
              Tagline
            </label>
            <Input
              placeholder="Please enter your tagline"
              name="tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>

          <div>
            <label className="font-montserrat font-semibold text-lg">
              Founder
            </label>
            <Input
              placeholder="Please enter your founder's name"
              name="founder"
              value={founder}
              onChange={(e) => setFounder(e.target.value)}
            />
          </div>

          <div className="">
            <label className="font-montserrat font-semibold text-lg">
              Cover Photo
            </label>
            <div className="items-start justify-center w-full flex flex-col gap-3">
              <Link
                href={photo}
                className="bg-white text-black font-bold px-4 py-2 rounded-md flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiCursorClick fill="black" color="black" /> Current Files
              </Link>
              <label
                htmlFor="dropzone-photo-file"
                className="input-bg-startup flex flex-col items-center justify-center w-full border border-gray-300 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col gap-4 items-center justify-center pt-5 pb-6">
                  {photoFile ? (
                    <p className="text-[#D8D8D8]">{photoFile.name}</p>
                  ) : (
                    <>
                      <p className="text-[#D8D8D8]">Please upload your photo</p>
                      <p>1200 x 675 pixels {"(suggested)"}</p>
                      <MdAddPhotoAlternate className="text-5xl" />
                    </>
                  )}
                </div>
              </label>
              <input
                id="dropzone-photo-file"
                type="file"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>
          </div>

          <div>
            <label className="font-montserrat font-semibold text-lg">
              Video Profile
            </label>
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
            <label className="font-montserrat font-semibold text-lg">
              Pitch Description
            </label>
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
            <label className="font-montserrat font-semibold text-lg">
              Maximum Raise
            </label>
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
            <label className="font-montserrat font-semibold text-lg">
              Category
            </label>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col gap-8">
                {listCategory.slice(0, 6).map((item: string) => (
                  <div className="flex gap-2" key={item}>
                    <input
                      type="checkbox"
                      name="category"
                      className="z-50 w-6 h-6 border-2 border-white bg-transparent rounded-md cursor-pointer"
                      value={item}
                      checked={category.some((cat) => cat.name === item)}
                      onChange={handleCheckboxChange}
                    />
                    <p className="font-semibold">
                      {deconvertCategoryName(item)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-8">
                {listCategory.slice(7, 13).map((item) => (
                  <div className="flex gap-2" key={item}>
                    <input
                      type="checkbox"
                      name="category"
                      className="z-50 w-6 h-6 border-2 border-white bg-transparent rounded-md cursor-pointer"
                      value={item}
                      checked={category.some((cat) => cat.name === item)}
                      onChange={handleCheckboxChange}
                    />
                    <p className="font-semibold">
                      {deconvertCategoryName(item)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="font-montserrat font-semibold text-lg">
              Website Company
            </label>
            <Input
              placeholder="Please enter your website link"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <label className="font-montserrat font-semibold text-lg">
              Instagram
            </label>
            <Input
              placeholder="Please enter your username"
              name="ig"
              value={instagram.split("/").pop() ?? ""}
              onChange={(e) => setInstagram(e.target.value)}
              icon={FaInstagram}
            />
          </div>

          <div>
            <label className="font-montserrat font-semibold text-lg">
              Linkedin
            </label>
            <Input
              placeholder="Please enter your username"
              name="ig"
              value={linkedin.split("/").pop() ?? ""}
              onChange={(e) => setLinkedin(e.target.value)}
              icon={FaLinkedin}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Button
          text="Submit"
          isPrimary={true}
          onClick={() => {
            handleSubmit();
          }}
        />
      </div>
    </div>
  );
}
