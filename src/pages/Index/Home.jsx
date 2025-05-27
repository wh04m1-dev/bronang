// import { lazy, Suspense } from "react";
// import HeroHome from "@/components/index/HeroHome.jsx";
// import ServiceCard from "@/components/index/ServiceCard.jsx";
// import Categories from "@/components/index/Categories.jsx";

// // Dynamic imports for non-critical components
// const Anime = lazy(() => import("@/components/index/Anime-Films/Anime.jsx"));
// const Khmer = lazy(() => import("@/components/index/KhmerLegend/khmer.jsx"));
// const Feedbacks = lazy(() => import("@/components/index/Feedback.jsx"));
// const Questions = lazy(() => import("@/components/index/Questions.jsx"));

// export default function Home() {
//   return (
//     <div>
//       <HeroHome />
//       <ServiceCard />
//       <Categories />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Anime />
//         <Khmer />
//         <Feedbacks />
//         <Questions />
//       </Suspense>
//     </div>
//   );
// }

// src/components/index/HeroHome.jsx
export default function HeroHome() {
  return <div>HeroHome Component</div>;
}
