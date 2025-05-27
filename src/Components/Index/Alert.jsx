// import React, { useState } from 'react';

// export default function AlertExample() {
//   const [showAlert, setShowAlert] = useState(true);

//   return (
//     <div className="p-4">
//       {showAlert && (
//         <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
//           <strong className="font-bold">Info!</strong>
//           <span className="block sm:inline"> This is a custom alert message.</span>
//           <span
//             className="absolute top-0 bottom-0 right-0 px-4 py-3"
//             onClick={() => setShowAlert(false)}
//           >
//             <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//               <title>Close</title>
//               <path d="M14.348 5.652a1 1 0 00-1.414-1.414L10 7.172 7.066 4.238a1 1 0 00-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 001.414 1.414L10 12.828l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934z" />
//             </svg>
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }
