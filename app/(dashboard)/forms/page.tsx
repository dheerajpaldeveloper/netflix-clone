import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col m-6 h-[100%]">
      <div className="flex justify-between py-4">
        <div>
          <h1 className="text-xl font-semibold">Form Elements</h1>
        </div>
        <div className="flex">
          <a href="/" className="mr-1">
            Dashboard{" "}
          </a>
          <h1>/</h1>
          <h1 className="text-blue-900 ml-1 font-light">Form Elements</h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-full gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col bg-gray-50 shadow-xl p-4 text-sm font-extralight">
            <form action="">
              <div className="flex flex-col py-3 gap-3">
              <h1 className="font-medium">Input Fields</h1>
              <hr />
              </div>
              <div className="flex flex-col py-3 gap-2">
                <label htmlFor="" className="font-medium">Default Input</label>
                <input
                  type="text"
                  className="border w-full rounded-sm p-2"
                  placeholder="Default Input"
                />
              </div>
              <div className="flex flex-col pb-3 gap-2">
                <label htmlFor="" className="font-medium">Active Input</label>
                <input
                  type="text"
                  className="border border-blue-700 w-full rounded-sm p-2"
                  placeholder="Active Input"
                />
              </div>
              <div className="flex flex-col pb-3 gap-2">
                <label htmlFor="" className="font-medium">Disabled label</label>
                <input
                  type="text"
                  className="border w-full rounded-sm p-2 bg-[rgba(245,247,252,1)]"
                  placeholder="Disabled label"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col bg-gray-50 shadow-xl p-4 text-sm font-extralight">
            <form action="">
              <div className="flex flex-col py-3 gap-3">
              <h1 className="font-medium">Toggle switch inputs</h1>
              <hr />
              </div>
              <div className="flex flex-col py-3 gap-2">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Switch Mode</Label>
              </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col bg-gray-50 shadow-xl p-4 text-sm font-extralight">
            <form action="">
              <div className="flex flex-col py-3 gap-3">
              <h1 className="font-medium">Time and Date</h1>
              <hr />
              </div>
              <div className="flex flex-col py-3 gap-2">
              <label htmlFor="" className="font-medium">Date picker</label>
                <input
                  type="date"
                  className="border w-full rounded-sm p-2"
                  placeholder="Default Input"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col bg-gray-50 shadow-xl p-4 text-sm font-extralight">
            <form action="">
              <div className="flex flex-col py-3 gap-3">
              <h1 className="font-medium">File upload</h1>
              <hr />
              </div>
              <div className="flex flex-col py-3 gap-2">
              <label htmlFor="" className="font-medium">Attach file</label>
                <input
                  type="file"
                  className="border w-full rounded-sm p-2"
                  placeholder="Default Input"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-6">
        <div className="flex flex-col bg-gray-50 shadow-xl p-4 text-sm font-extralight">
            <form action="">
              <div className="flex flex-col py-3 gap-3">
              <h1 className="font-medium">Textarea Fields</h1>
              <hr />
              </div>
              <div className="flex flex-col py-3 gap-2">
                <label htmlFor="" className="font-medium">Default textarea</label>
                <textarea
                  className="border w-full rounded-sm p-2 h-36"
                  placeholder="Default textarea"
                />
              </div>
              <div className="flex flex-col pb-3 gap-2">
                <label htmlFor="" className="font-medium">Active textarea</label>
                <textarea
                  className="border border-blue-700 w-full rounded-sm p-2 h-36"
                  placeholder="Active textarea"
                />
              </div>
              <div className="flex flex-col pb-3 gap-2">
                <label htmlFor="" className="font-medium">Disabled textarea</label>
                <textarea
                  className="border w-full rounded-sm p-2 h-36 bg-[rgba(245,247,252,1)]"
                  placeholder="Disabled textarea"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col bg-gray-50 shadow-xl p-4 text-sm font-extralight">
            <form action="">
              <div className="flex flex-col py-3 gap-3">
              <h1 className="font-medium">Checkbox and radio</h1>
              <hr />
              </div>
              <div className="flex py-3 gap-2">
              <input
                type="checkbox"
                className="border rounded-sm p-2"
              />
              <label htmlFor="" className="font-medium">checkbox</label>
              </div>
              <div className="flex py-3 gap-2">
              <input
                type="radio"
                className="border rounded-sm p-2"
              />
              <label htmlFor="" className="font-medium">radio</label>
              </div>
            </form>
          </div>
          <div className="flex flex-col bg-gray-50 shadow-xl p-4 text-sm font-extralight">
            <form action="">
              <div className="flex flex-col py-3 gap-3">
              <h1 className="font-medium">Select input</h1>
              <hr />
              </div>
              <div className="flex flex-col py-3 gap-2">
                <label htmlFor="" className="font-medium">Select option</label>
                <select className="border w-full rounded-sm p-2 px-2" >
                  <option value="">select</option>
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                </select>
              </div>
              <div className="flex flex-col py-3 gap-2">
                <label htmlFor="" className="font-medium">Select country</label>
                <select className="border w-full rounded-sm p-2 px-2" >
                  <option value="">India</option>
                  <option value="">USA</option>
                  <option value="">UK</option>
                </select>
              </div>
              <div className="flex flex-col py-3 gap-2">
                <label htmlFor="" className="font-medium">Multiselect Dropdown</label>
                <select className="border w-full rounded-sm p-2 px-2">
                  <option value="">select</option>
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
