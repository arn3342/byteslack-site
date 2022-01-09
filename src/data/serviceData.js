import angularIcon from "../assets/icons/services_icons/angular.svg";
import cloudDevIcon from "../assets/icons/services_icons/devops.svg";
import laravelIcon from "../assets/icons/services_icons/laravel.svg";
import nodeIcon from "../assets/icons/services_icons/nodejs.svg";
import productDesignIcon from "../assets/icons/services_icons/product-design.svg";
import reactIcon from "../assets/icons/services_icons/react.svg";
import softArchitectureIcon from "../assets/icons/services_icons/sof-architecture.svg";
import vueJSIcon from "../assets/icons/services_icons/vuejs.svg";
import webDevIcon from "../assets/icons/services_icons/web-development.svg";


const webServiceOnlyTwo = [
    {
      icon: webDevIcon,
      title: "Web Development",
      details: "High-performance web applications that grow with your business",
      width: "100%",
      border: false,
    },
    {
      icon: vueJSIcon,
      title: "Vue JS",
      details: "High-performance web applications that grow with your business",
      width: "100%",
      border: true,
    },
  ];

  const webServiceOthers = [
    {
      icon: nodeIcon,
      title: "Node.js",
      details: "High-performance web applications that grow with your business",
      width: "50%",
      border: true,
    },
    {
      icon: laravelIcon,
      title: "Laravel",
      details: "High-performance web applications that grow with your business",
      width: "50%",
      border: true,
    },
    {
      icon: reactIcon,
      title: "React",
      details: "High-performance web applications that grow with your business",
      width: "50%",
      border: true,
    },
    {
      icon: angularIcon,
      title: "Angular",
      details: "High-performance web applications that grow with your business",
      width: "50%",
      border: true,
    },
    
  ];

  const cloudSoftDesign = [
    {
      cat: "cloud_soft_design",
      icon: cloudDevIcon,
      title: "Cloud & DevOps",
      details: "High-performance web applications that grow with your business",
      width: "33%",
      border: false,
    },
    {
      cat: "cloud_soft_design",
      icon: softArchitectureIcon,
      title: "Software Architecture",
      details: "High-performance web applications that grow with your business",
      width: "33%",
      border: false,
    },
    {
      cat: "cloud_soft_design",
      icon: productDesignIcon,
      title: "Digital Product Design",
      details: "High-performance web applications that grow with your business",
      width: "33%",
      border: false,
    },
  ];

  export { webServiceOnlyTwo, webServiceOthers, cloudSoftDesign };

