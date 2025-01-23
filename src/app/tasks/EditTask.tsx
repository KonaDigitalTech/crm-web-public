"use client";
import React, { useMemo, useState } from "react";
import Contact from "../../assets/employee_contact.svg";
import Image from "next/image";
import { LeadeData } from "@/app/component/Type";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { getSingleUser, getUser } from "@/lib/features/auth/authSlice";
import AskAI from "../ask_aI/AskAI";
import Note from "../leads/Note";
import TaskDetail from "./TaskDetail";
import BatchesPage from "./BatchesPage";
import Activity from "./Activity";
import { getSingleTrainers } from "@/lib/features/trainer/trainerSlice";
import { getSingleMainTask } from "@/lib/features/mainTask/mainTaskSlice";
import moment from "moment";

const EditTask = ({
  handelOnSet,
  task,
}: {
  task?: any;
  handelOnSet: (id: number, data: LeadeData[]) => void;
}) => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<String>("Details");
  const { singleMainTaskData } = useAppSelector((state) => state?.mainTask);

  useMemo(() => {
    if (task?.[0]?.id) {
      dispatch(getSingleMainTask(task?.[0]?.id));
      dispatch(getUser("salesperson"));
    }
  }, [task?.[0]?.id]);


  const handleTabChange = (tabName: String) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-[fit-content] lg:w-full">
      <div className="m-5 rounded-lg sborder-4 border-zinc-100 shadow-lg">
        <div className="flex justify-between items-center border-b border-b-neutral-400 px-5">
          <div className="flex gap-3 items-center  py-2 ">
            <div
              onClick={() => handelOnSet(-1, [])}
              className="flex gap-1 cursor-pointer"
            >
              <MdOutlineArrowBackIosNew size={25} />
            </div>
            <div className="flex gap-3 items-center">
              <Image src={Contact} alt="Contact icon" />
              <h2 className="text-black text-lg font-semibold">
                {singleMainTaskData?.taskOwner}
              </h2>
            </div>
          </div>
        </div>
        <div className="py-2 px-14 flex flex-wrap justify-between">
          <div className="min-w-48 mb-2">
            <p className="text-black mb-1 text-lg font-medium">Task Owner</p>
            <span className="text-sky-600 text-sm font-semibold flex gap-1.5">
              {singleMainTaskData?.taskOwner}
            </span>
          </div>
          <div className="min-w-48 mb-2">
            <p className="text-black mb-1 text-lg font-medium">Assign To</p>
            <span className="text-sky-600 text-sm font-semibold flex gap-1.5">
              {singleMainTaskData?.assignTo}
            </span>
          </div>
          <div className="min-w-48 mb-2">
            <p className="text-black mb-1 text-lg font-medium">Status</p>
            <span className="text-sky-600 text-sm font-semibold flex gap-1.5">
              {singleMainTaskData?.status}
            </span>
          </div>
          <div className="min-w-48 mb-2">
            <p className="text-black mb-1 text-lg font-medium">Due Date</p>
            <span className="text-sky-600 text-sm font-semibold flex gap-1.5">
              {singleMainTaskData?.dueDate
                ? moment(singleMainTaskData?.dueDate).format("DD-MM-YYYY")
                : "-"}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm border-4 border-zinc-100 shadow-lg px-3 mx-5">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-neutral-400">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="#"
                onClick={() => handleTabChange("Details")}
                className={`inline-block p-4 border-b-2 rounded-t-lg text-sm font-semibold ${activeTab === "Details"
                  ? "text-black border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300 text-neutral-500 border-transparent"
                  }`}
              >
                Details
              </a>
            </li>
            {/* <li className="me-2">
              <a
                href="#"
                onClick={() => handleTabChange("Batches")}
                className={`inline-block p-4 border-b-2 rounded-t-lg text-sm font-semibold ${activeTab === "Batches"
                  ? "text-black border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300 text-neutral-500 border-transparent"
                  }`}
              >
                Batches
              </a>
            </li> */}
            <li className="me-2">
              <a
                href="#"
                onClick={() => handleTabChange("Activity")}
                className={`inline-block p-4 border-b-2 rounded-t-lg text-sm font-semibold ${activeTab === "Activity"
                  ? "text-black border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300 text-neutral-500 border-transparent"
                  }`}
                aria-current="page"
              >
                Activities
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                onClick={() => handleTabChange("note")}
                className={`inline-block p-4 border-b-2 rounded-t-lg text-sm font-semibold ${activeTab === "note"
                  ? "text-black border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300 text-neutral-500 border-transparent"
                  }`}
                aria-current="page"
              >
                Notes
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                onClick={() => handleTabChange("ask_ai")}
                className={`inline-block p-4 border-b-2 rounded-t-lg text-sm font-semibold ${activeTab === "ask_ai"
                  ? "text-black border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300 text-neutral-500 border-transparent"
                  }`}
                aria-current="page"
              >
                Ask AI
              </a>
            </li>

          </ul>
        </div>

        <div className="py-5">
          {activeTab === "Details" ? (
            <TaskDetail handelOnSet={handelOnSet} />
          ) : activeTab === "Batches" ? (
            <BatchesPage />
          ) : activeTab === "Activity" ? (
            <Activity />
          ) : activeTab === "ask_ai" ? (
            <AskAI />
          ) : activeTab === "note" ? (
            <Note name="mainTaskId" id={singleMainTaskData?.id} />
          ) :
            null}
        </div>
      </div>
    </div>
  );
};

export default EditTask;
