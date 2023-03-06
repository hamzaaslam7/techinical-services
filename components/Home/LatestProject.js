import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function LatestProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("option 1");
  const handleChangeSelect = (value) => {
    setSelectValue(value);
    setIsOpen(false);
  };
  return (
    <>
      <div className="container">
        <div></div>
      </div>
    </>

    // <div className="ml-2 h-full w-full">
    //   <div className="Parent">
    //     <div>Header</div>
    //     <div className="flex">
    //       <div className="basis-3/4">Main content</div>
    //       <div className="basis-1/4">SideBar</div>
    //     </div>
    //     <div className="grid grid-rows-3 grid-flow-col gap-4 p-2">
    //       <div className="bg-sky-500 p-6 rounded-lg "> first element</div>
    //       <div className="bg-sky-500 p-6 rounded-lg"> second element</div>
    //       <div className="bg-sky-500 p-6 rounded-lg"> third element</div>
    //       <div className="bg-sky-500 p-6 rounded-lg"> four element</div>
    //       <div className="bg-sky-500 p-6 rounded-lg"> five element</div>
    //     </div>
    //   </div>
    //   <div>
    //     <h1 className="text-2xl font-bold mb-2">This is a title</h1>
    //     <h2 className="text-xl font-semibold mb-1">This is a subtitle</h2>
    //     <p>This is a paragraph</p>
    //     <a className="underline text-blue-700 hover:text-green-400 transition   ">
    //       this is a anchor
    //     </a>
    //   </div>
    //   <div className="my-4">
    //     <button className="btn btn-primary"> This is a primary button</button>
    //   </div>
    //   <div className="my-4">
    //     <button className="btn btn-secondary">
    //       {" "}
    //       This is a secondary button
    //     </button>
    //   </div>
    //   <div className="my-4">
    //     <button disabled className="btn btn-primary">
    //       This is a disabled button
    //     </button>
    //   </div>
    //   <div>
    //     <input className="" type={"text"}></input>
    //   </div>

    //   <div>
    //     <input disabled placeholder="E-mail" type={"text"}></input>
    //   </div>

    //   <div>
    //     <input type={"date"}></input>
    //   </div>

    //   <div className="">
    //     <input type={"checkbox"}></input>
    //     <label className="text.sm text-slate-500 m-2 font-medium ">
    //       Checkbox
    //     </label>
    //   </div>
    //   <div>
    //     <select className="">
    //       <option>option 1</option>
    //       <option>option 2</option>
    //     </select>
    //   </div>
    //   <div className="Select">
    //     <div
    //       className="child flex items-center justify-between"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       <span> {selectValue || "My selection option"}</span>
    //       <div className={`${isOpen ? "rotate-180 transition" : "rotate-0"}`}>
    //         <FontAwesomeIcon icon={faChevronCircleDown} />
    //       </div>
    //     </div>
    //     {isOpen && (
    //       <div>
    //         <ul className="flex flex-col border-t divide-y">
    //           <li
    //             onClick={() => handleChangeSelect("Option 1")}
    //             className="child"
    //           >
    //             Option 1
    //           </li>
    //           <li
    //             onClick={() => handleChangeSelect("Option 2")}
    //             className="child"
    //           >
    //             Option 2
    //           </li>
    //           <li
    //             onClick={() => handleChangeSelect("Option 3")}
    //             className="child"
    //           >
    //             Option 3
    //           </li>
    //           <li
    //             onClick={() => handleChangeSelect("Option 4")}
    //             className="child"
    //           >
    //             Option 4
    //           </li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>

    /* sdagfsdagdsf
      <h1 className="text-200 text-sm lg:text-lg">
        text dsgasdfgdfasg dfdhhsdf
      </h1>
      <p className="">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div className="flex space-x-4">
        <p class="text-xs ...">The quick brown fox ...</p>
        <p class="text-sm ...">The quick brown fox ...</p>
        <p class="text-base ...">The quick brown fox ...</p>
        <p class="text-lg ...">The quick brown fox ...</p>
        <p class="text-xl ...">The quick brown fox ...</p>
        <p class="text-2xl ...">The quick brown fox ...</p>
        <p class="text-3xl ...">The quick brown fox ...</p>
        <p class="text-4xl ...">The quick brown fox ...</p>
      </div>
      <p class="text-5xl ...">The quick brown fox ...</p>
      <p class="text-6xl ...">The quick brown fox ...</p>
      <p class="text-7xl ...">The quick brown fox ...</p>
      <p class="text-8xl ...">The quick brown fox ...</p>
      <p class="text-9xl ...">The quick brown fox ...</p>
      <h1 className="bg-myColor text-green-600">RECENTLY COMPLETED</h1>
      <h1 className="border-6 border-green-500  text-myColor">
        RECENTLY COMPLETED
      </h1> */
    // </div>
  );
}

export default LatestProject;
