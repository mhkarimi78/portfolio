import { SiAutodesk, SiSketchup, SiAdobe } from "react-icons/si";

export const Skills = [
  {
    slug: "revit",
    Component: SiAutodesk,
    title: "Revit",
    Description: () => <>Building Information Modeling (BIM) software</>,
  },
  {
    slug: "autocad",
    Component: SiAutodesk,
    title: "AutoCAD",
    Description: () => <>2D and 3D computer-aided design</>,
  },
  {
    slug: "sketchup",
    Component: SiSketchup,
    title: "SketchUp",
    Description: () => <>3D modeling and visualization</>,
  },
  {
    slug: "vray",
    Component: SiAdobe,
    title: "V-Ray",
    Description: () => <>Advanced rendering and visualization</>,
  },
  {
    slug: "photoshop",
    Component: SiAdobe,
    title: "Photoshop",
    Description: () => <>Image editing and post-processing</>,
  }
];
