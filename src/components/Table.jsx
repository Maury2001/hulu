import React from "react";
import d from "../images/D+.png";
import { AiOutlineCheck } from "react-icons/ai";
import { Button , Switch} from "@material-tailwind/react";
import About from "./About";

const Table = () => {
  return (
    // <div className="bg-black grid grid-flow-row grid-rows-1 min-w-full justify-center object-center">
    // <div className="flex flex-col w-full text-center justify-around">
    // <h1>Select Your Plan</h1>
    //   <h3>
    //     No hidden fees, equipment rentals, or installation appointments.
    //     <b>Switch plans or cancel anytime.**</b>
    //   </h3>
    // </div>
    // <hr></hr>

    //   <div class="flex flex-col">
    //     <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    //       <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
    //         <div class="overflow-hidden">
    //           <table class="min-w-full">
    //             <thead class=" border-b">
    //               <tr>
    //                 <th
    //                   scope="col"
    //                   class="text-sm font-medium text-white-900 px-6 py-4 text-left"
    //                 >
    //                   #
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   class="text-sm font-medium text-white-900 px-6 py-4 text-left"
    //                 >
    //                   First
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    //                 >
    //                   Last
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    //                 >
    //                   Handle
    //                 </th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100">
    //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    //                   1
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   Mark
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   Otto
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   @mdo
    //                 </td>
    //               </tr>
    //               <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100">
    //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    //                   2
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   Jacob
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   Thornton
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   @fat
    //                 </td>
    //               </tr>
    //               <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100">
    //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    //                   3
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   Larry
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   Wild
    //                 </td>
    //                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    //                   @twitter
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="flex justify-around">
      <div>
        <table class=" mt-6 w-full min-w-max table-auto text-left flex-col">
          <thead className="p-4 m-4 text-center space-x-4">
            <tr>
              <th class="top-0 p-2 border-b-1 text-sm">
                <div class="flex flex-col justify-center items-center">
                  <p className="">BASE PLANS <br /> BUNDLE/SAVE </p>
                  <div className="row"><img className="h-12 w-40 object-center" src={d} /></div>
                </div>
              </th>
              <th class=" top-0 p-2 border-b-1 text-sm">
                <div class="flex flex-col justify-center items-center">
                  <button class="bg-green-600 rounded-full m-4" size="sm">
                    Most Popular
                  </button>                  
                  <p>Hulu (With Ads)</p>                  
                  <Button
                    className="bg-white text-black p-2"
                    size="sm"
                    variant="text"
                  >
                    $7.99/Month
                  </Button>
                </div>
              </th>
              <th class="top-0 p-2 border-b-1  text-sm">
                <br />
                Hulu (No Ads) <br />
                <Button
                  className="bg-white text-black p-2"
                  size="sm"
                  variant="text"
                >
                  $7.99/Month
                </Button>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-blue-200 ">
            <tr>
              <td class="p-3">Monthly Price</td>
              <td class="">$7.99/mo</td>
              <td class="">$14.99/mo</td>
            </tr>
            <tr>
              <td class="p-3">
                Streaming Library with tons of TV episodes and movies
              </td>
              <td class="">
              <AiOutlineCheck class="text-green-600"/>
              </td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <hr />
            </tr>
            <tr>
              <td class="p-3">Most new episodes the day after they air†</td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
            </tr>
            <tr>
              <td class="p-3">Access to award-winning Hulu Originals</td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
            </tr>
            <tr>
              <td class="p-3">
                Watch on your favorite devices, including TV, laptop, phone, or
                tablet
              </td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
            </tr> 
            <tr>
              <td class="p-3">Up to 6 user profiles</td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
            </tr>
            <tr>
              <td class="p-3">Watch on 2 different screens at the same time</td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
            </tr>
            <tr>
              <td class="p-3">No ads in streaming library</td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
            </tr>
            <tr>
              <td class="p-3">Download and watch</td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
              <td class=""><AiOutlineCheck class="text-green-600"/></td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default Table;
