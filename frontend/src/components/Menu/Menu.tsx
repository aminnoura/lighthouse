import React from 'react';
import './Menu.scss';
 
const headerMenuList=[
   {
      name:"Home",
      url:"/home",
      subMenus:[
         {
            name:"home11",
            url:"/home11",
            subMenus:[
               {
                  name:"home21",
                  url:"/home21",
                  subMenus:[
                     {
                        name:"home31",
                        url:"/home31",
                        
                     }
                  ] 
               }  
            ]
         },
         
         {
            name:"home12",
            url:"/home12",
            
            
         }


      ]
   },
   {
      name:"About us",
      url:"/about"

   },
   {
      name:"Contact us",
      url:"/contact"

   }
];

type menuType={
   name:string,
   url:string,
   subMenus?:menuType[]
}
const subMenu=(menu:menuType[] , level=1)=>{
   return (<ul className={`subMenu subLevel${level}`}> {menu.map((m,index)=>{
      return(
         <li className={`li li-${index}`}>
            <a className={` linkLevel-${level}-${index}`} href={m.url}>{m.name}</a>
             
               {m.subMenus && subMenu(m.subMenus,level+1) }
             
         </li>
         
         )
      })}</ul>)
}

const Menu = () => {
	return (      
      <ul className="allMenu">
         {
         headerMenuList.map((menu,index)=>{
            return(
               <li className="eachMenu" >
                  <a className="eachMenulink"  href={menu.url}>{menu.name}</a>
                  {menu?.subMenus?.length && subMenu(menu.subMenus) }
               </li>
            )
         })
            
         }
            
	   </ul>         
)}

export default Menu;